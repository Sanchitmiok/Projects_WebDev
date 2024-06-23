"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// components
import WorkSliderBtn from "@/components/WorkSliderBtn";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    Description:
      " Created the MusicCourse UI using Next.js, emphasizing clean design and seamless navigation for an engaging userinterface experience.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "Aceternity UI",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://github.com/Sanchitmiok/Resume/tree/main/MusicCourses(Nextjs)/nextjs",
    github: "https://github.com/Sanchitmiok/Resume/tree/main/MusicCourses(Nextjs)/nextjs",
  },
  {
    num: "02",
    category: "Spotify-Clone",
    title: "Project 2",
    Description:
      "Developed a Spotify clone with HTML, CSS, and JS, ensuring responsive design and smooth user experience. Deployed forreal-world usage.",
    stack: [
      {
        name: "HTML",
      },
      {
        name: "Css",
      },
      {
        name: "javaScript",
      },
    ],
    image: "/assets/work/spotify.png",
    live: "https://myspotifyclone1.freewebhostmost.com/",
    github: "https://github.com/Sanchitmiok/Resume/tree/main/Spotify-Clone/Spotify",
  },
  {
    num: "03",
    category: "PassOp-UI",
    title: "Project 3",
    Description:
      "I developed a secure and user-friendly password manager using React to safeguard and manage your passwords.I created a stunning and responsive website using React, ensuring a user-friendly experience.",
    stack: [
      {
        name: "react.js",
      },
      {
        name: "tailwind.css",
      },
    ],
    image: "/assets/work/passMan.png",
    live: "https://github.com/Sanchitmiok/Resume/tree/main/PaasOp",
    github: "https://github.com/Sanchitmiok/Resume/tree/main/PaasOp",
  },
];

const Work = () => {
  const [project, setproject] = useState(projects[0]);
  const handleSlide = (swiper) => {
    const currIndex = swiper.activeIndex;
    setproject(projects[currIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* text section */}
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.Description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-5 ">
                {/* live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlide}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          className="object-cover object-center"
                          alt="image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* button */}
              <WorkSliderBtn
                constainerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent/50 hover:bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
