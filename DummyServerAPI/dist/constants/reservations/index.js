/** POST /reservations/candidates */
export const POST_RESERVATIONS_CANDIDATES_RESPONSE = {
    "candidates": [
        {
            "reservation_request": {
                "candidate_id": "cd012345678",
                "service_id": "sv012345678",
                "pickup": {
                    "type": "fixed_stop",
                    "stop_id": "st012345678",
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
                "vehicle_id": "vh012345678"
            },
            "display": {
                "pickup": {
                    "display_name": "港区役所前"
                },
                "dropoff": {
                    "display_name": "新橋駅前"
                },
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
                            "url": "https://example.com/images/vehicle-001.jpg",
                            "description": "サンプル車両1号の外観写真"
                        }
                    ]
                }
            }
        },
        {
            "reservation_request": {
                "candidate_id": "cd012345679",
                "service_id": "sv012345679",
                "pickup": {
                    "type": "fixed_stop",
                    "stop_id": "st012345678",
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
                "vehicle_id": "vh012345679"
            },
            "display": {
                "pickup": {
                    "display_name": "任意地点"
                },
                "dropoff": {
                    "display_name": "自宅"
                },
                "fare": {
                    "per_passenger_type": []
                },
                "route_distance": 2654,
                "vehicle": {
                    "id": "vh012345679",
                    "name": "サンプル車両3号",
                    "number_plate": "品川999 ん 56-78",
                    "capacity": {
                        "seats": 5,
                        "accessibility_features": [
                            {
                                "accessibility_feature_type": "wheelchair",
                                "count": 1
                            }
                        ]
                    },
                    "pictures": [
                        {
                            "title": "サンプル車両3号の外観",
                            "url": "https://example.com/images/vh012345679.jpg",
                            "description": "サンプル車両3号の外観写真"
                        }
                    ]
                }
            }
        }
    ]
};
/** POST /reservations */
export const POST_RESERVATIONS_RESPONSE = {
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
                "subtotal": 620
            },
            {
                "passenger_type_id": "pt012345679",
                "subtotal": 250
            }
        ],
        "total": 870
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
    "created_at": "2025-06-19T07:00:00+09:00",
    "updated_at": "2025-06-19T07:00:00+09:00"
};
/** PUT /reservations/:id */
export const PUT_RESERVATIONS_ID_RESPONSE = {
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
                "subtotal": 620
            },
            {
                "passenger_type_id": "pt012345679",
                "subtotal": 250
            }
        ],
        "total": 870
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
    "created_at": "2025-06-19T07:15:00+09:00",
    "updated_at": "2025-06-20T11:23:00+09:00"
};
/** GET /reservations/:id/payment */
export const GET_RESERVATIONS_ID_PAYMENT_RESPONSE = {
    "id": "rp012345678",
    "amount": 820,
    "payment_status": "received",
    "created_at": "2025-07-11T12:00:00+09:00",
    "updated_at": "2025-07-11T12:00:00+09:00"
};
/** PUT /reservations/:id/payment */
export const PUT_RESERVATIONS_ID_PAYMENT_RESPONSE = {
    "id": "rp012345678",
    "amount": 820,
    "payment_status": "cancelled",
    "created_at": "2025-07-11T12:00:00+09:00",
    "updated_at": "2025-07-11T12:00:00+09:00"
};
