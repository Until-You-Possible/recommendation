import React, {useEffect, useState} from "react";
import {Button, Form} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import { getCategoryList, addCategory} from "../../api/pc";
import "./style/categoryComponent.scss"
import PublicTable from "../common/Table";
import TableForm from "../common/TableForm";
export  default  function CategoryComponent() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    let tableRef = React.createRef();
    const [ modelTitle ] = useState("Add New Category");
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
        // refreshTable()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refreshTable = () => {
        // tableRef.current.getTable();
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 1,
            align: 'center'
        },
        {
            title: 'category name',
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
            title: 'sort',
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
                    message: "Enter category name"
                }
            ]
        },
        {
            name: "iconUrl",
            id: 2,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter category icon url"

                }
            ]
        },
        {
            name: "sort",
            id: 3,
            type: "input",
            rules: [
                {
                    required: true,
                    message: "Enter category sort (require number)"

                }
            ]
        }

    ]

    return (
        <div className="categoryWrapper">

            {/*layout start*/}
            <div className="title">CATEGORY LIST</div>
            <div className="buttonLayout">
                <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>Add</Button>
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
                api = {addCategory}
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