import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../components/Card/Card";
import { properties } from "../constants/data";
import axios from "axios";

const Projects = () => {
  const [projects,setProjects] = useState([])

  const fetchProjects=async()=>{
    const response = await axios.get('http://localhost:8980/getall')
    .catch(error=>console.log(error))
    setProjects(response.data)
  }

  useEffect(()=>{
    fetchProjects()
  },[])
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
          className="bg-white dark:bg-slate-900 text-slate-900 dark:text-stone-300 mt-5 mb-5 font-inter"
        >
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((item,index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Projects;
