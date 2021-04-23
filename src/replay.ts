import { Drash } from "https://deno.land/x/drash@v1.4.4/mod.ts";

class Coord {
    x: number
    y: number
    constructor(coords:string) {
       [this.x,this.y] = coords.split(',').map(i=>parseInt(i)); 
    }
}

type Turn = {
    hit?: boolean;
    origin: number[];
}

type TurnRes = {
    hit?: boolean;
    origin: string;
}

type Player = {
    userId: string;
    username: string;
    gameId: string;
    human: boolean;
    score: number;
    bonus: number;
    matchId: string;
}

type Match = {
    gameId: string;
    matchId: string;
    playerA: Player;
    playerB: Player;
    turns: Turn[];
    winner: string;
    startTs: number;
    endTs: number;
}

const data = {
    "turns": [
        {
            "destroyed": null,
            "hit": true,
            "origin": "1,2",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "2,2",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "2,1",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": "Destroyer",
            "hit": true,
            "origin": "2,2",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "2,3",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "4,1",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": "Battleship",
            "hit": true,
            "origin": "2,0",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "4,2",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "4,3",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "4,4",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "1,2",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": "Carrier",
            "hit": true,
            "origin": "4,0",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "1,1",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "0,3",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "1,0",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "0,2",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": false,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "1,3",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "0,1",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": "Carrier",
            "hit": true,
            "origin": "1,4",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "3,0",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": "Battleship",
            "hit": true,
            "origin": "0,0",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": "Destroyer",
            "hit": true,
            "origin": "4,0",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "2,4",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "4,4",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": false,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "1,4",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": null,
            "hit": true,
            "origin": "4,2",
            "attacker": "M86rLakfzWNRUXKatRVQq",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        1,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        2,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                2,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        4,
                        2
                    ],
                    "orientation": "vertical",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": false,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        3,
                        0
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                3,
                                0
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        },
        {
            "destroyed": "Submarine",
            "hit": true,
            "origin": "3,4",
            "attacker": "b2pKNXzDiu9-8tREtv_XB",
            "updatedBoard": {
                "Carrier": {
                    "origin": [
                        4,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Carrier",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                4,
                                0
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                1
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                2
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                3
                            ],
                            "type": "Carrier"
                        },
                        {
                            "hit": true,
                            "origin": [
                                4,
                                4
                            ],
                            "type": "Carrier"
                        }
                    ]
                },
                "Battleship": {
                    "origin": [
                        0,
                        0
                    ],
                    "orientation": "vertical",
                    "type": "Battleship",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                0,
                                0
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                1
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                2
                            ],
                            "type": "Battleship"
                        },
                        {
                            "hit": true,
                            "origin": [
                                0,
                                3
                            ],
                            "type": "Battleship"
                        }
                    ]
                },
                "Submarine": {
                    "origin": [
                        1,
                        4
                    ],
                    "orientation": "horizontal",
                    "type": "Submarine",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                4
                            ],
                            "type": "Submarine"
                        },
                        {
                            "hit": true,
                            "origin": [
                                3,
                                4
                            ],
                            "type": "Submarine"
                        }
                    ]
                },
                "Destroyer": {
                    "origin": [
                        1,
                        2
                    ],
                    "orientation": "horizontal",
                    "type": "Destroyer",
                    "cells": [
                        {
                            "hit": true,
                            "origin": [
                                1,
                                2
                            ],
                            "type": "Destroyer"
                        },
                        {
                            "hit": true,
                            "origin": [
                                2,
                                2
                            ],
                            "type": "Destroyer"
                        }
                    ]
                }
            }
        }
    ]
};

// const replayUrl = 'ks-matches-kafka-streams.apps.summit-aws-ue1.zch4.p1.openshiftapps.com';
// const rankingUrl = 'scoring-service-battleships-scoring.apps.summit-gcp.eior.p2.openshiftapps.com';

const replayUrl = Deno.env.get("REPLAY_SERVER");
const rankingUrl = Deno.env.get("RANK_SERVER");

export class ReplayResource extends Drash.Http.Resource {
    static paths = ["/replay/:gameId"];
    public async GET() {
        this.response.headers.set("Content-Type","application/json");
        const gameId = this.request.getPathParam("gameId");
        let rankData: Player[] = [];
        let replayData: Array<Turn[]> = [];
        if (!gameId) { throw new Drash.Exceptions.HttpException(400, "replay requires a gameID")}
        else {
            rankData = await fetch(`http://${rankingUrl}/scoring/${gameId}/ranking?max=10`).then(res=>res.json());
            rankData.forEach(async (player:Player) => {

                let matchUrl = `https://${replayUrl}/games/${player.gameId}/matches/${player.matchId}`;
                let data = await fetch(matchUrl).then(res=>res.json());
                let matchData:Turn[] = data.turns.reduce((a:Turn[],c:TurnRes)=> {
                    let origin = new Coord(c.origin);
                    a.push({
                        hit: c.hit,
                        origin: [origin.x,origin.y]
                    });
                    return a;
                },[] as Turn[]);
                replayData.push(matchData);
            });

            this.response.body = replayData

            return this.response;
        }
    }
}

