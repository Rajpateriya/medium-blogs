const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
    log: ["query"]
})
async function main() {
    await prisma.$connect();
    console.log('Connected to the database!');
}
main().catch(e => {
        throw e;
    }).finally(async () => {
        await prisma.$disconnect();
    });
module.exports = prisma