import cors from "@fastify/cors";
import Fastify from "fastify";

const server = Fastify({ logger: true });
await server.register(cors, { origin: false });
server.get("/health", async () => ({ status: "ok" }));

const port = Number(process.env.PORT ?? 3000);
await server.listen({ port, host: "127.0.0.1" });
