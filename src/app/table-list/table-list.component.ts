import { Component, OnInit } from '@angular/core';
import { Restaurant } from '@app/_models/restaurant';
import { RestaurantService } from '@app/_services/restaurant.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  restaurants: Restaurant[];
  
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getRestaurant().subscribe(restaurants => {
      console.log(restaurants);
      this.restaurants = restaurants;
      console.log(restaurants);
    });
  }

}
