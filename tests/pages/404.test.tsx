import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import NotFoundPage from 'pages/404';
import { ROUTES } from 'shared/constants/commons';

// Mock the useRouter hook so we can test its usage
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('NotFoundPage', () => {
  it('should render the page with the correct message and button', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<NotFoundPage />);
    expect(screen.getByText(/Sorry, the page you visited does not exist./i)).toBeInTheDocument();
    expect(screen.getByText(/Back Home/i)).toBeInTheDocument();
  });

  it('should navigate to the home page when the button is clicked', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<NotFoundPage />);
    const button = screen.getByText(/Back Home/i);
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith(ROUTES.HOME);
  });
});
