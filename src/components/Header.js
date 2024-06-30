import "./Header.css"
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <img
        className="imgAdd"
        src="../images/add.png"
        alt="We make notes with our hands"
      />
      <h1
        style={{
          textAlign: "left",
          paddingTop: "0rem",
          textDecoration: "underline",
        }}
      >
        All Products
      </h1>
    </div>
  );
}
