import React from 'react';
import { values } from 'ramda';
import { ToggleSwitchContainer } from './ToggleSwitch.styled';

const ToggleSwitch = ({ onChange, isActive, options = {}, ...props }) => {
  const list = values(options);

  if (!list || list.length <= 0) return null;

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    onChange(isChecked);
  };

  const primaryOption = list[0];
  const secondaryOption = list[1];

  return (
    <ToggleSwitchContainer
      optionLabel={primaryOption}
      isActive={isActive}
      {...props}
    >
      <div className="switch-button">
        <input
          checked={isActive}
          onChange={handleChange}
          className="switch-button-checkbox"
          type="checkbox"
        />
        <label className="switch-button-label">
          <span className="switch-button-label-span">{secondaryOption}</span>
        </label>
      </div>
    </ToggleSwitchContainer>
  );
};

ToggleSwitch.defaultProps = {
  options: {},
};

export { ToggleSwitch };
