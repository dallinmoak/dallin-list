import Logo from "./UI/logo";
import LeftOption from "./left-options";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center bg-slate-300 dark:bg-slate-800 border-b-2 border-b-slate-400 dark:border-b-slate-600 pr-4">
      <div className="flex flex-row items-center">
        <div className="h-20">
          <Logo />
        </div>
        <h1 className="text-2xl">Dallin's Todo App</h1>
      </div>
      <LeftOption />
    </div>
  );
}
