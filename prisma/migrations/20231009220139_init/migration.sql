-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "due" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL
);
INSERT INTO "new_Todo" ("complete", "description", "due", "id", "title") SELECT "complete", "description", "due", "id", "title" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
