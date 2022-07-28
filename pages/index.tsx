import { Header } from "../components/header";
import { useThemeContext } from "../contexts/theme.context";

const Home = () => {
  const { theme } = useThemeContext();

  return(
    <div 
      className={`${theme === "dark" ? "bg-neutral-900" : "bg-neutral-100"} min-h-screen h-full`}>
      <header className="h-[75px] w-screen" >
        <Header />
      </header>
    </div>
  )
}

export default Home;