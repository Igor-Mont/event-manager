import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { createEevent } from "./routes/create-event";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEevent);

app.listen({ port: 3030 }).then(() => {
  console.log("Server is running on port 3030 🔥.");
});
