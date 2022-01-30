import React, {useState} from "react";
import {Button, Form, Popconfirm} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import { getShopList } from "../../api/pc";
import PublicTable from "../common/Table";
import TableForm from "../common/TableForm";

export default function ShopComponent() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [ modelTitle ] = useState("Add New Shop");

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
            title: 'icon',
            dataIndex: 'name',
            key: 2,
            align: 'center'
        },
        {
            title: 'score',
            dataIndex: 'remarkScore',
            key: 3,
            align: 'center'
        },
        {
            title: 'status',
            dataIndex: 'disabledFlag',
            key: 4,
            align: 'center',
            render: (_, record) => {
                return (
                    <span>
                        {record.disableFlag ? 'open' : 'disabled'}
                    </span>
                )
            }
        },
        {
            title: 'opeartion',
            dataIndex: 'operation',
            key: 5,
            align: 'center',
            render: (_, record) => {
                return (
                    <span>
                        <Popconfirm title="Confirm?" onConfirm={() => handleCurrentOperation(record)}>
                            <Button type="primary"
                                    danger={!!record.disableFlag}>
                                {record.disableFlag ? 'disabled' : 'open'}
                            </Button>
                        </Popconfirm>
                    </span>
                )
            }
        },
    ];

    const formColumn = [
        {
            name: "icon_url",
            id: 1,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter icon_url"
                }
            ]
        },
        {
            name: "name",
            id: 2,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter shop name"
                }
            ]
        },
        {
            name: "pricePerMan",
            id: 3,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter pricePerMan"
                }
            ]
        },

        {
            name: "latitude",
            id: 4,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter latitude"
                }
            ]
        },
        {
            name: "longtitude",
            id: 5,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter longtitude"
                }
            ]
        },
        {
            name: "tags",
            id: 6,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter tags"
                }
            ]
        },
        {
            name: "startTime",
            id: 7,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter startTime"
                }
            ]
        },
        {
            name: "endTime",
            id: 8,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter endTime"
                }
            ]
        },
        {
            name: "sellerId",
            id: 9,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter sellerId"
                }
            ]
        },
        {
            name: "categoryId",
            id: 10,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter categoryId"
                }
            ]
        },
    ]

    return (
        <div className="sellerWrapper">

            {/*layout start*/}
            <div className="title">SHOP LIST</div>
            <div className="buttonLayout">
                <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>Add</Button>
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