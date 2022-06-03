import * as React from 'react';
import { Tooltip, TooltipProps } from './';
import { Button } from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export const Default = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Button>Hover me</Button>
  </Tooltip>
);

Default.args = {
  label: 'Tooltip',
  isOpen: true,
};
