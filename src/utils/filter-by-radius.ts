import { HealthUnit } from "src/domain/health-unit";
import { calculateDistance } from "./calculate-distance";
import { Geolocation } from "src/domain/gelocation";


export const filterByRadius = (healthUnities: HealthUnit[], point: Geolocation, radius: number): HealthUnit[] => {
    return healthUnities.filter(healthUnit => {
        return calculateDistance(healthUnit.geolocation, point) <= radius
    })
}