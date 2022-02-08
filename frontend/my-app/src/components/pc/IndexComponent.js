import React, {useEffect, useState} from "react";
import "./style/indexComponent.scss"
import { Card, Row, Col, Spin } from "antd";
import imgURL from "../../asset/images/selfLogo.jpeg"
import {getCategoryCount, getSellerCount, getShopCount, getUserCount} from "../../api/pc";
export default function IndexComponent() {

    const [userCount, setUserCount] = useState(0)
    const [shopCount, setShopCount] = useState(0)
    const [sellerCount, setSellerCount] = useState(0)
    const [categoryCount, setCategoryCount] = useState(0)

    useEffect(() => {
        // 获取注册用户的数量
        getUserCount().then(res => {
            if (res) {
                setUserCount(res)
            }
        });
        // get all shop
        getShopCount().then(res => {
            if (res) {
                setShopCount(res.data.length);
            }
        });
        // get all seller
        getSellerCount().then(res => {
            if (res) {
                setSellerCount(res.data.length);
            }
        });
        // get all category
        getCategoryCount().then(res => {
            if (res) {
                setCategoryCount(res.data.length);
            }
        })

    }, []);

    return (
        <div className="indexWrapper">
            <div className="title">Welcome Admin</div>
            <Row  gutter={16}>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="info" src={imgURL} />}
                        title="User Count">
                        <div className="innerNumber">
                            {!userCount ? <Spin /> : userCount}
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="info" src={imgURL} />}
                        title="Shop Count">
                        <div className="innerNumber">
                            {!shopCount ? <Spin /> : shopCount}
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="info" src={imgURL} />}
                        title="Category Count">
                        <div className="innerNumber">
                            {!categoryCount ? <Spin /> : categoryCount}
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="info" src={imgURL} />}
                        title="Seller Count">
                        <div className="innerNumber">
                            {!sellerCount ? <Spin /> : sellerCount}
                        </div>
                    </Card>
                </Col>


            </Row>
        </div>
    )
}