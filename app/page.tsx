"use client";
import { useState, useEffect } from "react";
import Background from "@/components/Background";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
  console.log(
    `
⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢢⡀⠀⠀⠀⠀⠀⣠⠊⠉⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡷⠀⡝⠖⠉⠉⢉⠉⠙⠶⣄⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠁⠀⣧⣠⠔⠋⠀⠈⣉⣙⣾⣷⡈⢲⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⣿⢡⠖⠉⠁⠀⢀⡤⢌⡇⡗⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⡀⢳⣀⣀⣿⢁⡴⣲⠀⠀⢌⣦⠈⡇⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠀⠀⠀⠀⠈⠳⢆⣈⠹⣫⠉⢸⢸⠠⣿⠀⠀⠘⡿⠀⢱⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡄⠀⣰⡇⢀⣴⠃⣀⢀⣤⣞⣡⠄⢻⡆⠸⡌⠀⠉⠀⠀⠀⠀⠀⡸⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⡀⢠⠏⣧⢻⢏⡼⠁⠀⠀⣰⡯⠾⠁⣷⡀⣧⣀⠀⢀⡠⠤⣤⢞⠱⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡖⡇⣸⡷⠷⡾⢾⠅⠀⣠⠊⠀⢣⡀⠀⡿⠷⣽⣏⡽⢹⠒⠊⠁⢸⡸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢳⠸⣸⡀⠐⢿⡇⢀⡜⠁⠀⢀⡄⠉⠒⠓⠛⠛⢿⡤⠃⠀⠀⠀⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⣤⡵⣷⠚⣏⣯⠛⢄⣀⡠⠋⢀⡀⢄⠠⡄⡦⠊⠈⠒⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠷⣝⣧⡞⠁⠀⣠⠞⠀⢠⣇⠷⠼⡶⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⢶⡫⠋⠀⣠⠾⢥⢄⡤⢼⠇⢀⢞⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀



      Hiya, I see your taking a little look at my horrible site. If you'd like to email me your complaints, please send them to contact@lenleyngo.com :3
    `,
  );

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      const isDark = storedTheme === "dark";
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // projects array
  const projects = [
    {
      title: "Personal Site",
      description:
        "Personal Site made with Next.js and Tailwind CSS to use as a portfolio.",
      tags: ["React", "Node.js", "TypeScript", "CSS"],
      source: "https://github.com/Cloud-121/personalsite",
      visit: "https://lenleyngo.com",
      image: "/files/images/lnsite.jpg",
    },
    {
      title: "MyEntergy-API",
      description:
        'Open Source API for MyEntergy Advanced Meters to pull there "live" usage. ',
      tags: ["Python3", "Selenium"],
      source: "https://github.com/Cloud-121/MyEntergy-API",
      visit: "https://github.com/Cloud-121/MyEntergy-API",
      image: "/files/images/myentergy-api.png",
    },
    {
      title: "MyEntergy-Bridge",
      description:
        "MyEntergy Bridge pulls your energy usage from MyEntergy-API and sends it to your preferred mqtt broker to use with homeassistant. ",
      tags: ["Python3", "MQTT", "Containerization"],
      source: "https://github.com/Cloud-121/MyEntergy-Bridge",
      visit: "https://github.com/Cloud-121/MyEntergy-Bridge",
      image: "/files/images/myentergy-bridge.png",
    },
    {
      title: "Web Vesc Xml Viewer",
      description:
        'Very catchy name for a web viewer to format xml files from the "VESC Tool" for easier reading and sharing using a ID based system. ',
      tags: ["Python3", "Streamlit", "Containerization"],
      source: "https://github.com/Cloud-121/webvescxmlviewer",
      visit: "https://vescxml.gproconnect.com/",
      image: "/files/images/webvescxmlviewer.png",
    },
    {
      title: "ETS2LA",
      description:
        "Contributor for ETS2LA, a moduler based tool for SCS trucking games. My contributions included adding Linux support, Bug fixes, and many installer improvements.",
      tags: ["Python3", "SCS Game Moding", "Windows Registry"],
      source: "https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist",
      visit: "https://ets2la.com/",
      image: "/files/images/ets2la.png",
    },
    {
      title: "Maple-County-ATM-Solver",
      description:
        "application for Maple County, a Roblox game, designed to automatically solve ATMs Puzzles.",
      tags: ["Python3", "DirectXAPI", "Tescent"],
      source: "https://github.com/Cloud-121/MapleCountyAtmSolver",
      visit: "https://github.com/Cloud-121/MapleCountyAtmSolver",
      image: "/files/images/maplecountyatmsolver.png",
    },
    {
      title: "Vipper Timekeeping Discord Bot",
      description:
        "Discord bot to help discord servers with users in multiple timezones to know each others time.",
      tags: ["Python3", "discord.py", "Containerization"],
      source: "https://github.com/Cloud-121/Vipper-Timekeeping-discord-bot",
      visit: "https://github.com/Cloud-121/Vipper-Timekeeping-discord-bot",
      image: "/files/images/vipper-timekeeping-discord-bot.png",
    },
  ];

  return (
    <Background theme={isDarkMode ? "dark" : "light"}>
      <div className="mt-4 ml-20">
        <span
          style={{ color: isDarkMode ? "white" : "black" }}
          className="text-1xl font-bold"
        >
          ~/{" "}
        </span>
        <Link
          href="/"
          className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <span
          style={{ color: isDarkMode ? "white" : "black" }}
          className="text-1xl font-bold"
        >
          {" "}
          /{" "}
        </span>
        <Link
          href="/about"
          className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300 ease-in-out ml-1"
        >
          About
        </Link>
      </div>

      {/* Page Content */}
      <div className="flex flex-col justify-start items-start min-h-screen p-8 sm:p-20 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="absolute top-0 right-0 m-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        </div>

        <h1 className="text-4xl font-bold">Hi, I&apos;m Lenley.</h1>
        <hr className="my-8 w-full border-t border-gray-400 dark:border-gray-700 bg-gray-300 dark:bg-gray-700" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center sm:text-left">
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:contact@lenleyngo.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              contact@lenleyngo.com
            </a>
          </p>
          <p className="text-sm">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/lenley-ngo-634452268/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LenleyNgo
            </a>
          </p>
          <p className="text-sm">
            GitHub:{" "}
            <a
              href="https://github.com/Cloud-121"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cloud-121
            </a>
          </p>
          <p className="text-sm">
            YouTube:{" "}
            <a
              href="https://www.youtube.com/@Cloud1202"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              @Cloud1202
            </a>
          </p>
        </div>

        <hr className="my-8 w-full border-t border-gray-400 dark:border-gray-700 bg-gray-300 dark:bg-gray-700" />

        <p className="mt-8">
          I go by Scarlett (or Cloud) online, I&apos;m a 15-year-old software
          developer and high school student from the US.
        </p>
        <p className="mt-8">
          Read more{" "}
          <a
            href="/about"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            about me
          </a>{" "}
          and my goals, projects, or my blog where I write about things I&apos;ve
          been working on.
        </p>

        <h2 className="mt-8 text-2xl">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div
            key={project.title}
            className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              width={500}
              height={500}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                <Link
                  href={project.source}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Source
                </Link>
                <Link
                  href={project.visit}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Visit
                </Link>

                
              </div>
            </div>
          </div>
          
          ))}

        </div>
        
        <style jsx>{`
          p {
            text-align: center;
          }
        
        `}</style>

      </div>

      <p className="text-center text-gray-800 dark:text-gray-300">This site is <a className="text-blue-500" href="https://github.com/Cloud-121/personalsite">open source</a> and being hosted on a Raspberry Pi 4 cluster consisting of 3 nodes running <a className="text-blue-500" href="https://k3s.io/">K3S</a>. </p>

    </Background>
  );
}
