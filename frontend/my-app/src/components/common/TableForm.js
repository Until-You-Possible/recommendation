import React, {useEffect, useState} from "react";
import {Form, Input, message, Modal, Table} from "antd";
import {addCategory, addSeller, getCategoryList} from "../../api/pc";


// 实现目标
// 与table的联动关系
// 关于form的不同验证规则
// 不同控件的数据渲染 eg: select
// 数据的回填

export default function TableForm(props) {

    const [addForm] = Form.useForm();

    const handleOk = () => {
        props.handleOk();
        addForm.submit();
    };

    const handleCancel = () => {
        props.handleCancel()
        addForm.resetFields();
    };

    const onFinish = (values) => {
        addSeller(values).then(res => {
            if (res.status === "success") {
                message.info('商家创建成功').then(r => null);
                addForm.resetFields();

            }
        });
    }


    return (
        <div className="table-form-wrapper">
            {/*Modal start*/}
            <Modal title={props.title} visible={props.visible}
                   okText="创建"
                   cancelText="取消"
                   onOk={handleOk}
                   onCancel={handleCancel}>
                <Form
                    form={addForm}
                    name="normal_login"
                    size="large"
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