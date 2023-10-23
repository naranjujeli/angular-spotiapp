import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  constructor(private httpClient: HttpClient) { 

  }

  getToken(): string {
    /**
     * Para generar el TOKEN (lo borro para que GitHub no se altere):
     * curl 
     *  -X POST "https://accounts.spotify.com/api/token" 
     *  -H "Content-Type: application/x-www-form-urlencoded" 
     *  -d "grant_type=client_credentials&client_id=CLIENT_ID&client_secret=CLIENT_SECRET"
     */
    return 'TOKEN AQUI';
  }

  getAuthorizationHeaders(): any {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
  }

  runGetQuery(query: string) {
    return this.httpClient.get(`https://api.spotify.com/v1/${query}`, { headers: this.getAuthorizationHeaders() });
  }

  getNewReleases(): any {
    return this.runGetQuery('browse/new-releases')
      .pipe( map( (data: any) => data.albums.items ));
  }

  getArtists(term: string) {
    return this.runGetQuery(`search?query=${term}&type=artist&locale=en-US%2Cen%3Bq%3D0.8&offset=0&limit=20`)
      .pipe( map( (data: any) => data.artists.items ));
  }

  getArtist(id: string) {
    return this.runGetQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.runGetQuery(`artists/${id}/top-tracks?market=ar`) // Importante el market
      .pipe( map( (data: any) => data.tracks ))
  }
}
