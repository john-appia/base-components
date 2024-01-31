import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '~shared/modules/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class HomeComponent {

}
