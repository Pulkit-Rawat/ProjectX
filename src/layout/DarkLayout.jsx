import { Col, Container, Row } from "reactstrap";

import Filters from "../components/Filters";
import HeaderDark from "../components/HeaderDark";

import './styles.scss'

const DarkLayout = ({ children }) => {
  return (
    <>
    <HeaderDark />
    <div className="dark-layout">
      <Container className="app-main">
          <Filters />
          {children}
      </Container>
    </div>
    </>
  );
};

export default DarkLayout;
