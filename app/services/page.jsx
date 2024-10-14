"use client";
import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build websites using the latest technologies and frameworks. I am always looking for new ways to improve my skills and stay up-to-date with the latest trends in web development.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "I focus on developing native applications for iOS and Android, leveraging the latest technologies and frameworks while continually enhancing my skills to stay ahead in mobile development.",
    href: "",
  },
  // {
  //   num: "03",
  //   title: "UI/UX Design",
  //   description:
  //     "I create intuitive and engaging user interfaces and experiences that meet user needs. I focus on user research, wireframing, and prototyping to deliver design solutions that enhance usability and aesthetics.",
  //   href: "",
  // },
  {
    num: "03",
    title: "SEO Optimization",
    description:
      "I help improve website visibility and rankings on search engines through effective SEO strategies. This includes keyword research, on-page optimization, and link-building techniques to drive organic traffic.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <div
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                     transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </div>
                </div>
                {/* heading */}
                <h2
                  className="text-[42px] font-bold leading-none text-white
                 group-hover:text-accent transition-all duration-500"
                >
                  {item.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{item.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
