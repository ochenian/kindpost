import styled from 'styled-components';

import { PrimaryButton } from './Buttons';

import { colors, radius, spacing } from '../../utils/styles';

export const Input = styled(`input`)`
  background-color: ${colors.lightest};
  border: 1px solid ${colors.brandBright};
  border-radius: ${radius.default}px;
  color: ${colors.text};
  display: block;
  font-size: 1.1rem;
  padding: ${spacing.sm}px ${spacing.md}px;
  width: 100%;

  &[type=number]::-webkit-inner-spin-button,
  &[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus {
    box-shadow: 0 0 0 3px ${colors.accent};
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }
`;

export const Fieldset = styled(`fieldset`)`
  border: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0;
  padding: 0;
`;

export const Label = styled(`label`)`
  color: ${colors.textLight};
  display: flex;
  font-size: 1rem;
  padding: ${spacing.xs}px;
`;

export const Submit = styled(PrimaryButton)`
  font-size: 1.25rem;
  margin-top: ${spacing.md}px;
  width: 100%;
`;
