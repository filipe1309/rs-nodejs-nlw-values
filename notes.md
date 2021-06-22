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
