import React, {useEffect, useState} from "react";
import {Button, Form, Input, message, Modal, Switch, Table} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import {addSeller, getAllSeller} from "../../api/pc";
import "./style/sellerComponent.scss"

export  default  function SellerComponent() {

    const [isModalVisible, setIsModalVisible] = useState(false);

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

    const onFinish = (values) => {
        addSeller(values).then(res => {
            if (res.status === "success") {
                setIsModalVisible(false);
                message.info('商家创建成功').then(r => null);
                addForm.resetFields();
            }
        });
    }

    // Table
    const handlerDisabledChange = (record, e) => {
        console.log("record", record);
        console.log("e", e);
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 1,
            align: 'center'
        },
        {
            title: '商家名',
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
                        <Button>
                            {record.disableFlag ? '启用' : '禁用'}
                        </Button>
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
                        <Button type={record.disabledFlag === 1 ? 'danger': 'primary'}>
                            {record.disabledFlag === 1 ? '禁用' : '启用'}
                        </Button>
                    </span>
                )
            }
        },
    ];

    let [dataSource, setDataSource] = useState([])

    useEffect(() => {
        // get all seller
        getAllSeller().then(res => {
            if (res.status === "success") {
                setDataSource(res.data);
            }
        });
    }, []);

    return (
        <div className="sellerWrapper">
              <div className="title">商家管理</div>
              <div className="buttonLayout">
                  <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>新增商家</Button>
              </div>

            {/*Table start */}
            <div className="tableWrapper">
                <Table scroll={{ y: "54vh" }}
                       rowKey={(record) => record.id }
                       pagination={{pageSize:10}}
                       bordered
                       dataSource={dataSource}
                       columns={columns} />
            </div>
            {/*Table end */}

            {/*Modal start*/}
            <Modal title="新增商家" visible={isModalVisible}
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
                                message: '请输入商家名称!',
                            },
                        ]}
                    >
                        <Input placeholder="请输入商家名称" />
                    </Form.Item>


                </Form>
            </Modal>
            {/*Modal end*/}

        </div>
    )
}