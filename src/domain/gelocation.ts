import { Geolocation as GeolocationPrisma } from "@prisma/client"

export type Geolocation = Omit<GeolocationPrisma, 'id'>