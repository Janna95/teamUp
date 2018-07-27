import React, { Component } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import TimePicker from 'rc-time-picker';
// import TimePicker from 'react-times';
import { PlusIcon, DeleteIcon } from '../SvgIcons';


class CreateEventModal extends Component {
    state = {
      currentDate: moment(),
      currentTime: moment(),
      calendarFocused: false
    }

    onDateChange = (currentDate) => {
      this.setState({ currentDate });
    };

    onFocusChange = ({ focused }) => {
      this.setState(() => ({ calendarFocused: focused }));
    };

    // onTimeChange = ({ hour, minute }) => {
    //   this.setState({ currentTime: moment().format(`${hour}${minute}`) });
    // }

    onTimeChange = (currentTime) => {
      console.log('test');
      this.setState({ currentTime });
    }

    render() {
      return (
        <Modal
          isOpen={!!this.props.show}
          contentLabel="Upload Photo"
          onRequestClose={this.props.handleToggleModal}
          closeTimeoutMS={200}
        >
          <div className="create-event">
            <form className="create-event__form" method="POST" onSubmit={this.props.handleEventFormSubmit}>
              <div className="create-event__title">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="event_title" placeholder="Title" />
              </div>

              <div className="create-event__address">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="event_address" placeholder="Address" />
              </div>

              <div className="create-event__description">
                <label htmlFor="description">Description</label>
                <textarea rows="3" cols="50" id="description" name="event_description" placeholder="Write a description here"></textarea>
              </div>

              <div className="create-event__members">
                <label htmlFor="count">max. members</label>
                <input type="number" id="count" name="event_members_count" min="0" defaultValue="0" />
              </div>

              <div className="create-event__types">
                <select name="event-type" className="create-event-select">
                  <option selected value="sport">Sport</option>
                  <option value="meeting">Meeting</option>
                  <option value="seminar">Seminar</option>
                  <option value="travel">Travel</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="family">Family</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="create-event__datepicker">
                <SingleDatePicker
                  id="datepicker"
                  date={this.state.currentDate}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                />
                <TimePicker
                  id="timepicker"
                  // showTimezone={true}
                  // withoutIcon={false}
                  // colorPalette="light"
                  time={this.state.currentTime}
                  defaultValue={this.state.currentTime}
                  inputName="timepicker"
                  // theme="classic"
                  // showSecond={true}
                  // timeFormat='HH:MM'
                  // minuteStep={5}
                  // timeConfig={{
                  //   from: '08:00 PM',
                  //   to: '08:00 AM',
                  //   step: 15,
                  //   unit: 'minute'
                  // }}
                  style={{ width: 100 }}
                  showSecond={true}
                  className="create-event__timepicker"
                  onTimeChange={this.onTimeChange}
                />
              </div>
              <div className="create-event__image-box">
                <div className="create-event__upload-box" >
                  <PlusIcon />
                  <span className="create-event__upload-text">Upload Photo</span>
                  <div className="create-event__input-upload-box">
                    <a className="create-event__upload-link upload-modal__button" aria-label="Upload Photo" role="button">
                      <input className="upload-modal__input-upload" type="file" title="Choose a file to upload" accept="image/*" name="photo" onChange={this.props.handleFileChange} />
                    </a>
                  </div>
                </div>
                {this.props.imagePreviewSrc ? <div className="image-preview__image-box create-event__image-preview-box">
                  <img className="create-event__image-preview" src={this.props.imagePreviewSrc} alt="preview" />
                  <button onClick={this.props.handleDeleteImage}><DeleteIcon /></button>
                </div> : null}
              </div>
              <div className="create-event__submit-form">
                <button className="btn btn--cancel" type="button" onClick={this.props.handleToggleModal}>Cancel</button>
                <button className="btn btn--create">Create Event</button>
              </div>
            </form>
          </div>
        </Modal>
      );
    }
}

export default CreateEventModal;
