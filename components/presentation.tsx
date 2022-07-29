import { useThemeContext } from "../contexts/theme.context"
import { Button } from "./button"

export const Presentation = () => {
  const { theme } = useThemeContext()

  const handleDownloadCV = () => {

  }

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
        <Button buttonText="Download CV" handleFunction={handleDownloadCV}  />
      </div>
    </div>
  )
}