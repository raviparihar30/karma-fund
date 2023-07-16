import { Container } from "react-bootstrap";
import Header from "../../components/Structure/Header";
import Footer from "../../components/Structure/Footer";

const MainLayout = ({ children, padding }) => {
  return (
    <Container fluid className="p-0 position-relative">
      <Header padding={padding} />
      {children}
      <Footer />
    </Container>
  );
};
export default MainLayout;
