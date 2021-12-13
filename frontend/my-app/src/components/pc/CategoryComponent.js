import React from "react";
import {Button} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import "./style/categoryComponent.scss"
export  default  function CategoryComponent() {
    let showModal;
    return (
        <div className="categoryWrapper">

            {/*layout start*/}
            <div className="title">品类管理</div>
            <div className="buttonLayout">
                <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>新增品类</Button>
            </div>
            {/*layout end*/}

        </div>
    )
}