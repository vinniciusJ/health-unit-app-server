-- AddForeignKey
ALTER TABLE `HealthUnit` ADD CONSTRAINT `HealthUnit_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HealthUnit` ADD CONSTRAINT `HealthUnit_geolocationId_fkey` FOREIGN KEY (`geolocationId`) REFERENCES `Geolocation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
