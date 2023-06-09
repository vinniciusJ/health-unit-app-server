/*
  Warnings:

  - Added the required column `imageURL` to the `HealthUnit` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_healthUnitId_fkey` ON `user`;

-- AlterTable
ALTER TABLE `healthunit` ADD COLUMN `imageURL` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `HealthUnit` ADD CONSTRAINT `HealthUnit_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HealthUnit` ADD CONSTRAINT `HealthUnit_geolocationId_fkey` FOREIGN KEY (`geolocationId`) REFERENCES `Geolocation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_healthUnitId_fkey` FOREIGN KEY (`healthUnitId`) REFERENCES `HealthUnit`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
