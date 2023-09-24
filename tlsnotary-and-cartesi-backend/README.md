# tlsnotary-and-cartesi-backend
# diagram

![image](https://github.com/dingchaoz/ZEROGUARD/assets/10751336/f90712d3-f284-440a-8736-b3301a6f1885)

- 1: local tlsnotary server
- 2: local cartesit rollups
- 3: local cartesit backend
- 4: remote server cartesit rollups
- 5: remote server cartesit backend

![image](https://github.com/dingchaoz/ZEROGUARD/assets/10751336/a38924dc-d8d4-4133-bb5e-0cb14b2d5a4d)

## run

### 1. tlsnotary/notary-server

```
git clone git@github.com:tlsnotary/notary-server.git


cd notary-server

cargo run --release
```

### 2. tlsn

```
cd tlsn
```

### 3. rollups-examples

```

cd echo-rust

docker compose -f ../docker-compose.yml -f ./docker-compose.override.yml -f ../docker-compose-host.yml up
```

```
cd frontend-console

yarn

yarn build
```

```
cd echo-js

yarn

// <PATH> please change it to the path of /tlsn repo
TLS_EXAMPLE_PATH=<PATH> yarn start
```

### 4. cargo

```
curl https://sh.rustup.rs -sSf | sh
```

### 5. tlsnotary-and-cartesi-backend

```

cd tlsnotary-and-cartesi-backend

npm install

cp .env.example .env
```

update values in `.env`

```
npm run start:dev
```

## usage

### get proof

```
GET /v1/proofs/kyc/users/{userId}
```

save proof file

### verify proof

verify the proof file

```
POST /v1/proofs/kyc/verifications
```
