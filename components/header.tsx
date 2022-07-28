import { Trophy } from "phosphor-react"
import { useThemeContext } from "../contexts/theme.context";
import { Toggle } from "./switch";

export const Header = () => {
  return (
    <div className="h-full w-[1028px] m-auto p-5 flex justify-between items-center">
      <Trophy size={32} className="text-purple-800" />

      <div className="flex items-center justify-center">
        <ul className="flex justify-center items-center text-gray-200 cursor-pointer">
          <li className="p-2 font-bold border-b-2 border-transparent hover:border-b-purple-800">Home</li>
          <li className="p-2 font-bold border-b-2 border-transparent hover:border-b-purple-800">Sobre Min</li>
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