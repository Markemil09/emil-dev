import { useEffect, useState } from 'react';

export default function AeoShell() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);
  if (!ready) return null;
  // @ts-ignore — renders a plain HTML main for the agent to target
  return <main id="aeo-content" style={{ flex: 1 }} />;
}
