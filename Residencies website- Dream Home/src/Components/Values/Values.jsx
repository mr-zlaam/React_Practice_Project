import {} from "react";
import "../Values/Values.css";
import Accordion from "react-bootstrap/Accordion";

const Values = () => {
  return (
    <>
      <section className="v-wrapper pb-20 ">
        <div className="right">
          <div className="imageContainer px-2">
            <img src="./hero.jpg" alt="hello" />
          </div>
        </div>
        <div className="acc-controller">
          <div className="ourValues">
            <h5 className="text-orange-600 text-2xl font-bold text-center">
              Our Values
            </h5>
            <h2 className="text-blue-900 text-3xl font-bold text-center values">
              <span>Values We Give to You</span>
            </h2>
            <p className="text-center">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </p>
          </div>
          <Accordion defaultActiveKey="0" className="accordians">
            <Accordion.Item eventKey="0" className="items-acc">
              <Accordion.Header className="font-bold text 2xl head-acc ">
                <h4 className="font-bold text-lg acc-head ">
                  Best interests in market
                </h4>
              </Accordion.Header>
              <Accordion.Body className="acc-body">
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="items-acc">
              <Accordion.Header className="font-bold text 2xl head-acc ">
                <h4 className="font-bold text-lg acc-head ">
                  Prevent unstable prices
                </h4>
              </Accordion.Header>
              <Accordion.Body className="acc-body">
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="items-acc">
              <Accordion.Header className="font-bold text 2xl head-acc ">
                <h4 className="font-bold text-lg acc-head ">
                  Best price on the market
                </h4>
              </Accordion.Header>
              <Accordion.Body className="acc-body">
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Values;
