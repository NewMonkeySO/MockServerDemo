import type { GetVehicleLocationsResponse } from "../../schemas/vehicles/index.js";

export const GET_VEHICLE_LOCATIONS_RESPONSE:GetVehicleLocationsResponse = {
  "vehicle_locations": [
    {
      "vehicle_id": "vh012345678",
      "service_id": "sv012345678",
      "location": {
        "type": "Point",
        "coordinates": [
          139.745412,
          35.658612
        ]
      },
      "timestamp": "2025-06-19T07:00:00+09:00"
    },
    {
      "vehicle_id": "vh012345679",
      "service_id": "sv012345678",
      "location": {
        "type": "Point",
        "coordinates": [
          139.751494,
          35.657774
        ]
      },
      "timestamp": "2025-06-19T07:05:00+09:00"
    }
  ],
  "total": 2,
  "offset": 0,
  "limit": 10
}