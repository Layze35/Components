This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
The project uses [TailwindCSS] (https://tailwindcss.com/)

## Getting Started

First, to run the development server:

```bash
bun i
#install all dependencies

bun run dev
#for devellopment server
bun run build
#for build a version to deploy
bun run lint
# to check ESlint errors
```

You can now run the development server with Docker:

```bash
docker buildx build -t {*/name_of_the_image/*} .
#create docker image based on lastest bun image

docker run -it -p 8081:3000 {*/name_of_the_image/*}
#run the frontend by exposing port 8081
```

From bun:
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. #change the port

If using Docker:
Open [http://localhost:8081](http://localhost:8081) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Objectives

The project is created for the pleasure of trying to do things we like and want to try and also to discover new technlogies

-- Docker the front

-- Create a back

-- Have a DB to stock all the assests (at least for now)

-- Docker the back and db with some network

-- Create a discord bot

-- Link the bot to a Lost ark api to receive pings based on certains merchants

-- Learn a lot of techniques to make the code clean

-- Have fun