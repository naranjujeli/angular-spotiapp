import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {
  constructor(private httpClient: HttpClient) { 
    console.log("SpotifyService initialized");
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAuewcVVeXO5MA3h1AjhDQfNdQT_g4qmxHGOacQI0Zq2P8QTD155ssUByB07K2wdDShCUoqO-XunzyNoyT9XXR5ofLFc8D_meoLdwTA01IhlXa9JHs'
    })

    this.httpClient
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
        .subscribe(data => {
          console.log(data);
        });
  }
}
