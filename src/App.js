import React, { Component } from "react";

import Header from "./components/Header";
import Posts from "./components/Posts";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import "./App.css";

import settings from "./settings";

class App extends Component {
  state = {
    isAuthenticated: false,
    siteName: "",
    siteDescription: "",
    posts: []
  };
  componentDidMount() {
    // console.log(this.props.appSetting);

    fetch(`${settings.rest_route}`)
      .then(response => response.json())
      .then(settings => {
        this.setState({
          siteName: settings.name,
          siteDescription: settings.description
        });
      })
      .catch(error => console.error(error));

    fetch(`${settings.rest_route}wp/v2/posts`)
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts });
      })
      .catch(error => console.error(error));
  }
  render() {
    const loginMessage = this.state.isAuthenticated ? (
      <div
        style={{
          padding: "1rem",
          textAlign: "center",
          background: "green",
          color: "white",
          width: "100%"
        }}
      >
        LOGGED IN
      </div>
    ) : (
      <div
        style={{
          padding: "1rem",
          textAlign: "center",
          background: "red",
          color: "white",
          width: "100%"
        }}
      >
        NOT LOGGED IN
      </div>
    );
    console.log(settings.rest_route);
    return (
      <div className="page">
        {loginMessage}
        <Header
          siteName={this.state.siteName}
          siteDescription={this.state.siteDescription}
        />
        <div id="content" className="site-content">
          <Posts posts={this.state.posts} />
          <Aside
            isAuthenticated={this.state.isAuthenticated}
            appService={this.props.appService}
            setIsAuthenticated={isAuthenticated =>
              this.setState({ isAuthenticated })
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
