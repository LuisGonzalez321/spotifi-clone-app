import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() items: any = [];

  constructor(private router: Router) {

  }

  public showArtist = (item: any) => {
    let artistId: string = (item.type === 'artist') ? item.id : item.artists[0].id;
    console.log(artistId);

    this.router.navigate(['/artist', artistId]);
  }

  ngOnInit(): void {
  }

}
