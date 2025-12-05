"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const readData = async () => {
  const todos = await prisma.todo.findMany();

  if (!todos) {
    return { error: "No todos found!" };
  }

  return { success: todos };
};

export const getTodo = async (id: string) => {
  const todo = await prisma.todo.findUnique({
    where: { id: Number(id) },
  });
  return todo;
};

export async function createData(formData: FormData) {
  const title = formData.get("todoTitle") as string;
  if (!title) {
    throw new Error("Title is required");
  }

  await prisma.todo.create({
    data: { title },
  });

  revalidatePath("/");
}

export async function updateData(formData: FormData) {
  const todoId = Number(formData.get("id"));
  const todoTitle = formData.get("title") as string;

  if (!todoTitle) {
    throw new Error("Title is required");
  }

  await prisma.todo.update({
    where: { id: todoId },
    data: { title: todoTitle },
  });

  revalidatePath("/");
  redirect("/");
}

export async function deleteData(formData: FormData) {
  const todoId = Number(formData.get("id"));
  console.log("todoId", todoId);

  if (!todoId) {
    throw new Error("Id not found!");
  }

  await prisma.todo.delete({ where: { id: todoId } });

  revalidatePath("/");
}
