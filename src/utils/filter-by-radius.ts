import { HealthUnit } from "src/domain/health-unit";
import { calculateDistance } from "./calculate-distance";
import { Geolocation } from "@prisma/client";

export const filterByRadius = (healthUnities: HealthUnit[], point: Geolocation, radius: number): HealthUnit[] => {
    return healthUnities.filter(healthUnit => {
        return calculateDistance(healthUnit.geolocation, point) <= radius
    })
}