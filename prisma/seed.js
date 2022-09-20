"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startData = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const startCity = {
    name: "Kežmarok",
};
const startAction = [
    {
        title: "Reds Crew Challenge 2022",
        description: "Dvojdňová súťaž v krásnom prostredí pod Vysokými Tatrami s množstvom rôznorodých workoutov. Srdečne Ťa pozývame na komplexnú previerku Tvojich schopností a zručností v riateľskej atmosfére Našej komunity.",
        dataStart: "22. October",
        dataEnd: "23. October",
    },
];
const startData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$connect();
    const createCity = yield prisma.city.create({ data: startCity });
    yield prisma.action.createMany({
        data: startAction.map((item) => (Object.assign(Object.assign({}, item), { cityId: createCity.id }))),
    });
    yield prisma.$disconnect();
});
exports.startData = startData;
