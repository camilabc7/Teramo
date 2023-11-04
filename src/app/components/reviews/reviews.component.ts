import { Component, Input } from '@angular/core';
import { Review } from './reviews.interface';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  standalone: true,
})
export class ReviewsComponent {

  @Input()
  public reviews: Review[] = [{
    name:'Teffy',
    comment: 'Muy bueno'
  }];

}
