export class AccountService{

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
        console.log("addAccount:: ");
      }

      updatestatus(id: number, status: string){
        this.accounts[id].status = status;
        console.log("updatestatus:: ");
      }
}