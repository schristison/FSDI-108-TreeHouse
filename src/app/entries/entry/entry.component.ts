import { Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss']
  })

export class EntryComponent {
    title: string = 'My First Photo';
    photo: string = 'http://placehold.it/800x500?text=Angular Basics';
    description: string = 'My First Photo';
}