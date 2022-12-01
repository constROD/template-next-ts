import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ROUTES } from 'shared/constants/Routes';
import { styled } from 'shared/theme';

const NotFoundPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundPage: NextPage = () => {
  const { push: navigate } = useRouter();

  return (
    <NotFoundPageWrapper>
      <span>Sorry, the page you visited does not exist.</span>
      <button onClick={() => navigate(ROUTES.HOME)}>Back Home</button>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
