'use client';

import { useState, useEffect, type FormEvent } from 'react';
import {
  checkLicense,
  verifyPassword,
  isUnlocked,
  storeUnlock,
} from '@/lib/license';

export default function LicenseGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<'loading' | 'valid' | 'blocked'>(
    'loading'
  );
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function verify() {
      const license = checkLicense();

      if (license.valid) {
        setStatus('valid');
        return;
      }

      const unlocked = await isUnlocked();
      if (unlocked) {
        setStatus('valid');
        return;
      }

      setStatus('blocked');
    }

    verify();
  }, []);

  async function handleUnlock(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const valid = await verifyPassword(password);

    if (valid) {
      await storeUnlock();
      setStatus('valid');
    } else {
      setError('Senha incorreta. Tente novamente.');
      setPassword('');
    }

    setLoading(false);
  }

  if (status === 'loading') {
    return (
      <div className="license-loading">
        <div className="license-spinner" />
      </div>
    );
  }

  if (status === 'blocked') {
    return (
      <div className="license-overlay">
        <div className="license-card">
          <div className="license-lock-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              <circle cx="12" cy="16" r="1" />
            </svg>
          </div>

          <h1 className="license-title">Acesso Restrito</h1>

          <p className="license-message">
            Este site está temporariamente indisponível.
            <br />
            Entre em contato com o desenvolvedor para reativar o acesso.
          </p>

          <form onSubmit={handleUnlock} className="license-form">
            <div className="license-input-wrapper">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha de desbloqueio"
                className="license-input"
                autoFocus
                autoComplete="off"
              />
            </div>

            {error && <span className="license-error">{error}</span>}

            <button
              type="submit"
              disabled={loading || !password.trim()}
              className="license-button"
            >
              {loading ? (
                <span className="license-btn-loading">
                  <span className="license-btn-spinner" />
                  Verificando...
                </span>
              ) : (
                'Desbloquear'
              )}
            </button>
          </form>

          <p className="license-footer">
            Desenvolvido com proteção de licença
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
