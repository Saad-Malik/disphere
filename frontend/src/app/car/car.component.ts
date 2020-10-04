import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import CarsQuery from '../apollo/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  cars: any;
  loading:boolean;

  private querySubscribtion: Subscription;

  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
    this.querySubscribtion = this.apollo.watchQuery<any>(
      {query:CarsQuery}
    ).valueChanges.subscribe(({data,loading})=>{
      this.cars = data.getCars;
      this.loading = data.loading;
    });
  }

  ngOnDestroy():void{
    this.querySubscribtion.unsubscribe();
  }
}
