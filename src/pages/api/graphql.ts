import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse, IncomingMessage } from "http";

const server = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false,
    },
};

const startServer = server.start();

export default async function handler(
    req: MicroRequest,
    res: ServerResponse<IncomingMessage>
) {
    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res);
}
