import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const NewsItems = ({ title, description, imgUrl, newsUrl, author, date }) => {
  return (
    <>
      <div className="my-3">
        <Card>
          <Card.Img
            variant="top"
            src={
              imgUrl
                ? imgUrl
                : "https://g.foolcdn.com/editorial/images/742372/bitcoin-on-a-computer-chip.jpg"
            }
            alt="News"
          />
          <Card.Body>
            <Card.Title>{title}...</Card.Title>
            <Card.Text>{description}...</Card.Text>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <Button href={newsUrl} target="_blank" variant="dark btn-sm">
              Read More...
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default NewsItems;
