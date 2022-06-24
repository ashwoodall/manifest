import * as React from 'react';
import { Tag, TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const Default = (args: TagProps) => <Tag {...args}>Default Tag</Tag>;

export const IsRemovable = (args: TagProps) => <Tag {...args}>Removable Tag</Tag>;

IsRemovable.args = {
  isRemovable: true,
};
