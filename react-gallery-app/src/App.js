/**
 * App.js
 */

// Import modules
import React, {Component} from "react";
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";

// Import child components
import SearchForm from "./components/SearchForm"; 
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import PageNotFound from "./components/PageNotFound";

// API key
import APIKey from "./config"
console.log("API Key:", APIKey);

class App extends Component {
  
  // Initialize application state
  state = {
    currentTag: "",
    currentPhotos: [],
    loading: false
  }

  // A callback function that changes state property "currentTag"
  handleTagChange = (tag) => {
    console.log("HandleTagChange invoked!");
    this.setState ({
      currentTag: tag,
      loading: true
    })
    
    // Please note that the console log will execute before the state mutation!
    console.log("The current tag has been updated to:", tag);
  }

  // A callback function that fetches photo with API key
  fetchPhotos = (tag) => {
    console.log("Data is being fetched with the tag:", tag)
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
          currentPhotos: responseData.photos.photo,
          loading: false
      })
    })
    .catch(error => {
      console.log("Error occurred when fetching and/or parsing data", error);
    });
  } 

  componentDidMount() {
    console.log("I should be invoked after render!");

    if (this.props.location.pathname.includes("search")) {
      let newTag = this.props.location.pathname.replace("/search/", "");
      console.log("Tag to be assigned to the current tag:", newTag);
      this.handleTagChange(newTag);
      this.fetchPhotos(newTag);
    }
    else if (this.props.location.pathname.includes("大阪")) {
      let newTag = this.props.location.pathname.replace("/", "");
      console.log("Tag to be assigned to the current tag:", newTag);
      this.handleTagChange(newTag);
      this.fetchPhotos(newTag);
    }
    else if (this.props.location.pathname.includes("リンゴ")) {
      let newTag = this.props.location.pathname.replace("/", "");
      console.log("Tag to be assigned to the current tag:", newTag);
      this.handleTagChange(newTag);
      this.fetchPhotos(newTag);
    }
    else if (this.props.location.pathname.includes("バナナ")) {
      let newTag = this.props.location.pathname.replace("/", "");
      console.log("Tag to be assigned to the current tag:", newTag);
      this.handleTagChange(newTag);
      this.fetchPhotos(newTag);
    }
    else if (this.props.location.pathname.includes("/")) {
      let newTag = this.props.location.pathname.replace("/", "sunset");
      console.log("Tag to be assigned to the current tag:", newTag);
      this.handleTagChange(newTag);
      this.fetchPhotos(newTag);
    }
  }
  
  componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname ) {

      if (this.props.location.pathname.includes("search")) {
        let newTag = this.props.location.pathname.replace("/search/", "");
        console.log("Tag to be assigned to the current tag:", newTag);
        this.handleTagChange(newTag);
        this.fetchPhotos(newTag);
      }
      else if (this.props.location.pathname.includes("大阪")) {
        let newTag = this.props.location.pathname.replace("/", "");
        console.log("Tag to be assigned to the current tag:", newTag);
        this.handleTagChange(newTag);
        this.fetchPhotos(newTag);
      }
      else if (this.props.location.pathname.includes("リンゴ")) {
        let newTag = this.props.location.pathname.replace("/", "");
        console.log("Tag to be assigned to the current tag:", newTag);
        this.handleTagChange(newTag);
        this.fetchPhotos(newTag);
      }
      else if (this.props.location.pathname.includes("バナナ")) {
        let newTag = this.props.location.pathname.replace("/", "");
        console.log("Tag to be assigned to the current tag:", newTag);
        this.handleTagChange(newTag);
        this.fetchPhotos(newTag);
      }
      else if (this.props.location.pathname.includes("/")) {
        let newTag = this.props.location.pathname.replace("/", "sunset");
        console.log("Tag to be assigned to the current tag:", newTag);
        this.handleTagChange(newTag);
        this.fetchPhotos(newTag);
      }
    }
  }
  
  render () {
    return (
      <div className = "container">
      <SearchForm
      handleTagChange = {this.handleTagChange}
      />
      <Nav />
      <br></br>
      {
        (this.state.loading)
        ? <h3>Loading...</h3>
        : <Switch>
          <Route exact path ="/" render = {() =>
            <PhotoContainer
            tag = {"sunset"}
            currentPhotos = {this.state.currentPhotos}
            currentTag = {this.state.currentTag}
            />} 
          />

          <Route exact path ="/大阪" render = {({match}) => 
            <PhotoContainer
            tag = {match.params.tag}
            currentPhotos = {this.state.currentPhotos}
            currentTag = {this.state.currentTag}
            />}
          />

          <Route exact path ="/リンゴ" render = {({match}) => 
            <PhotoContainer
            tag = {match.params.tag}
            currentPhotos = {this.state.currentPhotos}
            currentTag = {this.state.currentTag}
            />}
          />

          <Route exact path ="/バナナ" render = {({match}) => 
            <PhotoContainer
            tag = {match.params.tag}
            currentPhotos = {this.state.currentPhotos}
            currentTag = {this.state.currentTag}
            />}
          />

          <Route path ="/search/:tag" render = {({match}) => 
            <PhotoContainer
            tag = {match.params.tag}
            currentPhotos = {this.state.currentPhotos}
            currentTag = {this.state.currentTag}
            />}
          />

          <Route component = {PageNotFound}/>
        </Switch>
        }
        </div>
    );
  }
}

export default withRouter(App);
