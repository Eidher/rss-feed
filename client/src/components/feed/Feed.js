import React, { Component } from "react";
import FeedForm from "./containers/FeedForm.container";
import FeedList from "./containers/FeedList.container";

class Feed extends Component {
  render() {
    return (
      <section id="feed">
        <div className="container h-100">
          <FeedForm />
          <FeedList />
        </div>
      </section>
    );
  }
}

export default Feed;
