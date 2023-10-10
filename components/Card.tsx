"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import MyLabel from "./MyLabel";
import Link from "next/link";
import { useRouter } from "next/navigation";

export type TodoProps = {
  id: string;
  title: string;
  description: string;
  due: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

const handleClick = (todo: TodoProps, router: AppRouterInstance) => {
  todo.toggleTodo(todo.id.toString(), todo.complete);
  router.refresh();
};

export default function Card(todo: TodoProps) {
  const router = useRouter();
  return (
    <>
      <div
        className={
          todo.complete
            ? "p-2  flex-col max-w-sm mx-auto bg-orange-950 rounded-3xl  shadow-md m-3 flex items-center space-x-1 space-y-5  text-black"
            : "p-2  flex-col max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-3 flex items-center space-x-1 space-y-5  text-black"
        }
      >
        <label
          className="p-4 min-w-full text-center cursor-pointer transition ease-in-out delay-150   hover:scale-110  duration-300   bg-orange-400 rounded-3xl  shadow-lg m-1  space-x-4"
          onClick={() => handleClick(todo, router)}
        >
          complete
        </label>
        <MyLabel value={"title: " + todo.title} />
        <MyLabel value={"description: " + todo.description} />
        <MyLabel value={"due: " + todo.due} />
        <Link
          className="p-4 min-w-full text-center transition ease-in-out delay-150  hover:scale-110  duration-300   bg-orange-400 rounded-3xl  shadow-lg m-1  space-x-4"
          href={{
            pathname: "/EditTodo",
            query: {
              id: todo.id,
              title: todo.title,
              description: todo.description,
              due: todo.due,
            },
          }}
        >
          edit this todo
        </Link>
      </div>
    </>
  );
}
