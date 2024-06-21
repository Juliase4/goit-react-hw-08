import { Circles } from "react-loader-spinner";

export default function Loader() {
  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={loaderStyle}>
      <Circles
        height="80"
        width="80"
        color="#7B68EE"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}
