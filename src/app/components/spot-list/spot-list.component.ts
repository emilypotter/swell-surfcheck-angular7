import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spot-list',
  templateUrl: './spot-list.component.html',
  styleUrls: ['./spot-list.component.scss']
})
export class SpotListComponent implements OnInit {

  public fullArray = ["f", "f", "d", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f"];

  public array = [];

  private sum = 10;

  public throttle = 300;

  public scrollDistance = 1;

  constructor() { }

  ngOnInit() {
    this.addItems(0, this.sum);
  }

  public onScroll() {
    console.log('scrolled down!!');

    // add another 5 items
    if (this.sum < this.fullArray.length) {
      const start = this.sum;
      this.sum += 5;
      this.addItems(start, this.sum);
    }
  }

  public addItems(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.array.push(this.fullArray[i]);
    }
  }

  public selectSpot() {
    // select spot
  }

}
