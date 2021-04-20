export class Coord {
    x: number
    y: number
    constructor(coords:string) {
       [this.x,this.y] = coords.split(',').map(i=>parseInt(i)); 
    }
}



export class Cell {

}

export class Ship {
    
}

export class Player {
    username: string;
    uuid: string;
    human: boolean;
}

export class Turn {
    destroyed: boolean;
    hit: boolean;
    origin: Coord;
    attacker: string;
}

export class Match {
    gameId: string;
    matchId: string;
    playerA: Player;
    playerB: Player;
    turns: Turn[];
    winner: string;
    startTs: number;
    endTs: number;
}