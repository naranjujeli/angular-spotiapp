import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  constructor(private httpClient: HttpClient) { 
    console.log("SpotifyService initialized");
  }

  getToken(): string {
    return 'BQC4MlGl_9K0DRwsc6UqbRg1r5KH2yg2gIHA39wbPcdngggVWwOWzMuLQ1RfVbsHQ6QA80VdQCFTdQ-8LVf6GOZyDtpTSSEleTm2dij8n6BpOLnSbWU';
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

  getArtist(term: string) {
    return this.runGetQuery(`search?query=${term}&type=artist&locale=en-US%2Cen%3Bq%3D0.8&offset=0&limit=20`)
      .pipe( map( (data: any) => data.artists.items ));
  }
}
