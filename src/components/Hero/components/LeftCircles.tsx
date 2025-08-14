const LeftCircles = () => {
  return (
    <div className="absolute -left-9 bottom-0 z-[-1]">
      <svg
        width="134"
        height="106"
        viewBox="0 0 134 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Grid pattern of white circles for decorative effect */}
        {Array.from({ length: 8 }, (_, row) =>
          Array.from({ length: 10 }, (_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={1.66667 + col * 14.6667}
              cy={104 - row * 14.6667}
              r="1.66667"
              transform={`rotate(-90 ${1.66667 + col * 14.6667} ${
                104 - row * 14.6667
              })`}
              fill="white"
              fillOpacity="0.8"
            />
          ))
        )}
      </svg>
    </div>
  );
};

export default LeftCircles;
