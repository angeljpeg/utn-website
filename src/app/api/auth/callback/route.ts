import { NextResponse, NextRequest } from 'next/server';
import { googleAuth, getTokens } from '@/config/google';

export async function GET(req: NextRequest) {
  try {
    // Parsear el query string para obtener el código
    const url = new URL(req.url);
    const code = url.searchParams.get('code');

    if (!code) {
      return NextResponse.json({ error: 'Code no proporcionado' }, { status: 400 });
    }

    // Intercambiar el código por tokens
    const tokens = await getTokens(code);

    // Opcional: guardar tokens.refresh_token en tu base de datos para uso futuro
    console.log('Tokens obtenidos:', tokens);

    return NextResponse.json({ message: 'Autenticado exitosamente', tokens });
  } catch (error) {
    console.error('Error en el callback:', error);
    return NextResponse.json({ error: 'Error al autenticar' }, { status: 500 });
  }
}