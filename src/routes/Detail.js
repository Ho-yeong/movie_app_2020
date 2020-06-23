import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {
      location: {
        state: { title },
      },
    } = this.props;
    if (title) {
      return <span>{title.replace(/<b>/gi, "")}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
