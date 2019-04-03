import { PossibleMoves } from './enum/possible-moves.enum';
import { PlayerType } from './enum/player-type.enum';

export default class Player {
    name: string;
    playerType: PlayerType;
    score: number;
    selectedMove: string;

    constructor(name: string, playerType: PlayerType) {
        this.name = name;
        this.playerType = playerType;
        this.score = 0;
        this.selectedMove = '';
    }

    public pickMove(selectedMove: string) {
        if (this.playerType === PlayerType.Human) {
            this.selectedMove = selectedMove;
        } else {
            this.selectedMove = this.generateMove();
        }
    }

    public generateMove() {
        const randomNumber = Math.floor(Math.random() * (3 - 0)) + 0;
        return PossibleMoves[randomNumber];
    }
}