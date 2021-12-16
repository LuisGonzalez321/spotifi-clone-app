import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../service/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listItems: any[] = [];
  public loading: boolean = true;

  constructor(private spotify: SpotifyService) {
    spotify.getNewReleases().subscribe((data: any) => {
      this.listItems = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {

  }

}
