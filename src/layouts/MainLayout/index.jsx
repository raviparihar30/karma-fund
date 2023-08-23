import { Container } from "react-bootstrap";
import Header from "../../components/Structure/Header";
import Footer from "../../components/Structure/Footer";

const MainLayout = ({ children, padding, hide = true }) => {
  return (
    <Container fluid className="p-0 position-relative">
      <Header padding={padding} hide={hide} />
      {hide && <div style={{ height: "88px" }} />}
      {children}
      <Footer />
    </Container>
  );
};
export default MainLayout;
