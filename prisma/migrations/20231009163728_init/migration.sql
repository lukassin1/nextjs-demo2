-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" BOOLEAN NOT NULL,
    "due" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL
);
