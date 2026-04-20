import type { GetPassengerAgreementsResponse, GetPassengerByIdReservationsResponse, GetPassengerByIdServicesResponse, PostPassengerAgreementsResponse, PostPassengerResponse } from "../../schemas/passengers/index.js";

/** POST /passengers */
export const POST_PASSENGER_RESPONSE:PostPassengerResponse = {
  "id": "ps012345678",
  "first_name": "太郎",
  "last_name": "山田",
  "first_name_kana": "タロウ",
  "last_name_kana": "ヤマダ",
  "gender": "male",
  "birthdate": "1990-01-01",
  "phone_number": "+819000000000",
  "email": "taro.yamada@example.com",
  "home_address": {
    "postal_code": "1234567",
    "state": "東京都",
    "city": "千代田区",
    "street": "千代田1-1",
    "location": {
      "type": "Point",
      "coordinates": [
        139.766084,
        35.681382
      ]
    }
  },
  "created_at": "2025-06-19T12:00:00+09:00",
  "updated_at": "2025-06-19T12:00:00+09:00"
}

/** GET /passengers/{id} */
export const GET_PASSENGER_BY_ID_RESPONSE: PostPassengerResponse = {
  "id": "ps012345678",
  "first_name": "太郎",
  "last_name": "山田",
  "first_name_kana": "タロウ",
  "last_name_kana": "ヤマダ",
  "gender": "male",
  "birthdate": "1990-01-01",
  "phone_number": "+819000000000",
  "email": "taro.yamada@example.com",
  "home_address": {
    "postal_code": "1234567",
    "state": "東京都",
    "city": "千代田区",
    "street": "千代田1-1",
    "location": {
      "type": "Point",
      "coordinates": [
        139.766084,
        35.681382
      ]
    }
  },
  "created_at": "2025-06-19T12:00:00+09:00",
  "updated_at": "2025-06-19T12:00:00+09:00"
};

/** PUT /passengers/{id} */
export const PUT_PASSENGER_BY_ID_RESPONSE: PostPassengerResponse = {
  "id": "ps012345678",
  "first_name": "太郎",
  "last_name": "山田",
  "first_name_kana": "タロウ",
  "last_name_kana": "ヤマダ",
  "gender": "male",
  "birthdate": "1990-01-01",
  "phone_number": "+819000000000",
  "email": "taro.yamada@example.com",
  "home_address": {
    "postal_code": "1234567",
    "state": "東京都",
    "city": "千代田区",
    "street": "千代田1-1",
    "location": {
      "type": "Point",
      "coordinates": [
        139.766084,
        35.681382
      ]
    }
  },
  "created_at": "2025-06-19T12:34:56+09:00",
  "updated_at": "2025-06-21T13:45:01+09:00"
};

/** DELETE /passengers/{id} */

/** GET /passengers/{id}/services */
export const GET_PASSENGER_BY_ID_SERVICES_RESPONSE: GetPassengerByIdServicesResponse = {
  "services": [
    {
      "id": "sv012345678",
      "name": "サンプル住民向けオンデマンドサービス",
      "description": "〇×地区に住所のある方のみが利用可能なオンデマンド交通サービスです。",
      "brand_image_url": "https://example.com/logo_image.png",
      "access_scope": "resident_only",
      "operation_type": "on_demand",
      "allow_ridepooling": true,
      "start_datetime": "2025-06-19T00:00:00+09:00",
      "service_group_id": "contract123",
      "cities": [
        {
          "prefecture_code": "13",
          "prefecture_name": "東京都",
          "municipalities": [
            {
              "code": "13103",
              "name": "港区"
            }
          ]
        }
      ],
      "service_terms": [
        {
          "id": "st012345678",
          "category": "service",
          "name": "サンプル住民向けオンデマンドサービスの利用規約",
          "url": "https://example.com/terms",
          "agreement_required": true,
          "created_at": "2025-06-19T12:00:00+09:00",
          "updated_at": "2025-06-19T12:00:00+09:00"
        }
      ],
      "available_passenger_types": [
        {
          "passenger_type_id": "pt012345678",
          "name": "一般",
          "order": 1,
          "description": "一般の大人の方"
        },
        {
          "passenger_type_id": "pt012345679",
          "name": "シニア",
          "order": 2,
          "description": "60歳以上の方"
        }
      ],
      "supported_accessibility_features": [
        "wheelchair",
        "stroller"
      ],
      "operating_hours": {
        "monday": [
          {
            "start_time_offset_sec": 28800,
            "end_time_offset_sec": 64800
          }
        ],
        "tuesday": [
          {
            "start_time_offset_sec": 28800,
            "end_time_offset_sec": 64800
          }
        ],
        "wednesday": [
          {
            "start_time_offset_sec": 28800,
            "end_time_offset_sec": 64800
          }
        ],
        "thursday": [
          {
            "start_time_offset_sec": 28800,
            "end_time_offset_sec": 64800
          }
        ],
        "friday": [
          {
            "start_time_offset_sec": 28800,
            "end_time_offset_sec": 64800
          }
        ],
        "saturday": [
          {
            "start_time_offset_sec": 28800,
            "end_time_offset_sec": 64800
          }
        ],
        "sunday": [],
        "holidays": [
          {
            "start_time_offset_sec": 28800,
            "end_time_offset_sec": 43200
          },
          {
            "start_time_offset_sec": 46800,
            "end_time_offset_sec": 64800
          }
        ]
      },
      "special_operating_hours": [
        {
          "date": "2025-04-28",
          "time_slots": [
            {
              "start_time_offset_sec": 46800,
              "end_time_offset_sec": 64800
            }
          ]
        },
        {
          "date": "2025-04-29",
          "time_slots": [
            {
              "start_time_offset_sec": 28800,
              "end_time_offset_sec": 43200
            }
          ]
        }
      ],
      "announcements": [
        {
          "id": "an012345678",
          "title": "サービス開始のお知らせ",
          "content": "サンプル住民向けオンデマンドサービスが2025年10月1日(水)から開始されます。",
          "start_datetime": "2025-09-20T00:00:00+09:00",
          "end_datetime": "2025-12-31T23:59:59+09:00"
        }
      ],
      "created_at": "2025-09-19T00:00:00+09:00",
      "updated_at": "2025-09-19T12:00:00+09:00"
    }
  ],
  "total": 1,
  "offset": 0,
  "limit": 20
}

