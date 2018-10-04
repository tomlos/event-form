import React, { Component, Fragment } from 'react';
import FormCard from '../../components/FormCard';
import { SingleInput, RadioInput } from '../../components/Inputs';
import InputRow from '../../components/InputRow';
import AdditionalText from '../../components/AdditionalText';

class EventForm extends Component {
  state={payment:'Free event'};

  setPaiment = (radioButtonValue) => {
    this.setState({
      payment:radioButtonValue
    })
  }


  render() {

    const {payment} = this.state;
    return (
      <div>
        <FormCard title="About">
          <InputRow title="Title" isRequired>
            <SingleInput
              name="Title"
              placeholder="Make it short and clear"
              isRequired
            />
          </InputRow>
          <InputRow title="Description" isRequired />
          <InputRow title="Payment" isRequired={payment==="Paid event"}>
            <RadioInput
            name="payment"
            values={['Free event', 'Paid event']}
            valueChecked={payment}
            setRadioValue={(e)=> this.setPaiment(e.target.value)}
            />
            {payment==="Paid event"
            && (
            <Fragment>
              <SingleInput name="Paid" shortWidth type="number" placeholder="Fee" isRequired />
              <AdditionalText text="$" />
            </Fragment>
            )
           }
          </InputRow>
          <InputRow title="Reward">
            <SingleInput
              name="Reward"
              shortWidth
              type="number"
              placeholder="Number"
            />
            <AdditionalText text="reward points for attendance" />
          </InputRow>
        </FormCard>
        <FormCard title="Cordinator">
          <InputRow title="Email">
            <SingleInput
              title="Email"
              placeholder="Email"
            />
          </InputRow>
        </FormCard>
        <FormCard title="When">
          <InputRow title="Duration">
            <SingleInput
              title="Duration"
              shortWidth
              type="number"
              placeholder="Number"
            />
            <AdditionalText text="hour" />
          </InputRow>


        </FormCard>
      </div>
    );
  }
}
export default EventForm;
