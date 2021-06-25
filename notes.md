# DevOnTheRun Notes

> notes taken during the course

<!-- https://gitignore.io -->

https://github.com/rocketseat-education/nlw-06-nodejs

## CLASS-1

```sh
yarn init -y
yarn add typescript -D
yarn tsc --init

# Convert TS to JS
yarn tsc

yarn add express
yarn add @types/express -D

# Auto converto TS to JS
yarn add ts-node-dev -D
yarn dev
```

## CLASS-2

```sh
docker-compose exec node yarn add typeorm reflect-metadata sqlite3
docker-compose exec node yarn typeorm -help
docker-compose exec node yarn typeorm migration:create -n CreateUsers
docker-compose exec node yarn typeorm migration:run
docker-compose exec node yarn typeorm migration:revert
docker-compose exec node yarn typeorm entity:create -n User

docker-compose exec node yarn add uuid
docker-compose exec node yarn add @types/uuid -D
```

## CLASS-3

```sh
docker-compose exec node yarn add express-async-errors
```

POST http://localhost:3000/users

```json
{
  "name": "Test",
  "email": "test@test.com",
  "admin": true
}
```

Response FAIL

```json
{
  "error": "User already exists"
}
```

POST http://localhost:3000/tags

```json
{
  "name": "Test Tag"
}
```

Response OK

```json
{
  "id": "6fb8f3f5-7c3f-45b8-b6e2-a5d080a78ff2",
  "name": "Test Tag",
  "created_at": "2021-06-23T02:04:27.000Z",
  "updated_at": "2021-06-23T02:04:27.000Z"
}
```

Response FAIL

```json
{
  "error": "Tag already exists!"
}
```

## CLASS-4

```sh
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D

yarn typeorm migration:create -n AlterUsersAddPassword
yarn typeorm migration:run

yarn add bcryptjs
yarn add @types/bcryptjs -D

docker-compose up
```

https://www.md5hashgenerator.com/
MD5 Hash

POST http://localhost:3000/login

```json
{
  "email": "test@test.com",
  "password": "1234"
}
```

Response OK

```json
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2MjQ0OTg1ODAsImV4cCI6MTYyNDU4NDk4MCwic3ViIjoiMzdiOGRjMWItNzFjYi00OWMwLTkwMjUtZmQ0MjRmM2Q1OWQwIn0.NlXjhraVyrqT8zSxGB9Nc52h9t7pmCK4J1Eaa3Ee-EE"
```

https://jwt.io/

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
// .
{
  "email": "test@test.com",
  "iat": 1624498580,
  "exp": 1624584980,
  "sub": "37b8dc1b-71cb-49c0-9025-fd424f3d59d0"
}
// .
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-256-bit-secret
)
```

```sh
yarn typeorm migration:create -n CreateCompliments
yarn typeorm migration:run
```

POST http://localhost:3000/compliments

```json
{
  "tag_id": "6fb8f3f5-7c3f-45b8-b6e2-a5d080a78ff2",
  "user_sender": "37b8dc1b-71cb-49c0-9025-fd424f3d59d0",
  "user_receiver": "cdea253a-ea17-4ace-94da-17718b218b7f",
  "message": "Thanks =)"
}
```

Response OK

```json
{
  "id": "6adfe6de-a67c-4e29-a1c4-699658467555",
  "user_sender": "37b8dc1b-71cb-49c0-9025-fd424f3d59d0",
  "user_receiver": "cdea253a-ea17-4ace-94da-17718b218b7f",
  "tag_id": "6fb8f3f5-7c3f-45b8-b6e2-a5d080a78ff2",
  "message": "Thanks =)",
  "created_at": "2021-06-24T02:24:28.000Z"
}
```

Incorrect payload (Same user_sender & user_receiver)

```json
{
  "tag_id": "6fb8f3f5-7c3f-45b8-b6e2-a5d080a78ff2",
  "user_sender": "37b8dc1b-71cb-49c0-9025-fd424f3d59d0",
  "user_receiver": "37b8dc1b-71cb-49c0-9025-fd424f3d59d0",
  "message": "Thanks =)"
}
```

Response Error

```json
{
  "error": "Incorrect User Receiver"
}
```

Incorrect payload (Wrong user_receiver)

```json
{
  "tag_id": "6fb8f3f5-7c3f-45b8-b6e2-a5d080a78ff2",
  "user_sender": "37b8dc1b-71cb-49c0-9025-fd424f3d59d0",
  "user_receiver": "acdea253a-ea17-4ace-94da-17718b218b7f",
  "message": "Thanks =)"
}
```

Response Error

```json
{
  "error": "User Receiver does not exists!"
}
```

## CLASS-5

POST http://localhost:3000/compliments

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2MjQ1ODQ2OTYsImV4cCI6MTYyNDY3MTA5Niwic3ViIjoiMzdiOGRjMWItNzFjYi00OWMwLTkwMjUtZmQ0MjRmM2Q1OWQwIn0.bZEflfC6GSzwSh_I3aCv1xfspo07Nl5NqxJoFYZOZ2A

```json
{
  "tag_id": "6fb8f3f5-7c3f-45b8-b6e2-a5d080a78ff2",
  "user_receiver": "3c693420-1b54-43d9-b243-de8eacf9b619",
  "message": "Thanks =)"
}
```

POST http://localhost:3000/user/compliments/send

POST http://localhost:3000/user/compliments/receive

POST http://localhost:3000/tags

```sh
yarn add class-transformer
yarn add cors
yarn add @types/cors -D
```
