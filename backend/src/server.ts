import cors from "@fastify/cors";
import Fastify from "fastify";
import { z } from "zod";

const server = Fastify({ logger: true });
await server.register(cors, { origin: false });
server.get("/health", async () => ({ status: "ok" }));

const environment = z.object({
  PORT: z.coerce.number().int().min(1).max(65_535).default(3000)
}).parse(process.env);

const port = environment.PORT;
await server.listen({ port, host: "127.0.0.1" });
