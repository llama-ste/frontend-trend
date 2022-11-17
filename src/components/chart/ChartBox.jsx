const ChartBox = ({ children, marginBottom = 0 }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default ChartBox;
