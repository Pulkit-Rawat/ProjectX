import { Col, Container, Row } from "reactstrap";
import './styles.scss'

import HeaderDark from "../components/HeaderDark";
import SidebarDark from "../components/SidebarDark";

const DarkLayout = ({ children }) => {
  return (
    <>
    <HeaderDark />
    <div className="dark-layout">
      <Container className="app-main">
          <SidebarDark />
          {children}
      </Container>
    </div>
    </>
  );
};

export default DarkLayout;
