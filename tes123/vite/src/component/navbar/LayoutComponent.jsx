import { Layout } from "antd";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "./layout.css";

const LayoutComponent = ({ children }) => {
  const { Content } = Layout;

  return (
    <>
      <Layout>
        {/* Header */}
        <Header />

        {/* Content */}
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: "#fff",
            }}
          >
            {children}
          </div>
        </Content>

        {/* Footer */}
        <Footer/>
      </Layout>
    </>
  );
};

export default LayoutComponent;