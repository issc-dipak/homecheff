## Fetch all recipes

```
GET /api/v1/recipes
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
    title: "String",
    description: "String",
    ingredients: ["String"],
    instructions: "String",
    createdBy: "String",
    createdAt: "String",
    updatedAt: "String"
  }
]

400 - Bad Request
401 - Unauthorized
500 - Internal Server Error
```