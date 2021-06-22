import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models/user';
import { UserService } from '@app/_services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  myImgUrl:string='/assets/img/user.png';
  users:User[]

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users=>{
      this.users = users;
    })
  }

}
