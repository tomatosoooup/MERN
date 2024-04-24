-- CreateTable
CREATE TABLE "Product" (
    "sku" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("sku")
);

-- CreateTable
CREATE TABLE "Category" (
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "Stock" (
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "_ProductStocks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductCategories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductStocks_AB_unique" ON "_ProductStocks"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductStocks_B_index" ON "_ProductStocks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductCategories_AB_unique" ON "_ProductCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductCategories_B_index" ON "_ProductCategories"("B");

-- AddForeignKey
ALTER TABLE "_ProductStocks" ADD CONSTRAINT "_ProductStocks_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("sku") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductStocks" ADD CONSTRAINT "_ProductStocks_B_fkey" FOREIGN KEY ("B") REFERENCES "Stock"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductCategories" ADD CONSTRAINT "_ProductCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductCategories" ADD CONSTRAINT "_ProductCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("sku") ON DELETE CASCADE ON UPDATE CASCADE;
