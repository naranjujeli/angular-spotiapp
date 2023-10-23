import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {
  loading: boolean;
  error: boolean;
  errorMessage: string;
  artist: any;
  topTracks: any;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.errorMessage = "";
    
    this.activatedRoute.params
      .subscribe(((params: any) => {
        spotify.getArtist(params.id)
          .subscribe((artist) => {
            this.artist = artist;
            this.loading = false;
          }, (error) => {
            this.error = true;
            this.errorMessage = error.error.error.message; // Spotify API specific
            this.loading = false;

            console.log(this.errorMessage);
          });
          
        spotify.getTopTracks(params.id)
          .subscribe((topTracks) => {
            this.topTracks = topTracks;
            this.loading = false;
          }, (error) => {
            this.error = true;
            this.errorMessage = error.error.error.message;
            this.loading = false;

            console.log(this.errorMessage);
          });
      }));
  }
}
