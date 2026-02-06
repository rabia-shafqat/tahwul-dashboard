import { useState, useEffect } from "react";

export function useMockData<T>(filePath: string): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    import(`../data/${filePath}`)
      .then((module) => setData(module.default))
      .catch(console.error);
  }, [filePath]);

  return data;
}
