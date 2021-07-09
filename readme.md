## Transactions

**Run locally:**
To run locally make sure you have npm installed on your machine. Download the repo at:  http://github.com/sherdog/thing.git 

**Hosted Version**
The hosted version is hosted on Heroku at https://memberfirstchallenge.herokuapp.com/

**Routes:**
All Transactions: Returns all transactions

    GET /transactions

Transaction by $id

    GET /transaction/[TRANSACTION_ID]

Transactions by Account ID: returns transactions for account

    GET /transaction/account/[ACCOUNT_ID]

Transaction Search: searches transactions by one or more fields, 

    POST /search

**criteria**: Object of key/value pairs which is used to search against the transaction data.
**date_range**: (optional) Search within a date range

    JSON BODY
    {
	    "criteria": {
	        "Field1": "1234",
	        "Field2":  3
	    },
	    "date_range": {
	        "from": "2021-04-19T00:00:00",
	        "to": "2021-12-20T00:00:00",
	        "field": "EffectiveDate"
	    }
    }