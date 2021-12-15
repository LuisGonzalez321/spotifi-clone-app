import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.com/rest/v2/lang/es').subscribe(paises => {
      console.log(paises);
    });
  }

  ngOnInit(): void {
  }

}