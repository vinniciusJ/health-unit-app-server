-- AlterTable
ALTER TABLE `user` ADD COLUMN `healthUnitId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `HealthUnit` ADD CONSTRAINT `HealthUnit_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HealthUnit` ADD CONSTRAINT `HealthUnit_geolocationId_fkey` FOREIGN KEY (`geolocationId`) REFERENCES `Geolocation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_healthUnitId_fkey` FOREIGN KEY (`healthUnitId`) REFERENCES `HealthUnit`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
