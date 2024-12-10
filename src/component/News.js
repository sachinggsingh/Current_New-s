import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Footer from "./Footer";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
    static defaultProps = {
        country: "us",
        pageSize: 10,
        category: "general",
        publishedAt: "2024-11-07T12:13:30Z",
        author: "PTI",
    };
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        publishedAt: PropTypes.string,
        author: PropTypes.string,
    };
    article = [];
    capatlizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        // console.log("NewsItem constructor");
        this.state = {
            article: this.article,
            // loading: false,
            page: 1,
        };

        document.title = `${this.capatlizeFirstLetter(this.props.category)} - Current News`;
    }

    
    updateNews = async () => {
        this.setState({ loading: true });
        try {
            const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=f09a9e68a3f24cdb8384663c5ddffe75&pageSize=${this.props.pageSize}&page= ${this.state.page}`;

            const data = await fetch(url);
            const parsedData = await data.json();
            this.setState({
                article: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false,
            });
        } catch (error) {
            console.log(error);
            this.setState({ loading: false});
        
        }
    };

    async componentDidMount() {
        this.updateNews();
    }
    handlePreviousclick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.setState({ loading: true });
        this.updateNews();
    };
    handleNextclick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.setState({ loading: true });
        this.updateNews();
    };
    render() {
        // console.log(this.state.article);
        return (
            <div className="container justify-content-center">
                <h1 className="text-center my-2" style={{ marginTop: "30px", marginBottom: "30px" }}>Current News Headlines</h1>
                {this.state.loading && <Spinner />}
                <div
                    className="row my-3 mb-3 justify-content-center"
                    style={{ marginLeft: "40px" }}
                >
                    {!this.state.loading &&
                        this.state.article.map((e) => {
                            return (
                                <div
                                    className="col-md-4"
                                    key={e.url}
                                    style={{
                                        marginBottom: "20px",
                                        marginTop: "30px",
                                        height: "400px",
                                        width: "400px",
                                    }}
                                >
                                    <NewsItem
                                        title={e.title ? e.title.slice(0, 45) : " "}
                                        imageUrl={e.urlToImage}
                                        newsUrl={e.url}
                                        author={e.author ? e.author.slice(0, 20) : " "}
                                        publishedAt={e.publishedAt}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div className="d-flex justify-content-between my-3 container">
                    <button
                        disabled={this.state.page <= 1}
                        className="btn btn-dark"
                        onClick={this.handlePreviousclick}
                    >
                        &larr; Previuos
                    </button>
                    <button
                        disabled={
                            Math.ceil(this.state.totalResults / 20) === this.state.page
                        }
                        className="btn btn-dark"
                        onClick={this.handleNextclick}
                    >
                        Next &rarr;
                    </button>
                </div>
                <Footer />
            </div>
        );
    }
}

export default News;
