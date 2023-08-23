import { Container } from "react-bootstrap";
import Header from "../../components/Structure/Header";
import Footer from "../../components/Structure/Footer";

const MainLayout = ({ children, padding, hide = true, blogsRef, aboutRef }) => {
  return (
    <Container fluid className="p-0 position-relative">
      <Header
        padding={padding}
        hide={hide}
        blogsRef={blogsRef}
        aboutRef={aboutRef}
      />
      {hide && <div style={{ height: "88px" }} />}
      {children}
      <Footer />
    </Container>
  );
};
export default MainLayout;
