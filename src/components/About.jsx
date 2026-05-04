import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    gsap.from(".about-title", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".stat-num", {
      scrollTrigger: {
        trigger: ".sub-content",
        start: "top 80%"
      },
      textContent: 0,
      duration: 2.5,
      ease: "power3.out",
      snap: { textContent: 1 },
      stagger: 0.3
    });
  });

  return (
    <section id="about" className="noisy relative overflow-hidden px-8 lg:px-20">
      <div className="content mb-20 relative z-10">
        <h2 className="about-title lg:col-span-7 !font-serif text-white text-5xl md:text-6xl">
          Crafting unforgettable experiences, one sip at a time.
        </h2>
        <div className="sub-content lg:col-span-5">
          <p>
            We believe that every cocktail has a story. Our expert mixologists use only the finest, handpicked ingredients to create drinks that not only taste extraordinary but look like a work of art.
          </p>
          <div className="!flex !flex-row gap-10 mt-10">
            <div>
              <span><span className="stat-num">10</span>+</span>
              <p>Years of Mixology</p>
            </div>
            <div>
              <span><span className="stat-num">5</span>k+</span>
              <p>Happy Guests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;