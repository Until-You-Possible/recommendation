import React, {useEffect, useState} from "react";
import "./style/indexComponent.scss"
import { Card, Row, Col, Spin } from "antd";
import imgURL from "../../asset/images/selfLogo.jpeg"
import { getUserCount } from "../../api/pc";
export default function IndexComponent() {

    const [userCount, setUserCount] = useState(0)

    useEffect(() => {
        // 获取注册用户的数量
        getUserCount().then(res => {
            if (res) {
                setUserCount(res)
            }
        });

    });

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


            </Row>
        </div>
    )
}