import { format } from 'date-fns';
import { DEFAULT_ASSET_DOMAIN, DEFAULT_ASSET_VERSION } from 'shared/constants/commons';

export function formatDate(date: Date | null, desiredFormat?: string) {
  if (!date) return '';
  const dateFormat = desiredFormat || 'yyyy-MM-dd HH:mm:ss xx';
  return format(date, dateFormat);
}

export function logger({ path, event, log }: { path: string; event: string; log: unknown }) {
  const date = format(new Date(), 'yyyy/MM/dd hh:mm:ss');
  // eslint-disable-next-line no-console
  console.debug(`[${date}]: ${path} (${event}) >> `, JSON.stringify(log, null, 2));
}

export function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
export function makeImageUrl({
  url,
  domain,
  version,
}: {
  url: string;
  domain?: string;
  version?: string;
}) {
  return `${domain ?? DEFAULT_ASSET_DOMAIN}${url}?v=${version ?? DEFAULT_ASSET_VERSION}`;
}
