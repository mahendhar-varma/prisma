const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const createUser = await prisma.user.create({
    data: {
      name: "Mahendhar",
      email: "7093741662mahiv@gmail.com",
      isAdmin: true,
    },
  });
}

main();
