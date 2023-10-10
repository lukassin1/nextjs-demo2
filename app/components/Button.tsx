"use client";
type ButtonProps = {
  value: String;
  click: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <>
      <button className="p-6 max-w-sm mx-auto bg-white rounded-3xl  shadow-md m-6 flex items-center space-x-1 space-y-5 group text-black" onClick={() => props.click()}>{props.value}</button>
    </>
  );
}
