interface IndicatorProps {
    value: number;
  }

const Indicator: React.FC<
  IndicatorProps & {
    label: string;
    onClick: () => void;
  }
> = ({ value, label, onClick }) => {
  const style = {
    backgroundColor: "#222",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "10px",
    boxShadow: "0 0 5px #333"
  };

  return (
    <div style={style} onClick={onClick}>
      <div className="indicator-label">{label}</div>
    </div>
  );
};

export default Indicator;