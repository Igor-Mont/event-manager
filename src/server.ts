import fastify from "fastify";

const app = fastify();

app.listen({ port: 3030 }).then(() => {
  console.log("Server is running on port 3030 🔥.");
});
