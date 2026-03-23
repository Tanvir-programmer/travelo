import { MongoClient, ServerApiVersion, Collection, Document } from "mongodb";

const uri = process.env.MONGO_URI as string;
const dbName = process.env.DB_NAME as string;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

/**
 * We replace 'any' with a Generic <T> that extends 'Document'
 * This allows you to pass your own interface (like User) when calling the function.
 */
export const dbConnect = <T extends Document>(cName: string): Collection<T> => {
  return client.db(dbName).collection<T>(cName);
};
