'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type Project = {
  title: string;
  type: string;
  description: string;
  source: string;
  visit: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  tags?: string[];
};

const testimonials = [
  {
    quote: "How the h#$$ do you get so much accomplished? It's impressive.",
    attribution: 'Collaborator, Gulf Coast Mesh',
  },
  {
    quote: 'The Grumpy Board is performing very well compared to my previous deployment.',
    attribution: 'Board owner and hardware operator',
  },
  {
    quote:
      "I'm new to MeshCore and this world. But I would like to thank you for everything you have been putting into this community, and I really appreciate it.",
    attribution: 'Community member, MeshCore / Discord',
  },
  {
    quote:
      'I have been amazed at how quickly the answers you have given and the calm manner you navigate it all when randomly thrown at you.',
    attribution: 'Community member, MeshCore / Discord',
  },
  {
    quote:
      "You appear to have a tremendous amount on your plate at the moment. Don't know how you do it all with such efficiency. It's impressive.",
    attribution: 'Community collaborator',
  },
  {
    quote:
      "She built and manages the group's sites. I can't lose her from the community. She's one of the smartest people I know, even more so considering her age.",
    attribution: 'Community maintainer',
  },
];

export default function App() {
  useEffect(() => {
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
      `
    );
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      const isDark = storedTheme === 'dark';
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  // Fuck you Tummy, Open source is Freedom.
  const projects: Project[] = [
    {
      title: 'Gulf Coast Mesh',
      type: 'highlight',
      description:
        'Founder and Lead maintainer of Gulf Coast Mesh, a volunteer-built communications network anchored in Louisiana and growing across the US Gulf Coast using MeshCore and other mesh radio technologies.',
      tags: ['Community Management'],
      source: '',
      visit: 'https://gulfcoastmesh.org/',
      image: '/files/images/banner.jpg',
    },
    {
      title: 'The Grumpy Board',
      type: 'hardware',
      description:
        'A partnership with GrumpyMesh to design the perfect MeshCore radio. They sold out in less than six hours.',
      source: '',
      visit: 'https://grumpymesh.com/board.html',
      image: '/files/images/direct-front.png',
    },
    {
      title: 'TG-Mesh',
      type: 'hardware',
      description: 'Low cost radio designed to be given out in emergencies.',
      source: '',
      visit: '',
      image: '/files/images/tg-mesh.png',
    },
    {
      title: 'LVR Low Voltage Reset Module',
      type: 'hardware',
      description:
        "Automatic shutdown module for solar repeater's preventing lockup and the loss of equitment in deployments.",
      source: '',
      visit: '',
      image: '/files/images/lvr.png',
    },
    {
      title: 'Gulf Coast Mesh App',
      type: 'software',
      description:
        'A free companion app for MeshCore LoRa mesh radios for off-grid, encrypted communication that works with no cell service, no Wi-Fi, and no internet connection required.',
      source: '',
      visit: '',
      image: '/files/images/gulfcoastmeshapp.png',
      imageFit: 'contain',
      tags: ['MeshCore', 'LoRa'],
    },
    {
      title: 'Gulf Coast Mesh Analyzer',
      type: 'software',
      description:
        'A unified backend for Gulf Coast Mesh that monitors and logs owned repeaters, detects outages, and helps us maintain the strongest mesh network in the southern US.',
      source: '',
      visit: 'https://analyzer.gulfcoastmesh.org',
      image: '/files/images/gulfcoastmeshlogo.png',
      tags: ['MeshCore', 'Monitoring', 'Infrastructure'],
    },
    {
      title: 'Meeting Assistant',
      type: 'software',
      description:
        'A custom-built tool for Gulf Coast Mesh, built to make taking meeting notes and publishing YouTube recordings of community meetings as simple as possible.',
      source: '',
      visit: '',
      image: '/files/images/meetingorganizer.png',
      tags: ['Python', 'Community'],
    },
    {
      title: 'Motionblob',
      type: 'software',
      description:
        'Bringing motion cue indicators to Unix-like platforms, currently a work in progress.',
      source: 'https://github.com/Cloud-121/Motionblob',
      visit: '',
      image: '/files/images/motionblob.png',
      tags: ['Python', 'Serial', 'Efficiency', 'Threading'],
    },
    {
      title: 'MyEntergy-API',
      type: 'software',
      description:
        'Open Source API for MyEntergy Advanced Meters to pull there "live" usage. ',
      tags: ['Python', 'Selenium'],
      source: 'https://github.com/Cloud-121/MyEntergy-API',
      visit: '',
      image: '/files/images/myentergy-api.png',
    },
    {
      title: 'MyEntergy-Bridge',
      type: 'software',
      description:
        'MyEntergy Bridge pulls your energy usage from MyEntergy-API and sends it to your preferred mqtt broker to use with homeassistant. ',
      tags: ['Python', 'MQTT', 'Docker'],
      source: 'https://github.com/Cloud-121/MyEntergy-Bridge',
      visit: '',
      image: '/files/images/myentergy-bridge.png',
    },
    {
      title: 'Web VESC XML Viewer',
      type: 'software',
      description:
        'A web viewer that formats XML files from VESC Tool for easier reading and sharing through an ID-based system.',
      tags: ['Python', 'Streamlit', 'Containers'],
      source: 'https://github.com/Cloud-121/webvescxmlviewer',
      visit: '',
      image: '/files/images/webvescxmlviewer.png',
    },
    {
      title: 'Vipper Timekeeping Discord Bot',
      type: 'software',
      description:
        "A Discord bot that helps communities with users across multiple time zones see one another's local time.",
      tags: ['Python', 'discord.py', 'Containers'],
      source: 'https://github.com/Cloud-121/Vipper-Timekeeping-discord-bot',
      visit: '',
      image: '/files/images/vipper-timekeeping-discord-bot.png',
    },
    {
      title: 'Baton Rouge RC',
      type: 'software',
      description: 'Radio control club website built with React and Node.js.',
      tags: ['React', 'Node.js'],
      source: '',
      visit: 'https://batonrougerc.com',
      image: '/files/images/batonrougerc.png',
    },
    {
      title: 'Personal Site',
      type: 'software',
      description:
        'Personal Site made with Next.js and Tailwind CSS to use as a portfolio.',
      tags: ['React', 'Node.js', 'TypeScript', 'CSS'],
      source: 'https://github.com/Cloud-121/personalsite',
      visit: 'https://lenleyngo.com',
      image: '/files/images/lnsite.png',
    },
  ];

  const ProjectCard = ({ project }: { project: Project }) => {
    const tags = project.tags ?? [];
    const hasSource = Boolean(project.source);
    const hasVisit = Boolean(project.visit);

    return (
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 dark:bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className={`h-48 w-full ${
            project.imageFit === 'contain'
              ? 'bg-[#103c4b] object-contain'
              : 'object-cover'
          }`}
          onError={(e) => {
            e.currentTarget.src =
              'https://placehold.co/600x400?text=Image+Not+Found';
          }}
        />
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-4 flex-grow text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {(hasSource || hasVisit) && (
            <div className="mt-6 flex flex-wrap gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
              {hasSource && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  View Source
                </a>
              )}
              {hasVisit && (
                <a
                  href={project.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  Visit Site
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full text-gray-900 transition-colors duration-500 dark:text-white">
      <nav className="mt-4 ml-8 sm:ml-20 flex items-center gap-2">
        <span className="text-1xl font-bold dark:text-white">~/</span>
        <Link
          href="/"
          className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <span className="text-1xl font-bold dark:text-white">/</span>
        <Link
          href="/about"
          className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300 ease-in-out"
        >
          About
        </Link>
      </nav>

      <div className="flex flex-col justify-start items-start min-h-screen p-8 sm:p-20 text-gray-800 dark:text-gray-200 transition-colors duration-300 relative">
        <div className="absolute top-0 right-0 m-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? 'Light' : 'Dark'}
          </button>
        </div>

        <h1 className="text-4xl font-bold">Hello, I&apos;m Lenley.</h1>
        <hr className="my-8 w-full border-t border-gray-400 dark:border-gray-700" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-left max-w-lg">
          <p className="text-base text-left">
            Email:{' '}
            <a
              href="mailto:contact@lenleyngo.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              contact@lenleyngo.com
            </a>
          </p>
          <p className="text-base text-left">
            GitHub:{' '}
            <a
              href="https://github.com/Cloud-121"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cloud-121
            </a>
          </p>
          <p className="text-base col-span-2 text-left">
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/lenley-ngo-634452268/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LenleyNgo
            </a>
          </p>
        </div>

        <hr className="my-8 w-full border-t border-gray-400 dark:border-gray-700" />

        <p className="mt-3 text-lg max-w-2xl text-left">
          I&apos;m a <strong>tinkerer at heart</strong>, always eager to explore
          new technologies and push the boundaries of what&apos;s possible with{' '}
          <strong>open-source software and hardware</strong>.
        </p>
        <p className="mt-7 text-lg text-left">
          A little curious about me? View my{' '}
          <Link
            href="/about"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            About Me
          </Link>{' '}
          page to view more about my <strong>Skills</strong>,{' '}
          <strong>Interests</strong>, and <strong>Goals</strong>.
        </p>

        <section
          className="mt-12 w-full max-w-5xl"
          aria-labelledby="feedback-heading"
        >
          <div className="flex items-center gap-4">
            <h2
              id="feedback-heading"
              className="shrink-0 text-lg font-bold text-gray-500 dark:text-gray-400"
            >
              Feedback I&apos;ve received
            </h2>
            <div className="h-px flex-grow bg-gray-300 dark:bg-gray-700"></div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <figure
                key={`${testimonial.attribution}-${index}`}
                className="flex flex-col rounded-lg border border-blue-500/15 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:bg-gray-800/80"
              >
                <blockquote className="flex-grow text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                  <span aria-hidden="true" className="text-lg text-blue-500">
                    &ldquo;
                  </span>
                  {testimonial.quote}
                  <span aria-hidden="true" className="text-lg text-blue-500">
                    &rdquo;
                  </span>
                </blockquote>
                <figcaption className="mt-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  {testimonial.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Primary Work Section */}
        <div className="w-full mt-12">
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 pb-2 mb-8 inline-block">
            Primary Work
          </h2>
          <div className="max-w-4xl">
            {projects
              .filter((p) => p.type === 'highlight')
              .map((project) => (
                <div
                  key={project.title}
                  className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20"
                >
                  <div className="md:w-2/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://placehold.co/600x400?text=Banner+Not+Found';
                      }}
                    />
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-2">
                      Primary Work
                    </span>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(project.tags ?? []).map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-md text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {project.source && (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-blue-600 hover:underline dark:text-blue-400"
                        >
                          View Source
                        </a>
                      )}
                      {project.visit && (
                        <a
                          href={project.visit}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-blue-600 hover:underline dark:text-blue-400"
                        >
                          Visit Site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Hardware Section */}
        <div className="w-full mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-500 dark:text-gray-400 flex items-center">
            <span className="mr-2">Hardware Design</span>
            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-4"></div>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.type === 'hardware')
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>
        </div>

        {/* Software Section */}
        <div className="w-full mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-500 dark:text-gray-400 flex items-center">
            <span className="mr-2">Software Development</span>
            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-4"></div>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.type === 'software')
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>
        </div>

      </div>

      <div className="mt-20 flex justify-end px-8 sm:px-20">
        <aside className="mesh-background-info">
          <strong>What are the background lines?</strong>
          <span>
            Each line is a real packet flowing across the Gulf Coast Mesh
            network. Its color represents the type of packet.
          </span>
        </aside>
      </div>

      <footer className="mt-4 pb-10 px-8 border-t border-gray-200 dark:border-gray-800 pt-10">
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          This site is{' '}
          <a
            className="text-blue-500 hover:underline"
            href="https://github.com/Cloud-121/personalsite"
          >
            open source
          </a>{' '}
          and hosted by myself on a{' '}
          <a className="text-blue-500 hover:underline" href="https://k3s.io/">
            K3s
          </a>{' '}
          cluster consisting of 4 nodes with a uptime of 99.9%!
        </p>
      </footer>
    </div>
  );
}
