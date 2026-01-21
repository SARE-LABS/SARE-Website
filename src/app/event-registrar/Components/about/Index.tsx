import { Carousel } from "../carousel/Index"
import { Tags } from "./Tags"

export const About = () => {
  return (
    <div className="w-full h-max flex flex-col mt-12 gap-4">
      <h1 className="font-medium w-max text-[28px] before:w-[75%] before:h-[4px] before:rounded-full before:bg-[#67B5DC] relative before:absolute before:top-[100%]">About the Event</h1>
      <div className="text-[15px]">
        <p>
          “How to GIT Started” is a beginner-friendly webinar designed to show you the fastest, easiest, and most efficient way to connect your codebase to GitHub — directly from your favorite IDE like VS Code.
        </p>
        <p>No need to memorize terminal commands or debug endless merge conflicts. We’ll walk you through how to:</p>
      </div>
      <Tags />
      <p>Whether you're a new developer, robotics enthusiast, or just someone tired of saying “I'll learn Git later” — this session is for you.</p>
      <Carousel />
    </div>
  )
}
