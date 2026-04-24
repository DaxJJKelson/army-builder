function PointsTracker({ totalPoints, maxPoints }) {
  const isOverLimit = totalPoints > maxPoints;

  return (
    <div>
      <h2>
        Total Points:
        <span
          style={{
            color: isOverLimit ? "red" : "green",
            marginLeft: "8px",
          }}
        >
          {totalPoints}
        </span>
        / {maxPoints}
      </h2>
    </div>
  );
}

export default PointsTracker;
