'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function CalEmbed({ calLink }: { calLink: string }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: 'bespoke' });
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#ffffff' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <Cal
      namespace="bespoke"
      calLink={calLink}
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', theme: 'dark' }}
    />
  );
}
