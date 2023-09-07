# Blog REST API
 
 Public Deployed Link : https://blog-rest-api-v2.onrender.com
 ## EndPoints:
  Signup : https://blog-rest-api-v2.onrender.com/api/v1/users/signup
 ```
 example body : {
"name" : "Nalini Prakash",
"email" : "testemail@gmail.com",
"password" : 12345
}
```
 Login : https://blog-rest-api-v2.onrender.com/api/v1/users/login
```
 example body:
 {
 "email" : "testemail@gmail.com",
 "password" : "12345"
 }
```

### You will get a jwt token, use that token in header for below requests to be authorized
### format in Authorization header : bearer(space)token
#### in headers format should like below
```
  "Authorization" : bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjZmYWJkMWMzMTg4MDNlYmI4YTQxMSIsImlhdCI6MTY5MzkwNzY0NSwiZXhwIjoxNjkzOTE3NjQ1fQ.ARM3gClxwLJ4FIZ9zcmhNoMO5W6pj4G4B0kgkZqNjQA
```

#### GET: https://blog-rest-api-v2.onrender.com/api/v1/blogs ->(get all blogs for a user)
#### POST : https://blog-rest-api-v2.onrender.com/api/v1/blogs ->(create blog)
```
example body: {
"name" : "All about tpday",
"blog" : " fihsvybkagbfybkzsgkabfkgbiablik"
}
```
#### PATCH : https://blog-rest-api-v2.onrender.com/api/v1/blogs/:id ->(update blog)
#### DELETE : https://blog-rest-api-v2.onrender.com/api/v1/blogs ->(delete the blog)
