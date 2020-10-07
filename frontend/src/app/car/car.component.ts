import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import CarsQuery from '../apollo/car';
import SearchCarsQuery from '../apollo/searchCar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  
  searchText: string = '';
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


  executeSearch(){
    console.log("typing");
    if (!this.searchText) {
      return;
    }
    const querySubscription = this.apollo.watchQuery<any>({
      query: SearchCarsQuery,
      variables: {
        color: this.searchText
      },
    }).valueChanges.subscribe(({data,loading}) => {
      this.cars = data.searchCar;
      this.loading = data.loading;
      console.log(this.cars)
    });
  }




  ngOnDestroy():void{
    this.querySubscribtion.unsubscribe();
  }
}
