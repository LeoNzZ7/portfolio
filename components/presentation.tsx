import { useThemeContext } from "../contexts/theme.context"
import { Button } from "./button"

export const Presentation = () => {
  const { theme } = useThemeContext();

  return (
    <div >
      <div className="h-[425px] flex justify-center items-center mt-5 mb-[100px]">
        <div>
          <div className="w-[350px] h-[350px] rounded-full bg-purple-800 shadow-sm shadow-black border-2 border-purple-800" >
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
          >Desenvolvimento Web | Front-end | Back-end | Mobile</p>
          <a href="file.pdf" download>
            <Button buttonText="Download CV" />
          </a>
        </div>
      </div>
      <div className="bg-[#222222] w-screen h-[500px] m-auto shadow-lg shadow-black flex items-center justify-center">
        <div className="w-[85%] h-[85%] flex">
          <div className="w-[60%] h-full flex items-center justify-center text-gray-100 flex-col">
            <h1 className="text-[36px] font-bold">Sobre min</h1>
            <p className="w-[75%] text-[18px] mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nec velit ac fermentum. Integer at finibus dolor. In bibendum felis pulvinar urna bibendum, ut viverra sem ultricies. Suspendisse fermentum lacus faucibus tortor dictum rutrum nec ac mi. Pellentesque a mi convallis libero faucibus pulvinar. In hac habitasse platea dictumst. Mauris finibus hendrerit massa, vitae ullamcorper ipsum cursus eget.
            </p>
          </div>  
          <div className="w-[40%] h-full flex items-center">
            <div className="bg-purple-900 w-[350px] h-[350px] rounded-full">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}