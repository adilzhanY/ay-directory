### Welcome to my Next.js project! ###

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Clonning the repository

Clone the repo:
```bash
git clone https://github.com/adilzhanY/ay-directory.git
cd ay-directory
```
## Installation
Install project dependencies using npm:
```bash
npm install
```

## Set up environment variables
Create a new file named .env.local in the root of your project and add the following content:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```
Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the Sanity website.

## Running the project
```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.

And finally, look what I created!
