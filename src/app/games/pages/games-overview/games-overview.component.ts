import { Component } from '@angular/core';
import { GAME_LIST } from '~shared/constants/global.constants';
import { GamesModule } from '../../games.module';
import { SharedModule } from '~shared/modules/shared.module';

@Component({
  selector: 'app-games-overview',
  templateUrl: './games-overview.component.html',
  styleUrls: ['./games-overview.component.scss'],
  standalone: true,
  imports: [GamesModule, SharedModule]
})
export class GamesOverviewComponent {

  gameList = GAME_LIST
}
