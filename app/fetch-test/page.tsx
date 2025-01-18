"use client";

import { useEffect } from "react";
import { fetchTest } from "@/lib/utils/fetchTest";

export default function FetchTestPage() {
  useEffect(() => {
    const test = async () => {
      const data = await fetchTest();
      if (data) {
        console.log("Response data:", data);
      }
    };

    test();
  }, []);

  return <div>Check the console for the fetch test results.</div>;
}
