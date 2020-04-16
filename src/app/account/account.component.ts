import { Component, Input } from '@angular/core';
import { LoggerService } from '../logger.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggerService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loginservice: LoggerService, private accService: AccountService){}

  onSetTo(status: string) {
   // this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);

    this.accService.updatestatus(this.id,status);
    this.loginservice.loggerMethod(status);
  }
}
