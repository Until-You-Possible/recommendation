import React, {useEffect, useState} from "react";
import {Button, Form, Input, message, Modal, Popconfirm, Table} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import {addCategory, getCategoryList} from "../../api/pc";
import "./style/categoryComponent.scss"
import PublicTable from "../common/Table";
export  default  function CategoryComponent() {

    const [isModalVisibleCategory, setIsModalVisibleCategory] = useState(false);

    const [addForm] = Form.useForm();

    const showModal = () => {
        setIsModalVisibleCategory(true);
    };

    const handleOk = () => {
        addForm.submit();
    };

    const handleCancel = () => {
        setIsModalVisibleCategory(false);
        addForm.resetFields();
    };

    const onFinish = (values) => {
        addCategory(values).then(res => {
            if (res.status === "success") {
                setIsModalVisibleCategory(false);
                message.info('品类创建成功').then(r => null);
                addForm.resetFields();
            }
        });
    }

    const columnsCategory = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: "id",
            align: 'center'
        },
        {
            title: '品类名',
            dataIndex: 'name',
            key: 2,
            align: 'center'
        },
        {
            title: 'icon',
            dataIndex: 'iconUrl',
            key: 3,
            align: 'center'
        },
        {
            title: '排序权重',
            dataIndex: 'sort',
            key: 4,
            align: 'center',
        },
    ];
    return (
        <div className="categoryWrapper">

            {/*layout start*/}
            <div className="title">品类管理</div>
            <div className="buttonLayout">
                <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>新增品类</Button>
            </div>
            {/*layout end*/}

            <PublicTable
                api = {getCategoryList}
                columns = {columnsCategory} />

        </div>
    )
}