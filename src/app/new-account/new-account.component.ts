import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggerService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loginservice: LoggerService, private accservice: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    //console.log('A server status changed, new status: ' + accountStatus);
    this.accservice.addAccount(accountName,accountStatus);
    this.loginservice.loggerMethod(accountStatus);
  }
}
