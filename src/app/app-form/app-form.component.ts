import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})

export class FormComponent implements OnInit {

  userName: string;

  contructor() {

  }

  ngOnInit() { }

  resetUserName() {
    this.userName = '';
  }

}
