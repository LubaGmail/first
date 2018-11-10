import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // Using $ in the name of a variable that is an observable, is considered best practice
  users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
    //
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
  }

}
