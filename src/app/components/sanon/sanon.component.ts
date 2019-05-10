import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'ps-sanon',
  templateUrl: './sanon.component.html',
  styleUrls: ['./sanon.component.css']
})
export class SanonComponent implements AfterViewInit, OnDestroy {

  ngAfterViewInit() {
    let ratio = 0;
    let image = new Image();
    image.src = "assets/images/sanon.jpg";

    image.onload =function() {
        var canvas = document.querySelector("canvas");
        var ctx = canvas.getContext("2d");
        let width = parseInt(canvas.style.width);
        let height = parseInt(canvas.style.height);
        setInterval(function() {
            ratio += 0.01;
            ratio = ratio % 1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //Draw "empty" image
            ctx.globalAlpha = 0.6;
            ctx.drawImage(image, 0, 0);
            //Draw actual pizza image
            ctx.globalAlpha = 1;
            ctx.drawImage(image, 0, 0);
            //Draw mask
            ctx.globalCompositeOperation = "destination-atop";
            ctx.beginPath();
            ctx.moveTo(image.width / 2, image.height / 2);
            ctx.arc(image.width / 2, image.height / 2, image.width / 2, -Math.PI / 2, (-Math.PI / 2) + ((Math.PI * 2) * ratio), false);
            ctx.fill();
        }, 100);
    };
  }
  ngOnDestroy() {
    // this will remove event lister when this component is destroyed
    //this.drawingSubscription.unsubscribe();
  }
}
