FROM hayd/alpine-deno:1.1.3

EXPOSE 8000 

WORKDIR /app

USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
COPY . /app
RUN deno cache src/deps.ts

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache src/index.ts

CMD ["run", "--allow-read", "--allow-net", "src/index.ts"]
