//Bismillahirrahmanirahim 

// Bismillahir Rahmanir Rahim
// Elhamdu Lillahi Rabbil Alamin
// Es selatu vesselamu ala rasulina Muhammedin
// Suphan Allah ul Azim ve Bihamdihi 
// Subhan Allahil Azim
// La ilahe illAllah u vahdehu la şerike leh, lehul mülkü ve lehul hamdü 
//yuhyi ve yumit ,biyadihil xayru ve huve ala kulli şeyin kadir.
//  ve hüve ala külli şeyin kadir.
// Elhamdulillah ya Samed i Vehhab i Quddus i  Erhamer Rahimin i Gafur i Rahim i Halim i Azim i Aziz i Hakim i Latif i Hafiz i Kadir i Muheymin i Ehed  i Alim i Basir i Sami i Halim i Gani
// La ilahe illAllah u vahdehu la şerike leh, lehul mülkü ve lehul hamdü
// Rabbena Ve Lekel Hamd . İnneke Hamidun Mecid
// Allahu Ekber Allahu Ekber Allahu Ekber La ilahe illAllah
// Allahu Ekber Allahu Ekber ve Lillahil Hamd


import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
