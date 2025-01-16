## Delete user

```
DELETE /api/v1/user/{id}
```

### Request Headers

```
Content-Type: application/json
Authorization: Bearer <token>
```

### Path Parameters

```
id: The unique identifier of the user to be deleted.
```

### Response

```
200 - Success

Body
{
  message: "User deleted successfully."
}

400 - Bad Request
401 - Unauthorized
403 - Forbidden
404 - Not Found
500 - Internal Server Error
```