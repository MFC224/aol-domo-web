import { useState, useCallback } from 'react';

/**
 * Reusable clipboard hook with temporary feedback status.
 */
export function useClipboard(timeout = 2500) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text) => {
    if (!navigator?.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    });
  }, [timeout]);

  return { copied, copy };
}
