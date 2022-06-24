import * as React from 'react';
import { TextField, TextFieldProps } from './TextField';
import { Icon } from '../Icon';

export default {
  title: 'Components/TextField',
  component: TextField,
};

export const Default = (args: TextFieldProps) => <TextField {...args} />;

Default.args = {
  placeholder: 'Enter some text, please',
};

export const WithIcons = (args: TextFieldProps) => <TextField {...args} />;

WithIcons.args = {
  placeholder: 'Enter some text, please',
  startIcon: <Icon icon="Person" />,
  endIcon: <Icon icon="Close" />,
};

export const Danger = (args: TextFieldProps) => <TextField {...args} />;

Danger.args = {
  placeholder: 'Enter some text, please',
  validationState: 'invalid',
};
