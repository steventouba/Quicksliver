import React from 'react';


const Switch = (props) => {
  return (
    <>
      <input
        checked={props.isPrivate}
        onChange={props.toggleChannelType}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        />
      <label
        style={{ background: props.isPrivate && '#06D6A0' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;