import styled from "styled-components";

interface IndicatorProps {
    value: number;
  }


const IndicatorContainer = styled.div`
  align-items: center;
  text-align: center; /* Add this to center the label text */
  background-color: rgba(0, 0, 0, 0.5); /* Change to a black transparent background */
`;

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
      boxShadow: "0 0 5px #333",
      textAlign: "center"
    };
  
    return (
      <IndicatorContainer style={style as React.CSSProperties} onClick={onClick}>
        <div>{label}</div>
      </IndicatorContainer>
    );
  };

export default Indicator;