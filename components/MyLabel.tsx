type props = {
  value?: string;
};

export default function MyLabel(props: props) {
  return (
    <>
      <label className="p-4 min-w-full text-center   bg-orange-400 rounded-3xl  shadow-lg m-1  space-x-4">
        {props.value}
      </label>
    </>
  );
}
