import { useEffect, useState } from "react";

export function ConvergenceBackground() {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsPaused(document.hidden);
    }
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={
        isPaused ? "convergence-background is-paused" : "convergence-background"
      }
    >
      <span className="convergence-orb convergence-orb-one" />
      <span className="convergence-orb convergence-orb-two" />
      <span className="convergence-grid" />
      <span className="convergence-path convergence-path-left" />
      <span className="convergence-path convergence-path-right" />
      <span className="convergence-point" />
    </div>
  );
}
