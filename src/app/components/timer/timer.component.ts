import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  countDownDate=new Date("may 30, 2021 11:15:00").getTime();
  demo:any;
  days:any;
  hours:any;
  minutes:any;
  seconds:any
  x=setInterval(()=>{
    var now=new Date().getTime();
    var distance=this.countDownDate-now;
     this.days=Math.floor(distance/(1000*60*60*24));
     this.hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
     this.minutes=Math.floor((distance%(1000*60*60))/(1000*60));
     this.seconds=Math.floor((distance%(1000*60))/(1000));
    this.demo=this.days+"d "+this.hours+"h "+this.minutes+"m "+this.seconds+"s ";
    if(distance<0){
      clearInterval(this.x);
      this.demo="Expired";
    }
  })
}
