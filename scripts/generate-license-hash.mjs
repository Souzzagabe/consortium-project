/**
 * Gera o hash SHA-256 para a senha de licença
 * Uso: node scripts/generate-license-hash.mjs <senha>
 *
 * Copie o hash gerado para NEXT_PUBLIC_LICENSE_HASH no .env.local
 */

import { createHash } from 'crypto';

const password = process.argv[2];

if (!password) {
  console.log('');
  console.log('  Uso: node scripts/generate-license-hash.mjs <senha>');
  console.log('');
  console.log('  Exemplo: node scripts/generate-license-hash.mjs "minhaSenhaSecreta123"');
  console.log('');
  process.exit(1);
}

const hash = createHash('sha256').update(password).digest('hex');

console.log('');
console.log(`  Senha:  ${password}`);
console.log(`  Hash:   ${hash}`);
console.log('');
console.log('  Adicione ao .env.local:');
console.log(`  NEXT_PUBLIC_LICENSE_HASH=${hash}`);
console.log('');
