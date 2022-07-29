
import { RocketLaunch } from "phosphor-react";
import { useThemeContext } from "../contexts/theme.context";
import { Toggle } from "./switch";

export const Header = () => {
  const { theme } = useThemeContext();

  return (
    <div className="h-full w-[1028px] m-auto p-5 flex justify-between items-center">
      <RocketLaunch size={40} className="text-purple-800" />

      <div className="flex items-center justify-center">
        <ul 
        className={`flex justify-center items-center cursor-pointer ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>
          <li className="p-2 font-bold border-b-2 border-transparent hover:border-b-purple-800">Início</li>
          <li className="p-2 font-bold border-b-2 border-transparent hover:border-b-purple-800">Habilidades</li>
          <li className="p-2 font-bold border-b-2 border-transparent hover:border-b-purple-800">Projetos</li>
          <li className="p-2 font-bold border-b-2 border-transparent hover:border-b-purple-800">Redes Sociais</li>
        </ul>
        <div className="ml-20" >
          <Toggle />
        </div>
      </div>
    </div>
  );
}