import { styled } from "styled-components";
import { spacing, breakpoints } from 'shared/styles/consts';

// export const ActionsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export const ActionContainer = styled.div`
  margin-top: ${spacing.md};
`;

export const Form = styled.form`
  margin-top: ${spacing.md};
`;

export const Fieldset = styled.fieldset`
  padding: 0;
`;

export const Lable = styled.label`
  display: block;
  margin: ${spacing.md};
`;

export const Input = styled.input`
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  button {
    margin-top: ${spacing.md};
    width: 100%;
    display: block;

    @media (min-width: ${breakpoints.md}) {
      width: fit-content;
    }
  }
`;