import React, { Component, Fragment } from 'react';
import FormCard from '../../components/FormCard';
import {
  SingleInput, MultilineInput, RadioInput, EmployesDropdown, Dropdown,
} from '../../components/Inputs';
import InputRow from '../../components/InputRow';
import AdditionalText from '../../components/AdditionalText';
import { categories, employes } from '../../mocks';

class EventForm extends Component {
  state={
    title: '',
    description: '',
    paymentType: 'Free event',
    paidNumber: null,
    reward: null,
    email: '',
    duration: null,
    date: null,
    time: null,
  };

  setPaiment = (radioButtonValue) => {
    this.setState({
      paymentType: radioButtonValue,
    });
  }

  updateFieldValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {
      paymentType,
      title,
      description,
      paidNumber,
      reward,
      email,
      duration,
      date,
      time,

    } = this.state;

    const mockedUserId = 3;
    return (
      <div>
        <FormCard title="About">
          <InputRow title="Title" isRequired>
            <SingleInput
              name="title"
              placeholder="Make it short and clear"
              isRequired
              value={title}
              onChangeValue={this.updateFieldValue}
            />
          </InputRow>
          <InputRow title="Description" isRequired>
            <MultilineInput
              name="description"
              isRequired
              placeholder="Write about your event, be creative"
              maxLength="140"
              rows="8"
              value={description}
              onChangeValue={this.updateFieldValue}
            />
          </InputRow>
          <InputRow title="Category" isRequired>
            <Dropdown
              elements={categories}
              placeholder="Select category (skills, interests, locations)"
              tip="Describes topic and people who should be interested in this event"
            />
          </InputRow>

          <InputRow title="Payment" isRequired={paymentType === 'Paid event'}>
            <RadioInput
              name="paymentType"
              values={['Free event', 'Paid event']}
              value={paymentType}
              onChangeValue={this.updateFieldValue}
            />
            {paymentType === 'Paid event'
            && (
            <Fragment>
              <SingleInput
                name="paidNumber"
                shortWidth
                type="number"
                placeholder="Fee"
                isRequired
                onChangeValue={this.updateFieldValue}
                value={paidNumber}
              />
              <AdditionalText text="$" />
            </Fragment>
            )
           }
          </InputRow>
          <InputRow title="Reward">
            <SingleInput
              name="reward"
              shortWidth
              type="number"
              placeholder="Number"
              onChangeValue={this.updateFieldValue}
              value={reward}
            />
            <AdditionalText text="reward points for attendance" />
          </InputRow>
        </FormCard>
        <FormCard title="Cordinator">
          <InputRow title="Responsible" isRequired>
            <EmployesDropdown elements={employes} userId={mockedUserId} />
          </InputRow>


          <InputRow title="Email">
            <SingleInput
              name="email"
              placeholder="Email"
              value={email}
              onChangeValue={this.updateFieldValue}
            />
          </InputRow>
        </FormCard>
        <FormCard title="When">
          <InputRow title="Starts on" isRequired>
            <SingleInput
              type="date"
              shortWidth
              name="date"
              value={date}
              placeholder="dd/mm/yyyy"
              onChangeValue={this.updateFieldValue}
            />
            <AdditionalText text="at" />
            <SingleInput
              type="time"
              shortWidth
              name="time"
              value={time}
              placeholder="--:--"
              onChangeValue={this.updateFieldValue}
            />
          </InputRow>

          <InputRow title="Duration">
            <SingleInput
              name="duration"
              shortWidth
              type="number"
              placeholder="Number"
              value={duration}
              onChangeValue={this.updateFieldValue}
            />
            <AdditionalText text="hour" />
          </InputRow>
        </FormCard>
      </div>
    );
  }
}
export default EventForm;
