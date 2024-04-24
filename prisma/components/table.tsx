import {
  countAllProducts,
  countProduct,
  countProductByCategory,
  countProductOnStock,
  countProductOnStockByCategory,
  getProductsOnStock,
} from "@/prisma/service";
import { TableBox } from "./table-box";

export const Table = async () => {
  const allProductsAmount = await countAllProducts();
  const productsOnStock = await getProductsOnStock("1");

  const amountChoosenProduct = await countProduct("002");
  const productOnStock = await countProductOnStock("1", "003");

  const productsByCategory = await countProductByCategory("clothing");

  const productOnStockByCategory = await countProductOnStockByCategory(
    "1",
    "electronics"
  );

  return (
    <>
      <div className="w-[600px] grid grid-cols-3 gap-6">
        <TableBox title="Amount of all products">{allProductsAmount}</TableBox>
        <TableBox title="Amount of apples on all stocks">
          {productsOnStock?.products.length}
        </TableBox>
        <TableBox title="Amount of t-shirts on all stocks">
          {amountChoosenProduct}
        </TableBox>
        <TableBox title="Amount of laptops on stock_1">
          {productOnStock}
        </TableBox>
        <TableBox title="Amount of products by cetegory clothing">
          {productsByCategory}
        </TableBox>
        <TableBox title="Amount of product on stock by category">
          {productOnStockByCategory}
        </TableBox>
      </div>
    </>
  );
};
