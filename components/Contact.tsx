"use client"

import { motion } from "framer-motion"



export const Contact = () => {
    return (
        <section className=" overflow-x-clip 
        py-32 text-white max-w-[1200px] mx-auto px-4">
        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        viewport={{once: true}}
        className="grid lg:grid-cols-2 gap-16"
        >
        <div className="space-y-12">
        <motion.h2
         initial={{opacity: 0, x: -20}}
         whileInView={{opacity: 1, x: 0}}
         transition={{duration: 0.6, delay: 0.2}}
         className="text-7xl font-bold text-gray-300"
        >
        Get in <span className="text-gray-500">touch</span>
        </motion.h2>

        <motion.div
          initial={{opacity: 0, x: -20}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          className="glass p-8 rounded-2xl space-y-8"
        >
            <div className="space-y-2">
                <p className="text-lg text-purple-300">Phone</p>
                <a href="tel: +917575888255" 
                className="text-2xl font-semibold hover:text-purple-300 transition duration-300 
                flex items-center gap-2">
                    +91 7575888255 
                    <span className="text-purple-300">↗</span>
                </a>
               
            </div>
            <div className="space-y-2">
             <p className="text-lg text-gray-300">Email</p>
             <a href="mailto: sa263797@gmail.com"
              className="text-3xl lg:text-4xl font-semibold hover:text-gray-400 transition
              duration-300 flex items-center gap-2">
                sa263797@gmail.com 
                <span className="text-gray-500">↗</span>
              </a>
            </div>

        </motion.div>
        </div>
        <div className="space-y-12">
          <p className="text-lg text-gray-300">Work</p>
          <address className="text-xl non-italic leading-relaxed">
            Shaheed Bhagat Singh State University,<br/>
            152001, Ferozepur, <br/>
            Punjab, India..
          </address>

        </div>
        <motion.div
        initial={{opacity: 0, x: 20}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.6, delay: 0.6}}
        className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.0307263787076!2d74.64985217504473!3d30.913765276862133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919e8ed9b3adee5%3A0x7df4354329e442e6!2zU2hhaGVlZCBCaGFnYXQgU2luZ2ggU3RhdGUgVW5pdmVyc2l0eSAo4Ki44Ki84Ki54KmA4KimIOCoreCol-CopCDgqLjgqL_gqbDgqJgg4Ki44Kif4KmH4KifIOCor-CpguCoqOCpgOCoteCouOCov-Con-CpgCk!5e0!3m2!1sen!2sin!4v1741448153718!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{border: 0}}
          allowFullScreen
          loading="lazy"
          >
          </iframe>

        </motion.div>
        
        
        
        </motion.div>
        </section>
    )
}