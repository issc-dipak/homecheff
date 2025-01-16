## Fetch a specific recipe

```
GET /api/v1/recipes/{id}
```

### Request Headers

```
Content-Type: application/json
Authorization: Bearer <token>
```

### Path Parameters

```
id: The unique identifier of the recipe to be fetched.
```

### Response

```
200 - Success

Body
{
  id: "String",
  title: "String",
  description: "String",
  ingredients: ["String"],
  instructions: "String",
  createdBy: "String",
  createdAt: "String",
  updatedAt: "String"
}

400 - Bad Request
401 - Unauthorized
404 - Not Found
500 - Internal Server Error
```
