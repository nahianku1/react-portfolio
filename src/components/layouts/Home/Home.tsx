import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="px-[80px]  pt-[40px] md:pt-[100px] pb-[130px] md:pb-0">
      <div className="flex flex-wrap-reverse gap-4 md:gap-0 justify-center md:flex-nowrap md:justify-between">
        <div className="flex flex-col items-start gap-2">
          <motion.p
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              type: "tween",
              duration: 1.3,
              delay: 0.8,
              easing: "ease",
            }}
            className="text-red-400 text-[1.7rem] md:text-[2.5rem]"
          >
            Nahian Bin Islam
          </motion.p>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 1.3, easing: "ease" }}
          >
            <TypeAnimation
              className="text-[1.5rem] md:text-[2rem] text-white"
              sequence={[
                "I am a React Developer.",
                1000,
                "I am a Backend Developer.",
                1000,
                "I am a Fullstack Developer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <p className="text-white mt-4 w-[300px] md:w-[480px]">
              I have a strong desire to work with different kinds of
              technologies and build up my career in the institution by
              utilizing my skills and knowledge. The working environment should
              allow me to understand my own values and provide me with a dynamic
              and challenging career.
            </p>
            <button className=" hover:bg-red-400 resumebtn hover:text-white  mt-[20px] px-[15px] text-white py-[6px] rounded-[30px]">
              <a href="/nahianresume.pdf" download="nahianresume.pdf">
                Get Resume
              </a>
            </button>

            <div className="text-white mt-7">
              <h1 className="mb-[15px] text-[20px]">Social Links:</h1>
              <div className="flex items-end gap-3">
                <a href="https://www.facebook.com/himelku1">
                  <div className="w-[40px] h-[40px] rounded-full bg-red-400 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      className="text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </div>
                </a>
                <a href="https://www.youtube.com/channel/UCtN6Uxg9r9jcdEs8OBqaArA">
                  <div className="w-[40px] h-[40px] rounded-full bg-red-400 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 384 512"
                      className="text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                    </svg>
                  </div>
                </a>
                <a href="https://github.com/nahianku1">
                  <div className="w-[40px] h-[40px] rounded-full bg-red-400 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 496 512"
                      className="text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/nahianku1-islam-060247148/">
                  <div className="w-[40px] h-[40px] rounded-full bg-red-400 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      className="text-[20px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1.3, easing: "ease" }}
          className="min-w-[300px] md:min-w-[400px] md:mr-[80px] min-h-[300px] md:h-[400px] rounded-full  relative bg-gradient-to-b from-[#14ffe9] via-[#ffeb3b] to-[#ff00e0] "
        >
          <div className="absolute z-30 bg-slate-800 rounded-full inset-2 bg-no-repeat bg-cover bg-[url(/himel.png)]"></div>
          <div className="absolute w-full h-full z-20 rounded-full  bg-gradient-to-b from-[#14ffe9] via-[#ffeb3b] to-[#ff00e0] [filter:blur(30px)]"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
