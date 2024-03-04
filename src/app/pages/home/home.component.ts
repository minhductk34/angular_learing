import { Component } from '@angular/core';
import { User } from '../../common/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  myInformation: User = {
    name: 'Minh Duc',
    age: 23,
    adress: 'HD',
    intro: 'Learning Angular',
  };
}
