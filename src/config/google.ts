import { google } from 'googleapis';
import { env } from '@/config/env';

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

// Configurar OAuth2
export const googleAuth = new google.auth.OAuth2(
  env.GOOGLE_CLIENT_ID,  // Client ID
  env.GOOGLE_SECRET_ID,  // Client Secret
  env.GOOGLE_REDIRECT_URI // Redirect URI
);

// Generar URL de autenticación
export const getAuthUrl = (): string => {
  return googleAuth.generateAuthUrl({
    access_type: 'offline', // Permite obtener un refresh token
    scope: SCOPES,          // Permisos requeridos
  });
};

// Intercambiar código por tokens
export const getTokens = async (code: string) => {
  const { tokens } = await googleAuth.getToken(code);
  googleAuth.setCredentials(tokens); // Establecer credenciales
  return tokens;
};

// Configurar cliente de Google Drive
export const getDriveClient = () => {
  return google.drive({
    version: 'v3',
    auth: googleAuth, // Usar la autenticación configurada
  });
};
