# Deno 🦕 REST API starter with OAK, Docker

***This is a work in progress. Will update with modern packages and tests as I find them. Feel free to create PRs***

### Getting Started
1. Create a `.env` file in the project root and specify the port the run the application
```
PORT=8000
```
2. Then to run the application
```
deno run --allow-read --allow-net --lock=lock.json src/index.ts
```

You should see a log in the console as below- 
```
Server running on http://localhost:[PORT]
```

Now vist from browser or make a request to the following URL to verify-
```
http://localhost:[PORT]/api/v1/health
```

### Module Integrity checking
Create/update the lock file `lock.json`.

```
deno cache --lock=lock.json --lock-write src/deps.ts
```

Collaborator on another machine -- in a freshly cloned project tree:
```
# Download the project's dependencies into the machine's cache, integrity
# checking each resource.
deno cache --reload --lock=lock.json src/deps.ts
```

### Docker
*Build*
```
docker build -t deno-app .
```

*Run* 
```
docker run -it --init -p 8000:8000 deno-app
```

*Run in daemon mode*
```
docker run -itd --init -p 8000:8000 deno-app
```
