/*
  Warnings:

  - Added the required column `userId` to the `BookedTicket` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BookedTicket" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "seat" INTEGER NOT NULL,
    "flightId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BookedTicket_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "Flight" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BookedTicket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BookedTicket" ("createdAt", "flightId", "id", "seat", "updatedAt") SELECT "createdAt", "flightId", "id", "seat", "updatedAt" FROM "BookedTicket";
DROP TABLE "BookedTicket";
ALTER TABLE "new_BookedTicket" RENAME TO "BookedTicket";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
