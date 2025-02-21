### Welcome to my Next.js project! ###
AY Directory is a modern web application built with Next.js, designed to serve as a directory for startups, projects, or resources. It leverages Sanity as a headless CMS to manage and display content dynamically, offering a scalable and flexible solution for organizing and showcasing information. Whether you're a developer looking to explore a Next.js project or a user interested in browsing a curated directory, AY Directory provides a clean, responsive, and user-friendly experience.


## Clonning the repository

Clone the repo:
```bash
git clone https://github.com/adilzhanY/ay-directory.git
```
```bash
cd ay-directory
```
## Installation
Install project dependencies using npm:
```bash
npm install
```

## Set up environment variables
Create a new file named `.env.local` in the root of your project and add the following content:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```
Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the [Sanity website](https://www.sanity.io/).

## Running the project
```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.

And finally, look what I created!
