# Node Bandcamp Parser

This is a node express proxy server which will accept a bandcamp url as input, and return the javascript json data of that Bandcamp release. Since there is no public Bandcamp API available at the moment. 

## Routes:
- /bandcamp
    - Accepts bandcamp url param `?url=https://ultramajic.bandcamp.com/album/the-ashtar-lavanda-mix`
    - Will return json map of bandcamp release page info
    - Example request: `curl localhost:8080/bandcamp?url=https://ultramajic.bandcamp.com/album/the-ashtar-lavanda-mix`

## How To Run Server
- Clone repo
- Run `npm i`
- Run `npm start` (default port is 8080)

## Example response:
`$ curl localhost:8080/bandcamp?url=https://ultramajic.bandcamp.com/album/the-ashtar-lavanda-mix`

```
{
    "publisher": {
        "name": "ULTRAMAJIC",
        "subjectOf": [
            {
                "name": "ARTISTS",
                "additionalProperty": [
                    {
                        "name": "nav_type",
                        "value": "a",
                        "@type": "PropertyValue"
                    }
                ],
                "url": "https://ultramajic.bandcamp.com/artists",
                "@type": "WebPage"
            },
            {
                "name": "MUSIC",
                "additionalProperty": [
                    {
                        "name": "nav_type",
                        "value": "m",
                        "@type": "PropertyValue"
                    }
                ],
                "url": "https://ultramajic.bandcamp.com/music",
                "@type": "WebPage"
            },
            {
                "name": "PRODUCTS",
                "additionalProperty": [
                    {
                        "name": "nav_type",
                        "value": "p",
                        "@type": "PropertyValue"
                    }
                ],
                "url": "https://ultramajic.bandcamp.com/merch",
                "@type": "WebPage"
            },
            {
                "name": "community",
                "additionalProperty": [
                    {
                        "name": "nav_type",
                        "value": "c",
                        "@type": "PropertyValue"
                    }
                ],
                "url": "https://ultramajic.bandcamp.com/community",
                "@type": "WebPage"
            }
        ],
        "image": "https://f4.bcbits.com/img/0019269391_10.jpg",
        "additionalProperty": [
            {
                "name": "band_id",
                "value": 781897194,
                "@type": "PropertyValue"
            },
            {
                "name": "currency",
                "value": "USD",
                "@type": "PropertyValue"
            },
            {
                "name": "has_any_downloads",
                "value": true,
                "@type": "PropertyValue"
            },
            {
                "name": "has_download_codes",
                "value": true,
                "@type": "PropertyValue"
            },
            {
                "name": "image_height",
                "value": 2000,
                "@type": "PropertyValue"
            },
            {
                "name": "image_id",
                "value": 19269391,
                "@type": "PropertyValue"
            },
            {
                "name": "image_width",
                "value": 2000,
                "@type": "PropertyValue"
            }
        ],
        "description": "Established in 2012 by Jimmy Edgar & Pilar Zeta",
        "@id": "https://ultramajic.bandcamp.com",
        "@type": "MusicGroup"
    },
    "sponsor": [
        {
            "name": "Iteration Corp",
            "image": "https://f4.bcbits.com/img/0002990523_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 2990523,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/iterationcorp",
            "@type": "Person"
        },
        {
            "name": "Christian Natvig",
            "image": "https://f4.bcbits.com/img/0024564224_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 24564224,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/saftronic",
            "@type": "Person"
        },
        {
            "name": "Katja Ruge / Can Love Be Synth",
            "image": "https://f4.bcbits.com/img/0017630494_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 17630494,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/katjaruge",
            "@type": "Person"
        },
        {
            "name": "Hegfer",
            "image": "https://f4.bcbits.com/img/0013824166_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 13824166,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/vinylhund18",
            "@type": "Person"
        },
        {
            "name": "poladroïd",
            "image": "https://f4.bcbits.com/img/0017981379_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 17981379,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/poladroid",
            "@type": "Person"
        },
        {
            "name": "fanericanexpress",
            "image": "https://f4.bcbits.com/img/0021044253_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 21044253,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/fanamericanexpress",
            "@type": "Person"
        },
        {
            "name": "Derek Navardauskas",
            "image": "https://f4.bcbits.com/img/0013009985_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 13009985,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/dereknavardauskas",
            "@type": "Person"
        },
        {
            "name": "OfficialMichaelGreen",
            "image": "https://f4.bcbits.com/img/0008671339_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 8671339,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/diypyramid",
            "@type": "Person"
        },
        {
            "name": "Richard",
            "image": "https://f4.bcbits.com/img/0008177454_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 8177454,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/shufla",
            "@type": "Person"
        },
        {
            "name": "R. Cunningham",
            "image": "https://f4.bcbits.com/img/0005026294_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 5026294,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/robincunningham",
            "@type": "Person"
        },
        {
            "name": "SHE Spells Doom",
            "image": "https://f4.bcbits.com/img/0012688313_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 12688313,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/shespellsdoom",
            "@type": "Person"
        },
        {
            "name": "Steven Blessing",
            "image": "https://f4.bcbits.com/img/0014278663_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 14278663,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/bestuser",
            "@type": "Person"
        },
        {
            "name": "Boke",
            "image": "https://f4.bcbits.com/img/0006915089_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 6915089,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/Boke",
            "@type": "Person"
        },
        {
            "name": "Scott Canfora",
            "image": "https://f4.bcbits.com/img/0015051949_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 15051949,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/scottcanfora",
            "@type": "Person"
        },
        {
            "name": "tommy",
            "image": "https://f4.bcbits.com/img/0005720960_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 5720960,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/nopartial",
            "@type": "Person"
        },
        {
            "name": "REON VANGÈR",
            "image": "https://f4.bcbits.com/img/0025655203_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 25655203,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/reonvangerfan",
            "@type": "Person"
        },
        {
            "name": "gardezone",
            "image": "https://f4.bcbits.com/img/0006857360_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 6857360,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/djcountach",
            "@type": "Person"
        },
        {
            "name": "off",
            "image": "https://f4.bcbits.com/img/0017977823_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 17977823,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/offten",
            "@type": "Person"
        },
        {
            "name": "BLASTAZOID",
            "image": "https://f4.bcbits.com/img/0019071162_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 19071162,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/Blastazoid",
            "@type": "Person"
        },
        {
            "name": "Hines",
            "image": "https://f4.bcbits.com/img/0028159934_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 28159934,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/trinanhines",
            "@type": "Person"
        },
        {
            "name": "openheartzz",
            "image": "https://f4.bcbits.com/img/0020310299_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 20310299,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/klinkzet",
            "@type": "Person"
        },
        {
            "name": "Deluxe Ultra",
            "image": "https://f4.bcbits.com/img/0027009705_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 27009705,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/xc-romulus",
            "@type": "Person"
        },
        {
            "name": "vyaliyy",
            "image": "https://f4.bcbits.com/img/0020354756_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 20354756,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/diapergenius",
            "@type": "Person"
        },
        {
            "name": "russainbirgin",
            "image": "https://f4.bcbits.com/img/0010789929_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 10789929,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/russianbirgin",
            "@type": "Person"
        },
        {
            "name": "nugget_lizard",
            "image": "https://f4.bcbits.com/img/0014662800_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 14662800,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/nugget_lizard",
            "@type": "Person"
        },
        {
            "name": "Kosmios",
            "image": "https://f4.bcbits.com/img/0018006270_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 18006270,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/kosmios_music",
            "@type": "Person"
        },
        {
            "name": "kevin313",
            "image": "https://f4.bcbits.com/img/0028588804_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 28588804,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/kevkush313",
            "@type": "Person"
        },
        {
            "name": "draftsman",
            "image": "https://f4.bcbits.com/img/0010911687_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 10911687,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/draftsman",
            "@type": "Person"
        },
        {
            "name": "sierrasam",
            "image": "https://f4.bcbits.com/img/0010749113_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 10749113,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/sierrasam",
            "@type": "Person"
        },
        {
            "name": "The Rosskonian",
            "image": "https://f4.bcbits.com/img/0003318350_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 3318350,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/therosskonian",
            "@type": "Person"
        },
        {
            "name": "sarahdiltz",
            "image": "https://f4.bcbits.com/img/0014101877_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 14101877,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/sarahdiltz",
            "@type": "Person"
        },
        {
            "name": "fffreddy_",
            "image": "https://f4.bcbits.com/img/0019878067_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 19878067,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/fffreddy_",
            "@type": "Person"
        },
        {
            "name": "enzo supreme",
            "image": "https://f4.bcbits.com/img/0006665085_50.jpg",
            "additionalProperty": [
                {
                    "name": "image_id",
                    "value": 6665085,
                    "@type": "PropertyValue"
                }
            ],
            "url": "https://bandcamp.com/enzosupreme",
            "@type": "Person"
        }
    ],
    "name": "THE ASHTAR LAVANDA MIX",
    "track": {
        "numberOfItems": 36,
        "itemListElement": [
            {
                "position": 1,
                "item": {
                    "duration": "P00H05M34S",
                    "name": "REPRESENTATIVES",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 697294774,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "UMMO SCIENCE",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/representatives",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 2,
                "item": {
                    "duration": "P00H03M26S",
                    "name": "GRATIOT SHAKE",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 2401935793,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "ASHTAR LAVANDA",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/gratiot-shake-2",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 3,
                "item": {
                    "duration": "P00H06M57S",
                    "name": "HAVE 2 HAVE IT",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 4292639669,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "DJ ORGONE",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/have-2-have-it",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 4,
                "item": {
                    "duration": "P00H02M42S",
                    "name": "AVIAN",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 1538066576,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "ASHTAR LAVANDA",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/avian",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 5,
                "item": {
                    "duration": "P00H02M27S",
                    "name": "ROUND ONE FIGHT",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 1571221803,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "NELZ THE OPERATOR",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/round-one-fight",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 6,
                "item": {
                    "duration": "P00H04M16S",
                    "name": "HOLY ANGEL",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 3652761855,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "ASHTAR LAVANDA",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/holy-angel",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 7,
                "item": {
                    "duration": "P00H06M11S",
                    "name": "DANEESHA",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 639600015,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "MICHAEL E",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/daneesha",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 8,
                "item": {
                    "duration": "P00H05M25S",
                    "name": "TESLOW",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 3766295637,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "DJ METATRONIC",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/teslow",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 9,
                "item": {
                    "duration": "P00H05M26S",
                    "name": "INTERPRET",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 619082039,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "HOUSE MONSTER",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/interpret",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 10,
                "item": {
                    "duration": "P00H06M16S",
                    "name": "SHAKA CAN",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 4293578640,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "DJ ORGONE & DETROIT EXPRESS",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/shaka-can",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 11,
                "item": {
                    "duration": "P00H03M35S",
                    "name": "OPULENCE",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 1432847358,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "ASHTAR LAVANDA",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/opulence-2",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 12,
                "item": {
                    "duration": "P00H03M47S",
                    "name": "ELECTRIC SOUND",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 3904059612,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "TRANSDIA",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/electric-sound",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 13,
                "item": {
                    "duration": "P00H03M32S",
                    "name": "MOTH",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 3382389344,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "ASHTAR LAVANDA",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/moth-2",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 14,
                "item": {
                    "duration": "P00H03M50S",
                    "name": "SS SASS",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 1867092824,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "SOFTCORE",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/ss-sass",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 15,
                "item": {
                    "duration": "P00H05M10S",
                    "name": "PUMPKINS",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 2378443963,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "D1378",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/pumpkins",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 16,
                "item": {
                    "duration": "P00H04M02S",
                    "name": "MMM CHECK",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 682380174,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "UMMO SCIENCE",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/mmm-check",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 17,
                "item": {
                    "duration": "P00H03M37S",
                    "name": "UNSOLVED MYSTERIES",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 3046806993,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "ASHTAR LAVANDA",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/unsolved-mysteries-2",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 18,
                "item": {
                    "duration": "P00H03M52S",
                    "name": "DENIAL [PERCAPELLA]",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 832562336,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "STAR PEOPLE MOVER",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/denial-percapella",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 19,
                "item": {
                    "duration": "P00H03M29S",
                    "name": "NIGHT STALKER [ALTERNATIVE]",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 509788602,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "CREEPY AUTOGRAPH",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/night-stalker-alternative",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 20,
                "item": {
                    "duration": "P00H05M39S",
                    "name": "SOFTCORE",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 3213862993,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "SOFTCORE",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/softcore",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 21,
                "item": {
                    "duration": "P00H03M26S",
                    "name": "EXPOSE",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 12512963,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "LARRY GREEN",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/expose",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 22,
                "item": {
                    "duration": "P00H04M00S",
                    "name": "EMPATH",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 325417629,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "MICHAEL E",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/empath",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 23,
                "item": {
                    "duration": "P00H03M16S",
                    "name": "ROZWELL",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 933753312,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "ASHTAR LAVANDA",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/rozwell-2",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 24,
                "item": {
                    "duration": "P00H04M24S",
                    "name": "BUSINESS SOLICITING",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 3438962131,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "LARRY GREEN",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/business-soliciting",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 25,
                "item": {
                    "duration": "P00H03M55S",
                    "name": "RIGHT",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 3103709738,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "TUESDAY",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/right",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 26,
                "item": {
                    "duration": "P00H04M24S",
                    "name": "LIGHT SMART",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 4181770976,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "SOFTCORE",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/light-smart",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 27,
                "item": {
                    "duration": "P00H05M12S",
                    "name": "GHOULS",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 1218355869,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "MOTION X2000",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/ghouls",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 28,
                "item": {
                    "duration": "P00H05M26S",
                    "name": "PLURICOSMOS",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 1174470561,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "UMMO SCIENCE",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/pluricosmos",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 29,
                "item": {
                    "duration": "P00H04M30S",
                    "name": "MARFA LIGHTS",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 299925719,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "ASHTAR LAVANDA",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/marfa-lights-2",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 30,
                "item": {
                    "duration": "P00H04M18S",
                    "name": "THE GRAY MANS THEME",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 481081852,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "CREEPY AUTOGRAPH & NELZ THE OPERATOR",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/the-gray-mans-theme-2",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 31,
                "item": {
                    "duration": "P00H02M17S",
                    "name": "BLACK LITE",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 1885418845,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "UNKNOWN",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/black-lite",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 32,
                "item": {
                    "duration": "P00H04M15S",
                    "name": "MAKEUP! & FASHION!",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 355598022,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "CREEPY AUTOGRAPH",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/makeup-fashion",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 33,
                "item": {
                    "duration": "P00H03M25S",
                    "name": "DANTES INFERNO",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 4109293206,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "DRIVE-IN MOVIE",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/dantes-inferno",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 34,
                "item": {
                    "duration": "P00H04M29S",
                    "name": "BREAKDOWN",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 2494057230,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "IBOZOO",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/breakdown-2",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 35,
                "item": {
                    "duration": "P00H03M36S",
                    "name": "ACTIVITY",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 3294381002,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "ASHTAR LAVANDA",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/activity",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            },
            {
                "position": 36,
                "item": {
                    "duration": "P00H06M41S",
                    "name": "POWER",
                    "copyrightNotice": "All Rights Reserved",
                    "additionalProperty": [
                        {
                            "name": "track_id",
                            "value": 2265606638,
                            "@type": "PropertyValue"
                        },
                        {
                            "name": "license_name",
                            "value": "all_rights_reserved",
                            "@type": "PropertyValue"
                        }
                    ],
                    "byArtist": {
                        "name": "DUAL LIONS",
                        "@type": "MusicGroup"
                    },
                    "@id": "https://ultramajic.bandcamp.com/track/power",
                    "@type": "MusicRecording"
                },
                "@type": "ListItem"
            }
        ],
        "@type": "ItemList"
    },
    "datePublished": "30 Apr 2020 00:00:00 GMT",
    "copyrightNotice": "All Rights Reserved",
    "albumRelease": [
        {
            "musicReleaseFormat": "DigitalFormat",
            "name": "THE ASHTAR LAVANDA MIX",
            "offers": {
                "priceCurrency": "USD",
                "priceSpecification": {
                    "minPrice": 30.0
                },
                "price": 30.0,
                "availability": "OnlineOnly",
                "additionalProperty": [
                    {
                        "name": "max_price",
                        "value": 1000.0,
                        "@type": "PropertyValue"
                    }
                ],
                "url": "https://ultramajic.bandcamp.com/album/the-ashtar-lavanda-mix#a2650484708-buy",
                "@type": "Offer"
            },
            "image": [
                "https://f4.bcbits.com/img/a1423970993_10.jpg"
            ],
            "additionalProperty": [
                {
                    "name": "item_id",
                    "value": 2650484708,
                    "@type": "PropertyValue"
                },
                {
                    "name": "item_type",
                    "value": "a",
                    "@type": "PropertyValue"
                },
                {
                    "name": "selling_band_id",
                    "value": 781897194,
                    "@type": "PropertyValue"
                },
                {
                    "name": "type_name",
                    "value": "Digital",
                    "@type": "PropertyValue"
                },
                {
                    "name": "art_id",
                    "value": 1423970993,
                    "@type": "PropertyValue"
                }
            ],
            "description": "Includes high-quality download in MP3, FLAC and more. Paying supporters also get unlimited streaming via the free Bandcamp app.",
            "@id": "https://ultramajic.bandcamp.com/album/the-ashtar-lavanda-mix",
            "@type": [
                "MusicRelease",
                "Product"
            ]
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/representatives",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/gratiot-shake-2",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/have-2-have-it",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/avian",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/round-one-fight",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/holy-angel",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/daneesha",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/teslow",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/interpret",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/shaka-can",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/opulence-2",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/electric-sound",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/moth-2",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/ss-sass",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/pumpkins",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/mmm-check",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/unsolved-mysteries-2",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/denial-percapella",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/night-stalker-alternative",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/softcore",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/expose",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/empath",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/rozwell-2",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/business-soliciting",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/right",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/light-smart",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/ghouls",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/pluricosmos",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/marfa-lights-2",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/the-gray-mans-theme-2",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/black-lite",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/makeup-fashion",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/dantes-inferno",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/breakdown-2",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/activity",
            "@type": "MusicRelease"
        },
        {
            "@id": "https://ultramajic.bandcamp.com/track/power",
            "@type": "MusicRelease"
        }
    ],
    "image": "https://f4.bcbits.com/img/a1423970993_10.jpg",
    "dateModified": "19 May 2020 21:40:25 GMT",
    "additionalProperty": [
        {
            "name": "art_id",
            "value": 1423970993,
            "@type": "PropertyValue"
        },
        {
            "name": "featured_track_num",
            "value": 11,
            "@type": "PropertyValue"
        },
        {
            "name": "license_name",
            "value": "all_rights_reserved",
            "@type": "PropertyValue"
        }
    ],
    "numTracks": 36,
    "byArtist": {
        "name": "ULTRAMAJIC",
        "@id": "https://ultramajic.bandcamp.com",
        "@type": "MusicGroup"
    },
    "@id": "https://ultramajic.bandcamp.com/album/the-ashtar-lavanda-mix",
    "keywords": [
        "Detroit Techno",
        "Electronic",
        "detroit electro",
        "electro",
        "electronica",
        "techno",
        "United States"
    ],
    "albumReleaseType": "AlbumRelease",
    "comment": [
        {
            "text": [
                "This collection of tracks is nothing short of brilliant. Just the right amount of jerky, staccato, funk-laced Electro with some proper Detroit Techno mixed in for good measure. 22 of 30 tracks are pure gold which is an unusually good conversion rate, particularly given the size of this compilation. Great work. More of this please. ",
                "Favorite track: UNSOLVED MYSTERIES"
            ],
            "@type": "Comment",
            "author": {
                "name": "Johan Sebastian Bot",
                "image": "https://f4.bcbits.com/img/0003508992_50.jpg",
                "additionalProperty": [
                    {
                        "name": "image_id",
                        "value": 3508992,
                        "@type": "PropertyValue"
                    }
                ],
                "url": "https://bandcamp.com/dvsnme",
                "@type": "Person"
            }
        },
        {
            "text": [
                "Nostalgic future-primitivism in the best possible way.",
                "Favorite track: MARFA LIGHTS"
            ],
            "@type": "Comment",
            "author": {
                "name": "Deepchild",
                "image": "https://f4.bcbits.com/img/0017133431_50.jpg",
                "additionalProperty": [
                    {
                        "name": "image_id",
                        "value": 17133431,
                        "@type": "PropertyValue"
                    }
                ],
                "url": "https://bandcamp.com/deepchild",
                "@type": "Person"
            }
        }
    ],
    "@context": "https://schema.org",
    "@type": "MusicAlbum"
}
```