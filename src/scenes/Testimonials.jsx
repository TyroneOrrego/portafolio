import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-white">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">Here is what people are saying about my work.</p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-orange-300		 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-150px] before:-ml-[110px] before:left-1/2 before:content-person1 size-m"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-2xl text-center">"Carlos Ladino"</p>
          <p className="text-center text-s">
            Tyrone is an excellent technical Writer with english and spanish
            domain, capable to develope and maintain IT documentation, users
            guides and related activities..
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-orange-300 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-150px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-xl text-center">"José Benitez"</p>
          <p className="text-center text-s">
            Tyrone was responsible for documenting projects developed by the
            area's development team. I appreciated his meticulous approach to
            detailing technical documentation.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-orange-300	 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-150px] before:-ml-[110px] before:left-1/2 before:content-person3 
            "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-xl text-center">
            "Juan David Madrid"
          </p>
          <p className="text-center text-s">
            I have witnessed that he never gets tired of learning new things to
            improve himself and be competent in the job market, having very good
            skills in the area of front-end development. I recommend it without
            a doubt.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
