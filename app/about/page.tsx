'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Background = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) => (
  <div
    className={`min-h-screen w-full transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}
  >
    {children}
  </div>
);

export default function About() {
  console.log(`

                                  .            .
       .                     .                                    .
                  .

                                                               ..      .
                  .           .                                         .
                           .....     .                      .....
                            ..-...      .  .......... ......=::.. .            .
                          ......-... ......=......:=..:*......-.
                          ..:......-.*==*..-.::..::*:.-.:--...:.  .
                          ...:.  .+..=+-=:.:...-+::.=-@.=.....::
                          ......::.==+*:=..-.:. .:-..:.:*=.-*.*.
  .                         .-.=.+:=:*%#-...........=::..:-:.*..   .
                           ...=:=.+.%.:::::.*.......::+...:.#.=.
                            .-.+.=+:..+-.=-..*.==#....-=..:.:*#-..
                          ..-++=.#+....+...-=.-.+.#....=+:.::*:=..
                          ..*+:-:.=-:..--...=%.*:%--...:=.=+:===..
.                     .   ..-*%..#*.:=.....+++...:.@*=:.:.=.#=*==.
.                         ..-=@*+-#..=.......#-.%=:.%.+-...+.%:.-.        .
..       .                ..-@%+..*==....  ............:*..-+.=%..
=.                        ...=#=....... .         ......:%..+-%@+.
==..                   .:-:.*+%:.....-#%#--::=.. ...:-..:#+...*+:+..
.=+...               ...=-.+=.*=...#=-===-=+#.  ....+:.-**:%.-*.+--:.... .
..+=...          .   ......*...@+. .+-*@#@=*.. ....==+::...:#:#.+%-:.:.
 ..-==...            .....:..:..:#...@....*......%:.%-:-.::=#.#::.@.:...
  ...=+....            ...-..+....-:..::-:...=**:..*@-.:-:.#+.*:-+.%-=...
. .....**...         ....:......-...%....*+*.%:....=@-:..:+--%..#*=.=:-...       .
.    ....=*.....    ....-...=..--...-...-+@.-..:..:.@@@@:=:#.:::-+.-.:.-..     .
 .     ...--=:...  ..:-=...-.*+-..=-...*%@%.......+##%#@-#=:.--..=..-=:....    .
         ....*+#....::=.....==-....:=@-#%+:*#%@%@:+=*@#%--+.:==:*.:....:...
             ...*+*-:.....%@***+-%=*+=-%%:%=.#*##%-=-:+#....*..+*#+..+=..
            . .....+**+**:.-.:....-=+=-*:#-=#+:-*+..=:.........:.#%-=.+...
.       .       ..-....+++*=+*+:....-.:.@.-..=-...+...       ..-.::...:-:..
   .           ........+:-...-........-=+:-....-:....        ..=......-.-...
.         .     .:..:.+*........    ..-*-...++.....          ........=..-...
.             ......::##@#+*.+:.     ...:#*..              .     ...-...=.:.  .
.             ..:%...+*..#:=%-....                 .         .  ...-.   =..:..
.             ..@..+..+.:*.=#:.:..                 ..   ......+--...    =..+...
            . .-+#.#..@.:#.*%......                ..:%:...........@....=.:+... ..
              ..@--#::%+:..--...:.....             ..%...:........:.++..=.:.......
              ..#@....*@##*+-..:::::...... ..........%.+........:..-+*:.=... ...:.
              ..:%-....=@%+.:+.......-..-. ..+--:....*.%.......::..#.**.-.........
          .....-#++###+:=%+.-.:.-.-...........--..:.......#--#-.=-.*.:=+=+.:..:...
           .:.-.%=.......@--..=.:..:-..=...:..:.:........=-%--%=:*...%+.=-.......:
           ..-:.*:.:....-=:%..-. ......-.. -... .-...-...-. ..=.*@%.*..=*:...:....
.          .-..:=.........@--...-:....::...:..::..-..:.-:.....%......:..#.:..-....
  .      ..-.--:=.      ..#+#.--....:..:......:......:.........=..  .-..+.-..-..
.      ...::....+.      ...@##:=....:..:....-.:..-...:--... .%%++.  ....+-.=.:.. .
.       .:...:..+....     .***.*.....::.......... ... ...   .*%@:.  ... *=*#.-..
          ..:..:@.        .+*.-.-=...                       .#.%*.      *.++....
..       .......:=...     .:%+-.::=...          .         . +:.+%..   ..+--.:.
..  .    ....:....+..     .==.:.....:..                   ..#..#*:..  ...=:...
..       ...::...%:*.......-#-=.........                  ...%-.:%:....=:...=..
..         ...  ..#.**..:..*:...                           ...=#%==...:...:....
..              ....=@...#*+...                              ..#*@.:.....-:....

  `);

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

  return (
    <Background theme={isDarkMode ? 'dark' : 'light'}>
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

        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-lg max-w-2xl">
          My name is Lenley, but I often go by <strong>Scarlett</strong> online.
          I&apos;m passionate about{' '}
          <strong>open-source software and hardware</strong>, and I enjoy
          learning and pushing my boundaries in many of the fields I&apos;m in.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Current Work</h2>
        <p className="mt-2 max-w-2xl">
          I&apos;ve partnered with companies and currently manage{' '}
          <a
            href="https://gulfcoastmesh.org/"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition duration-300 ease-in-out"
          >
            Gulf Coast Mesh
          </a>
          , a project building a <strong>statewide mesh network</strong> that
          interconnects communities across Louisiana and the broader Gulf Coast.
          I work with volunteers and industry partners to grow resilient radio
          infrastructure using open mesh technologies like MeshCore.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Interests</h2>
        <p className="mt-2">
          I&apos;m a <strong>strong believer</strong> in the{' '}
          <strong>
            fundamental freedom that open-source software and hardware provide
            across all fields
          </strong>
          . I firmly believe in your right to use technology as you see fit.
          Open source has been instrumental not only in preserving my own
          freedoms but also in helping me learn and discover new technologies
          and techniques, both as a developer and as an individual.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Goals</h2>
        <p className="mt-2">
          My main goal is to push myself further in the{' '}
          <strong>world of open-source</strong>. I&apos;m driven to discover new
          innovations and make meaningful contributions to open-source projects,
          and seeking challenges that expand my knowledge and stregthen my
          understanding.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Skills</h2>
        <div className="mt-2">
          <p>
            I&apos;m a <strong>tinkerer at heart</strong>, constantly exploring
            and expanding my knowledge. My passion lies in open-source software
            and hardware, where I love to build and contribute. I&apos;m always
            pushing my skills by working on many types of projects, many of
            which you can find on my GitHub.
          </p>
          <ul className="list-disc pl-5 mt-4">
            {' '}
            {/* Added basic list styling for better appearance */}
            <li>
              <strong>Programming Languages:</strong> Python, JavaScript, C++,
              Rust, Bash, PowerShell
            </li>
            <li>
              <strong>DevOps/Orchestration:</strong> Kubernetes, Docker
            </li>
            <li>
              <strong>Operating Systems:</strong> Linux (Debian-based,
              Arch-based, and Alpine-based distributions)
            </li>
            <li>
              <strong>Version Control:</strong> Git & GitHub
            </li>
            <li>
              <strong>Software Development:</strong> Plugin Development,
              Automation, Tool Creation, Modular Designs, Team Collaboration
            </li>
            <li>
              <strong>Hardware:</strong> PCB Design, 3D Modeling, Reverse
              Engineering
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mt-8">Contact</h2>
        <p className="mt-4 text-xl">
          {' '}
          {/* Increased text size for immediate impact */}
          If you&apos;d like to reach out, feel free to email me at{' '}
          <a
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-bold transition duration-300 ease-in-out"
            href="mailto:contact@lenleyngo.com"
          >
            contact@lenleyngo.com
          </a>
        </p>
      </div>
    </Background>
  );
}
