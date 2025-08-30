import React from "react";
import { Sparkle } from "./ui/Sparkle";
import { myTechStack } from "@/data";
import Reveal from "./ui/Reveal";

const About = () => (
  <section id="about" className="py-20 w-full space-y-10">
    <Reveal>
      <h3 className="mb-10">
        About{" "}
        <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
          me.
        </span>
      </h3>
    </Reveal>

    <div className="sm:flex grid-cols-[2fr_1fr] gap-6 space-y-5 sm:space-y-0">
      <Sparkle
        duration={Math.floor(Math.random() * 10000) + 10000}
        className="flex-col text-left p-3 md:p-5 lg:p-10 gap-5 min-h-full"
      >
       <p>
  Hey! I&apos;m <strong>Oyeyemi</strong> — a developer, designer, and curious mind.
</p>
<p>
  Beyond code, I enjoy designing clothes, watching movies, and exploring how creativity and technology shape everyday life.
</p>
<p>
  Always open to connect, share ideas, and build something meaningful.
</p>

      </Sparkle>

      <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 p-10">
        <p className="text-lg lg:text-3xl font-extrabold">
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            My Tech Stack!
          </span>
        </p>

        <div className="flex flex-wrap gap-3 py-4">
          {myTechStack.map((skill) => (
            <div
              key={skill}
              className="bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-white/20 transition duration-200 ease-in-out"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
