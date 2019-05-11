import React, {Component} from 'react';
import Modal from 'react-modal';

class FrameModal extends Component {
  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedPhoto}
        className="popup-modal"
      >
        {!!this.props.selectedPhoto && <div className="popup-modal-image-wrapper">
          <img src={require('../images/galleries/gallery'+this.props.currentGallery+'/'+this.props.selectedPhoto)} alt=""/>
        </div>}
        <button className="popup-close" onClick={this.props.handleClearImageSelect}>X</button>
      </Modal>
    )
  }
}

export default FrameModal;