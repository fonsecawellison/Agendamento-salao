(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__303a8624._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
function middleware(request) {
    // Pega o modo da aplicação da variável de ambiente
    // Se não estiver definido, assume que é padrão (permite tudo ou redireciona base)
    const appMode = process.env.APP_MODE;
    const { pathname } = request.nextUrl;
    // Ignorar arquivos estáticos e API (API precisa ser acessível por ambos)
    if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.') // arquivos com extensão (imagens, etc)
    ) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Lógica para MODO CLIENTE (Porta 3000)
    if (appMode === 'client') {
        // Se tentar acessar admin, redireciona para home (que vai para client)
        if (pathname.startsWith('/admin')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/client', request.url));
        }
        // Se estiver na raiz, vai para client
        if (pathname === '/') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/client', request.url));
        }
    }
    // Lógica para MODO ADMIN (Porta 3001)
    if (appMode === 'admin') {
        // Se tentar acessar client, redireciona para admin
        if (pathname.startsWith('/client')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin', request.url));
        }
        // Se estiver na raiz, vai para admin
        if (pathname === '/') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin', request.url));
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__303a8624._.js.map