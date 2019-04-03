import { Component } from '@angular/core';
import Player from './models/player.component';
import { PlayerType } from './models/enum/player-type.enum';
import { WinningMoves } from './models/enum/winning-moves.enum';
import { PossibleMoves } from './models/enum/possible-moves.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  player1: Player;
  player2: Player;

  player1Score: number;
  player2Score: number;

  player1Name: string;
  player2Name: string;

  possibleMoves = PossibleMoves;

  constructor() {
    this.player1 = new Player('human', PlayerType.Human);
    this.player2 = new Player('computer', PlayerType.Machine);

    this.player1Score = 0;
    this.player2Score = 0;

    this.player1Name = this.player1.name;
    this.player2Name = this.player2.name;
  }

  selectMove(param: string) {
    this.player1.pickMove(param);
    this.player2.pickMove('');

    this.checkWinner(this.player1, this.player2);
    this.setScoreBoard(this.player1, this.player2);
  }

  checkWinner(p1: Player, p2: Player) {
    const currentMoves: string = p1.selectedMove + p2.selectedMove;
    if (currentMoves in WinningMoves) {
      p1.score++;
    } else {
      p2.score++;
    }
  }

  setScoreBoard(p1: Player, p2: Player) {
    this.player1Score = p1.score;
    this.player2Score = p2.score;
  }
}
