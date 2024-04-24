import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const category1 = await prisma.category.create({
      data: {
        slug: "electronics",
        title: "Електроніка",
      },
    });

    const category2 = await prisma.category.create({
      data: {
        slug: "clothing",
        title: "Одяг",
      },
    });

    const stock1 = await prisma.stock.create({
      data: {
        uuid: "1",
        title: "Склад 1",
      },
    });

    const stock2 = await prisma.stock.create({
      data: {
        uuid: "2",
        title: "Склад 2",
      },
    });

    const stock3 = await prisma.stock.create({
      data: {
        uuid: "3",
        title: "Склад 3",
      },
    });

    const product1 = await prisma.product.create({
      data: {
        sku: "001",
        title: "Смартфон",
        categories: { connect: { slug: "electronics" } },
        stocks: { connect: [{ uuid: "1" }, { uuid: "2" }] },
      },
    });

    const product2 = await prisma.product.create({
      data: {
        sku: "002",
        title: "Футболка",
        categories: { connect: { slug: "clothing" } },
        stocks: { connect: { uuid: "1" } },
      },
    });

    const product3 = await prisma.product.create({
      data: {
        sku: "003",
        title: "Ноутбук",
        categories: { connect: { slug: "clothing" } },
        stocks: { connect: { uuid: "1" } },
      },
    });

    const product4 = await prisma.product.create({
      data: {
        sku: "004",
        title: "Штани",
        categories: { connect: { slug: "clothing" } },
        stocks: { connect: { uuid: "1" } },
      },
    });

    const product5 = await prisma.product.create({
      data: {
        sku: "005",
        title: "Приставка",
        categories: { connect: { slug: "electronics" } },
        stocks: { connect: { uuid: "1" } },
      },
    });

    const product6 = await prisma.product.create({
      data: {
        sku: "006",
        title: "Футболка",
        categories: { connect: { slug: "clothing" } },
        stocks: { connect: { uuid: "1" } },
      },
    });

    console.log("Seed data created successfully!");
  } catch (error) {
    console.error("Error creating seed data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
