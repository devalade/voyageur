import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const DATAS = [{name: "Cotonou", countryName: "Bénin"}, { name: "Lagos", countryName: "Nigéria" }, { name: "Lomé", countryName: "Togo" }]

async function citySeeder() {
   await Promise.all(DATAS.map(async (data) => {
       await prisma.city.create({
           data
       });
   }))
}
citySeeder()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
