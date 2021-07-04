import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
          <a
            rel="noopener"
            href="https://github.com/hashirshoaeb"
            aria-label="My GitHub"
          >
            Eidmone Tagaca
          </a>{" "}
          using <i className="fab fa-react" />
          <p>
            <small className="text-muted">
              Project code is open source. Feel free to fork and make your own
              version.
            </small>
          </p>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

// import React from "react";
// import Container from "react-bootstrap/Container";

// const Footer = (props) => {
//   const bgStyle = { backgroundColor: "#f5f5f5" };

//   return (
//     <footer style={bgStyle} className="mt-auto py-5 text-center ">
//       <Container>
//         {props.children}
//         <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
//         <a
//           className="badge badge-dark"
//           rel="noopener"
//           href="https://github.com/hashirshoaeb"
//           aria-label="My GitHub"
//         >
//           Eidmone Tagaca
//         </a>{" "}
//         using <i className="fab fa-react" />
//         <p>
//           <small className="text-muted">
//             Project code is open source. Feel free to fork and make your own
//             version.
//           </small>
//         </p>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

export default Footer;
