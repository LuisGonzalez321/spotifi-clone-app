import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token: string = "BQAiyRWv5AqRi9w313ZX9WN9gGNjKKsNAST1Oi_RSU2zDk488jfHfUwJJwp8lS-nEKEGlWfNjPSVUIIEnq8";

  constructor(private http: HttpClient) {
  }

  public getQueryAPI = (endPoint: string) => {
    const url = `https://api.spotify.com/v1/${endPoint}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(url, {headers});
  }

  public getNewReleases = () => this.getQueryAPI('browse/new-releases').pipe(map((data: any) => data['albums'].items));

  public getArtist = (termino: string) => this.getQueryAPI(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => data['artists'].items));

  public getArtistProfile = (id: string) => this.getQueryAPI(`artists/${id}`);

  public getTopTracks = (id: string) => this.getQueryAPI(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) => data['tracks']));

}
