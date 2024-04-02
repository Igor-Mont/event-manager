import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { createEevent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBagde } from "./routes/get-attendee-badge";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEevent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBagde);

app.listen({ port: 3030 }).then(() => {
  console.log("Server is running on port 3030 🔥.");
});
