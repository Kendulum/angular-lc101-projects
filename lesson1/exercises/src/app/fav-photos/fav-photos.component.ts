import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYoN9Zpk3t-sjOQxKKPBP4mPU7pLxjngnlqcRGOzD&s';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nlwt50epDA3eD_b5Gw1G-JawRzchO8WfnDnd6uBh_lMRomNBJuSXQGcwfZs4G2dgHK4&usqp=CAU';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDnjGzSgbdrsCMeqwc_qRjDjUrjP-ilbOTWXMPTAbHp7awhMg-Vnerk9dAvTbLJIjSoE&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}