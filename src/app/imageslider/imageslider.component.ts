import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {

  imageObject = [{
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbpGyjUyWCjhuz4UUUrmIjaog-ylPC3IKrbA&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbpGyjUyWCjhuz4UUUrmIjaog-ylPC3IKrbA&usqp=CAU'
    
}, {
    image: 'https://c4.wallpaperflare.com/wallpaper/675/749/84/cinderella-dress-blue-art-wallpaper-preview.jpg',
    thumbImage: 'https://c4.wallpaperflare.com/wallpaper/675/749/84/cinderella-dress-blue-art-wallpaper-preview.jpg'
}, {
    image: 'https://www.dhresource.com/0x0s/f2-albu-g4-M01-99-18-rBVaEFgYTsaAJFkSAAIX4EkPEMk283.jpg/stunning-pink-flower-girl-dresses-satin-kids.jpg',
    thumbImage: 'https://www.dhresource.com/0x0s/f2-albu-g4-M01-99-18-rBVaEFgYTsaAJFkSAAIX4EkPEMk283.jpg/stunning-pink-flower-girl-dresses-satin-kids.jpg'
}, {
    image: 'https://www.itl.cat/pngfile/big/194-1940788_punjabi-suits-designs-for-girls-punjabi-dress-for.jpg',
    thumbImage: 'https://www.itl.cat/pngfile/big/194-1940788_punjabi-suits-designs-for-girls-punjabi-dress-for.jpg'
   
}];
  constructor() { }

  ngOnInit(): void {
  }

}
