import {} from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "../Hero/Hero.css";

const Home = () => {
  return (
    <>
      <section className="hero-wrapper flex justify-around items-start">
        <div className="left">
          <div className="title mt-10">
            <motion.h1
              initial={{ Y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="text-white font-bold text-start"
            >
              Discover Your <br />
              Dream Homes and <br /> properties
            </motion.h1>
          </div>
          <div className="desc ">
            <p className="title-para">
              Discover a curated collection of homes that combine luxury,
              comfort, and style, tailored to meet your unique preferences.
            </p>
          </div>
          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={45} />
            <input type="text" name="" id="" />
            <button className="button srch-btn">Search</button>
          </div>

          {/* CounterUP */}
          <div className="stats text-white counter  ">
            <div className="counter   ">
              <p className="text-white text-2xl font-bold text-center">
                <CountUp start={9000} end={10000} duration={4} />
                <span className="plus text-orange-400">+</span>
              </p>
              <p className="font-bold text-base counter-para">
                Premium Products
              </p>
            </div>
            <div className="counter   ">
              <p className="text-white text-2xl font-bold text-center">
                <CountUp start={1700} end={2100} duration={4} />
                <span className="plus text-orange-400">+</span>
              </p>
              <p className="font-bold text-base counter-para">Our Customers</p>
            </div>
            <div className="counter   ">
              <p className="text-white text-2xl font-bold text-center">
                <CountUp start={1} end={23} duration={4} />
                <span className="plus text-orange-400">+</span>
              </p>
              <p className="font-bold text-base counter-para">Awards</p>
            </div>
          </div>
        </div>
        <div className="right">
          <motion.div
            initial={{ Y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              type: "spring",
            }}
            className="imageContainer"
          >
            <img src="./hero.jpg" alt="hello" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
