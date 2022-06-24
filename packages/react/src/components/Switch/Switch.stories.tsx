import * as React from 'react';
import { Switch, SwitchProps } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = (args: SwitchProps) => <Switch {...args} />;
