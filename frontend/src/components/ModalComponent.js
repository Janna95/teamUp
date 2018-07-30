import React from 'react';
import Modal from 'react-modal';
import UserArticle from './UserArticle';
import JoinBtn from './JoinBtn';

class ModalComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      // participants: 1  // {this.state.participants}
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    console.log(this.state.participants, 'this.state.participants in Modal');
    return (
      <div>
        <section className='btn-section'>
          <button onClick={this.openModal} className="participants-open-btn"> Participants </button>
          <JoinBtn
            event_id={this.props.currentEvent_id}
          />
        </section>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Modal of Participants"
        >
          {<UserArticle />}
          <input type="button" className="participants-close-btn" onClick={this.closeModal} value="close"/>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
