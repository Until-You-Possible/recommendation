import React from "react";
import {Form, Input, message, Modal} from "antd";
import {addSeller} from "../../api/pc";


// 实现目标
// 与table的联动关系
// 关于form的不同验证规则
// 不同控件的数据渲染 eg: select
// 数据的回填

export default function TableForm(props) {

    const [ addForm ] = Form.useForm();

    const handleOk = () => {
        props.handleOk();
        addForm.submit();
    };

    const handleCancel = () => {
        props.handleCancel()
        addForm.resetFields();
    };

    const { refreshTable }  = props
    const onFinish = (values) => {
        addSeller(values).then(res => {
            if (res.status === "success") {
                message.info('successfully~').then(r => null);
                props.handleCancel()
                addForm.resetFields();
                refreshTable();
            } else {
                message.info('failed~').then(r => null);
            }
        });
    }

    const renderDiffComponent = (type) => {
        if (type === "input") {
            return (
                <Input placeholder="请输入" />
            )
        }
        return <Input placeholder="默认输入框" />
    }


    return (
        <div className="table-form-wrapper">
            {/*Modal start*/}
            <Modal
                getContainer={false}
                forceRender
                title={props.title}
               visible={props.visible}
               okText="创建"
               cancelText="取消"
               onOk={handleOk}
               onCancel={handleCancel}>
                <Form
                    form={addForm}
                    size="large"
                    autoComplete="off"
                    onFinish={onFinish}
                >
                    {
                        props.formColumn.map(item => {
                            return (
                                <Form.Item
                                    key={item.id}
                                    name={item.name}
                                    rules={item.rules}
                                >
                                    { renderDiffComponent(item.type) }
                                </Form.Item>
                            )
                        })
                    }
                </Form>
            </Modal>
            {/*Modal end*/}
        </div>
    )
}