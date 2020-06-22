import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    items: [],
  };

  getMovie = async () => {
    const {
      data: { items },
    } = await axios.get("/v1/search/movie.json", {
      params: { query: "분노의", display: 20 },
      headers: {
        "X-Naver-Client-Id": "08Ky4NuudFEd_oCD5npL",
        "X-Naver-Client-Secret": "OMXpusCdtI",
      },
    });
    console.log(items);
    this.setState({ items, isLoading: false });
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading, items } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {items.map((movie) => (
              <Movie
                key={movie.image}
                title={movie.title}
                poster={movie.image}
                rating={movie.userRating}
                director={movie.director}
                year={movie.pubDate}
                actor={movie.actor}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
