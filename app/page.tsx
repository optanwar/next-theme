import DarkModeButton from "./component/DarkMode";
export default function Home() {
  return (
    <>
      <h1 className="text-4xl w-full bg-blue-700 p-3 flex justify-center">
        Template
      </h1>
      Dark Theme Example
      <DarkModeButton />
    </>
  );
}
