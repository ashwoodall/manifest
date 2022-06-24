import * as React from 'react';
import { VisuallyHidden, VisuallyHiddenProps } from './VisuallyHidden';

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
};

export const Default = (args: VisuallyHiddenProps) => (
  <VisuallyHidden {...args}>Visually hidden!</VisuallyHidden>
);
