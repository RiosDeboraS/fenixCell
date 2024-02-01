import Link from "@mui/material/Link";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Store = () => {
  return (
    <div
      style={{
        marginTop: "60px",
        display: "flex",
        flexDirection: "column", // Apila los elementos verticalmente
        alignItems: "center", // Centra los elementos horizontalmente
        justifyContent: "center", // Centra los elementos verticalmente
        background: "#dedadabc",
        height: "500px", // Define una altura para la div
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>Tienda</h1>
      <Link to="/mail">
        <LocalMallIcon
          style={{
            width: "300px",
            height: "300px",
            color: "#f16ae6",
            cursor: "pointer",
          }}
        />{" "}
      </Link>
    </div>
  );
};
export default Store;
