import { styled } from 'styled-components';

export const ToggleSwitchContainer = styled.div`
  text-align: center;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  /* width: 60px;
  height: 30px; */
  width: 30px;
  height: 16px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #00c853;
  }

  &:checked + span:before {
    /* transform: translateX(29px); */
    transform: translateX(14.5px);
  }
`;

export const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #2c3e50;
  transition: 0.3s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: "";
    /* height: 25px;
    width: 25px; */
    height: 12px;
    width: 12px;
    /* left: 3px; */
    left: 1.5px;
    /* bottom: 2.6px; */
    bottom: 2px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 0.75rem;
  cursor: pointer;
  /* display: inline-block;
  margin: 0;
  position: absolute;
  left: 100%;
  width: max-content;
  line-height: 30px;
  margin-left: 10px;
  cursor: pointer; */
`;
