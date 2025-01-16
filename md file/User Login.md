## User Login

```
POST /api/v1/auth/login
```

### Request Headers

```
Content-Type: application/json
```

### Request Body

```
{
    "email": "String",
    "password": "String"
}
```

### Response

```
200 - Success

Body:
{
    "userToken": "String",
    "userId": "String",
    "name": "String",
    "email": "String"
}

400 - Bad Request (e.g., invalid email or password)
403 - Forbidden (e.g., account not active)
500 - Internal Server Error
```
