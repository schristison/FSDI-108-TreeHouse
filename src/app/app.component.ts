import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'photoblog';
  emoji = ['💃🏽', '👯‍♀️', '😂', '❤️'];
  activeEmoji: string;
  changeEmoji() {
    this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
  }
  
}
