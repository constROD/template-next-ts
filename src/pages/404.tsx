import { useRouter } from 'next/router';
import { ROUTES } from 'shared/constants/commons';

export default function NotFoundPage() {
  const { push: navigate } = useRouter();

  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <span className="text-[#000]">Sorry, the page you visited does not exist.</span>
      <button
        className="font-[500] text-[#000] hover:underline"
        onClick={() => navigate(ROUTES.HOME)}
      >
        Back Home
      </button>
    </div>
  );
}
