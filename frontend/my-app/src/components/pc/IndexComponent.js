import React, {useEffect, useState} from "react";
import "./style/indexComponent.scss"
import { Card, Row, Col, Spin } from "antd";
import imgURL from "../../asset/images/selfLogo.jpeg"
import { getUserCount } from "../../api/pc";
export default function IndexComponent() {

    const [userCount, setUserCount] = useState(0)

    useEffect(() => {
        // 获取注册用户的数量
        setTimeout(() => {
            getUserCount().then(res => {
                if (res) {
                    setUserCount(res)
                }
            })
        }, 3000)

    });

    return (
        <div className="indexWrapper">
            <div className="title">欢迎进入管理后台</div>
            <Row  gutter={16}>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="info" src={imgURL} />}
                        title="注册用户数量">
                        <div className="innerNumber">
                            {!userCount ? <Spin /> : userCount}
                        </div>
                    </Card>
                </Col>

                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="info" src={imgURL} />}
                        title="注册用户数量">
                        <div className="innerNumber">
                            {!userCount ? <Spin /> : userCount}
                        </div>
                    </Card>
                </Col>

                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="info" src={imgURL} />}
                        title="注册用户数量">
                        <div className="innerNumber">
                            {!userCount ? <Spin /> : userCount}
                        </div>
                    </Card>
                </Col>

                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="info" src={imgURL} />}
                        title="注册用户数量">
                        <div className="innerNumber">
                            {!userCount ? <Spin /> : userCount}
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}