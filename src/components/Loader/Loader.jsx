import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <span>
      <Circles
        height="80"
        width="80"
        color="rgb(26, 106, 120)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </span>
  );
}
