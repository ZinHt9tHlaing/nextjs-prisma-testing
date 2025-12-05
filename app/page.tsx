import CustomBtn from "@/components/CustomBtn";
import { createData, deleteData, readData } from "@/server/actions";
import Link from "next/link";

const HomePage = async () => {
  const { error, success } = await readData();

  if (error) {
    throw new Error("No todos found");
  }

  return (
    <main>
      <h1 className="text-xl font-bold text-center">HomePage</h1>
      {success?.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <div className="flex items-center gap-3 my-2">
            <form action={deleteData}>
              <input type="text" name="id" value={todo.id} hidden readOnly />
              <button
                type="submit"
                className="text-red-600 underline cursor-pointer active:scale-90 duration-200"
              >
                Delete
              </button>
            </form>
            <Link
              href={`/update/${todo.id}`}
              className="underline cursor-pointer active:scale-90 duration-200"
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
      <div>
        <form action={createData} className="max-w-md space-y-3">
          <input
            name="todoTitle"
            placeholder="Title"
            required
            className="border p-2 w-full"
          />
          <CustomBtn submitting="Creating..." label="Create" />
        </form>
      </div>
    </main>
  );
};

export default HomePage;
