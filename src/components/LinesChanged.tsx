import { useMemo } from "react";
import "../styles/lines-changed.css";

function LinesChanged({
  lines_added,
  lines_removed,
}: {
  lines_added: number;
  lines_removed: number;
}) {
  const totalLinesChanged = useMemo(
    () => lines_added + lines_removed,
    [lines_added, lines_removed],
  );
  const addedPercentage = useMemo(
    () =>
      totalLinesChanged === 0 ? 50 : (lines_added / totalLinesChanged) * 100,
    [lines_added, totalLinesChanged],
  );
  const removedPercentage = useMemo(
    () =>
      totalLinesChanged === 0 ? 50 : (lines_removed / totalLinesChanged) * 100,
    [lines_removed, totalLinesChanged],
  );

  return (
    <div
      className="lines-changed"
      title={`${lines_added} lines added and ${lines_removed} lines removed`}
    >
     <div className="added-lines-text">+ {lines_added.toLocaleString()}</div>
      <div className="bar">
        <div
          className="added-lines-bar"
          style={{ width: `${addedPercentage}%` }}
        ></div>
        <div
          className="removed-lines-bar"
          style={{ width: `${removedPercentage}%` }}
        ></div>
      </div>
     <div className="removed-lines-text">- {lines_removed.toLocaleString()}</div>
    </div>
  );
}

export default LinesChanged;
