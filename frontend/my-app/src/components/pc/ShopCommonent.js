import React, {useState} from "react";
import {Button, Form, Popconfirm} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import { getShopList } from "../../api/pc";
import PublicTable from "../common/Table";
import TableForm from "../common/TableForm";

export default function ShopComponent() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [ modelTitle ] = useState("新增门店");

    const [addForm] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };

    let tableRef = React.createRef();

    const handleOk = () => {
        addForm.submit();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        addForm.resetFields();
    };

    function handleCurrentOperation() {

    }

    const refreshTable = () => {
        tableRef.current.getTable();
    }

    // Table
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: "id",
            align: 'center'
        },
        {
            title: '图标',
            dataIndex: 'name',
            key: 2,
            align: 'center'
        },
        {
            title: '评分',
            dataIndex: 'remarkScore',
            key: 3,
            align: 'center'
        },
        {
            title: '状态',
            dataIndex: 'disabledFlag',
            key: 4,
            align: 'center',
            render: (_, record) => {
                return (
                    <span>
                        {record.disableFlag ? '启用' : '禁用'}
                    </span>
                )
            }
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 5,
            align: 'center',
            render: (_, record) => {
                return (
                    <span>
                        <Popconfirm title="确定要执行此操作吗?" onConfirm={() => handleCurrentOperation(record)}>
                            <Button type="primary"
                                    danger={!!record.disableFlag}>
                                {record.disableFlag ? '禁用' : '启用'}
                            </Button>
                        </Popconfirm>
                    </span>
                )
            }
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
        <div className="sellerWrapper">

            {/*layout start*/}
            <div className="title">门店管理</div>
            <div className="buttonLayout">
                <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>新增门店</Button>
            </div>
            {/*layout end*/}

            <PublicTable
                api = {getShopList}
                columns = {columns}
            />

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