import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) { }


  getPhoto() {
    return this.httpClient.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization: 'Client-ID HSEPtDKijm0aj3geF9OAfqGkg4kvDCk5CTwMTwgqUR4'
        }
      }
    );
  }
}
