import { About } from "../Components/about/Index"
import { Belt } from "../Components/belt/Index"
import { Footer } from "../Components/footer"
import { Instructor } from "../Components/instructor/Index"
import { Landing } from "../Components/landing/Index"
import { Nav } from "../Components/nav/Index"

export const Home = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Nav />
      <div className="w-full h-max flex flex-col md:px-24 px-4 md
      :pt-10 pt-4">
        <Landing />
        <About />
        <Instructor />
        {/* <Footer /> */}
      </div>
      <Belt />

      {/* Dummy space */}
      <div className="h-52 md:h-32"></div>
    </div>
  )
}
