import { Geolocation } from "src/domain/gelocation";

const EARTH_RADIUS_KM = 6371

const degreesToRadians = (degrees: number) => {
    return (degrees * Math.PI) / 180;
}

export const calculateDistance = (stPoint: Geolocation, ndPoint: Geolocation): number =>  {
    const dLat = degreesToRadians(ndPoint.lat - stPoint.lat)
    const dLon = degreesToRadians(ndPoint.long - stPoint.long)
  
    const lat1 = degreesToRadians(stPoint.lat)
    const lat2 = degreesToRadians(ndPoint.lat)

    const squareOfHalf = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
    const angularDistance = 2 * Math.atan2(Math.sqrt(squareOfHalf), Math.sqrt(1 - squareOfHalf))

    return EARTH_RADIUS_KM * angularDistance
}