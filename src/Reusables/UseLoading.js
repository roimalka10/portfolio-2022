import { useEffect, useState } from "react";

export default function UseLoading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);

  return [loading];
}
