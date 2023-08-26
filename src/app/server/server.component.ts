import {Component} from '@angular/core'; //curly bracket as one property selected from many properties of core

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'

})
export class ServerComponent{

  serverId: number = 10;
  serverStatus: string = 'running';

  getServerStatus(): string{
    return this.serverStatus;
  }

}
