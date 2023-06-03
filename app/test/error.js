"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2>There has been an error:</h2>
      <br />
      <p>{error.message}</p>
      <br />
      <button onClick={() => reset()}>try again</button>
    </div>
  );
}
