module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function AdminServicesPage() {
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newService, setNewService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        price: 0,
        duration: 30,
        visible: false
    });
    const [showCampaignModal, setShowCampaignModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [campaignData, setCampaignData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        active: false,
        month: '',
        banner: '',
        target: 5
    });
    const [campaignStats, setCampaignStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/services?all=true').then((res)=>res.json()).then((data)=>setServices(data));
        // Fetch stats
        fetchStats();
    }, []);
    const fetchStats = ()=>{
        fetch('/api/campaign/stats').then((res)=>res.json()).then((data)=>setCampaignStats(data));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showCampaignModal) {
            fetch('/api/banner').then((r)=>r.json()).then((data)=>{
                setCampaignData({
                    active: data.active || false,
                    month: data.month || '',
                    banner: data.banner || '',
                    target: data.target || 5
                });
            });
        }
    }, [
        showCampaignModal
    ]);
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setCampaignData((prev)=>({
                        ...prev,
                        banner: reader.result
                    }));
            };
            reader.readAsDataURL(file);
        }
    };
    const saveCampaign = async ()=>{
        const res = await fetch('/api/banner', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(campaignData)
        });
        if (res.ok) {
            alert('Campanha salva com sucesso!');
            setShowCampaignModal(false);
            fetchStats(); // Refresh stats
        } else {
            alert('Erro ao salvar campanha');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Gerenciar Serviços"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700",
                                    children: "Crie, edite, remova e publique serviços"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCampaignModal(true),
                                    className: "px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "📢"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        " Campanha"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin",
                                    className: "px-4 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700",
                                    children: "Voltar ao Painel"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                showCampaignModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-xl max-w-md w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-800",
                                children: "Campanha de Indicação Mensal"
                            }, void 0, false, {
                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-3 bg-gray-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: campaignData.active,
                                        onChange: (e)=>setCampaignData({
                                                ...campaignData,
                                                active: e.target.checked
                                            }),
                                        id: "campaignActive",
                                        className: "w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "campaignActive",
                                        className: "text-gray-700 font-medium cursor-pointer",
                                        children: "Habilitar Campanha"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Mês de Referência"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "month",
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 bg-white",
                                        value: campaignData.month,
                                        onChange: (e)=>setCampaignData({
                                                ...campaignData,
                                                month: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Meta de Indicações (1-10)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 bg-white",
                                        value: campaignData.target,
                                        onChange: (e)=>setCampaignData({
                                                ...campaignData,
                                                target: Number(e.target.value)
                                            }),
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5,
                                            6,
                                            7,
                                            8,
                                            9,
                                            10
                                        ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: num,
                                                children: [
                                                    num,
                                                    " Indicações"
                                                ]
                                            }, num, true, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Card de Divulgação"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        className: "w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100",
                                        onChange: handleImageUpload
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "A imagem substituirá o banner atual no app do cliente e admin."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this),
                            campaignData.banner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-[4/1] relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: campaignData.banner,
                                    alt: "Preview",
                                    className: "object-cover w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                lineNumber: 140,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 pt-4 border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowCampaignModal(false),
                                        className: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg",
                                        children: "Cancelar"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: saveCampaign,
                                        className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700",
                                        children: "Salvar e Divulgar"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this),
                campaignStats && campaignStats.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "🏆"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                " Acompanhamento da Campanha (",
                                campaignStats.month,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-sm text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "text-xs text-gray-700 uppercase bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3",
                                                    children: "Participante"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3",
                                                    children: "Telefone"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 text-center",
                                                    children: "Indicações"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 text-center",
                                                    children: "Meta"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 text-center",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-gray-200",
                                        children: campaignStats.participants.length > 0 ? campaignStats.participants.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: p.won ? "bg-green-50" : "bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 font-medium text-gray-900",
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-gray-500",
                                                        children: p.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-center font-bold text-gray-900",
                                                        children: p.count
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-center text-gray-500",
                                                        children: p.target
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-center",
                                                        children: p.won ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",
                                                            children: "🏆 Ganhador!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",
                                                            children: [
                                                                "Faltam ",
                                                                p.remaining
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 23
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 5,
                                                className: "px-4 py-8 text-center text-gray-500",
                                                children: "Nenhuma indicação registrada nesta campanha ainda."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-xl shadow-sm border border-gray-200 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-4 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "border border-gray-300 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white",
                                        placeholder: "Nome",
                                        value: newService.name,
                                        onChange: (e)=>setNewService({
                                                ...newService,
                                                name: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "border border-gray-300 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white",
                                        type: "number",
                                        placeholder: "Preço",
                                        value: newService.price,
                                        onChange: (e)=>setNewService({
                                                ...newService,
                                                price: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "border border-gray-300 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white",
                                        type: "number",
                                        placeholder: "Duração (min)",
                                        value: newService.duration,
                                        onChange: (e)=>setNewService({
                                                ...newService,
                                                duration: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-pink-600 text-white rounded-lg px-4 py-2 shadow hover:bg-pink-700",
                                        onClick: async ()=>{
                                            const res = await fetch('/api/services', {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(newService)
                                            });
                                            if (res.ok) {
                                                const created = await res.json();
                                                setServices((s)=>[
                                                        created,
                                                        ...s
                                                    ]);
                                                setNewService({
                                                    name: '',
                                                    price: 0,
                                                    duration: 30,
                                                    visible: false
                                                });
                                            } else {
                                                alert('Erro ao criar serviço');
                                            }
                                        },
                                        children: "Adicionar"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y",
                                children: services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-3 px-3 flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "border border-gray-300 rounded-md px-2 py-2 flex-1 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white",
                                                value: s.name,
                                                onChange: (e)=>setServices((prev)=>prev.map((x)=>x.id === s.id ? {
                                                                ...x,
                                                                name: e.target.value
                                                            } : x))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "border border-gray-300 rounded-md px-2 py-2 w-24 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white",
                                                type: "number",
                                                value: s.price,
                                                onChange: (e)=>setServices((prev)=>prev.map((x)=>x.id === s.id ? {
                                                                ...x,
                                                                price: Number(e.target.value)
                                                            } : x))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "border border-gray-300 rounded-md px-2 py-2 w-28 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none bg-white",
                                                type: "number",
                                                value: s.duration,
                                                onChange: (e)=>setServices((prev)=>prev.map((x)=>x.id === s.id ? {
                                                                ...x,
                                                                duration: Number(e.target.value)
                                                            } : x))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-800 font-medium flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: s.visible ?? false,
                                                        onChange: (e)=>setServices((prev)=>prev.map((x)=>x.id === s.id ? {
                                                                        ...x,
                                                                        visible: e.target.checked
                                                                    } : x))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Exibir para clientes"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-800 font-medium flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: s.loyaltyEnabled ?? false,
                                                        onChange: (e)=>setServices((prev)=>prev.map((x)=>x.id === s.id ? {
                                                                        ...x,
                                                                        loyaltyEnabled: e.target.checked
                                                                    } : x))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Fidelizar"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-pink-600 text-white px-3 py-1 rounded text-sm shadow hover:bg-pink-700",
                                                onClick: async ()=>{
                                                    const res = await fetch(`/api/services/${s.id}`, {
                                                        method: 'PATCH',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({
                                                            name: s.name,
                                                            price: s.price,
                                                            duration: s.duration,
                                                            visible: s.visible,
                                                            loyaltyEnabled: s.loyaltyEnabled
                                                        })
                                                    });
                                                    if (!res.ok) alert('Erro ao salvar');
                                                },
                                                children: "Salvar"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "border border-red-300 px-3 py-1 rounded text-sm text-red-700 hover:bg-red-50",
                                                onClick: async ()=>{
                                                    if (!confirm('Remover este serviço?')) return;
                                                    const res = await fetch(`/api/services/${s.id}`, {
                                                        method: 'DELETE'
                                                    });
                                                    if (res.ok) {
                                                        setServices((prev)=>prev.filter((x)=>x.id !== s.id));
                                                    } else {
                                                        alert('Erro ao remover');
                                                    }
                                                },
                                                children: "Remover"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/admin/services/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f61763a9._.js.map