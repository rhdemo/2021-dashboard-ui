export class Coord {
    x: number
    y: number
    
}

export class Cell {

}

export class Ship {
    origin: Array<
}

export class Player {
    username: string;
    uuid: string;
    human: boolean;
    board: Map<string, Ship>
}

export class Turn {

}

export class Game {
    gameId: string;
    matchId: string;
    playerA: Player;
    playerB: Player;
    turns: Turn[];
    winner: string;
    startTs: number;
    endTs: number;
}