import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-ui-components',
  templateUrl: 'ui-components.component.html',
  styleUrls: [
    'ui-components.component.scss'
  ],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class UiComponentsComponent implements OnInit {

  titles:any[]=[];

  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<4;i++){
      let j=i+1
      if(i==0){
        this.titles[i]={
          title:"Title "+j,
          visibility: true,
          seemore:true
        };
      }else{
        this.titles[i]={
          title:"Title "+j,
          visibility: false,
          seemore:false
        };
      }
    }
  }

}
