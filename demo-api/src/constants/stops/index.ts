import type { GetStopsResponse } from "../../schemas/stops/index.js";

export const GET_STOPS_RESPONSE: GetStopsResponse = {
  "stops": [
    {
      "id": "st012345678",
      "service_ids": [
        "sv012345678"
      ],
      "location": {
        "type": "Point",
        "coordinates": [
          139.7649363,
          35.6864501
        ]
      },
      "name": "大手町パークビルディング",
      "description": "東京メトロ「大手町駅」C6a出口直結、丸の内側のビル前に位置する乗降場所です。",
      "search_words": [
        "おおてまちぱーくびるでぃんぐ",
        "大手町",
        "Otemachi"
      ],
      "start_datetime": "2024-04-01T00:00:00+09:00",
      "is_boarding_available": true,
      "is_alighting_available": true,
      "suspensions": [],
      "pictures": [
        {
          "title": "ビル前乗降場所",
          "url": "https://example.com/images/otemachi.jpg",
          "description": "大手町パークビルディング前の乗降ポイントの写真"
        }
      ],
      "created_at": "2025-06-19T00:00:00+09:00",
      "updated_at": "2025-06-19T12:00:00+09:00"
    },
    {
      "id": "st012345679",
      "service_ids": [
        "sv012345678"
      ],
      "location": {
        "type": "Point",
        "coordinates": [
          139.7600031,
          35.6639339
        ]
      },
      "name": "新橋駅前",
      "description": "JR新橋駅の南改札を出てすぐ、SL広場横の乗降ポイントです。",
      "search_words": [
        "しんばし",
        "SL広場",
        "SLひろば",
        "Shimbashi"
      ],
      "start_datetime": "2024-04-01T00:00:00+09:00",
      "is_boarding_available": true,
      "is_alighting_available": true,
      "suspensions": [
        {
          "start_datetime": "2025-06-19T00:00:00+09:00",
          "end_datetime": "2025-06-19T11:59:59+09:00",
          "description": "周辺イベント開催のため一時利用停止となります。"
        }
      ],
      "pictures": [
        {
          "title": "SL広場前乗降場所",
          "url": "https://example.com/images/shimbashi.jpg",
          "description": "新橋駅SL広場横の乗降ポイントの写真"
        }
      ],
      "created_at": "2025-06-19T00:00:00+09:00",
      "updated_at": "2025-06-19T12:00:00+09:00"
    }
  ],
  "total": 2,
  "offset": 0,
  "limit": 20
}