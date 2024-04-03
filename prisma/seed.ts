import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "f868621c-ce95-4714-822e-403ab4cdcca8",
      title: "Event Seed",
      details: "The Event to seed database",
      slug: "event-seed",
      maximumAttendees: 100,
    },
  });
}

seed().then(() => {
  console.log("Database seeded 📦.");
  prisma.$disconnect();
});
