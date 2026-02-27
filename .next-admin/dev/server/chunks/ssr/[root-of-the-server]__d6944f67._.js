module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminHistoryPreviousPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
function AdminHistoryPreviousPage() {
    const [appointments, setAppointments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/appointments').then((res)=>res.json()).then((data)=>setAppointments(data));
    }, []);
    const confirmed = appointments.filter((a)=>a.status === 'confirmed');
    const rejected = appointments.filter((a)=>a.status === 'rejected');
    const cancelled = appointments.filter((a)=>a.status === 'cancelled');
    const completed = appointments.filter((a)=>a.status === 'completed');
    const history = [
        ...confirmed,
        ...rejected,
        ...cancelled,
        ...completed
    ].sort((a, b)=>new Date(b.date + 'T' + b.time).getTime() - new Date(a.date + 'T' + a.time).getTime());
    const todayStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'yyyy-MM-dd');
    const historyPrevious = history.filter((h)=>h.status === 'rejected' || h.date < todayStr);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-800",
                            children: "Históricos Anteriores"
                        }, void 0, false, {
                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin",
                            className: "text-sm text-pink-600 hover:text-pink-700",
                            children: "Voltar para Admin"
                        }, void 0, false, {
                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-sm overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-100 text-gray-700 text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4",
                                                children: "Serviço"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4",
                                                children: "Cliente"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4",
                                                children: "Data"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-4",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-100",
                                    children: historyPrevious.map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4 font-medium text-gray-800",
                                                    children: app.serviceName
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4 text-gray-800",
                                                    children: app.userName
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4 text-gray-800",
                                                    children: [
                                                        app.date,
                                                        " ",
                                                        app.time
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-1 rounded-full text-xs font-medium ${app.status === 'confirmed' ? 'bg-green-100 text-green-700' : app.status === 'completed' ? 'bg-blue-100 text-blue-700' : app.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-500'}`,
                                                        children: app.status === 'confirmed' ? 'Confirmado' : app.status === 'completed' ? 'Finalizado' : app.status === 'rejected' ? 'Recusado' : 'Cancelado'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, app.id, true, {
                                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        historyPrevious.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 text-center text-gray-400 italic",
                            children: "Nenhum histórico anterior."
                        }, void 0, false, {
                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/history/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d6944f67._.js.map