import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMysql, SiMongodb, SiPython, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const stackItems = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
  { id: 3, name: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
  { id: 4, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 5, name: "Next.js", icon: TbBrandNextjs, color: "#ffffff" },
  { id: 6, name: "Python", icon: SiPython, color: "#3776AB" },
  { id: 7, name: "MySQL", icon: SiMysql, color: "#4479A1"}
];

export const Stack = () => {
  return (
    <section className="py-8 glass" id="stack">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-4xl text-gray-200 font-bold mb-6">My Stack</h2>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {stackItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center rounded-xl p-4">
              {React.createElement(item.icon, {
                className: "w-16 h-16", // Reduced size
                style: { color: item.color },
              })}
              <p className="text-gray-400 text-sm mt-2 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
