import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[100vh] w-[50vw] top-10 left-full" fill="red" />
        <Spotlight className="left-80 top-28 h-[100vh] w-[50vw]" fill="red" />
      </div>
      <div className="text-center my-20 mx-auto max-w-[900px] justify-center flex flex-col ">
        <Reveal>
          <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-extrabold">
            Hey, I&apos;m {""}
            <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
             Oyeyemi Adekola Balikis
            </span>
          </h1>
        </Reveal>
        <h2 className="title my-6 text-xl md:text-3xl lg:text-5xl">
          I&apos;m a Developer and Researcher
        </h2>
        <p className="max-w-[700px] mx-auto">
          I’m passionate about building scalable web applications and exploring
  innovative technologies that solve real-world problems. With a strong
  foundation in software development and research, I enjoy working on projects
  that blend creativity, functionality, and emerging tech. My interests range
  from AI-powered solutions to decentralized applications, and I’m always eager
  to learn, experiment, and contribute to meaningful innovations. <br /><br />
  Beyond coding, I love inspiring and mentoring young people to explore, learn,
  and create new ideas that can positively impact the world.
        </p>
        <a className="mt-10 mx-auto" href="#contact">
          <Button
            title="Contact me"
            icon={<img src="assets/send.svg" />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
