import React from 'react'
import { useState, useEffect } from 'react'
import * as Styled from './ToggleSwitch.styled';

export interface ToggleSwitchProps {
  label: string;
  toggled?: boolean;
  onClick: (arg: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, toggled = false, onClick }) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const callback = () => {
    setIsToggled(!isToggled);
    onClick(!isToggled);
  }

  useEffect(() => {
    setIsToggled(toggled);
  },[toggled])

  return (
    <Styled.ToggleSwitchContainer>
      <Styled.Label>
        <Styled.Input
          id={`${label}-toggle`}
          type="checkbox"
          checked={isToggled}
          onClick={callback} />
        <Styled.Span />
      </Styled.Label>
      <label htmlFor={`${label}-toggle`}><Styled.Text>{label}</Styled.Text></label>
    </Styled.ToggleSwitchContainer>
  )
}