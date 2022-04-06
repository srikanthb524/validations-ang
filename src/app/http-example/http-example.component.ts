import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css'],
})
export class HttpExampleComponent implements OnInit {
  // obs = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 3200);
  //   setTimeout(() => {
  //     observer.error('error emitted');
  //   }, 3500);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.next('6');
  //   }, 6000);
  // });

  obs = new Observable((observer) => {
    console.log('Observable starts');
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.next('5');
    }, 5000);
    setTimeout(() => {
      observer.next('6');
    }, 6000);
  }).pipe(map((val)=>{return val as number*2}),
  filter(data => data > 2))
  ;
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.obs.subscribe(
      (val) => {
        console.log(val);
      }, //next callback
      (error) => {
        console.log('error');
      }, //Error callback
      () => {
        console.log('Completed');
      } //Complete Callback
    );


    // const obsUsingCreate= Observable.create((observer: { next: (arg0: string) => void; complete: () => void; })=>{
    //   observer.next( '1' )
    //   observer.next( '2' )
    //   observer.next( '3' )
    //   observer.complete()
    // });

    // obsUsingCreate
    //   .subscribe((val: any) => console.log(val),
    //     (              error: any)=> console.log("error"),
    //           () => console.log("complete"))



      const array=[1,2,3,4,5,6,7]
      const array2=['A','B','C','D'];
      const obsof1=of(array);
      const obsof5 = of(100, [1, 2, 3, 4, 5, 6, 7],"Hello World");
      obsof1.subscribe(val => console.log(val),
               error=> console.log("error"),
              () => console.log("complete"))
      const obsfrom=from(array);
      obsfrom.subscribe(val => console.log(val),
               error=> console.log("error"),
              () => console.log("complete"))






  }
}
