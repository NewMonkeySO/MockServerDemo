import type { GetOperationDelaysResponse } from "../../schemas/operation/index.js";

export const GET_OPERATION_DELAYS_RESPONSE:GetOperationDelaysResponse = {
  "operation_delays": [
    {
      "id": "de012345678",
      "status": "resolved",
      "vehicle_id": "vh012345678",
      "service_id": "sv012345678",
      "delay_minutes": 5,
      "delay_reason": "traffic",
      "delay_reason_detail": "途中の経路上で渋滞が発生しているため、遅れが発生しています。",
      "started_at": "2025-06-19T07:00:00+09:00",
      "closed_at": "2025-06-19T07:00:00+09:00",
      "closed_reason": "resolved",
      "closed_reason_detail": "渋滞を抜けたため、遅延が解消されました。",
      "effective_end": "2025-06-19T23:59:59+09:00",
      "created_at": "2025-06-19T07:00:00+09:00",
      "updated_at": "2025-06-19T07:12:23+09:00"
    },
    {
      "id": "de012345679",
      "status": "active",
      "vehicle_id": "vh012345679",
      "service_id": "sv012345679",
      "delay_minutes": 10,
      "delay_reason": "vehicle_issue",
      "delay_reason_detail": "車両の故障により、運行が遅れています。",
      "started_at": "2025-06-19T07:00:00+09:00",
      "effective_end": "2025-06-19T23:59:59+09:00",
      "created_at": "2025-06-19T07:00:00+09:00",
      "updated_at": "2025-06-19T07:12:23+09:00"
    }
  ],
  "total": 2,
  "offset": 0,
  "limit": 10
}

export const GET_OPERATION_DELAYS_400_UNAUTHORIZED_RESPONSE = {
  "type": "string",
  "title": "string",
  "status": 400,
  "detail": "string",
  "instance": "string"
}