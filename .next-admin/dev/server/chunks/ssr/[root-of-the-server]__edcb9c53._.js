module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
'use client';
;
;
;
;
function ClientsPage() {
    const [clients, setClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/clients').then((res)=>res.json()).then((data)=>setClients(data));
    }, []);
    const filteredClients = clients.filter((client)=>client.name.toLowerCase().includes(searchTerm.toLowerCase()) || client.phone && client.phone.includes(searchTerm) || client.email.toLowerCase().includes(searchTerm.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Clientes"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700",
                                    children: "Lista de contatos dos clientes cadastrados"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin",
                            className: "px-4 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700",
                            children: "Voltar ao Painel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded-xl shadow-sm border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-3 w-5 h-5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Buscar por nome, telefone ou email...",
                                    className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-pink-500",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50 text-gray-700 text-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-4 rounded-tl-lg",
                                                    children: "Nome"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-4",
                                                    children: "Telefone (WhatsApp)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-4 rounded-tr-lg",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-gray-100",
                                        children: filteredClients.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 3,
                                                className: "p-8 text-center text-gray-500",
                                                children: "Nenhum cliente encontrado."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this) : filteredClients.map((client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-4 font-medium text-gray-800 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold",
                                                                children: client.name.charAt(0).toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 25
                                                            }, this),
                                                            client.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-4 text-gray-700",
                                                        children: client.phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "w-4 h-4 text-green-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: client.phone
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 text-sm italic",
                                                            children: "Não informado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-4 text-gray-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PROGRAMAS__2026$2f$FINALIZADOS$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    className: "w-4 h-4 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 27
                                                                }, this),
                                                                client.email
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, client.id, true, {
                                                fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                                lineNumber: 74,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/PROGRAMAS 2026/FINALIZADOS/SALAO_AGENDAMENTO/salao-beleza/app/admin/clients/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__edcb9c53._.js.map