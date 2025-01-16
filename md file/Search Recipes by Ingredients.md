## Search Recipes by Ingredients


```
GET /api/v1/recipes/search
```

### Request Headers

```
Content-Type: application/json
userToken: User's authentication token
```

### Query Parameters

```
ingredients: Comma-separated list of ingredient names (e.g., "tomato,cheese,basil")
```

### Response

```
200 - Success

Body:
[
    {
        "recipeId": "String",
        "name": "String",
        "ingredients": ["String"],
        "prepTime": "Number", // in minutes
        "image": "String/URL"
    }
]

400 - Bad Request
403 - Forbidden
500 - Internal Server Error
```
