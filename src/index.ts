import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema, formatArgumentValidationError } from "type-graphql";
import { createConnection } from "typeorm";
import cors from "cors";
import chalk from "chalk";

const main = async () => {
  const connection = await createConnection();

  await connection.synchronize();

  const schema = await buildSchema({
    resolvers: [__dirname + "/modules/**/*.ts"]
  });

  const server = new ApolloServer({
    schema,
    playground: true,
    formatError: formatArgumentValidationError
  });

  const app = Express();

  app.use(
    cors({
      credentials: false
    })
  );

  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(chalk.red(`Server started on http://localhost:4000/graphql`));
  });
};

main();
