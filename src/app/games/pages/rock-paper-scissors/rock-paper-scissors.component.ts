import { Component } from '@angular/core';
import { GamesModule } from '../../games.module';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.scss'],
  standalone: true,
  imports: [GamesModule]
})
export class RockPaperScissorsComponent {

}
