## Recipe Interaction APIs

### Search Recipes by Ingredients

```
GET /api/v1/recipes/search
```

#### Request Headers

```
Content-Type: application/json
```

#### Query Parameters

```
ingredients: "String (comma-separated)"
```

#### Response

```
200 - Success

Body
[
  {
    id: "String",
    title: "String",
    ingredients: ["String"],
    instructions: "String",
    imageUrl: "String",
  }
]

400 - Bad Request
500 - Internal Server Error
