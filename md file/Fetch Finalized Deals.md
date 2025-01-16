## Fetch Finalized Deals

```
GET /api/v1/ad/finalized-deals
```

### Request Headers

```
Content-Type: application/json
userToken: User's authentication token
```

### Response

```
200 - Success

Body:
[
    {
        "dealId": "String",
        "adId": "String",
        "clientId": "String",
        "dealValue": "Number",
        "status": "String/Enum[Active, Completed, Cancelled]",
        "startDate": "String/ISO8601",
        "endDate": "String/ISO8601"
    }
]

400 - Bad Request
403 - Forbidden
500 - Internal Server Error
```
