import React from 'react';
import { connect } from 'react-redux';
import { addParticipant, deleteParticipant } from '../actions/participantAction';

class JoinBtn extends React.Component {
    state = {
      isGoing: false
    };

    componentDidMount = () => {
      console.log(this.props.event_id, '-----this.props.event_id----');
      console.log(this.props.currentUser, 'this.props.currentUser');
      if (this.props.currentUser.attending_events.includes(this.props.event_id)) {
        this.setState({ isGoing: true });
      }
    }

    handleChange = () => {
      this.setState({ isGoing: !this.state.isGoing }, () => {
        if (this.state.isGoing) {
          this.props.join(this.props.event_id);
        } else {
          this.props.unjoin(this.props.event_id);
        }
      });
    }

    render() {
      console.log(this.props, 'props in JoinBtn');
      return (
        <div>
          {
            this.state.isGoing
              ? <button className="unjoin-btn" onClick={this.handleChange} > UNJOIN </button>
              : <button className="join-btn" onClick={this.handleChange}> JOIN </button>
          }
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  console.log(state, 'state in joinBTN');
  return {
    events: state.events, // participantin avelacnel events.players-i mej
    currentUser: state.userData.user, // avelacnel et eventy user-i going []-i mej
    participants_count: state.participants_count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    join: ev_id => dispatch(addParticipant(ev_id)),
    unjoin: ev_id => dispatch(deleteParticipant(ev_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinBtn);
