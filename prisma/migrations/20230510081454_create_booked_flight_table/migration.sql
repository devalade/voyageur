-- CreateTable
CREATE TABLE "BookedTicket" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "seat" INTEGER NOT NULL,
    "flightId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BookedTicket_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "Flight" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
