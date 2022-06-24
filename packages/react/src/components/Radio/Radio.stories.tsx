import * as React from 'react';
import { Radio, RadioGroup, RadioGroupProps } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
};

export const Default = (args: RadioGroupProps) => (
  <RadioGroup {...args}>
    <Radio value="one">Radio</Radio>
    <Radio value="two">Radio</Radio>
    <Radio value="three">Radio</Radio>
  </RadioGroup>
);
