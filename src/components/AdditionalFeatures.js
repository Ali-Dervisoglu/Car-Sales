import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  console.log(props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            // <AdditionalFeature removeFeature={props.removeFeature} key={item.id} feature={item} />
            <AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

export default AdditionalFeatures;
