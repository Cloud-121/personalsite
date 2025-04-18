"use client";
import { useState, useEffect } from "react";
import Background from "@/components/Background";
import Link from "next/link";

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
      <div className="flex flex-col justify-start items-start min-h-screen p-8 sm:p-20 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="absolute top-0 right-0 m-4">
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Hiya, My name is Lenley. I often go by Scarlett online, I love
          promoting Open Source software and hardware and I&apos;m always looking to
          learn new things.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Interests</h2>
        <p className="mt-2">
        I enjoy contributing to open-source projects to support development and deepen my understanding of the technologies involved. I'm passionate about open-source software and hardware, with experience in Python, JavaScript, and Bash, and I'm currently learning more about Kubernetes and Rust. I enjoy exploring new challenges through a variety of open-source projects, many of which are available on my GitHub.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Goals</h2>
        <p className="mt-2">
          My primary goal currently is to discover more about the world of open-source software and hardware, and contribite to the development of open-source projects. 
        </p>
      

        <h2 className="text-3xl font-semibold mt-8">Contact</h2>
        <p className="mt-2">
          If you&apos;d like to reach out, feel free to email me at{" "}
          <a className="text-blue-500" href="mailto:contact@lenleyngo.com">
            contact@lenleyngo.com
          </a>
        </p>

      </div>
    </Background>
  );
}
