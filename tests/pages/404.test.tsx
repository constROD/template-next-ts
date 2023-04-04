import { fireEvent, render } from '@testing-library/react';
import { useRouter } from 'next/router';
import NotFoundPage from 'pages/404';
import { ROUTES } from 'shared/constants/commons';

// Mock the useRouter hook so we can test its usage
jest.mock('next/router', () => ({
  useRouter: jest.fn() as jest.Mock,
}));

describe('NotFoundPage', () => {
  it('should render the page with the correct message and button', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    const { getByText } = render(<NotFoundPage />);
    expect(getByText(/Sorry, the page you visited does not exist./i)).toBeInTheDocument();
    expect(getByText(/Back Home/i)).toBeInTheDocument();
  });

  it('should navigate to the home page when the button is clicked', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    const { getByText } = render(<NotFoundPage />);
    const button = getByText(/Back Home/i);
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith(ROUTES.HOME);
  });
});
