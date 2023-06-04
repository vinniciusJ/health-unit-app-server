/*
  Warnings:

  - Added the required column `function` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `function` ENUM('ADM', 'USER') NOT NULL;

-- AddForeignKey
ALTER TABLE `HealthUnit` ADD CONSTRAINT `HealthUnit_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HealthUnit` ADD CONSTRAINT `HealthUnit_geolocationId_fkey` FOREIGN KEY (`geolocationId`) REFERENCES `Geolocation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
