Backend Folder Structure:

backend/
├── src/
│ ├── app.js # builds the Express app (middlewares, routes)
│ ├── server.js # starts the HTTP server
│ ├── routes/ # only defines URL endpoints
│ ├── controllers/ # request handling, translates HTTP req into service calls
│ ├── services/ # business logic (auth, db queries)
│ ├── prisma/ # Prisma schema + client
│ └── middleware/ # shared logic for requests
├── .env
├── .env.example
├── package.json
