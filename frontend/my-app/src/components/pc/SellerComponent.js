import React, {useState, useEffect, forwardRef } from "react";
import {Button, Form, Popconfirm} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import {addSeller, downSeller, getAllSeller, upSeller} from "../../api/pc";
import "./style/sellerComponent.less"
import PublicTable from "../common/Table";
import TableForm from "../common/TableForm";


function SellerComponent() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ modelTitle ] = useState("Add New Seller");

    let tableRef = React.createRef();

    const [addForm] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        addForm.submit();
    };
    const refreshTable = () => {
        // tableRef.current.getTable();
    }

    const handleCancel = () => {
        setIsModalVisible(false);
        addForm.resetFields();
    };

    useEffect(() => {
        // let tableRef = React.createRef();
        console.log("tableRef", tableRef);
    }, []);


    // Table
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: "id",
            align: 'center'
        },
        {
            title: 'seller name',
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
            title: 'operation',
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


    let handleCurrentOperation = (record) => {
        // 确定执行操作
        if (record) {
            if (record.disableFlag) {
                downSeller({id: record.id}).then(res => {
                    if (res.status === "success") {
                        // getTable();
                    }
                });
            } else {
                console.log("record", record);
                upSeller({id: record.id}).then(res => {
                    if (res.status === "success") {
                        // getTable();
                    }
                });
            }

        }

    }

    return (
        <div className="sellerWrapper">

             {/*layout start*/}
              <div className="title">Seller List</div>
              <div className="buttonLayout">
                  <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>Add</Button>
              </div>
            {/*layout end*/}

            <PublicTable
                ref={tableRef}
                api = {getAllSeller}
                columns = {columns} />

            {/*Model component*/}
            <TableForm
                visible = {isModalVisible}
                api = {addSeller}
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

export  default forwardRef(SellerComponent)