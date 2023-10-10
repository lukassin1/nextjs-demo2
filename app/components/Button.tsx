"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

type ButtonProps = {
  value: String;
  click: () => void;
};

export default function Button(props: ButtonProps) {
  const router = useRouter();

  const handleClick = (fun: any, router: AppRouterInstance) => {
    fun.click();
    router.refresh();
  };
  return (
    <>
      <button
        className="transition ease-in-out delay-150  hover:scale-110 hover:shadow-orange-400 duration-300 p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black"
        onClick={() => handleClick(props, router)}
      >
        {props.value}
      </button>
    </>
  );
}
