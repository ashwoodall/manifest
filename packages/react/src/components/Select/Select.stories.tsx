import * as React from 'react';
import { Select, SelectItem, SelectProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Default = (args: SelectProps) => (
  <Select {...args}>
    <SelectItem>One</SelectItem>
    <SelectItem>Two</SelectItem>
    <SelectItem>Three</SelectItem>
  </Select>
);

Default.args = {
  size: 'medium',
};
