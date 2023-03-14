import { type NextPage } from 'next';
import { useRouter } from 'next/router';
import { ROUTES } from 'shared/constants/routess';

const NotFoundPage: NextPage = () => {
  const { push: navigate } = useRouter();

  return (
    <div className="flex h-screen items-center justify-center">
      <span>Sorry, the page you visited does not exist.</span>
      <button onClick={() => navigate(ROUTES.HOME)}>Back Home</button>
    </div>
  );
};

export default NotFoundPage;
