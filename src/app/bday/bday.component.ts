import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bday',
  templateUrl: './bday.component.html',
  styleUrls: ['./bday.component.css']
})
export class BdayComponent implements OnInit {
  blackimg:boolean=true;
  lighton:boolean=false;
  lightison:boolean=true;
  decorate:boolean=false;
  banner:boolean=false;
  surpriseflag:boolean=false;
  imageflag:boolean=false;
  cakeflag:boolean=false;
  messageflag:boolean=false;
  musicflagbutton:boolean=false;
  blowcandles:boolean=false;
  messageforuflag:boolean=false;
  finalmessageflag:boolean=false;
 showContent: boolean = false;
 showContent1: boolean = false;
 showContent2: boolean = false;
 showContent3: boolean = false;
 showContent4: boolean = false;
 showContent5: boolean = false;
 showContent6: boolean = false;
 showContent7: boolean = false;
 showContent8: boolean = false;
 showContent9: boolean = false;
 showContent10: boolean = false;
 showContent11: boolean = false;
 showContent12: boolean = false;
 showContent13: boolean = false;
 showContent14: boolean = false;
 showContent15: boolean = false;
 showContent16: boolean = false;
 showContent17: boolean = false;
 showContent18: boolean = false;
 showContent19: boolean = false;
 showContent20: boolean = false;
 showContent21: boolean = false;
 showContent22: boolean = false;
 showContent23: boolean = false;
 showContent24: boolean = false;
 showContent25: boolean = false;
 showContent26: boolean = false;
 showContent27: boolean = false;
 showContent28: boolean = false;
 showContent29: boolean = false;
 showContent30: boolean = false;

 showContent31: boolean = false;
 showContent32: boolean = false;
 showContent33: boolean = false;
 showContent34: boolean = false;
 showContent35: boolean = false;
 showContent36: boolean = false;
 showContent37: boolean = false;
 showContent38: boolean = false;
 showContent39: boolean = false;
 showContent40: boolean = false;
 showContent41: boolean = false;
 showContent42: boolean = false;
 showContent43: boolean = false;
 showContent44: boolean = false;
 showContent46: boolean = false;
 showContent45: boolean = false;
 showContent47: boolean = false;
 thankuflag:boolean=false
 buttondisabled:boolean=true;
 showimagesflag:boolean=false;

 
  @ViewChild('audioOption', {static: true}) audioPlayerRef:ElementRef



  
  onAudioPlay(){
    this.audioPlayerRef.nativeElement.play();
  }


  constructor() { }

  ngOnInit() {
   
    //  this.onAudioPlay()
  }
  lightson(){
    this.blackimg=false;
    this.lighton=true;
    this.musicflagbutton=true;
    this.surpriseflag=true;
    this.lightison=false
  }
  playmusic(){
this.decorate=true;
 this.onAudioPlay()
  }

  decorateEvent(){
this.banner=true;
this.decorate=false;
this.surpriseflag=false
this.imageflag=true;

  }

  getcakeevent(){

this.cakeflag=true;
this.surpriseflag=false
this.imageflag=false;
this.banner=false;
this.messageflag=true;
this.decorate=false;
this.musicflagbutton=false;
  }


  blowCandlesevent(){
this.blowcandles=true;
this.imageflag=false;
this.cakeflag=false;
this.messageforuflag=true;
this.messageflag=false;
  }

