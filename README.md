# Voyager App

This is a booking ticket app build with t3 stack

## Setup

Clone the project

```bash
git clone https://github.com/devalade/voyageur.git
```

Intall all dependencies

```bash
# NPM 
cd voyager
npm install // or pnpm install or yarn install
```

Let's setup the database

```bash
cp .env.example .env
npx prisma generate
npx prisma db push
```
Chckout Prisma if you want to use another database.
# https://www.prisma.io/docs/reference/database-reference/connection-urls#env

You can now run the project by executing `npm run dev`