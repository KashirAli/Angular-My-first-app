import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  //           <hr>
  //           <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public allowServer:boolean = false;
  public serverAdd:string = "No Server ";
  public serverName:string = "";
   public serverUpdate:boolean = false;
   public servers = [];
   public count:number = 0;
  constructor() {
      setTimeout(()=>{
        this.allowServer = true;
      },2000)
   }

  ngOnInit(): void {
  }
  OnServerAdd(){
    
    if(this.serverName!== '' ) {this.servers.push(this.serverName);
      this.serverUpdate = true;
    //this.serverAdd = "Server Was Created!Name is " + this.serverName;
      
  }
  
  

  }
  OnValueAdd(event:Event){
    if(this.serverUpdate)
    this.serverName = (<HTMLFormElement>event.target).value;
  }
}