  messageforuevent(){
    this.memories=true;
this.finalmessageflag=true;
this.blowcandles=false;
this.thankuflag=true;
 this.messageforuflag=false;
setTimeout(()=>this.showContent=true, 1000);
setTimeout(()=>this.showContent=false, 3000);

setTimeout(()=>this.showContent1=true, 4000);
setTimeout(()=>this.showContent1=false, 6000);

setTimeout(()=>this.showContent2=true, 7000);
setTimeout(()=>this.showContent2=false, 9000);

setTimeout(()=>this.showContent3=true, 10000);
setTimeout(()=>this.showContent3=false, 12000);

setTimeout(()=>this.showContent4=true, 13000);
setTimeout(()=>this.showContent4=false, 15000);

setTimeout(()=>this.showContent5=true, 16000);
setTimeout(()=>this.showContent5=false, 18000);

setTimeout(()=>this.showContent6=true, 19000);
setTimeout(()=>this.showContent6=false, 21000);


setTimeout(()=>this.showContent7=true, 22000);
setTimeout(()=>this.showContent7=false, 24000);

setTimeout(()=>this.showContent8=true, 25000);
setTimeout(()=>this.showContent8=false, 27000);

setTimeout(()=>this.showContent9=true, 28000);
setTimeout(()=>this.showContent9=false, 30000);

setTimeout(()=>this.showContent10=true, 31000);
setTimeout(()=>this.showContent10=false, 33000);

setTimeout(()=>this.showContent11=true, 34000);
setTimeout(()=>this.showContent11=false, 36000);


setTimeout(()=>this.showContent12=true, 37000);
setTimeout(()=>this.showContent12=false, 39000);

setTimeout(()=>this.showContent13=true, 40000);
setTimeout(()=>this.showContent13=false, 42000);

setTimeout(()=>this.showContent14=true, 43000);
setTimeout(()=>this.showContent14=false, 45000);

setTimeout(()=>this.showContent15=true, 46000);
setTimeout(()=>this.showContent15=false, 48000);

setTimeout(()=>this.showContent16=true, 49000);
setTimeout(()=>this.showContent16=false, 51000);

setTimeout(()=>this.showContent17=true, 52000);
setTimeout(()=>this.showContent17=false, 54000);

setTimeout(()=>this.showContent18=true, 55000);
setTimeout(()=>this.showContent18=false, 57000);

setTimeout(()=>this.showContent19=true, 58000);
setTimeout(()=>this.showContent19=false, 60000);

setTimeout(()=>this.showContent20=true, 61000);
setTimeout(()=>this.showContent20=false, 63000);

setTimeout(()=>this.showContent21=true, 64000);
setTimeout(()=>this.showContent21=false, 66000);


// setTimeout(()=>this.showContent22=true, 67000);
// setTimeout(()=>this.showContent22=false, 70000);

// setTimeout(()=>this.showContent23=true, 71000);
// setTimeout(()=>this.showContent23=false, 73000);

// setTimeout(()=>this.showContent24=true, 74000);
// setTimeout(()=>this.showContent24=false, 77000);

// setTimeout(()=>this.showContent25=true, 78000);
// setTimeout(()=>this.showContent25=false, 80000);

// setTimeout(()=>this.showContent26=true, 81000);
// setTimeout(()=>this.showContent26=false, 83000);

// setTimeout(()=>this.showContent27=true, 84000);
// setTimeout(()=>this.showContent27=false, 86000);

// setTimeout(()=>this.showContent28=true, 87000);
// setTimeout(()=>this.showContent28=false, 90000);

// setTimeout(()=>this.showContent29=true, 91000);
// setTimeout(()=>this.showContent29=false, 93000);

// setTimeout(()=>this.showContent30=true, 94000);
// setTimeout(()=>this.showContent30=false, 97000);

// setTimeout(()=>this.showContent31=true, 98000);
// setTimeout(()=>this.showContent31=false, 100000);


// setTimeout(()=>this.showContent32=true, 101000);
// setTimeout(()=>this.showContent32=false, 103000);

// setTimeout(()=>this.showContent33=true, 104000);
// setTimeout(()=>this.showContent33=false, 107000);

// setTimeout(()=>this.showContent34=true, 108000);
// setTimeout(()=>this.showContent34=false, 111000);

// setTimeout(()=>this.showContent35=true, 112000);
// setTimeout(()=>this.showContent35=false, 115000);

// setTimeout(()=>this.showContent36=true, 116000);
// setTimeout(()=>this.showContent36=false, 120000);


// setTimeout(()=>this.showContent37=true, 121000);
// setTimeout(()=>this.showContent37=false, 124000);

// setTimeout(()=>this.showContent38=true, 125000);
// setTimeout(()=>this.showContent38=false, 128000);

// setTimeout(()=>this.showContent39=true, 130000);
// setTimeout(()=>this.showContent39=false, 132000);

// setTimeout(()=>this.showContent40=true, 133000);
// setTimeout(()=>this.showContent40=false, 136000);

// setTimeout(()=>this.showContent41=true, 137000);
// setTimeout(()=>this.showContent41=false, 140000);


// setTimeout(()=>this.showContent42=true, 141000);
// setTimeout(()=>this.showContent42=false, 143000);

// setTimeout(()=>this.showContent43=true, 145000);
// setTimeout(()=>this.showContent43=false, 148000);

// setTimeout(()=>this.showContent44=true, 150000);
// setTimeout(()=>this.showContent44=false, 153000);

// setTimeout(()=>this.showContent45=true, 155000);
// setTimeout(()=>this.showContent45=false, 158000);

setTimeout(()=>this.showContent46=true, 68000);
setTimeout(()=>this.showContent46=false, 70000);

// setTimeout(()=>this.showContent47=true, 6000);
setTimeout(()=>this.buttondisabled=false, 71000);

setTimeout(()=>this.finalmessageflag=true, 71000);
  }

