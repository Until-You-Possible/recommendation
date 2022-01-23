import React, {useEffect, useState} from "react";
import {Button, Form} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import { getCategoryList} from "../../api/pc";
import "./style/categoryComponent.scss"
import PublicTable from "../common/Table";
import TableForm from "../common/TableForm";
export  default  function CategoryComponent() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    let tableRef = React.createRef();
    const [ modelTitle ] = useState("新增品类");
    const [addForm] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        addForm.submit();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        addForm.resetFields();
    };

    useEffect(() => {
        refreshTable()
    }, []);

    const refreshTable = () => {
        tableRef.current.getTable();
    }

    const columns = [
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

    const formColumn = [
        {
            name: "name",
            id: 1,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "请输入商家名称"
                }
            ]
        }
    ]

    return (
        <div className="categoryWrapper">

            {/*layout start*/}
            <div className="title">品类管理</div>
            <div className="buttonLayout">
                <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>新增品类</Button>
            </div>
            {/*layout end*/}

            {/*Table component*/}
            <PublicTable
                api = {getCategoryList}
                onRef={tableRef}
                columns = {columns} />
            {/*table component*/}

            {/*Model component*/}
            <TableForm
                visible = {isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                refreshTable={refreshTable}
                title={modelTitle}
                formColumn={formColumn}
            />
            {/*model component*/}

        </div>
    )
}