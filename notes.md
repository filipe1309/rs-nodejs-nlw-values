# DevOnTheRun Notes

> notes taken during the course

<!-- https://gitignore.io -->

## Class-1

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
