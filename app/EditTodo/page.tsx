import Link from "next/link";
import { TodoProps } from "../components/Card";
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function editTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  const desc = data.get("description")?.valueOf();
  const dueprop = data.get("due")?.valueOf();
  const todoID = data.get("id")?.valueOf().toString();
   await prisma.todo.update({
    where: { id: todoID },
    data: { title: title, description: desc, due: dueprop },
  });
  redirect("/");
}

export default function EditTodo({
  searchParams,
}: {
  searchParams?: TodoProps;
}) {
  return (
    <form action={editTodo}>
      <input
        className="p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
        name="id"
        readOnly
        defaultValue={searchParams?.id}
      ></input>
      <input
        type="text"
        name="title"
        defaultValue={searchParams?.title}
        className="p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
      />
      <input
        type="text"
        name="description"
        defaultValue={searchParams?.description}
        className="p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
      />
      <input
        type="text"
        name="due"
        defaultValue={searchParams?.due}
        className="p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
      />
      <button
        type="submit"
        className="p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
      >
        submit
      </button>
      <Link
        className="p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
        href={"/"}
      >
        cancel
      </Link>
    </form>
  );
}
