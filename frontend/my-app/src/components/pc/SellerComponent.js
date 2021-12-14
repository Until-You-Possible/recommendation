import React, {useEffect, useState} from "react";
import {Button, Form, Input, message, Modal, Popconfirm, Table} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import {addSeller, downSeller, getAllSeller, upSeller} from "../../api/pc";
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
                // reload table
                getTable();

            }
        });
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

    let handleCurrentOperation = (record) => {
        // 确定执行操作
        if (record) {
            if (record.disableFlag) {
                downSeller({id: record.id}).then(res => {
                    if (res.status === "success") {
                        getTable();
                    }
                });
            } else {
                console.log("record", record);
                upSeller({id: record.id}).then(res => {
                    if (res.status === "success") {
                        getTable();
                    }
                });
            }

        }

    }

    let [dataSource, setDataSource] = useState([])

    let [tableLoad, setTableLoad] = useState(true);

    // 获取列表
    const getTable = () => {
        getAllSeller().then(res => {
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
    useEffect(() => {
        getTable();
    }, []);

    return (
        <div className="sellerWrapper">

             {/*layout start*/}
              <div className="title">商家管理</div>
              <div className="buttonLayout">
                  <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>新增商家</Button>
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