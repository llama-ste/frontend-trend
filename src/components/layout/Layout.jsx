import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#27282c",
          overflow: "scroll",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
