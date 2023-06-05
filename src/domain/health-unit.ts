import { Address, Geolocation, HealthUnit as HealthUnitModel } from "@prisma/client";

export interface HealthUnit extends HealthUnitModel{
    geolocation: Geolocation
    address: Address
}