import * as React from 'react';
import { Separator, SeparatorProps } from './Separator';

export default {
  title: 'Components/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
};

export const Default = (args: SeparatorProps) => (
  <section
    style={{
      display: 'flex',
      ...(args.orientation === 'horizontal' ? { flexDirection: 'column' } : {}),
    }}
  >
    <div style={{ padding: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <Separator {...args} />
    <div style={{ padding: '16px' }}>
      Curabitur at facilisis ex, sed lobortis nibh. Fusce aliquam velit et hendrerit ullamcorper.
    </div>
  </section>
);

Default.args = {
  orientation: 'horizontal',
};
