import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector,useDispatch } from "react-redux";
import { fakedata } from "../../../app/redux/slice/authSlice";
import { getUserTokenFromCookie, removeUserTokenFromCookie,removeUserIdFromCookie } from "../../../app/apis/cookies";
const TopBarDark = ({ topClass, fluid }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isTokenPresent = getUserTokenFromCookie()
  const firebaseLogout = () => {
    localStorage.setItem('user', false)
    // dispatch(fakedata(false))
    router.push("/page/account/login");
  };
  const logoutHandler = () => {
    removeUserIdFromCookie();
    removeUserTokenFromCookie();
    router.push("/page/account/login");

  }
  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to our Fragrance Events Store</li>
                <Link href="https://fragranceevents.com/master/index.php/?route=pages/events" passHref>
                                    <a > <li>Learn More About Our Hosting Bonus</li>
                                    </a>
                                    </Link>

              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-end">
            <ul className="header-dropdown">
              <li className="mobile-wishlist">
                <Link href="/page/account/wishlist">
                  <a>
                    <i className="fa fa-heart" aria-hidden="true"></i> wishlist
                  </a>
                </Link>
              </li>
              <li className="onhover-dropdown mobile-account">
                <i className="fa fa-user" aria-hidden="true"></i> My Account
                <ul className="onhover-show-div">
                {isTokenPresent&& <li>
                    <Link href={`/page/account/dashboard`}>
                      <a>Dashboard</a>
                    </Link>
                  </li>}
                 {!isTokenPresent&& <li>
                    <Link href={`/page/account/login`}>
                      <a>Login</a>
                    </Link>
                  </li>}
                 {!isTokenPresent && <li>
                    <Link href={`/page/account/register`}>
                      <a>Register</a>
                    </Link>
                  </li>}
                 {isTokenPresent&& <li onClick={() => firebaseLogout()}>
                    <a onClick={()=> {logoutHandler()}}>Logout</a>
                  </li>}
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
