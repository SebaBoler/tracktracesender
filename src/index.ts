import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema, formatArgumentValidationError } from "type-graphql";
import { createConnection } from "typeorm";
import cors from "cors";
import chalk from "chalk";

const startServer = async () => {
  const connection = await createConnection();

  await connection.synchronize(); 

  const schema = await buildSchema({
    resolvers: [__dirname + "/modules/**/*.ts"]
  });

  const server = new ApolloServer({
    schema,
    // subscriptions: {
    //   path: "/src/modules/subscriptions"
    // },
    playground: {
      settings: {
        "general.betaUpdates": false,
        "editor.cursorShape": "line",
        "editor.fontSize": 14,
        "editor.fontFamily":
          "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace",
        "editor.theme": "dark",
        "editor.reuseHeaders": true,
        "prettier.printWidth": 80,
        "request.credentials": "same-origin",
        "tracing.hideTracingResponse": true
      }
    },
    formatError: formatArgumentValidationError
  });

  const app = Express();

  app.use(cors());

  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`-------------------------------------------------------`);
    console.log(chalk.red(`Server started on http://localhost:4000/graphql`));
    console.log(`-------------------------------------------------------`);
  });
};

startServer();
