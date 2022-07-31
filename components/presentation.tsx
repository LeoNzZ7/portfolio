import axios from "axios"
import Link from "next/link"
import { useThemeContext } from "../contexts/theme.context"
import { Button } from "./button"

export const Presentation = () => {
  const { theme } = useThemeContext();

  return (
    <div className="h-[425px] flex justify-center items-center mt-5">
      <div className="" >
        <div className="w-[350px] h-[350px] rounded-full bg-purple-800 shadow-md shadow-black border-2 border-purple-800" >
          <img src="https://avatars.githubusercontent.com/u/85530315?v=4" alt="" className="rounded-full" />
        </div>
      </div>
      <div className="ml-[100px]" >
        <span className="text-[25px] font-semibold text-purple-800">Olá, eu sou Leonardo</span>
        <h1
          className={`text-[35px] font-bold ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}
        >Desenvolvedor Front-end Jr</h1>
        <p
          className={`w-[500px] ${theme === "dark" ? "text-neutral-400" : "text-neutral-800"}`}
        >Nulla massa metus, venenatis eu risus at, lobortis volutpat nulla. Praesent non facilisis lorem. Etiam laoreet justo at laoreet dignissim. Aliquam erat volutpat.</p>
        <a href="https://export-download.canva.com/25lUQ/DAFA_f25lUQ/1097/0-31844883713.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20220730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220730T014213Z&X-Amz-Expires=78856&X-Amz-Signature=11a9608929b74635a38c2a4e6e6801d49208d2b4a2513680b0775aa67859db8c&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Leonardo%2520Nunes.pdf&response-expires=Sat%2C%2030%20Jul%202022%2023%3A36%3A29%20GMT">
          <Button buttonText="Download CV" />
        </a>
      </div>
    </div>
  )
}