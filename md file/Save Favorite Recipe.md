### Save Favorite Recipe

```
POST /api/v1/recipes/favorites
```

#### Request Headers

```
Content-Type: application/json
userToken: As received in login API call
```

#### Request Body

```
{
    recipeId: "String"
}
```

#### Response

```
200 - Success
400 - Bad Request
500 - Internal Server Error
```