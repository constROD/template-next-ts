import { format } from 'date-fns';
import { DEFAULT_ASSET_DOMAIN, DEFAULT_ASSET_VERSION } from 'shared/constants/Common';

export const formatDate = (date: Date | null, desiredFormat?: string) => {
  if (!date) return '';
  const dateFormat = desiredFormat ? desiredFormat : 'yyyy-MM-dd HH:mm:ss xx';
  return format(date, dateFormat);
};

export const logger = ({ path, event, log }: { path: string; event: string; log: unknown }) => {
  const date = format(new Date(), 'yyyy/MM/dd hh:mm:ss');
  console.log(`[${date}]: ${path} (${event}) >> `, JSON.stringify(log, null, 2));
};

export const makeImageUrl = ({
  url,
  domain,
  version,
}: {
  url: string;
  domain?: string;
  version?: string;
}) => `${domain ?? DEFAULT_ASSET_DOMAIN}${url}?v=${version ?? DEFAULT_ASSET_VERSION}`;
