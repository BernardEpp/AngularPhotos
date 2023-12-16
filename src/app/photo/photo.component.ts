import { Component, Output } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  
  @Output()
  photoUrl: string = "";

  onClick() {
    this.fetchPhoto();
  }
  /**
   *
   */
  constructor(private photoService: PhotoService) {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((res) => {
      this.photoUrl = res.urls.regular;
    });
  }
}
