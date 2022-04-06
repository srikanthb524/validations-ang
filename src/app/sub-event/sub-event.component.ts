import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-sub-event',
  templateUrl: './sub-event.component.html',
  styleUrls: ['./sub-event.component.css']
})
export class SubEventComponent implements OnInit,AfterViewInit {
@ViewChild('btn',{static:true}) button!:ElementRef;
buttonSubscription:any;
  constructor(private elm:ElementRef) { }
  ngAfterViewInit(): void {
    this.buttonClick();
  }

  ngOnInit(): void {
  }
  buttonClick(){
    this.buttonSubscription=fromEvent(this.button.nativeElement,'click')
    .pipe(debounceTime(300))
    .subscribe(res=>console.log(res));
  }

}
