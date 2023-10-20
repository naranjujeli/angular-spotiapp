import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  countries : any[];

  constructor(private httpClient: HttpClient) {
    this.countries = [];
    this.httpClient.get('https://restcountries.com/v3.1/lang/spanish')
    .subscribe((dataReceived: any) => {
      this.countries = dataReceived;  
      console.log(dataReceived);
    })
  }
  
  ngOnInit() {

  }
}
