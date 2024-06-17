import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-orange-500">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            With 4+ years of experience, I have been part of cross-functional
            teams and developed several literature products and
            software-oriented technical and non-technical documentation. I
            facilitated the opening and connecting of different markets through
            my collective written and research exercises and helped in the
            development and establishment of systems to organize the different
            documentation developed.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-300	 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I have been part of several remote teams with multicultural
            backgrounds. I have put into practice all my array of soft skills,
            such as assertive communication, teamwork, problem solving,
            autonomy, and adaptability, to always go the extra mile.
          </p>
        </motion.div>

        {/* Research */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Research
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-300	 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Due to my background as a researcher, I have used my skills to embed
            my technical writing skills with the current trends and dynamics in
            terms of the development of high-end products.
          </p>
        </motion.div>
        {/* Curiosity */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Curiosity
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-300	 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            As an ongoing curiosity-driven individual, I have always sought new
            nuances and perspectives to make my work as detailed and simple as
            possible using the latest technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
