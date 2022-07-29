import { Header } from "../components/header";
import { Presentation } from "../components/presentation";
import { useThemeContext } from "../contexts/theme.context";

const Home = () => {
  const { theme } = useThemeContext();

  return(
    <div 
      className={`${theme === "dark" ? "bg-neutral-900" : "bg-white"} min-h-screen h-full`}>
      <header className="h-[75px] w-screen" >
        <Header />
      </header>
      <div>
        <Presentation />
      </div>
      <section>
        
      </section>
    </div>
  )
}

export default Home;