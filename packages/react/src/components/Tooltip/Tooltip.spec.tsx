import * as React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Tooltip, TooltipProps } from '../Tooltip';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

function ControlledTooltip() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Tooltip isOpen={isOpen} onChange={setIsOpen} label="Hello World">
      <button>Open Tooltip</button>
    </Tooltip>
  );
}

describe('tooltip', () => {
  it('should pass accessibility', async () => {
    const { container } = render(
      <Tooltip>
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render', async () => {
    render(
      <Tooltip>
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    await userEvent.hover(screen.getByText('Open Tooltip'));

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());

    await userEvent.unhover(screen.getByText('Open Tooltip'));

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    await userEvent.hover(screen.getByText('Open Tooltip'));

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());

    fireEvent.keyDown(screen.getByRole('tooltip'), { key: 'Escape' });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('should support controlled state', async () => {
    render(<ControlledTooltip />);

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    await userEvent.hover(screen.getByText('Open Tooltip'));

    await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());

    await userEvent.unhover(screen.getByText('Open Tooltip'));

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it.each(['center', 'end', 'start'])('should align %s', async alignment => {
    render(
      <Tooltip align={alignment as TooltipProps['align']}>
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText('Open Tooltip'));

    await waitFor(() =>
      expect(screen.getByRole('tooltip').parentNode).toHaveAttribute('data-align', alignment),
    );
  });

  it.each(['bottom', 'left', 'right', 'top'])('should place %s', async placement => {
    render(
      <Tooltip placement={placement as TooltipProps['placement']}>
        <button>Open Tooltip</button>
      </Tooltip>,
    );

    await userEvent.hover(screen.getByText('Open Tooltip'));

    await waitFor(() =>
      expect(screen.getByRole('tooltip').parentNode).toHaveAttribute('data-side', placement),
    );
  });
});
