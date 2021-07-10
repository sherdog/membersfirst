## Transactions

**Run locally:**
To run locally make sure you have npm installed on your machine. Download the repo at:  https://github.com/sherdog/membersfirst

    run npm update
    npm start
    

**Run Hosted**
The hosted version is hosted on Heroku at and you can point the requests to: https://memberfirstchallenge.herokuapp.com/

## Routes
**All Transactions:

Returns all transactions

    GET /transactions

Transaction by Id

    GET /transactions/[TRANSACTION_ID]

**Transactions by Account**: Returns transactions for account

    GET /transactions/account/[ACCOUNT_ID]

**Transaction Search**: searches transactions by one or more fields, 

    POST /search

> Requires a JSON object inside the request body

**criteria**: (optional)
Object of key/value pairs which is used to search against the transaction data.
**date_range**: (optional) Search within a date range with a given field 
*(only allows 1 date search)*


    POST http://localhost:3000/search

	Body JSON 
	{
	    "criteria": {
	        "SequenceNumber": 392959,
	        "VoidCode":  0
	    },
	    "date_range": {
	        "from": "2018-04-19T00:00:00",
	        "to": "2021-05-30T00:00:00",
	        "field": "EffectiveDate"
	    }
	}
	
	
**Results:**

    [
      {
        "$id": "717",
        "AccountNumber": "0000788072",
        "Id": "717",
        "IdType": 0,
        "CommentCode": 0,
        "TransferCode": 0,
        "AdjustmentCode": 0,
        "RegECode": 0,
        "RegDCheckCode": 0,
        "RegDTransferCode": 0,
        "VoidCode": 0,
        "SubActionCode": "T",
        "SequenceNumber": 392959,
        "EffectiveDate": "2021-05-29T00:00:00",
        "PostDate": "2021-05-29T00:00:00",
        "PostTime": 2359,
        "PreviousAvailableBalance": 255.91,
        "UserNumber": 0,
        "UserOverride": 0,
        "SecurityLevels": 0,
        "Description": "Sint architecto corrupti deserunt laudantium.",
        "ActionCode": "D",
        "SourceCode": "C",
        "BalanceChange": 0,
        "InterestPenalty": 0,
        "NewBalance": 33.4,
        "FeeAmount": 0,
        "EscrowAmount": 0,
        "LastTranDate": "2021-05-29T00:00:00",
        "MaturityLoanDueDate": null,
        "Comment": "Et et est voluptates id dolor vitae.",
        "Branch": 5,
        "ConsoleNumber": 0,
        "BatchSequence": 0,
        "SalesTaxAmount": 0,
        "ActivityDate": "2021-05-29T00:00:00",
        "BilledFeeAmount": 0,
        "ProcessorUser": 0,
        "MemberBranch": "",
        "SubSourceCode": 1,
        "ConfirmationSequence": 0,
        "MicrAccountNumber": "888800000000788072",
        "MicrRtNumber": "",
        "Recurring": 0,
        "FeeExemptCourtesyAmount": 0,
        "BalSeg001SegmentId": "",
        "BalSeg001PmtChangeDate": null,
        "InterestEffectiveDate": null,
        "BalSeg001PrevFirstPmtDate": null,
        "DraftNumber": "",
        "TracerNumber": "0000392959",
        "SubSourceDescription": "",
        "TransactionAmount": 196.33,
        "ConfirmationNumber": "0000000717"
      }
    ]