import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  public title: string = '';


  constructor() {
    this.title = 'Register';
  }

  ngOnInit() {
    console.log('componente register');
  }
}
