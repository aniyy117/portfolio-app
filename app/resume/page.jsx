"use client";
import React, { useMemo, Suspense } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJest,
  SiShadcnui,
  SiGit,
} from "react-icons/si";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

const tabs = [
  {
    name: "Experience",
    value: "experience",
  },
  {
    name: "Education",
    value: "education",
  },
  {
    name: "Skills",
    value: "skills",
  },
];

const about = {
  title: "About me",
  description:
    "Senior Frontend Engineer with 4+ years of experience architecting and delivering scalable, high-performance web applications using React.js and Next.js. Deep expertise in SSR, SSG, and ISR rendering strategies, performance optimization (Core Web Vitals, Lighthouse scoring), and reusable component architecture at enterprise scale. Passionate about clean code, measurable impact, and building production-grade UI systems.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aniket Jadhav",
    },
    {
      fieldName: "Email",
      fieldValue: "janiket112@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 8178990405",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  items: [
    {
      company: "Amicus Global Inc.",
      title: "Senior Frontend Engineer",
      duration: "Dec 2024 - Present",
    },
    {
      company: "TechChefz Digital",
      title: "Associate Technology · Frontend Lead",
      duration: "Jan 2023 - Dec 2024",
    },
    {
      company: "TechChefz Digital",
      title: "Frontend Developer",
      duration: "Jul 2021 - Dec 2022",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  items: [
    {
      institution: "Dr. D.Y. Patil Institute of Technology",
      degree: "Bachelor of Engineering in Information Technology",
      duration: "Aug 2017 - Jul 2021",
    },
    {
      institution: "The Adarsh School",
      degree: "CBSE 12th Boards",
      duration: "Jul 2016 - Jul 2018",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I specialize in modern frontend technologies with a focus on React ecosystem, performance optimization, and scalable architecture.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3Alt />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiShadcnui />,
      name: "shadcn/ui",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiJest />,
      name: "jest",
    },
    {
      icon: <SiGit />,
      name: "git",
    },
  ],
};

const ResumeContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get("tab");

  const activeTab = useMemo(() => {
    return tabs.find((tab) => tab.value === tabParam)?.value || tabs[0].value;
  }, [tabParam]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          value={activeTab}
          onValueChange={(value) => {
            router.push(`/resume?tab=${value}`);
          }}
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {tabs.map((tab) => {
              return (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.name}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* content */}
          <div className="xl:min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeIn" },
                }}
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="xl:h-[500px] h-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeIn" },
                }}
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="xl:h-[500px] h-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeIn" },
                }}
                className="flex flex-col gap-[30px]"
              >
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="xl:h-[500px] h-full">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

const Resume = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <ResumeContent />
    </Suspense>
  );
};

export default Resume;
