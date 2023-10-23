import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  // countries : any[];

  // constructor(private httpClient: HttpClient, private spotify: SpotifyService) {
  //   this.countries = [];
  //   this.httpClient.get('https://restcountries.com/v3.1/lang/spanish')
  //   .subscribe((dataReceived: any) => {
  //     this.countries = dataReceived;  
  //     console.log(dataReceived);
  //   })
  // }
  
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases();
  }

  ngOnInit() {

  }
}
