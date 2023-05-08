/*
  Warnings:

  - Added the required column `numberOfSeat` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Flight" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "numberOfSeat" INTEGER NOT NULL,
    "departureCityId" TEXT NOT NULL,
    "destinationCityId" TEXT NOT NULL,
    "volType" TEXT NOT NULL DEFAULT 'Direct',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Flight_departureCityId_fkey" FOREIGN KEY ("departureCityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Flight_destinationCityId_fkey" FOREIGN KEY ("destinationCityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Flight" ("createdAt", "departureCityId", "destinationCityId", "endDate", "endTime", "id", "startDate", "startTime", "updatedAt", "volType") SELECT "createdAt", "departureCityId", "destinationCityId", "endDate", "endTime", "id", "startDate", "startTime", "updatedAt", "volType" FROM "Flight";
DROP TABLE "Flight";
ALTER TABLE "new_Flight" RENAME TO "Flight";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
