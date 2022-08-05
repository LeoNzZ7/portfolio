import Head from "next/head";
import { Database, Desktop, DeviceMobile } from "phosphor-react";
import { Header } from "../components/header";
import { Presentation } from "../components/presentation";
import { Projects } from "../components/projects";
import { Stacks } from "../components/stacksSlider";
import { useThemeContext } from "../contexts/theme.context";

const Home = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`${theme === "dark" ? "bg-neutral-900" : "bg-white"} min-h-screen overflow-x-hidden pb-20`}>
      <Head>
        <title>Leonardo Nunes | Portfólio</title>
      </Head>
      <header className="h-[75px] w-screen" >
        <Header />
      </header>
        <div>
          <Presentation />
        </div>
      <Stacks />
      <div className="flex justify-center w-screen mt-20 none">
        <Projects
          type="front-end"
          icon={<Desktop size={100} className={`${theme === "dark" ? "text-white" : "text-gray-900"}`} />}
          stackTitle="Desenvolvimento Front-end"
          paragraph="Nulla massa metus, venenatis eu risus at, lobortis volutpat nulla." />
        <Projects
          type="back-end"
          icon={<Database size={100} className={`${theme === "dark" ? "text-white" : "text-gray-900"}`} />}
          stackTitle="Desenvolvimento Back-end"
          paragraph="Nulla massa metus, venenatis eu risus at, lobortis volutpat nulla." />
        <Projects
          type="mobile"
          icon={<DeviceMobile size={100} className={`${theme === "dark" ? "text-white" : "text-gray-900"}`} />}
          stackTitle="Desenvolvimento Mobile"
          paragraph="Nulla massa metus, venenatis eu risus at, lobortis volutpat nulla." />
      </div>
    </div>
  )
}

export default Home;