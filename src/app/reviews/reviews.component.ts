import { Component, Input } from '@angular/core';
import { Review } from './reviews.interface';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['../page.css','../nicepage.css'],
  standalone: true,
})
export class ReviewsComponent {

  @Input()
  public reviews: Review[] = [{
    name:'Teffy',
    comment: 'Muy bueno'
  }];

}
