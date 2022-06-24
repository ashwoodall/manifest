import * as React from 'react';
import { Typography, TypographyProps } from './Typography';

export default {
  component: Typography,
  title: 'Components/Typography',
  argTypes: {
    paragraph: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    variant: {
      control: { type: 'radio' },
      defaultValue: 'body',
      options: [
        'display',
        'heading',
        'title',
        'subtitle',
        'body',
        'bodyBold',
        'subtext',
        'caption',
      ],
    },
  },
};

export const Default = (args: TypographyProps) => <Typography {...args} />;

Default.args = {
  children: 'Manifesting Project 44 experiences through design.',
};
