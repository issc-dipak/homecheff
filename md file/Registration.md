## Registration

```
POST /api/v1/register
```

### Request Headers

```
Content-Type: application/json
```

### Request body

```
{
    firstName: "String",
    lastName: "String",
    email:"String",
    password:"String"
}
```

### Response

```
201 - Created

Body
{
  userToken: "String",
  firstName: "String",
  lastName: "String",
  number:"String",
  email:"String",
  role: "String/Enum[ Customer]",
  status: "String/Enum[Registered, Active, Blocked, Dormant]",
}

400 - Bad Request
409 - Conflict
500 - Internal Server Error
```