import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-scroller',
  templateUrl: './main-scroller.component.html',
  styleUrls: ['./main-scroller.component.css']
})
export class MainScrollerComponent implements OnInit {

  constructor() { }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop);
    let max = document.documentElement.offsetHeight;

    console.log("pos = " + pos + " and max = " + max);
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if(pos >= (max * 0.75) )   {
      this.showMoreImages();
    }
  }
  lastAddedChapter = 962;
  imagesToShow = [];
  ngOnInit() {
    this.imagesToShow = [...this.chapter962];
  }

  showMoreImages(){
    if(this.lastAddedChapter === 962){
      this.imagesToShow.push(...this.chapter963);
      this.lastAddedChapter = 963;
    } else if (this.lastAddedChapter === 963){
      this.imagesToShow.push(...this.chapter964);
      this.lastAddedChapter = 964;
    }

  }


  chapter962 = [
    '\\assets\\OP962\\01.png',
    '\\assets\\OP962\\02.png',
    '\\assets\\OP962\\03.png',
    '\\assets\\OP962\\04.png',
    '\\assets\\OP962\\05.png',
    '\\assets\\OP962\\06.png',
    '\\assets\\OP962\\07.png',
    '\\assets\\OP962\\08.png',
    '\\assets\\OP962\\09.png',
    '\\assets\\OP962\\10.png',
    '\\assets\\OP962\\11.png',
    '\\assets\\OP962\\12.png',
    '\\assets\\OP962\\13.png',
  ];
  chapter963 = [
    '\\assets\\OP963\\01.png',
    '\\assets\\OP963\\02.png',
    '\\assets\\OP963\\03.png',
    '\\assets\\OP963\\04.png',
    '\\assets\\OP963\\05.png',
    '\\assets\\OP963\\06.png',
    '\\assets\\OP963\\07.png',
    '\\assets\\OP963\\08.png',
    '\\assets\\OP963\\09.png',
    '\\assets\\OP963\\10.png',
    '\\assets\\OP963\\11.png',
    '\\assets\\OP963\\12-13.png',
    '\\assets\\OP963\\14-15.png',
    '\\assets\\OP963\\16-17.png',
    '\\assets\\OP963\\18.png',
    '\\assets\\OP963\\19.png',
  ];
  chapter964 = [
    '\\assets\\OP964\\01.png',
    '\\assets\\OP964\\02.png',
    '\\assets\\OP964\\03.png',
    '\\assets\\OP964\\04.png',
    '\\assets\\OP964\\05.png',
    '\\assets\\OP964\\06.png',
    '\\assets\\OP964\\07.png',
    '\\assets\\OP964\\08.png',
    '\\assets\\OP964\\09.png',
    '\\assets\\OP964\\10.png',
    '\\assets\\OP964\\11.png',
    '\\assets\\OP964\\12.png',
    '\\assets\\OP964\\13.png',
    '\\assets\\OP964\\14.png',
    '\\assets\\OP964\\15.png',
    '\\assets\\OP964\\16.png',
    '\\assets\\OP964\\17.png',
    '\\assets\\OP964\\18.png',
    '\\assets\\OP964\\19.jpg',
    '\\assets\\OP964\\20.png',
  ];

}
