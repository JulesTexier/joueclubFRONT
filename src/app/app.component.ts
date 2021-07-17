import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Mon formulaire';
  
  lastUpdate = 
  new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
      );
    });
    
    users: any[] | undefined;
    
  constructor(private userService: UserService) {
  }


  ngOnInit() {
    this.users = this.userService.users;
  }

}