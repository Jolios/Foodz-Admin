import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/_services/user.service';
import { ReservationService } from '@app/_services/reservation.service';
import { RestaurantService } from '@app/_services/restaurant.service';
import { ReviewService } from '@app/_services/review.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as Chartist from 'chartist';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usersCount:number;
  restaurantsCount:number;
  reservationsCount:number;
  reviewsCount:number;
  usersData:number[] = [0,0,0,0,0,0,0];
  reservationsData:number[] = [0,0,0,0,0,0,0];

  constructor(private userService:UserService,private restaurantService:RestaurantService,private reservationService:ReservationService,
    private reviewService:ReviewService) { }
  

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','July'];
  lineChartData: ChartDataSets[];
  lineChartOptions = {
    responsive: true
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'red'
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType : ChartType = 'line';

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','July'];
  public barChartType: ChartType = 'bar';
  barChartColors: Color[] = [
    {
      borderColor : "rgb(255,69,0)",
      backgroundColor : "rgb(255,69,0)"
    }
  ]
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[];
  
  ngOnInit() {
      this.userService.getUsers().subscribe(users=>{
        this.usersCount = users.length;
        var currentYear:number = new Date().getFullYear();
        var self = this;
        users.forEach(function(user){
          if(user.created.toDate().getFullYear() == currentYear){
            switch(user.created.toDate().getMonth()){
              case 1:{
                self.usersData[0]+=1;
                break;
              }
              case 2:{
                self.usersData[1]+=1;
                break;
              }
              case 3:{
                self.usersData[2]+=1;
                break;
              }
              case 4:{
                self.usersData[3]+=1;
                break;
              }
              case 5:{
                self.usersData[4]+=1;
                break;
              }
              case 6:{
                self.usersData[5]+=1;
                break;
              }
              case 7:{
                self.usersData[6]+=1;
                break;
              }
              default: {
                break;
              }
            }
          }
        });
      });
      this.lineChartData = [
        { data: this.usersData, label: 'Number of new clients',fill:false },
      ];
      this.reservationService.getReservations().subscribe(reservations=>{
        this.reservationsCount = reservations.length;
        var currentYear:number = new Date().getFullYear();
        var self =this;
        reservations.forEach(function(reservation){
          if(reservation.reservationDay.toDate().getFullYear() == currentYear){
            switch(reservation.reservationDay.toDate().getMonth()){
              case 1:{
                self.reservationsData[0]+=1;
                break;
              }
              case 2:{
                self.reservationsData[1]+=1;
                break;
              }
              case 3:{
                self.reservationsData[2]+=1;
                break;
              }
              case 4:{
                self.reservationsData[3]+=1;
                break;
              }
              case 5:{
                self.reservationsData[4]+=1;
                break;
              }
              case 6:{
                self.reservationsData[5]+=1;
                break;
              }
              case 7:{
                self.reservationsData[6]+=1;
                break;
              }
              default: {
                break;
              }
            }
          }
        });
      });
      this.barChartData = [
        { data: this.reservationsData, label: 'Reservations' },
      ];
      this.restaurantService.getRestaurant().subscribe(restaurants=>{
        this.restaurantsCount = restaurants.length;
      })
      this.reviewService.getReviews().subscribe(reviews=>{
        this.reviewsCount = reviews.length;
      })
  }

}
