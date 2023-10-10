import Card, { TodoProps } from "./components/Card";
import { prisma } from "./db";
import Button from "./components/Button";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}
async function toggleTodo(id: string, complete: boolean) {
  "use server";

  console.log(id, complete);

  if (complete == true) {
    complete = false;
  } else {
    complete = true;
  }

  await prisma.todo.update({ where: { id }, data: { complete } });
}

async function clearCompleted() {
  "use server";
  return prisma.todo.deleteMany({ where: { complete: true } });
}

async function getLeftTodo() {
  return prisma.todo.findMany({ where: { complete: false } });
}

export default async function Home() {
  const todos = await getTodos();
  console.log(todos);

  const completed = await getLeftTodo();
  return (
    <>
      <Link
        className="transition ease-in-out delay-150 hover:scale-110 hover:shadow-orange-400 duration-300 p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
        href="/CreateTodo"
      >
        Create Todo
      </Link>

      <label className="p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center  text-black">
        {"left to do: " + completed.length}
      </label>

      <Button value={"clear completed"} click={clearCompleted}></Button>

      <div className="  rounded-3xl m-5 p-5 shadow grid  grid-flow-col-dense  text-black">
        {todos.map((todo) => {
          return (
            <Card
              id={todo.id}
              key={todo.id}
              title={todo.title}
              description={todo.description}
              due={todo.due}
              complete={todo.complete}
              toggleTodo={toggleTodo}
            />
          );
        })}
      </div>
    </>
  );
}
