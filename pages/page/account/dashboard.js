import React, { useState, useEffect } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row ,Col} from 'reactstrap';
import { useSelector,useDispatch } from 'react-redux';
// import {getUserData} from '../../../app/redux/slice/authSlice'
import {getUser} from '../../../app/apis/auth/index'
import { getUserIdFromCookie,removeUserIdFromCookie,removeUserTokenFromCookie } from '../../../app/apis/cookies';
import { useRouter } from 'next/router';
import { useSnackbar } from 'react-simple-snackbar'


const Dashboard = () => {
    const router = useRouter();
    const [open, close] =useSnackbar()
    const userId=useSelector(state=> state.user)
    const dispatch = useDispatch()
    const [userData,setUserData] = useState(null)

    console.log("userId", getUserIdFromCookie())


    useEffect(()=>{
// dispatch(getUserData(getUserIdFromCookie()))
getUser(getUserIdFromCookie()).then(user=>{
    console.log("first",user?.data)
    setUserData(user?.data)
}).catch(error=>{
    open("Unexpected error")
    console.log("first",error)
})
    },[])

console.log("user data state", userData)
    const [accountInfo,setAccountInfo] = useState(false)
    const logoutHandler = () => {
        removeUserIdFromCookie();
        removeUserTokenFromCookie();
        router.push("/page/account/login");
    
      }
    return (
        <CommonLayout parent="home" title="dashboard">
            <section className="section-b-space">
                <Container>
                    <Row>
                        <Col lg="3">
                            {window.innerWidth <= 991 ?
                            <div className="account-sidebar" onClick={() => setAccountInfo(!accountInfo)}><a className="popup-btn">my account</a></div>
                            :""}
                            <div className="dashboard-left" style={accountInfo ? {left:"0px"} : {}}> 
                                <div className="collection-mobile-back" onClick={() => setAccountInfo(!accountInfo)}>
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
                                </div>
                                <div className="block-content">
                                    <ul>
                                        <li className="active"><a href="#">Account Info</a></li>
                                        <li><a href="#">Address Book</a></li>
                                        <li><a href="#">My Orders</a></li>
                                        <li><a href="#">My Wishlist</a></li>
                                        <li><a href="#">Newsletter</a></li>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Change Password</a></li>
                                        <li className="last" onClick={()=>logoutHandler()}><a href="#">Log Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg="9">
                            <div className="dashboard-right">
                                <div className="dashboard">
                                    <div className="page-title">
                                        <h2>My Dashboard</h2>
                                    </div>
                                    <div className="welcome-msg">
                                        <p>Hello, {userData?.user?.fullName || "Full Name"} !</p>
                                        <p>From your My Account Dashboard you have the ability to view a snapshot of your recent
                                        account activity and update your account information. Select a link below to view or
                                    edit information.</p>
                                    </div>
                                    <div className="box-account box-info">
                                        <div className="box-head">
                                            <h2>Account Information</h2>
                                        </div>
                                        <Row>
                                            <Col sm="6">
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>Contact Information</h3><a href="#">Edit</a>
                                                    </div>
                                                    <div className="box-content">
                                                        <h6>{userData?.user?.fullName || "Full Name"}</h6>
                                                        <h6>{userData?.user?.email}</h6>
                                                        <h6><a href="#">Change Password</a></h6>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm="6">
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>Newsletters</h3><a href="#">Edit</a>
                                                    </div>
                                                    <div className="box-content">
                                                        <p>You are currently not subscribed to any newsletter.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div>
                                            <div className="box">
                                                <div className="box-title">
                                                    <h3>Address Book</h3><a href="#">Manage Addresses</a>
                                                </div>
                                                <Row>
                                                    <Col sm="6">
                                                        <h6>Default Billing Address</h6>
                                                        <address>You have not set a default billing address.<br /><a href="#">Edit
                                                        Address</a></address>
                                                    </Col>
                                                    <Col sm="6">
                                                        <h6>Default Shipping Address</h6>
                                                        <address>You have not set a default shipping address.<br /><a
                                                            href="#">Edit Address</a></address>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Dashboard