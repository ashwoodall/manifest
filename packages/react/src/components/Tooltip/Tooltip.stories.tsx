import * as React from 'react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Button } from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export const Default = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Button>Hover me!</Button>
  </Tooltip>
);

Default.args = {
  isDisabled: false,
  placement: 'bottom',
  title: 'Here I am!',
};
