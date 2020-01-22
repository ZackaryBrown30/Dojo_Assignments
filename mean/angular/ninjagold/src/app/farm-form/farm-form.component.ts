import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-farm-form',
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.css']
})
export class FarmFormComponent implements OnInit {
  
  activityLog: string[];
  gold: number;
  count: Number;

  constructor(count:number) {
    count = 0;
   }

  ngOnInit() {
  }

  clickFarm(){
  var amount = Math.floor(Math.random()*3)+2;
  console.log("this is the amount"+amount);
  this.addGold(amount);
  this.activityLog.unshift("You earned "+amount+" gold from the Farm.")
  }
  
  clickCave(){
  var amount = Math.floor(Math.random()*5)+5;
  this.addGold(amount);
  this.activityLog.unshift("You earned "+amount+" gold from the Cave.")
  }

  clickCasino(){
    var amount = Math.floor(Math.random()*200)-100;
    this.addGold(amount);
    if(amount<0){
      this.activityLog.unshift("You are a loser. You lost "+amount+" gold at the Casino.")
    }else{
    this.activityLog.unshift("You earned "+amount+" gold from the Casino.")
    }
  }
  clickHouse() {
    var amount = Math.floor(Math.random()* 15) + 7;
    this.addGold(amount);
    this.activityLog.unshift("You earned "+ amount + " from the house!")
  }

  resetGold(){
    this.gold = 0;
  }

  addGold(amount):void {
    this.gold += amount;
  }

};