/** POST /passengers/{id}/agreements  */
export const POST_PASSENGER_BY_ID_AGREEMENTS_RESPONSE:PostPassengerAgreementsResponse= {
  "agreements": [
    {
      "terms_id": "pt012345678",
      "term_category": "platform",
      "agreed_at": "2025-06-11T10:43:12+09:00",
      "status": "already_agreed"
    },
    {
      "terms_id": "st012345678",
      "term_category": "service",
      "service_id": "sv012345678",
      "agreed_at": "2025-06-25T12:23:35+09:00",
      "status": "created"
    }
  ]
};

/** GET /passengers/{id}/agreements */
export const GET_PASSENGER_AGREEMENTS_RESPONSE:GetPassengerAgreementsResponse = {
  "agreements": [
    {
      "terms_id": "pt012345678",
      "term_category": "platform",
      "agreed_at": "2025-06-25T12:23:35+09:00"
    },
    {
      "terms_id": "st123456789",
      "term_category": "service",
      "service_id": "sv012345678",
      "agreed_at": "2025-06-26T11:22:33+09:00"
    },
    {
      "terms_id": "cp123456789",
      "term_category": "cancellation",
      "service_id": "sv012345678",
      "agreed_at": "2025-06-26T11:25:45+09:00"
    }
  ]
}

/** GET /passengers/{id}/reservations */
export const GET_PASSENGER_BY_ID_RESERVATIONS_RESPONSE:GetPassengerByIdReservationsResponse = {
  "reservations": [
    {
      "id": "rs012345678",
      "passenger_id": "ps012345678",
      "status": "confirmed",
      "service_id": "sv012345678",
      "pickup": {
        "type": "fixed_stop",
        "stop_id": "st012345678",
        "display_name": "港区役所前",
        "location": {
          "type": "Point",
          "coordinates": [
            139.751494,
            35.657774
          ]
        },
        "datetime": "2025-07-01T09:30:00+09:00"
      },
      "dropoff": {
        "type": "fixed_stop",
        "stop_id": "st012345679",
        "display_name": "新橋駅前",
        "location": {
          "type": "Point",
          "coordinates": [
            139.757875,
            35.666056
          ]
        },
        "datetime": "2025-07-01T09:55:00+09:00"
      },
      "passenger_count": [
        {
          "passenger_type_id": "pt012345678",
          "count": 2
        },
        {
          "passenger_type_id": "pt012345679",
          "count": 1
        }
      ],
      "accessibility_feature_count": [
        {
          "accessibility_feature_type": "wheelchair",
          "count": 1
        }
      ],
      "fare": {
        "per_passenger_type": [
          {
            "passenger_type_id": "pt012345678",
            "subtotal": 1240
          },
          {
            "passenger_type_id": "pt012345679",
            "subtotal": 250
          }
        ],
        "total": 1490
      },
      "route_distance": 2654,
      "vehicle": {
        "id": "vh012345678",
        "name": "サンプル車両1号",
        "number_plate": "品川999 ん 12-34",
        "capacity": {
          "seats": 4,
          "accessibility_features": [
            {
              "accessibility_feature_type": "wheelchair",
              "count": 1
            }
          ]
        },
        "pictures": [
          {
            "title": "サンプル車両1号の外観",
            "url": "https://example.com/images/vh012345678.jpg",
            "description": "サンプル車両1号の外観写真"
          }
        ]
      },
      "created_at": "2025-06-01T12:00:00+09:00",
      "updated_at": "2025-06-01T12:00:00+09:00"
    },
    {
      "id": "rs012345681",
      "passenger_id": "ps012345678",
      "status": "cancelled",
      "service_id": "sv012345679",
      "pickup": {
        "type": "custom_location",
        "display_name": "任意地点",
        "location": {
          "type": "Point",
          "coordinates": [
            139.691712,
            35.689512
          ]
        },
        "datetime": "2025-07-01T10:00:00+09:00"
      },
      "dropoff": {
        "type": "custom_location",
        "display_name": "任意地点",
        "location": {
          "type": "Point",
          "coordinates": [
            139.691706,
            35.689487
          ]
        },
        "datetime": "2025-07-01T10:30:00+09:00"
      },
      "passenger_count": [
        {
          "passenger_type_id": "pt012345678",
          "count": 1
        },
        {
          "passenger_type_id": "pt012345679",
          "count": 1
        }
      ],
      "accessibility_feature_count": [
        {
          "accessibility_feature_type": "wheelchair",
          "count": 1
        }
      ],
      "fare": {
        "per_passenger_type": []
      },
      "route_distance": 1800,
      "created_at": "2025-06-02T12:00:00+09:00",
      "updated_at": "2025-06-20T08:00:00+09:00"
    }
  ],
  "total": 2,
  "offset": 0,
  "limit": 20
}