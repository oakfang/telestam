import Coven from 'coven';
import { useMemo, useEffect } from 'react';

export function useCoven(signaling) {
  const coven = useMemo(() => {
    return new Coven({ signaling });
  }, [signaling]);
  useEffect(() => () => coven.close(), [coven]);
  return coven;
}
