import React, {Component} from 'react';
import Modal from 'react-modal';

class FrameModal extends Component {
  constructor (props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleCloseModal () {
    this.props.handleClearImageSelect()
  }

  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedPhoto}
        className="popup-modal"
        onRequestClose={this.handleCloseModal}
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