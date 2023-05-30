## My personal website

Link : https://earthflex.dev

## Tect Stack
1. [React](https://react.dev/) [Next.js](https://nextjs.org/)
2. [Tailwind CSS ](https://tailwindcss.com/)
3. [Radix-UI](https://www.radix-ui.com/) 
4. [Framer Motion](https://www.framer.com/motion/) : Animation 
5. [Sanity](https://www.sanity.io/) : CMS 
6. [Vercel](https://vercel.com/) : Deploy

## Configuration

### Step 1. Set up the project locally

[Clone the repository my CMS ](https://github.com/earthflex/studio-earthflex)

### Step 2. Create a new project Sanity

 [Sign in & Sign up](https://www.sanity.io/) Click Create a new project. The project ID and title dataset will be produced after the project is created. and clone 
 
 
### Step 3. Set up the environment

This will create a git-ignored `.env.local` file with environment variables that will be used for local development. see example `.env.local.example` 

Add your  projectId & dataset
```
   NEXT_PUBLIC_SANITY_PROJECT_ID 
   NEXT_PUBLIC_SANITY_DATASET 
   NEXT_PUBLIC_SANITY_API_VERSION 
``` 

### Step 4. Run Sanity locally in development mode

```bash
npm install

npm run dev
# or
yarn dev
# or
pnpm dev
```
