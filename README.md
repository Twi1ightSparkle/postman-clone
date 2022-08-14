# Postman Clone

## Run in Docker

```bash
docker run -d --rm -p 8080:80 --name postman_clone twilightsparkle/postman-clone
```

or

```bash
docker compose up -d
```

## Run dev

```bash
npm i
npm run dev
```

## Build

```bash
date=2022.08.14
npm run build
docker build . -t twilightsparkle/postman-clone:$date
docker tag twilightsparkle/postman-clone:$date twilightsparkle/postman-clone:$date
docker push twilightsparkle/postman-clone:$date

docker build . -t twilightsparkle/postman-clone:latest
docker tag twilightsparkle/postman-clone:$date twilightsparkle/postman-clone:latest
docker push twilightsparkle/postman-clone:latest
```
