import React, {useEffect, useImperativeHandle, useState} from "react";

import { Table } from "antd";

// 实现目标
// 1： table能满足当前业务的公共需求
// 2： 包括loading 分页(内部做分页) 对外提供刷新操作


// 1：column
// loading状态
// 对外事件的处理

export default function PublicTable(props) {

    useEffect(() => {
        getTable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useImperativeHandle(props.onRef, () => {
        return {
            getTable: getTable
        }
    });

    const getTable = () => {
        props.api().then(res => {
            setTableLoad(true);
            if (res.status === "success") {
                setDataSource(res.data);
                setTableLoad(false);
            } else {
                setTableLoad(false);
            }
        });
    }

    let [tableLoad, setTableLoad] = useState(false);

    let [dataSource, setDataSource] = useState([])

    return (
        <div className="table-wrapper">

            {/*Table start */}
            <div className="tableWrapper">
                <Table scroll={{ y: "54vh" }}
                       loading={tableLoad}
                       rowKey={(record) => record.id }
                       pagination={{pageSize:10}}
                       bordered
                       dataSource={dataSource}
                       columns={props.columns} />
            </div>
            {/*Table end */}

        </div>
    )
}