  showContent50:boolean=false; 
  showContent51:boolean=false; 
  showContent52:boolean=false; 
  showContent53:boolean=false; 
  showContent54:boolean=false; 
  showContent55:boolean=false; 
  
  showContent56:boolean=false; 
  showContent57:boolean=false; 
  showContent58:boolean=false; 
  showContent59:boolean=false; 
  showContent60:boolean=false; 
 
  showContent61:boolean=false; 
  showContent62:boolean=false; 
  showContent63:boolean=false; 
  showContent64:boolean=false; 
  showContent65:boolean=false; 
  showContent66:boolean=false; 
  showContent67:boolean=false; 
  showContent68:boolean=false; 
  showContent69:boolean=false; 
  showContent70:boolean=false; 
  showContent71:boolean=false; 
  showContent72:boolean=false; 
  showContent73:boolean=false; 
  memories:boolean=false;
  showContent74:boolean=false;
  happybirthdayflag:boolean=false
  birthdaybutton:boolean=false;
memoriesevent(){
this.happybirthdayflag=true
this.showimagesflag=true;
this.birthdaybutton=true;
this.memories=false;
setTimeout(()=>this.showContent50=true, 1000);
setTimeout(()=>this.showContent50=false, 3000);

setTimeout(()=>this.showContent51=true, 4000);
setTimeout(()=>this.showContent51=false, 6000);

setTimeout(()=>this.showContent52=true, 7000);
setTimeout(()=>this.showContent52=false, 9000);

setTimeout(()=>this.showContent53=true, 10000);
setTimeout(()=>this.showContent53=false, 12000);

setTimeout(()=>this.showContent54=true, 13000);
setTimeout(()=>this.showContent54=false, 15000);

setTimeout(()=>this.showContent55=true, 16000);
setTimeout(()=>this.showContent55=false, 18000);

setTimeout(()=>this.showContent56=true, 19000);
setTimeout(()=>this.showContent56=false, 21000);

setTimeout(()=>this.showContent57=true, 22000);
setTimeout(()=>this.showContent57=false, 24000);

setTimeout(()=>this.showContent58=true, 25000);
setTimeout(()=>this.showContent58=false, 27000);

setTimeout(()=>this.showContent59=true, 28000);
setTimeout(()=>this.showContent59=false, 30000);

setTimeout(()=>this.showContent60=true, 31000);
setTimeout(()=>this.showContent60=false, 33000);

setTimeout(()=>this.showContent61=true, 34000);
setTimeout(()=>this.showContent61=false, 36000);

setTimeout(()=>this.showContent62=true, 37000);
setTimeout(()=>this.showContent62=false, 39000);

// setTimeout(()=>this.showContent63=true, 40000);
// setTimeout(()=>this.showContent63=false, 42000);

// setTimeout(()=>this.showContent64=true, 43000);
// setTimeout(()=>this.showContent64=false, 45000);

// setTimeout(()=>this.showContent65=true, 46000);
// setTimeout(()=>this.showContent65=false, 48000);

// setTimeout(()=>this.showContent66=true, 49000);
// setTimeout(()=>this.showContent66=false, 51000);

// setTimeout(()=>this.showContent67=true, 52000);
// setTimeout(()=>this.showContent67=false, 54000);

// setTimeout(()=>this.showContent68=true, 55000);
// setTimeout(()=>this.showContent68=false, 57000);

// setTimeout(()=>this.showContent69=true, 58000);
// setTimeout(()=>this.showContent69=false, 60000);

// setTimeout(()=>this.showContent70=true, 61000);
// setTimeout(()=>this.showContent70=false, 63000);

// setTimeout(()=>this.showContent71=true, 64000);
// setTimeout(()=>this.showContent71=false, 66000);

// setTimeout(()=>this.showContent72=true, 67000);
// setTimeout(()=>this.showContent72=false, 69000);

// setTimeout(()=>this.showContent73=true, 70000);
// setTimeout(()=>this.showContent73=false, 72000);

 setTimeout(()=>this.showContent74=true, 40000);
  }









}








