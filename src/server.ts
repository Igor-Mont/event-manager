import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { createEevent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBagde } from "./routes/get-attendee-badge";
import { checkIn } from "./routes/check-in";
import { getEventAttendees } from "./routes/get-event-attendees";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEevent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBagde);
app.register(checkIn);
app.register(getEventAttendees);

app.listen({ port: 3030 }).then(() => {
  console.log("Server is running on port 3030 🔥.");
});
