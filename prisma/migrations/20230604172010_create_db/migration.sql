-- CreateTable
CREATE TABLE `Address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `zipCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Geolocation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lat` DOUBLE NOT NULL,
    `long` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HealthUnit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('UBS', 'UPA') NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `openingHours` VARCHAR(191) NOT NULL,
    `addressId` INTEGER NOT NULL,
    `geolocationId` INTEGER NOT NULL,

    UNIQUE INDEX `HealthUnit_addressId_key`(`addressId`),
    UNIQUE INDEX `HealthUnit_geolocationId_key`(`geolocationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HealthUnit` ADD CONSTRAINT `HealthUnit_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HealthUnit` ADD CONSTRAINT `HealthUnit_geolocationId_fkey` FOREIGN KEY (`geolocationId`) REFERENCES `Geolocation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
