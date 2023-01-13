import { useEffect, useState } from "react";

export default function PageHeight() {
  const [pageHeight, setPageHeight] = useState(false);

  useEffect(() => {
    setPageHeight(true);
    setTimeout(() => {
      setPageHeight(false);
    }, 2400);
  }, []);

  return [pageHeight];
}
