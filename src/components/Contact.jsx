import React from "react";
import { storeInfo, openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    // Parallax leaves
    gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      }
    })
    .fromTo("#f-left-leaf", { y: 100, x: -50 }, { y: -50, x: 0 }, 0)
    .fromTo("#f-right-leaf", { y: 100, x: 50 }, { y: -50, x: 0 }, 0);

    // Fade in text elements
    gsap.from(".contact-fade-up", {
      scrollTrigger: {
        trigger: "#contact .content",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });
  });

  return (
    <section id="contact" className="noisy">
      <img src="/images/footer-left-leaf.png" alt="left leaf" id="f-left-leaf" />
      <img src="/images/footer-right-leaf.png" alt="right leaf" id="f-right-leaf" />
      
      <div className="content relative z-10">
        <h2 className="contact-fade-up">{storeInfo.heading}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="address contact-fade-up">
            <h3 className="text-yellow">Location</h3>
            <p className="mt-4 opacity-90 font-serif tracking-wide">{storeInfo.address}</p>
          </div>
          
          <div className="contact-info contact-fade-up">
            <h3 className="text-yellow">Reach Us</h3>
            <div className="space-y-3 mt-4 opacity-90">
              <p className="font-serif tracking-wide">{storeInfo.contact.phone}</p>
              <p className="font-serif tracking-wide">{storeInfo.contact.email}</p>
            </div>
          </div>

          <div className="hours contact-fade-up">
            <h3 className="text-yellow">Hours</h3>
            <div className="space-y-4 mt-4">
              {openingHours.map((item, index) => (
                <div key={index} className="flex justify-between items-center max-w-[340px] mx-auto md:mx-0 border-b border-white/10 pb-2">
                  <span className="font-modern-negra lg:text-3xl text-2xl tracking-wide">{item.day}</span>
                  <span className="opacity-80 lg:text-2xl text-xl font-serif tracking-wide">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="socials flex justify-center gap-5 mt-10 contact-fade-up">
          {socials.map((social, index) => (
            <a
              href={social.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="hover:-translate-y-2 hover:scale-110 transition-all duration-300"
            >
              <img src={social.icon} alt={social.name} className="w-8 h-8 object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
