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
        return {
            ...app,
            userName: user?.name || 'Unknown',
            serviceName: service?.name || 'Unknown',
            servicePrice: app.isFree ? 0 : service?.price
        };
    });
}
function eligibleForFree(userId, serviceId) {
    const db = readDb();
    const now = new Date();
    const completed = db.appointments.filter((a)=>{
        if (a.userId !== userId || a.serviceId !== serviceId) return false;
        if (a.status !== 'confirmed') return false;
        const dt = new Date(a.date + 'T' + a.time);
        return dt.getTime() < now.getTime();
    }).length;
    const service = db.services.find((s)=>s.id === serviceId);
    if (!service) return false;
    if (!(service.loyaltyEnabled ?? false)) return false;
    if (completed === 0) return false;
    return completed % 10 === 0;
}
function createAppointment(appointment) {
    const db = readDb();
    const newAppointment = {
        ...appointment,
        id: Math.random().toString(36).substr(2, 9),
        status: 'pending',
        isFree: eligibleForFree(appointment.userId, appointment.serviceId)
    };
    db.appointments.push(newAppointment);
    writeDb(db);
    return newAppointment;
}
function createAppointments(appointments) {
    const db = readDb();
    const newAppointments = appointments.map((app)=>({
            ...app,
            id: Math.random().toString(36).substr(2, 9),
            status: 'pending',
            isFree: eligibleForFree(app.userId, app.serviceId)
        }));
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
    return db.banner || '';
}
function setBanner(dataUri) {
    const db = readDb();
    db.banner = dataUri;
    writeDb(db);
    return db.banner;
}
}),
"[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/app/api/services/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/SALAO_AGENDAMENTO/salao-beleza/lib/db.ts [app-route] (ecmascript)");
;
;
async function PATCH(_request, { params }) {
    try {
        const { id } = await params;
        const body = await _request.json();
        const { name, price, duration, visible, loyaltyEnabled } = body;
        const updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateService"])(id, {
            name,
            price,
            duration,
            visible,
            loyaltyEnabled
        });
        if (!updated) return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Serviço não encontrado'
        }, {
            status: 404
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(updated);
    } catch (error) {
        console.error('PATCH /api/services/[id] error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Falha ao atualizar serviço',
            details: String(error)
        }, {
            status: 500
        });
    }
}
async function DELETE(_request, { params }) {
    try {
        const { id } = await params;
        const ok = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteService"])(id);
        if (!ok) return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Serviço não encontrado'
        }, {
            status: 404
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (error) {
        console.error('DELETE /api/services/[id] error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$SALAO_AGENDAMENTO$2f$salao$2d$beleza$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Falha ao remover serviço',
            details: String(error)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e04ae50c._.js.map