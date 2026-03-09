/**
 * Sistema de proteção por licença (front-end only)
 * Verifica data de expiração + domínio autorizado
 */

/* Sanitiza domínio removendo protocolo, www e trailing slash */
function _sd(raw: string): string {
  return raw
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/+$/, '');
}

/* Variáveis ofuscadas para dificultar leitura casual */
const _0x = {
  e: process.env.NEXT_PUBLIC_LICENSE_EXPIRY || '',
  d: _sd(process.env.NEXT_PUBLIC_LICENSE_DOMAIN || ''),
  h: process.env.NEXT_PUBLIC_LICENSE_HASH || '',
};

const _SALT = '\x6c\x6b\x5f\x76\x31\x5f'; // "lk_v1_"
const _STORAGE_KEY = '\x5f\x6c\x6b';        // "_lk"

export interface LicenseStatus {
  valid: boolean;
  reason?: 'expired' | 'domain' | 'missing';
}

/** Hash SHA-256 via Web Crypto API */
async function _h(input: string): Promise<string> {
  const d = new TextEncoder().encode(input);
  const b = await crypto.subtle.digest('SHA-256', d);
  return Array.from(new Uint8Array(b))
    .map((x) => x.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * checkLicense()
 * Verifica se a licença é válida (data + domínio).
 * Retorna { valid: true } se tudo OK, ou { valid: false, reason } se bloqueado.
 */
export function checkLicense(): LicenseStatus {
  if (!_0x.e && !_0x.d) return { valid: true };

  // Verificação de domínio
  if (typeof window !== 'undefined' && _0x.d) {
    const h = window.location.hostname;
    const allowed = [_0x.d, 'www.' + _0x.d, 'localhost', '127.0.0.1'];
    if (!allowed.includes(h)) {
      return { valid: false, reason: 'domain' };
    }
  }

  // Verificação de expiração
  if (_0x.e) {
    const now = Date.now();
    const exp = new Date(_0x.e + 'T23:59:59').getTime();
    if (isNaN(exp) || now > exp) {
      return { valid: false, reason: 'expired' };
    }
  }

  return { valid: true };
}

/** Verifica se a senha digitada corresponde ao hash armazenado */
export async function verifyPassword(password: string): Promise<boolean> {
  if (!_0x.h || !password) return false;
  const h = await _h(password);
  return h === _0x.h;
}

/** Gera token de desbloqueio derivado (hash + domínio) */
async function _token(): Promise<string> {
  return _h(_0x.h + _SALT + _0x.d);
}

/** Verifica se o site já foi desbloqueado (localStorage) */
export async function isUnlocked(): Promise<boolean> {
  if (typeof window === 'undefined') return true;
  try {
    const stored = localStorage.getItem(_STORAGE_KEY);
    if (!stored) return false;
    const expected = await _token();
    return stored === expected;
  } catch {
    return false;
  }
}

/** Salva token de desbloqueio no localStorage */
export async function storeUnlock(): Promise<void> {
  if (typeof window === 'undefined') return;
  const t = await _token();
  localStorage.setItem(_STORAGE_KEY, t);
}
