import React from 'react'
// import { gridItems } from "@/data";
import { BentoGrid,BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id="about">
    <BentoGrid className="w-full py-20">
      {[
        {
          id: 1,
          title: "About Me",
          description: "I am a software engineer who loves to build things. I am passionate about technology and love to learn new things.",
        },
        {
          id: 2,
          title: "Projects",
          description: "I have worked on various projects ranging from web development to machine learning.",
        },
        {
          id: 3,
          title: "Contact",
          description: "Feel free to reach out to me if you have any questions or just want to chat.",
        },
      ].map((item) => 
      (
        <BentoGridItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </BentoGrid>
  </section>
 )
}

export default Grid