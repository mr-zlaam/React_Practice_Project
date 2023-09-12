import "../Residences/Residence.css";

import { Card } from "react-bootstrap";
const Residence = () => {
  return (
    <>
      <section className="r-wrapper">
        <div className="r-container">
          <div className="r-head ">
            <span className="text-orange-600 text-2xl mt-20 font-bold">
              Best Choices
            </span>
            <span className="text-blue-600 font-bold text-3xl ">
              Popular Residencies
            </span>
          </div>
          <div className="card-controller">
            <div className="cards row first-row">
              <Card
                className="col-md-4 mx-3 small-card mb-3"
                style={{ width: "18rem" }}
              >
                <Card.Img className="imgs" variant="top" src="./r1.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h2 className="text-xl font-bold">Tranquil Residence</h2>
                  </Card.Title>
                  <Card.Text>
                    <span className="text-orange-700">$</span>
                    <span className="font-semibold">1,250,000</span>
                    <br />

                    <span className="font-semibold">
                      2343 Maple Lane, Greenview Park, Cityville
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="col-md-4 mx-3 small-card mb-3"
                style={{ width: "18rem" }}
              >
                <Card.Img className="imgs" variant="top" src="./r2.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h2 className="text-xl font-bold">Harborfront Haven</h2>
                  </Card.Title>
                  <Card.Text>
                    <span className="text-orange-700">$</span>
                    <span className="font-semibold">850,000</span>
                    <br />
                    <span className="font-semibold">
                      567 Marina Avenue, Bayfront Towers, Oceanville
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="col-md-4 mx-3 small-card"
                style={{ width: "18rem" }}
              >
                <Card.Img className="imgs" variant="top" src="./r3.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h2 className="text-xl font-bold">Sunset Valley</h2>
                  </Card.Title>
                  <Card.Text>
                    <span className="text-orange-700">$</span>
                    <span className="font-semibold">650,000</span>
                    <br />

                    <span className="font-semibold">
                      789 Oak Street, Sunset Valley, Countryside
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="row cards second-row">
              <Card
                className="col-md-4 mx-3 small-card"
                style={{ width: "18rem" }}
              >
                <Card.Img className="imgs" variant="top" src="./r7.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h2 className="text-xl font-bold">Urban Oasis</h2>
                  </Card.Title>
                  <Card.Text>
                    <span className="text-orange-700">$</span>
                    <span className="font-semibold">3,500,000</span>
                    <br />
                    <span className="font-semibold">
                      1010 Main Street, Metro Lofts, Downtown Central
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="col-md-4 mx-3 small-card mt-3"
                style={{ width: "18rem" }}
              >
                <Card.Img className="imgs" variant="top" src="./r5.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h2 className="text-xl font-bold">Downtown Haven</h2>
                  </Card.Title>
                  <Card.Text>
                    <span className="text-orange-700">$</span>
                    <span className="font-semibold">450,000</span>
                    <br />

                    <span className="font-semibold">
                      2222 Magnolia Drive, Prestige Estates, Hillside Heights
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="col-md-4 mx-3 small-card mt-3"
                style={{ width: "18rem" }}
              >
                <Card.Img className="imgs" variant="top" src="./r6.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h2 className="text-xl font-bold">Manor Estate</h2>
                  </Card.Title>
                  <Card.Text>
                    <span className="text-orange-700">$</span>
                    <span className="font-semibold">750,000</span>
                    <br />
                    <span className="font-semibold">
                      4444 Elm Street, Downtown Haven, Cityscape
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Residence;
