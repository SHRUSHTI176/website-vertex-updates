import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { EventType } from "@prisma/client";
async function main() {
  console.log("🌱 Seeding events...");

  await prisma.event.upsert({
    where: { slug: "reeluminati" },
    update: {},
    create: {
      slug: "reeluminati",
      name: "Reeluminati",
      type: EventType.TEAM,
      price: 0,
    },
  });

  await prisma.event.upsert({
    where: { slug: "hardware-expo" },
    update: {
      name: "Hardware Expo",
      price: 10000, // ₹100
    },
    create: {
      slug: "hardware-expo",
      name: "Hardware Expo",
      type: EventType.TEAM,
      price: 10000, // ₹100
    },
  });

  await prisma.event.upsert({
    where: { slug: "protopitch" },
    update: {
      name: "Hardware Expo",
      price: 10000, // ₹100
    },
    create: {
      slug: "protopitch",
      name: "Hardware Expo",
      type: EventType.TEAM,
      price: 10000, // ₹100
    },
  });

  await prisma.event.upsert({
    where: { slug: "embedded-enigma" },
    update: {
      name: "Embedded Enigma",
      price: 15000, // ₹150
    },
    create: {
      slug: "embedded-enigma",
      name: "Embedded Enigma",
      type: EventType.TEAM,
      price: 15000, // ₹150 per team
    },
  });

  await prisma.event.upsert({
    where: { slug: "vector-chase" },
    update: {
      name: "Vector Chase",
      price: 10000, // ₹100
    },
    create: {
      slug: "vector-chase",
      name: "Vector Chase",
      type: EventType.TEAM,
      price: 10000, // ₹100 per team
    },
  });

  console.log("✅ Seeding completed!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });