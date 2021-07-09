
import { transactions } from '../data/transactions.json';
import moment from 'moment';

export class TransactionModel {
    
    public DateFields = ["EffectiveDate", "PostDate", "LastTranDate","ActivityDate"];
    
    public find = function(filters:any):any {
        
        let records = transactions.filter((record : any) => {
            return Object.keys(filters).every((filter : any) => {
                return filters[filter] === record[filter];
            });
        });

        return records;
    }

    public FilterDateRange = function(objectArray:any, field:string, fromDate:string, toDate:string):any {
        
        let filteredResults = objectArray.filter((record : any) => {
            return moment(record.hasOwnProperty(field) && record[field], 'DD-MM-YYYY').isBetween(moment(fromDate, 'DD-MM-YYYY'), moment(toDate, 'DD-MM-YYYY'), null, '[]');
        });

        return filteredResults;
    }

    public findTransactionByAccountId = function(accountId: string) : any {

        var results:any = transactions.filter( (t:any) => {
            return  t.AccountNumber.localeCompare(accountId) === 0;
        });

        return results;
    }

    public findTransactionById = function(transactionId: string) : any {

        var transaction = transactions.filter(function(t) {
            return t.$id === transactionId;
        })[0];

        return transaction;
    }
}
    