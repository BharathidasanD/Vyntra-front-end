import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {

  imageObject = [{
    image: 'assets/images/gown.jpg',
    thumbImage: 'assets/images/gown.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'assets/images/formal.jpg',
    thumbImage: 'assets/images/formal.jpg'
}, {
    image: 'assets/images/coat.jpg',
    thumbImage: 'assets/images/coat.jpg',
    title: 'Example with title.'
}, {
    image: 'assets/images/pant.jpg',
    thumbImage: 'assets/images/pant.jpg',
    title: 'Example two with title.'
}];
  constructor() { }

  ngOnInit(): void {
  }

}
