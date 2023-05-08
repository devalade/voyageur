/*
  Warnings:

  - You are about to drop the column `departureCity` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `destinationCity` on the `Flight` table. All the data in the column will be lost.
  - Added the required column `departureCityId` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinationCityId` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" DATETIME NOT NULL,
    "countryName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Flight" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "departureCityId" TEXT NOT NULL,
    "destinationCityId" TEXT NOT NULL,
    "volType" TEXT NOT NULL DEFAULT 'Direct',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Flight_departureCityId_fkey" FOREIGN KEY ("departureCityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Flight_destinationCityId_fkey" FOREIGN KEY ("destinationCityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Flight" ("createdAt", "endDate", "endTime", "id", "startDate", "startTime", "updatedAt", "volType") SELECT "createdAt", "endDate", "endTime", "id", "startDate", "startTime", "updatedAt", "volType" FROM "Flight";
DROP TABLE "Flight";
ALTER TABLE "new_Flight" RENAME TO "Flight";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
