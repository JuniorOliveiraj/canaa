import { jwtDecode } from 'jwt-decode';

export function decodeJwt(token) {
  if (!token || typeof token !== 'string') {
    throw new Error('Token JWT inválido ou ausente');
  }

  const payload = jwtDecode(token);

  return {
    id: payload.nameid ?? payload.sub ?? payload.id ?? '',
    email: payload.email ?? '',
    displayName: payload.name ?? '',
    role: payload.role ?? payload.papel ?? 'USER',
    company: payload.company,
    tenant_key: payload.tenant_key ?? '',
    raw: payload,
  };
}
