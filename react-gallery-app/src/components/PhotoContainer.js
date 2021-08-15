/*
 * PhotoContainer.js
 */

// Import modules
import React, {Component} from "react"

// Import relevant components
import Photo from "./Photo";
import NotFound from "./NotFound";

class PhotoContainer extends Component {

    render () {
        const { currentPhotos } = this.props;
        console.log("The photo array to be mapped:", currentPhotos);
        let photoList;

        if (currentPhotos.length > 0) {
            photoList = currentPhotos.map( photo => 
                <Photo
                  url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
                  key={photo.id}
                />)
        }
        else {
            photoList = <NotFound />
        }

        return (
            <div className = "photo-container">
                <h2>Results</h2>
                <ul>
                 {photoList}
                </ul> 
            </div>
        )
    }
}

export default PhotoContainer;