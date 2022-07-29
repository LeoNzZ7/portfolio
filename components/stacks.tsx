import Link from "next/link";
import { ArrowRight, CaretRight } from "phosphor-react";
import { ReactElement } from "react";
import { useThemeContext } from "../contexts/theme.context";

type props = {
  stackTitle: string;
  paragraph: string;
  icon: ReactElement;
  type: "front-end" | "back-end" | "mobile"
}

export const Stacks = ({ stackTitle, paragraph, icon, type }: props) => {
  const { theme } = useThemeContext();

  return (
    <Link href="">
      <div
        className={`w-[300px] h-[300px] ${theme === "dark" ? "bg-[#222222]" : "bg-[#EFEFEF]"} 
        mx-2 flex flex-col justify-around items-start p-3 shadow-sm shadow-black cursor-pointer hover:bg-purple-800 group rounded-md`}>
        <>
          {icon}
        </>
        <h1
          className={`${theme === "dark" ? "text-gray-100" : "text-gray-900"}
          text-[16px] font-bold uppercase`}>{stackTitle}</h1>
        <p
          className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}
        text-[13px] font-semibold 
        `}
        >{paragraph}</p>
        {type === "front-end" &&
          <span className="text-purple-800 group-hover:text-gray-100 font-bold flex items-center">
            Projetos Front-end
            <ArrowRight size={30} weight="bold" className="transition-colors mt-[2px]" />
          </span>
        }
        {type === "back-end" &&
          <span className="text-purple-800 group-hover:text-gray-100 font-bold flex items-center">
            Projetos Back-end
            <ArrowRight size={30} weight="bold" className="transition-colors mt-[2px]" />
          </span>
        }
        {type === "mobile" &&
          <span className="text-purple-800 group-hover:text-gray-100 font-bold flex items-center">
            Projetos Mobile
            <ArrowRight size={30} weight="bold" className="transition-colors mt-[2px]" />
          </span>
        }
      </div>
    </Link>
  )
}