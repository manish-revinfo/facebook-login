import React from 'react'
import Head from 'next/head'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import DashboardHeader from "@/components/Header/DashboardHeader"
import SidebarOne from '@/components/sidebar/SidebarOne'

const Balance = () => {
    return (
        <>
        <Head>
            <link rel="stylesheet" href="../assets/css/balance.css" />
        </Head>
            <DashboardHeader />
            <div className="mainContainer">
            <div className="contentLeft">
                <SidebarOne />
            </div>
            <div className="ContentRight">
                <div className="WhiteBox mb-20">
                    <div className="WhiteBoxHeder">
                        <h4>Welcome to VidsPay</h4>
                        <button className="btn purpleInvert">Connect a Channel</button>
                    </div>
                </div>
                <div className="WhiteBox mb-20">
                    <div className="WhiteBoxHeder">
                        <h4>Internal account</h4>
                        <span className="currencyType">USD</span>
                    </div>
                    <div className="whiteBoxBody">
                        <div className="internalAcIfo">
                            <h4>0.00 $</h4>
                            <div className="internalMetaWrapper">
                                <div className="internalMetaBox">
                                    <span className="internalMetaBoxKey">Funds</span>
                                    <span className="internalMetaBoxValue">0.00$</span>
                                </div>
                                <div className="internalMetaBox">
                                    <span className="internalMetaBoxKey">Personal number</span>
                                    <span className="internalMetaBoxValue">1940670985270967</span>
                                </div>
                            </div>
                            <button className="btn purpleInvert">Withdraw</button>
                        </div>
                    </div>
                </div>

                <div className="njPrepaymentCard mb-20">
                    <div className="njPreview">
                        <div className="njPreviewLeft me-4">
                            <img src="../assets/images/credit-card.svg" alt="" />
                        </div>
                        <div className="njPreviewCenter">
                            <h4 className="ngTitle text-white">Advance • 12.5% • To launch a new project</h4>
                            <p className='text-white'>Get money right away – give it back from monthly income </p>
                        </div>
                        <div className="njPreviewRight">
                            <button className="btn whiteBtn">Details</button>
                        </div>
                    </div>
                </div>

                <div className="njPayTariffs mb-5">
                    <div className="blockTitle">
                        <h4>Active Express Payouts tariff </h4>
                    </div>
                    <div className="tarrifCard">
                        <div className="tarrifIcon">
                            <img src="../assets/images/power.svg" alt="" />
                        </div>
                        <div className="tarrifContent">
                            <h4 className="ngTitle">Flexible Payouts • 9.9%</h4>
                            <p>Money is received to the VidsPay account every day in the form of credits</p>
                            <button className="btn purple">Switch</button>
                        </div>
                    </div>
                </div>

                <div className="ngPayTransaction">
                    <div className='ngPayTabWrapper'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                            <div className="ngPayTabHeader d-flex justify-content-between align-items-center">
                                <div className="blockTitle pb-0">
                                    <h4>Transactions</h4>
                                </div>
                                <Nav className="ngPayTabs">
                                    <Nav.Item>
                                        <Nav.Link className="ngPayTabLink" eventKey="first">Transactions</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="ngPayTabLink" eventKey="second">Credits</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <ul className="transactionsList">
                                        {
                                            [...Array(2)].map((item, idx) => {
                                                return (
                                                    <li className='transactionsItem' key={idx}>
                                                        <div className="transactionsTime">
                                                            <span>04 Apr</span>
                                                            <span>20.07</span>
                                                        </div>
                                                        <div className="transactionsDetails">
                                                            <div className="transactionsDetailsLeft">
                                                                <img src="../assets/images/adjustment.svg" alt="" />
                                                            </div>
                                                            <div className="transactionsDetailsCenter">
                                                                <h4>Other Payouts</h4>
                                                            </div>
                                                            <div className="transactionsDetailsRight">
                                                                <h4>-100.00 $</h4>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Two
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>


            </div>
        </div>
        </>
        
    )
}

export default Balance;