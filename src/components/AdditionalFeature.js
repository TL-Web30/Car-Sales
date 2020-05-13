import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/action';

const AdditionalFeature = props => {
  console.log('this is additionalFeature props', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" 
        onClick = {() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature}) (AdditionalFeature);
