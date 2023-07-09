import { memo } from 'react'
import { Table } from 'antd'

const CommonTable = memo(
  ({
    dataSource,
    columns,
    loading,
    size = 'small',
    bordered = false,
    onChange
  }) => {
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={loading}
        size={size}
        bordered={bordered}
        onChange={onChange}
        rowClassName='cursor-pointer hover:bg-sky-200'
      />
    )
  }
)

export default CommonTable
