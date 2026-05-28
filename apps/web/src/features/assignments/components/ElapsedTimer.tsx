"use client";

import {
  useEffect,
  useState,
} from "react";

interface Props {
  startedAt: number | null;
}

export default function ElapsedTimer({
  startedAt,
}: Props) {

  const [seconds, setSeconds] =
    useState(0);

  useEffect(() => {

    if (!startedAt) return;

    const interval =
      setInterval(() => {

        setSeconds(
          Math.floor(
            (
              Date.now() -
              startedAt
            ) / 1000
          )
        );

      }, 1000);

    return () =>
      clearInterval(
        interval
      );

  }, [startedAt]);

  return (
    <div
      className="
      text-sm
      text-gray-400
    "
    >
      Elapsed: {seconds}s
    </div>
  );
}