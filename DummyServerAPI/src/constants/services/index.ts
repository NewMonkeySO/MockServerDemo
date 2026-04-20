import type { GetServicesByIdResponse, GetServicesResponse } from "../../schemas/services/index.js"

/** GET /services */
export const GET_SERVICES_RESPONSE:GetServicesResponse = {
  "services": [
    {
      "id": "sv012345678",
      "name": "サンプルオンデマンドサービス",
      "description": "◯×地区内で利用可能なオンデマンド交通サービスです。",
      "brand_image_url": "https://example.com/logo_image.png",
      "access_scope": "public",
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
            },
            {
              "code": "13109",
              "name": "品川区"
            }
          ]
        },
        {
          "prefecture_code": "14",
          "prefecture_name": "神奈川県",
          "municipalities": [
            {
              "code": "14100",
              "name": "横浜市"
            }
          ]
        }
      ],
      "service_terms": [
        {
          "id": "st012345678",
          "category": "service",
          "name": "サンプルオンデマンドサービスの利用規約",
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
          "content": "サンプルオンデマンドサービスが2025年7月1日(火)から開始されます。",
          "start_datetime": "2025-06-19T00:00:00+09:00",
          "end_datetime": "2025-12-31T23:59:59+09:00"
        }
      ],
      "created_at": "2025-06-19T00:00:00+09:00",
      "updated_at": "2025-06-19T12:00:00+09:00"
    }
  ],
  "total": 1,
  "offset": 0,
  "limit": 20
}

export const GET_SERVICES_BY_ID_RESPONSE: GetServicesByIdResponse = {
  "id": "sv012345678",
  "name": "サンプルオンデマンドサービス",
  "description": "◯×地区内で利用可能なオンデマンド交通サービスです。",
  "brand_image_url": "https://example.com/logo_image.png",
  "access_scope": "public",
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
        },
        {
          "code": "13109",
          "name": "品川区"
        }
      ]
    },
    {
      "prefecture_code": "14",
      "prefecture_name": "神奈川県",
      "municipalities": [
        {
          "code": "14100",
          "name": "横浜市"
        }
      ]
    }
  ],
  "service_terms": [
    {
      "id": "st012345678",
      "category": "service",
      "name": "サービスＡＢＣの利用規約",
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
      "content": "サンプルオンデマンドサービスが2025年7月1日(火)から開始されます。",
      "start_datetime": "2025-06-19T00:00:00+09:00",
      "end_datetime": "2025-12-31T23:59:59+09:00"
    }
  ],
  "operation_settings": {
    "time_specifiable": {
      "departure": true,
      "arrival": true
    },
    "max_advance_reservable_days": 10,
    "min_advance_reservable_minutes": 30,
    "cancel_deadline_minutes": 60,
    "search_passenger_limit": 4,
    "search_accessibility_limit": 1,
    "reservable_location_types": [
      "fixed_stop",
      "home"
    ]
  },
  "reservable_areas": [
    {
      "id": "area012345678",
      "name": "◯×地区",
      "description": "◯×地区内の予約可能エリアです。",
      "range": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    139.72351465041703,
                    35.65860559527819
                  ],
                  [
                    139.7182637631617,
                    35.63465766676801
                  ],
                  [
                    139.75257718716819,
                    35.633553804597994
                  ],
                  [
                    139.76375877681767,
                    35.65786994380646
                  ],
                  [
                    139.72351465041703,
                    35.65860559527819
                  ]
                ]
              ]
            }
          }
        ]
      }
    }
  ],
  "area_transitions": {
    "areas": [
      {
        "id": "at012345679",
        "name": "◯×地区エリアA",
        "description": "◯×地区内のエリア間移動を管理するエリアAです。",
        "range": {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      139.72351465041703,
                      35.65860559527819
                    ],
                    [
                      139.72061703001884,
                      35.64539997517491
                    ],
                    [
                      139.7574661592795,
                      35.64429634273526
                    ],
                    [
                      139.76375877681767,
                      35.65786994380646
                    ],
                    [
                      139.72351465041703,
                      35.65860559527819
                    ]
                  ]
                ]
              }
            }
          ]
        }
      },
      {
        "id": "at012345680",
        "name": "◯×地区エリアB",
        "description": "◯×地区内のエリア間移動を管理するエリアBです。",
        "range": {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      139.72061703001884,
                      35.64539997517491
                    ],
                    [
                      139.7182637631617,
                      35.63465766676801
                    ],
                    [
                      139.75257718716819,
                      35.633553804597994
                    ],
                    [
                      139.7574661592795,
                      35.64429634273526
                    ],
                    [
                      139.72061703001884,
                      35.64539997517491
                    ]
                  ]
                ]
              }
            }
          ]
        }
      }
    ],
    "rules": [
      {
        "from_area_id": "at012345679",
        "to_area_id": "at012345679",
        "is_allowed": true
      },
      {
        "from_area_id": "at012345679",
        "to_area_id": "at012345680",
        "is_allowed": true
      },
      {
        "from_area_id": "at012345679",
        "to_area_id": "undefined_area",
        "is_allowed": false
      },
      {
        "from_area_id": "at012345680",
        "to_area_id": "at012345679",
        "is_allowed": false
      },
      {
        "from_area_id": "at012345680",
        "to_area_id": "at012345680",
        "is_allowed": true
      },
      {
        "from_area_id": "at012345680",
        "to_area_id": "undefined_area",
        "is_allowed": false
      },
      {
        "from_area_id": "undefined_area",
        "to_area_id": "at012345679",
        "is_allowed": false
      },
      {
        "from_area_id": "undefined_area",
        "to_area_id": "at012345680",
        "is_allowed": true
      },
      {
        "from_area_id": "undefined_area",
        "to_area_id": "undefined_area",
        "is_allowed": false
      }
    ]
  },
  "created_at": "2025-06-19T00:00:00+09:00",
  "updated_at": "2025-06-19T12:00:00+09:00"
}