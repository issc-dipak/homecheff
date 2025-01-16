

## Submit Ad Offer

```
POST /api/v1/ad/submit-offer
```

### Request Headers

```
Content-Type: application/json
userToken: User's authentication token
```

### Request Body

```
{
    "adTitle": "String",
    "adDescription": "String",
    "budget": "Number",
    "targetAudience": {
        "ageRange": "String",
        "location": "String",
        "interests": ["String"]
    },
    "duration": "Number", // in days
    "media": [
        {
            "type": "String/Enum[Image, Video, Text]",
            "url": "String"
        }
    ]
}
```

### Response

```
201 - Created

Body:
{
    "adId": "String",
    "status": "String/Enum[Pending, Approved, Rejected]",
    "message": "String"
}

400 - Bad Request
403 - Forbidden
500 - Internal Server Error
```