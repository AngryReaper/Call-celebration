import React, {Component} from 'react';
import ribbonEdge from '../images/ribbon-edge.jpg';
import FrameModal from './FrameModal';

class Gallery extends Component {
  state = {
    currentGallery: undefined,
    selectedPhoto: undefined
  };

  handleImageClick = (gallery, image) => {
    this.setState(() => ({
      currentGallery: gallery,
      selectedPhoto: 'big-'+image
    }));
  }

  handleClearImageSelect = () => {
    this.setState(() => ({
      currentGallery: undefined,
      selectedPhoto: undefined
    }));
  }

  render () {
    return (
      <div className="gallery-wrapper">
        <h1 id="gallery" className="block-title">Галерея</h1>
        {this.props.appState.galleriesTitles.map((gallery, index) => {
        return (
        <div className="gallery-block" key={`gallery-${index}`}>
          <p className="gallery-block-title">{gallery}</p>
          <div className="gallery-block-film">
            <img src={ribbonEdge} alt=""/>
            <div className="film-frames">
              {this.props.appState.galleryItems.map((item, i) => {
              return (
              <div className="film-frame" key={`frame-${i}`}>
                <img src={require('../images/galleries/gallery'+ (index+1) + '/' + item)} alt={item} onClick={() => this.handleImageClick(index+1, item)} />
              </div>)
              })}
            </div>
            <img src={ribbonEdge} alt=""/>
          </div>

        </div>)
        })}
        <FrameModal 
          currentGallery={this.state.currentGallery} 
          selectedPhoto={this.state.selectedPhoto}
          handleClearImageSelect={this.handleClearImageSelect} 
        /> 
      </div>
    );
  };
};

export default Gallery;