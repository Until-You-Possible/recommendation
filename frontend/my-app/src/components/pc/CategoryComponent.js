import React, {useEffect, useState} from "react";
import {Button, Form, Input, message, Modal, Popconfirm, Table} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import {addCategory, getCategoryList} from "../../api/pc";
import "./style/categoryComponent.scss"
export  default  function CategoryComponent() {

    const [isModalVisibleCategory, setIsModalVisibleCategory] = useState(false);

    const [addForm] = Form.useForm();

    const showModal = () => {
        setIsModalVisibleCategory(true);
    };

    const handleOk = () => {
        addForm.submit();
    };

    useEffect(() => {
        getTable();
    }, [])

    const handleCancel = () => {
        setIsModalVisibleCategory(false);
        addForm.resetFields();
    };

    let [tableLoad, setTableLoad] = useState(true);

    let [dataSource, setDataSource] = useState([])


    const onFinish = (values) => {
        addCategory(values).then(res => {
            if (res.status === "success") {
                setIsModalVisibleCategory(false);
                message.info('品类创建成功').then(r => null);
                addForm.resetFields();
                // reload table
                getTable();

            }
        });
    }

    const getTable = () => {
        getCategoryList().then(res => {
            setTableLoad(true);
            if (res.status === "success") {
                setDataSource(res.data);
                setTimeout(() => {
                    setTableLoad(false);
                },1500);
            } else {
                setTableLoad(true);
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

            {/*Table start */}
            <div className="tableWrapper">
                <Table scroll={{ y: "54vh" }}
                       loading={tableLoad}
                       rowKey={(record) => record.id }
                       pagination={{pageSize:10}}
                       bordered
                       dataSource={dataSource}
                       columns={columnsCategory} />
            </div>
            {/*Table end */}

            {/*Modal start*/}
            <Modal title="新增品类" visible={isModalVisibleCategory}
                   okText="创建"
                   cancelText="取消"
                   onOk={handleOk}
                   onCancel={handleCancel}>
                <Form
                    form={addForm}
                    name="normal_login"
                    size="large"
                    className="seller-form"
                    autoComplete="off"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '请输入品类名称!',
                            },
                        ]}
                    >
                        <Input placeholder="请输入品类名称" />
                    </Form.Item>
                    <Form.Item
                        name="iconUrl"
                        rules={[
                            {
                                required: true,
                                message: '请选择品类icon!',
                            },
                        ]}
                    >
                        <Input placeholder="请选择品类icon" />
                    </Form.Item>
                    <Form.Item
                        name="sort"
                        rules={[
                            {
                                required: true,
                                message: '请输入权重!',
                            },
                        ]}
                    >
                        <Input placeholder="请输入权重" />
                    </Form.Item>

                </Form>
            </Modal>
            {/*Modal end*/}

        </div>
    )
}