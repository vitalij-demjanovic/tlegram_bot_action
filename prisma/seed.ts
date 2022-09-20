import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const startCity = {
  name: "Kežmarok",
};

const startAction = [
  {
    title: "Reds Crew Challenge 2022",
    description:
      "Dvojdňová súťaž v krásnom prostredí pod Vysokými Tatrami s množstvom rôznorodých workoutov. Srdečne Ťa pozývame na komplexnú previerku Tvojich schopností a zručností v riateľskej atmosfére Našej komunity.",
    dataStart: "22. October",
    dataEnd: "23. October",
  },
];

const startData = async () => {
  await prisma.$connect();
  const createCity = await prisma.city.create({ data: startCity });
  await prisma.action.createMany({
    data: startAction.map((item) => ({ ...item, cityId: createCity.id })),
  });
  await prisma.$disconnect();
};

startData();