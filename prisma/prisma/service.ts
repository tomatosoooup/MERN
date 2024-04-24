"use server";

import { db } from "./prisma";

// Marked as "use server" to not bundle with client code. If we use this controllers in Next.js

export const countAllProducts = async () => {
  try {
    return await db.product.count();
  } catch (error) {
    console.error("getCountAllProducts", error);
  }
};

export const getProductsOnStock = async (uuid: string) => {
  try {
    return await db.stock.findUnique({
      where: { uuid },
      include: { products: true },
    });
  } catch (error) {
    console.error("getProductsOnStock", error);
  }
};

export const countProduct = async (
  sku: string
): Promise<number | undefined> => {
  try {
    return await db.product.count({
      where: { sku },
    });
  } catch (error) {
    console.error("countProduct", error);
  }
};

export const countProductOnStock = async (
  uuid: string,
  sku: string
): Promise<number | undefined> => {
  try {
    const productCount = await db.stock
      .findUnique({
        where: { uuid },
      })
      .products({
        where: { sku },
      });

    return productCount?.length as number;
  } catch (error) {
    console.error("countProductOnStock", error);
  }
};

export const countProductByCategory = async (slug: string): Promise<number> => {
  const productCountByCategory = await db.category
    .findUnique({
      where: { slug },
    })
    .products();
  return productCountByCategory?.length as number;
};

export const countProductOnStockByCategory = async (
  uuid: string,
  slug: string
): Promise<number> => {
  const productCountOnStockByCategory = await db.stock
    .findUnique({
      where: { uuid },
    })
    .products({
      where: {
        categories: {
          some: { slug },
        },
      },
    });
  return productCountOnStockByCategory?.length as number;
};
