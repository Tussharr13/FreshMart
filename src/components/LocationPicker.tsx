import React, { useState } from 'react';

const LocationPicker = () => {
  const [location, setLocation] = useState<any>({});
  return (
    <div>
      {!location ? (
        <span className="font-medium _text-default">Select Location</span>
      ) : (
        <div className="flex flex-col">
          <p className="font-semibold text-xl leading-tight">
            Delivery just in time
          </p>
          <span className="text-sm _text-default">Your address will show here</span>
        </div>
      )}
    </div>
  );
};

export default LocationPicker;
