import CustomBtn from "@/components/CustomBtn";
import { getTodo, updateData } from "@/server/actions";
import React from "react";

type EditTodoProps = {
  params: { id: string };
};

const EditTodo = async ({ params }: EditTodoProps) => {
  const { id } = await params;

  const data = await getTodo(id);

  return (
    <main>
      <h2>Update Todo</h2>
      <form action={updateData} className="max-w-[17rem] space-y-3">
        <input
          type="text"
          name="id"
          value={id}
          hidden
          readOnly
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="title"
          defaultValue={data?.title}
          required
          className="border border-white p-2 text-gray-400"
        />
        <CustomBtn submitting="Updating..." label="Update" />
      </form>
    </main>
  );
};

export default EditTodo;
