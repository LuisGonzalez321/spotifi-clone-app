import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../service/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  public artist: any = {};
  public loading: boolean = false;
  public listTopTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe((params: any) => {
      this.getArtists(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {
  }

  public getArtists = (id: string) => {
    this.loading = true;
    this.spotify.getArtistProfile(id).subscribe(data => {
      this.artist = data;
      this.loading = false;
    });
  }

  public getTopTracks = (id: string) => {
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      console.log(topTracks);
      this.listTopTracks = topTracks;
    });
  }


}
