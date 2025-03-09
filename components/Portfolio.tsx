"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import project1 from "../assets/proj1.png.png";
import project2 from "../assets/proj2.png.png";
import { useMotionTemplate, motion, useMotionValue, animate } from "framer-motion";

const projects = [
    {
        id: 1,
        year: 2024,
        title: "Jarvis Assistant",
        description: "Jarvis is a Python-based virtual assistant designed to automate tasks, provide information, and enhance productivity. It features voice recognition, command execution, and task automation to assist users efficiently.",
        image: project1
    },
    {
        id: 2,
        year: 2024,
        title: "JobScout",
        description: "JobScout is a web application built using HTML, CSS, JavaScript, Flask, and MySQL. It helps users search for job opportunities, track applications, and manage career prospects.",
        image: project2 
    }
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

    return (
        <motion.section 
            style={{ backgroundImage }}
            id="portfolio" className="py-32 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                <h2 className="text-6xl font-bold mb-10">
                    Selected <span className="text-gray-400">Projects</span>
                </h2>
                <div>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group"
                        >
                            <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                            <h3
                                className={`text-3xl font-semibold group-hover:text-purple-300 transition-colors duration-300 ${
                                    selectedProject.id === project.id ? "text-purple-300" : ""
                                }`}
                            >
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-purple-200 my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    {selectedProject && (
                        <Image 
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                            width={800}
                            height={450}
                        />
                    )}
                </div>
            </div>
        </motion.section>
    );
};
