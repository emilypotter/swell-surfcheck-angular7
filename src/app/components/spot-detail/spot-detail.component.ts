import { Component, OnInit } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.component.html',
  styleUrls: ['./spot-detail.component.scss']
})
export class SpotDetailComponent implements OnInit {

  constructor(public spotService: SpotService, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

}
