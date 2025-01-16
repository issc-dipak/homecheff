### Provide Feedback on a Recipe

```
POST /api/v1/recipes/feedback
```

#### Request Headers

```
Content-Type: application/json
userToken: As received during login
```

#### Request Body

```json
{
    "recipeId": "recipe123",
    "rating": 4,
    "comment": "Delicious and easy to prepare!"
}
```

#### Response

```
200 - Success
```
```json
{
    "message": "Feedback submitted successfully."
}
```
```
400 - Bad Request
500 - Internal Server Error
