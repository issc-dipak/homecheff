## Fetch user list

```
GET /api/v1/users
```

### Request Headers

```
Content-Type: application/json
Authorization: Bearer <token>
```

### Response

```
200 - Success

Body
[
  {
    id: "String",
    firstName: "String",
    lastName: "String",
    email: "String",
    role: "String/Enum[Admin, Merchant, Shopkeeper, Staff, Customer]",
    status: "String/Enum[Registered, Active, Blocked, Dormant]",
    createdAt: "String",
    updatedAt: "String"
  }
]

400 - Bad Request
401 - Unauthorized
403 - Forbidden
500 - Internal Server Error
```
