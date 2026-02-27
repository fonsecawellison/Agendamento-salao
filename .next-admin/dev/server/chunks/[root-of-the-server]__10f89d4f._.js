module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAppointment",
    ()=>createAppointment,
    "createAppointments",
    ()=>createAppointments,
    "createService",
    ()=>createService,
    "createUser",
    ()=>createUser,
    "deleteService",
    ()=>deleteService,
    "findUserByEmail",
    ()=>findUserByEmail,
    "getAppointments",
    ()=>getAppointments,
    "getBanner",
    ()=>getBanner,
    "getServices",
    ()=>getServices,
    "readDb",
    ()=>readDb,
    "setBanner",
    ()=>setBanner,
    "setCampaign",
    ()=>setCampaign,
    "updateAppointmentStatus",
    ()=>updateAppointmentStatus,
    "updateService",
    ()=>updateService,
    "verifyUser",
    ()=>verifyUser,
    "writeDb",
    ()=>writeDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const DB_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data', 'db.json');
function readDb() {
    try {
        const data = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(DB_PATH, 'utf-8');
        const parsed = JSON.parse(data);
        return {
            banner: '',
            ...parsed
        };
    } catch (error) {
        console.error("Error reading DB:", error);
        return {
            users: [],
            services: [],
            appointments: [],
            banner: ''
        };
    }
}
function writeDb(data) {
    try {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error writing DB:", error);
    }
}
function getServices() {
    const db = readDb();
    return db.services.map((s)=>({
            ...s,
            visible: s.visible ?? true,
            loyaltyEnabled: s.loyaltyEnabled ?? false
        }));
}
function getAppointments() {
    const db = readDb();
    // Join data for convenience
    return db.appointments.map((app)=>{
        const user = db.users.find((u)=>u.id === app.userId);
        const service = db.services.find((s)=>s.id === app.serviceId);
        const resolvedServiceKey = app.serviceKey ?? normalizeServiceKey(service?.name || '');
        return {
            ...app,
            userName: user?.name || 'Unknown',
            serviceName: service?.name || 'Unknown',
            serviceKey: resolvedServiceKey,
            servicePrice: app.isFree ? 0 : service?.price
        };
    });
}
function normalizeServiceKey(name) {
    return name.trim().toLowerCase();
}
function serviceKeyFromServiceId(db, serviceId) {
    const service = db.services.find((s)=>s.id === serviceId);
    return normalizeServiceKey(service?.name || '');
}
function serviceKeyFromAppointment(db, app) {
    if (app.serviceKey) return app.serviceKey;
    const key = serviceKeyFromServiceId(db, app.serviceId);
    if (key) return key;
    return `id:${app.serviceId}`;
}
function eligibleForFree(db, userId, serviceId) {
    const service = db.services.find((s)=>s.id === serviceId);
    if (!service) return false;
    if (!(service.loyaltyEnabled ?? false)) return false;
    const targetKey = normalizeServiceKey(service.name);
    if (!targetKey) return false;
    const now = new Date();
    // Agendamentos pagos válidos (apenas finalizados pelo admin)
    const paidCount = db.appointments.filter((a)=>{
        if (a.userId !== userId) return false;
        if (a.status !== 'completed') return false;
        if (a.isFree) return false;
        return serviceKeyFromAppointment(db, a) === targetKey;
    }).length;
    // Agendamentos grátis já utilizados ou agendados (qualquer status exceto cancelado/rejeitado)
    const freeUsedCount = db.appointments.filter((a)=>{
        if (a.userId !== userId) return false;
        if (a.status === 'cancelled' || a.status === 'rejected') return false;
        if (!a.isFree) return false;
        return serviceKeyFromAppointment(db, a) === targetKey;
    }).length;
    const freeAllowed = Math.floor(paidCount / 10);
    return freeUsedCount < freeAllowed;
}
function createAppointment(appointment) {
    const db = readDb();
    const serviceKey = appointment.serviceKey ?? serviceKeyFromServiceId(db, appointment.serviceId);
    const newAppointment = {
        ...appointment,
        id: Math.random().toString(36).substr(2, 9),
        status: 'pending',
        serviceKey,
        isFree: eligibleForFree(db, appointment.userId, appointment.serviceId)
    };
    db.appointments.push(newAppointment);
    writeDb(db);
    return newAppointment;
}
function createAppointments(appointments) {
    const db = readDb();
    const newAppointments = appointments.map((app)=>{
        const serviceKey = app.serviceKey ?? serviceKeyFromServiceId(db, app.serviceId);
        return {
            ...app,
            serviceKey,
            id: Math.random().toString(36).substr(2, 9),
            status: 'pending',
            isFree: eligibleForFree(db, app.userId, app.serviceId)
        };
    });
    db.appointments.push(...newAppointments);
    writeDb(db);
    return newAppointments;
}
function createService(service) {
    const db = readDb();
    const newService = {
        ...service,
        id: Math.random().toString(36).substr(2, 9),
        visible: service.visible ?? false
    };
    db.services.push(newService);
    writeDb(db);
    return newService;
}
function updateService(id, updates) {
    const db = readDb();
    const index = db.services.findIndex((s)=>s.id === id);
    if (index === -1) return null;
    const filteredUpdates = Object.fromEntries(Object.entries(updates).filter(([_, v])=>v !== undefined));
    db.services[index] = {
        ...db.services[index],
        ...filteredUpdates
    };
    writeDb(db);
    return db.services[index];
}
function deleteService(id) {
    const db = readDb();
    const index = db.services.findIndex((s)=>s.id === id);
    if (index === -1) return false;
    db.services.splice(index, 1);
    writeDb(db);
    return true;
}
function updateAppointmentStatus(id, status, reason) {
    const db = readDb();
    const index = db.appointments.findIndex((a)=>a.id === id);
    if (index !== -1) {
        db.appointments[index].status = status;
        if (status === 'cancelled') {
            db.appointments[index].cancelReason = reason;
            db.appointments[index].rejectReason = undefined;
        } else if (status === 'rejected') {
            db.appointments[index].rejectReason = reason;
            db.appointments[index].cancelReason = undefined;
        }
        writeDb(db);
        return db.appointments[index];
    }
    return null;
}
function findUserByEmail(email) {
    const db = readDb();
    return db.users.find((u)=>u.email === email);
}
function verifyUser(email, code) {
    const db = readDb();
    const idx = db.users.findIndex((u)=>u.email === email);
    if (idx === -1) return false;
    const user = db.users[idx];
    const expected = user.verificationCode;
    if (!expected || expected !== code) return false;
    db.users[idx] = {
        ...user,
        isVerified: true,
        verificationCode: undefined
    };
    writeDb(db);
    return true;
}
function createUser(user) {
    const db = readDb();
    const newUser = {
        ...user,
        id: Math.random().toString(36).substr(2, 9),
        isVerified: user.role === 'admin' ? true : false,
        verificationCode: user.role === 'admin' ? undefined : Math.floor(100000 + Math.random() * 900000).toString()
    };
    db.users.push(newUser);
    writeDb(db);
    return newUser;
}
function getBanner() {
    const db = readDb();
    // Se campanha estiver ativa, retorna banner. Se não, retorna vazio ou banner padrão?
    // O requisito diz que a campanha substitui a imagem atual.
    // Vou retornar o banner e o status da campanha.
    return {
        banner: db.banner || '',
        active: db.campaignActive ?? false,
        month: db.campaignMonth || '',
        target: db.campaignTarget || 5
    };
}
function setBanner(dataUri) {
    const db = readDb();
    db.banner = dataUri;
    writeDb(db);
    return db.banner;
}
function setCampaign(active, month, target, banner) {
    const db = readDb();
    db.campaignActive = active;
    db.campaignMonth = month;
    db.campaignTarget = target;
    if (banner) {
        db.banner = banner;
    }
    writeDb(db);
    return {
        active,
        month,
        target,
        banner: db.banner
    };
}
}),
"[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/api/appointments/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/lib/db.ts [app-route] (ecmascript)");
;
;
async function GET() {
    const appointments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAppointments"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(appointments);
}
async function POST(request) {
    try {
        const body = await request.json();
        // Check if it's an array for bulk creation
        if (Array.isArray(body)) {
            if (body.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Empty list'
                }, {
                    status: 400
                });
            }
            // Basic validation for array
            const isValid = body.every((item)=>item.userId && item.serviceId && item.date && item.time);
            if (!isValid) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Missing fields in one or more items'
                }, {
                    status: 400
                });
            }
            const newAppointments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAppointments"])(body);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newAppointments);
        } else {
            const { userId, serviceId, date, time, referralPhone } = body;
            if (!userId || !serviceId || !date || !time) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Missing fields'
                }, {
                    status: 400
                });
            }
            const newAppointment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAppointment"])({
                userId,
                serviceId,
                date,
                time,
                referralPhone
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newAppointment);
        }
    } catch (error) {
        console.error(error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal Server Error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__10f89d4f._.js.map