import React from "react";
import {Form, Input, message, Modal} from "antd";


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
        console.log("values", values);
        props.api(values).then(res => {
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

    const renderDiffComponent = (item) => {
        if (item.type === "input") {
            const placeholderText = item.rules[0].message
            return (
                <Input placeholder={placeholderText} />
            )
        }
        return <Input placeholder="Enter message" />
    }


    return (
        <div className="table-form-wrapper">
            {/*Modal start*/}
            <Modal
                getContainer={false}
                forceRender
                title={props.title}
               visible={props.visible}
               okText="Create"
               cancelText="Cancel"
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
                                    { renderDiffComponent(item) }
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