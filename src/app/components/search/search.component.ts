import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  loading: boolean;
  artists: any;

  constructor(private spotify: SpotifyService) {
    this.loading = false;
  }
  
  buscar(term: string) {
    this.loading = true;

    this.spotify.getArtist(term)
      .subscribe((data: any) => {
        this.artists = data;
      this.loading = false;
      }
    );
  }
}
