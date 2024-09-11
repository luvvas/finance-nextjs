## Dependencies
- [shadcn-ui](https://ui.shadcn.com) - UI library
- [clerk](https://clerk.com/docs) - Auth library
- [hono](https://hono.dev) - API library
- [zod](https://zod.dev) - Schema Validation
- [neon](https://neon.tech) - Database
- [drizze](https://orm.drizzle.team) - ORM to connect to neon
- [react-query]
- [cuid2]
- [zustand]

## To-do
(V) Project Setup;
(V) Authentication;
(V) Hono.js setup;
(V) Header Component;
(V) Drizzle ORM & Neon Database;
(V) Accounts GET API;
(V) Accounts POST API;
(V) Data table component;
(V) Accounts bulk delete;
(V) Accounts edit;
(V) Categories API + UI;
(V) Transactions API;
(V) Transactions hooks;
(V) Transactions form;
(V) Transactions page;
( ) Transactions CSV import;

## Issues
[FIXED] Column transactions.date does not exist;
[NOT_FIXED]Wrong round amount (Ex: $10,50 === 11000);

## Commands
`db:generate` - Generate Schema;
`db:migrate` - Make migration;
`db:studio` - Open DB;

## To study
- `[[...name]]` in folder structure;
- RPC (Sharing API specifications between server and client);

## Refs
- https://www.youtube.com/watch?v=N_uNKAus0II&t=3274s