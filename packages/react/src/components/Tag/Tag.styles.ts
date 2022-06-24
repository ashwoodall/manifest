import { css } from '../../styles';

export const useTagStyles = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-primary',

  alignItems: 'center',
  appearance: 'none',
  background: 'none',
  border: '1px solid $$borderColor',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  display: 'inline-flex',
  height: '1.5rem',
  justifyContent: 'center',
  outline: 0,
  padding: 0,
  textDecoration: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',

  '.manifest-tag--button': {
    marginRight: '$x-small',
    background: 'none',
  },

  '.manifest-tag--icon': {
    fontSize: '1rem',
    size: '1rem',
  },

  '.manifest-tag--text': {
    color: 'inherit',
    overflow: 'hidden',
    px: '$small',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';
