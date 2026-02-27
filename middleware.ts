import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Pega o modo da aplicação da variável de ambiente
  // Se não estiver definido, assume que é padrão (permite tudo ou redireciona base)
  const appMode = process.env.APP_MODE;
  const { pathname } = request.nextUrl;

  // Ignorar arquivos estáticos e API (API precisa ser acessível por ambos)
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.includes('.') // arquivos com extensão (imagens, etc)
  ) {
    return NextResponse.next();
  }

  // Lógica para MODO CLIENTE (Porta 3000)
  if (appMode === 'client') {
    // Se tentar acessar admin, redireciona para home (que vai para client)
    if (pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/client', request.url));
    }
    // Se estiver na raiz, vai para client
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/client', request.url));
    }
  }

  // Lógica para MODO ADMIN (Porta 3001)
  if (appMode === 'admin') {
    // Se tentar acessar client, redireciona para admin
    if (pathname.startsWith('/client')) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    // Se estiver na raiz, vai para admin
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
