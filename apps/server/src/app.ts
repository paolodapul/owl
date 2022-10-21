import express, { RequestHandler } from 'express';
import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import {
  ObjectType,
  Resolver,
  Query,
  Field,
  buildSchemaSync,
} from 'type-graphql';
import { graphqlHTTP } from 'express-graphql';

const prisma = new PrismaClient();

@ObjectType()
export class User {
  @Field()
  email?: string;

  @Field((type) => String, { nullable: true })
  name?: string | null;
}

@Resolver(User)
export class UserResolver {
  @Query((returns) => [User], { nullable: true })
  async allUsers() {
    return prisma.user.findMany();
  }
}

const schema = buildSchemaSync({
  resolvers: [UserResolver],
  emitSchemaFile: true,
});

const app = express();
const port = process.env.PORT || 3000;

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }) as RequestHandler);

app.get('/', (req, res) => {
  res.send({ data: 'hello, world!' });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
