import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../service/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public artists: any[] = [];
  public loading: boolean = false;

  constructor(private spotify: SpotifyService) {
  }

  public buscar(termino: string) {
    this.spotify.getArtist(termino).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
