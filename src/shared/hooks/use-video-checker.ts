import { useMemo, useRef, useState } from 'react';
import { useEffectOnce } from 'react-use';

export function useVideoChecker() {
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLVideoElement>();

  const handleCanPlay = () => {
    setLoading(false);
  };

  useEffectOnce(() => {
    if (ref.current) {
      if (ref.current.readyState >= 3) {
        handleCanPlay();
        return;
      }
      ref.current.oncanplay = handleCanPlay;
    }
  });

  return useMemo(
    () => ({
      ref,
      loading,
    }),
    [loading]
  );
}
