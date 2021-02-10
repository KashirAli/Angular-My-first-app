import { rendererTypeName } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',

    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    public serverId:number = 10;
    public serverStatus:string = Math.random()>0.5 ? 'online': 'offline';
    
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}