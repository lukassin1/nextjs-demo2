import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf().toString();
  const desc = data.get("description")?.valueOf().toString();
  const dueprop = data.get("due")?.valueOf().toString();

  await prisma.todo.create({
    data: { title: title, description: desc, due: dueprop, complete: false },
  });
  redirect("/");
}

export default function CreateTodo() {
  return (
    <form action={createTodo}>
      <input
        type="text"
        name="title"
        placeholder="title"
        className="p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        className="p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
      />
      <input
        type="date"
        name="due"
        placeholder="due"
        className="p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
      />
      <button
        type="submit"
        className="transition ease-in-out delay-150  hover:scale-110 hover:shadow-orange-400 duration-300 p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
      >
        add Todo
      </button>
      <Link
        className="transition ease-in-out delay-150 hover:scale-110 hover:shadow-orange-400 duration-300  p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
        href={"/"}
      >
        cancel
      </Link>
    </form>
  );
}
