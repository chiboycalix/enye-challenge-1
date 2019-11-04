import React from "react";


import "./App.css";
import FormField from "./Form";


import { Layout } from "antd";

const { Header, Footer } = Layout;
function App() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <h1 style={{ color: "#fff" }}>ENYE TECH CHALLENGE</h1>
      </Header>
          <div style={{ background: "#fff", padding: 24 }}>
            <FormField />
          </div>
      <Footer style={{ textAlign: "center" }}>Enye Tech challenge</Footer>
    </Layout>
  );
}

export default App;
