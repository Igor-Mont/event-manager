/*
  Warnings:

  - A unique constraint covering the columns `[event_id,email]` on the table `attendes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "attendes_event_id_email_key" ON "attendes"("event_id", "email");
