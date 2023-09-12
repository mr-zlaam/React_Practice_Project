import { Component } from "react";
import NewsItems from "./NewsItems";
import { Button } from "react-bootstrap";
import Loader from "./Loader";
import PropTypes from "prop-types";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
  async componentDidMount() {
    // console.log("What are you trying to achieve in my inspect?");
    let url = `https://newsapi.org/v2/top-headlines?q=news&category=${this.props.category}&apiKey=5c6398375f1b49168c16df24ae538e08&page=1`;
    this.setState({ loading: true });
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ articles: data.articles, loading: false });
  }
  HandleNextClick = async () => {
    console.log("NextClick");
    let url = `https://newsapi.org/v2/top-headlines?q=news&category=${
      this.props.category
    }&apiKey=5c6398375f1b49168c16df24ae538e08&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      page: this.state.page + 1,
      articles: data.articles,
      loading: false,
    });
  };
  HandlePrevClick = async () => {
    console.log("PrevClick");
    let url = `https://newsapi.org/v2/top-headlines?q=news&category=${
      this.props.category
    }&apiKey=5c6398375f1b49168c16df24ae538e08&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let response = await fetch(url);
    let data = await response.json();

    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center font-bold">NewsMonkey-Latest</h1>
        {this.state.loading && <Loader />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItems
                    author={element.author}
                    date={element.publishedAt}
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 76)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        {!this.state.loading && (
          <div className=" flex justify-between">
            <Button
              variant="dark"
              type="button"
              disabled={this.state.page <= 1}
              onClick={this.HandlePrevClick}
            >
              ← prev
            </Button>
            <Button variant="dark" onClick={this.HandleNextClick}>
              Next→{" "}
            </Button>
          </div>
        )}
      </div>
    );
  }
}
News.defaultProps = {
  category: "sports",
};
News.propTypes = {
  category: PropTypes.string,
};
export default News;
