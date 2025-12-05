"use server";

import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const readData = async () => {
  const todo = await prisma.todo.findMany();
};
