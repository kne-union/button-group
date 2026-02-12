const { ConfirmButton, ConfirmLink, ConfirmText } = _ButtonGroup;
const { Flex, Space, Typography, message, Card, List, Tag, Button } = antd;
const { useState } = React;

// 基础用法 - Popconfirm 模式
const BasicExample = () => {
  const handleDelete = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('删除成功');
        resolve();
      }, 500);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">
        Popconfirm 模式（气泡确认框），适用于快速确认
      </Typography.Text>
      <Space>
        <ConfirmButton message="确定要删除吗？" onClick={handleDelete}>
          删除
        </ConfirmButton>
        <ConfirmButton message="确定要提交吗？" onClick={handleDelete}>
          提交
        </ConfirmButton>
      </Space>
    </Space>
  );
};

// Modal 模式
const ModalExample = () => {
  const handleSubmit = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('提交成功');
        resolve();
      }, 500);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">
        Modal 模式（模态框），适用于重要操作或长内容提示
      </Typography.Text>
      <Space>
        <ConfirmButton
          isModal
          message="此操作将永久删除该数据，删除后无法恢复。确定要继续吗？"
          onClick={handleSubmit}
        >
          删除数据
        </ConfirmButton>
        <ConfirmButton
          isModal
          title="提交确认"
          message="提交后数据将进入审核流程，确认要提交吗？"
          onClick={handleSubmit}
        >
          提交审核
        </ConfirmButton>
      </Space>
    </Space>
  );
};

// 危险操作样式
const DangerExample = () => {
  const handleDelete = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('已删除');
        resolve();
      }, 500);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">
        使用 isDelete 标识危险操作（红色按钮）
      </Typography.Text>
      <Space>
        <ConfirmButton
          danger
          message="确定删除吗？"
          onClick={handleDelete}
        >
          普通按钮
        </ConfirmButton>
        <ConfirmButton
          isDelete
          message="确定删除吗？"
          onClick={handleDelete}
        >
          删除按钮
        </ConfirmButton>
        <ConfirmButton
          isDelete
          isModal
          message="此操作无法撤销，确定要继续吗？"
          onClick={handleDelete}
        >
          删除（Modal）
        </ConfirmButton>
      </Space>
    </Space>
  );
};

// 自定义确认文案
const CustomTextExample = () => {
  const handleAction = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('操作完成');
        resolve();
      }, 500);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">自定义确认和取消按钮文案</Typography.Text>
      <Space>
        <ConfirmButton
          message="确定要执行此操作吗？"
          okText="确认执行"
          cancelText="暂不执行"
          onClick={handleAction}
        >
          自定义文案
        </ConfirmButton>
        <ConfirmButton
          isModal
          title="操作确认"
          message="请确认是否继续执行此操作"
          okText="是，继续"
          cancelText="否，取消"
          onClick={handleAction}
        >
          Modal 自定义文案
        </ConfirmButton>
      </Space>
    </Space>
  );
};

// ConfirmLink 和 ConfirmText
const LinkAndTextExample = () => {
  const handleAction = () => {
    message.success('操作成功');
    return Promise.resolve();
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">
        ConfirmLink 和 ConfirmText 变体，适用于表格行操作等场景
      </Typography.Text>
      <List
        bordered
        style={{ width: 400 }}
        dataSource={[
          { id: 1, name: '数据项 A', status: '已提交' },
          { id: 2, name: '数据项 B', status: '草稿' },
          { id: 3, name: '数据项 C', status: '已审核' }
        ]}
        renderItem={(item) => (
          <List.Item
            actions={[
              <ConfirmLink key="edit" message="确定编辑吗？" onClick={handleAction}>
                编辑
              </ConfirmLink>,
              <ConfirmLink key="delete" isDelete message="确定删除吗？" onClick={handleAction}>
                删除
              </ConfirmLink>
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={<Tag color={item.status === '已提交' ? 'blue' : 'default'}>{item.status}</Tag>}
            />
          </List.Item>
        )}
      />
      <Space>
        <ConfirmText onClick={handleAction}>纯文本确认</ConfirmText>
        <Typography.Text type="secondary">|</Typography.Text>
        <ConfirmText isDelete onClick={handleAction}>删除</ConfirmText>
      </Space>
    </Space>
  );
};

// 禁用状态
const DisabledExample = () => {
  const [disabled, setDisabled] = useState(true);
  const handleDelete = () => {
    message.success('已删除');
    return Promise.resolve();
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">禁用状态下不会触发确认</Typography.Text>
      <Space>
        <Button onClick={() => setDisabled(!disabled)}>
          {disabled ? '启用' : '禁用'}
        </Button>
      </Space>
      <Space>
        <ConfirmButton disabled={disabled} message="确定删除吗？" onClick={handleDelete}>
          删除
        </ConfirmButton>
        <ConfirmLink disabled={disabled} message="确定删除吗？" onClick={handleDelete}>
          删除
        </ConfirmLink>
      </Space>
    </Space>
  );
};

// 实际应用场景 - 表格操作
const TableActionExample = () => {
  const handleEdit = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('进入编辑模式');
        resolve();
      }, 300);
    });
  };

  const handleDelete = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('已删除');
        resolve();
      }, 300);
    });
  };

  const handleAudit = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('审核通过');
        resolve();
      }, 300);
    });
  };

  return (
    <Card title="实际应用：表格操作栏" style={{ width: 500 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text type="secondary">
          模拟表格中的操作按钮，包含不同的确认方式
        </Typography.Text>
        <List
          bordered
          dataSource={[
            { id: 1, name: '产品 A', price: '¥99.00' },
            { id: 2, name: '产品 B', price: '¥199.00' }
          ]}
          renderItem={(item) => (
            <List.Item
              actions={[
                <ConfirmButton key="edit" type="link" message={`确定编辑 ${item.name} 吗？`} onClick={handleEdit}>
                  编辑
                </ConfirmButton>,
                <ConfirmButton key="audit" type="link" message={`确定通过 ${item.name} 的审核吗？`} onClick={handleAudit}>
                  审核
                </ConfirmButton>,
                <ConfirmButton
                  key="delete"
                  type="link"
                  danger
                  message={`确定删除 ${item.name} 吗？此操作无法撤销。`}
                  onClick={handleDelete}
                >
                  删除
                </ConfirmButton>
              ]}
            >
              <List.Item.Meta
                title={item.name}
                description={item.price}
              />
            </List.Item>
          )}
        />
      </Space>
    </Card>
  );
};

// 批量操作
const BatchExample = () => {
  const [selectedCount, setSelectedCount] = useState(0);
  const handleBatchDelete = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success(`已删除 ${selectedCount} 条数据`);
        setSelectedCount(0);
        resolve();
      }, 500);
    });
  };

  return (
    <Card title="批量操作场景" style={{ width: 450 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Typography.Text type="secondary">已选择：</Typography.Text>
          <Typography.Text strong>{selectedCount} 项</Typography.Text>
          <Button size="small" onClick={() => setSelectedCount(Math.floor(Math.random() * 10))}>
            随机选择
          </Button>
        </Space>
        <Space>
          <ConfirmButton
            type="primary"
            disabled={selectedCount === 0}
            isModal
            title="批量删除确认"
            message={`确定要删除选中的 ${selectedCount} 条数据吗？此操作无法撤销。`}
            onClick={handleBatchDelete}
          >
            批量删除
          </ConfirmButton>
          <ConfirmButton
            disabled={selectedCount === 0}
            message={`确定导出选中的 ${selectedCount} 条数据吗？`}
            onClick={() => {
              message.success(`正在导出 ${selectedCount} 条数据`);
              return Promise.resolve();
            }}
          >
            导出
          </ConfirmButton>
        </Space>
      </Space>
    </Card>
  );
};

const BaseExample = () => {
  return (
    <Space direction="vertical" size="large">
      <Typography.Title level={3}>ConfirmButton 确认按钮</Typography.Title>
      <Typography.Paragraph>
        ConfirmButton 提供确认功能，支持 Popconfirm（气泡确认框）和 Modal（模态框）两种模式。
        还提供 ConfirmLink 和 ConfirmText 变体，以及 withConfirm 高阶组件。
      </Typography.Paragraph>

      <Flex vertical gap={32}>
        <div>
          <Typography.Title level={4}>Popconfirm 模式</Typography.Title>
          <BasicExample />
        </div>

        <div>
          <Typography.Title level={4}>Modal 模式</Typography.Title>
          <ModalExample />
        </div>

        <div>
          <Typography.Title level={4}>危险操作样式</Typography.Title>
          <DangerExample />
        </div>

        <div>
          <Typography.Title level={4}>自定义文案</Typography.Title>
          <CustomTextExample />
        </div>

        <div>
          <Typography.Title level={4}>Link 和 Text 变体</Typography.Title>
          <LinkAndTextExample />
        </div>

        <div>
          <Typography.Title level={4}>禁用状态</Typography.Title>
          <DisabledExample />
        </div>

        <div>
          <Typography.Title level={4}>实际应用场景</Typography.Title>
          <TableActionExample />
        </div>

        <div>
          <Typography.Title level={4}>批量操作</Typography.Title>
          <BatchExample />
        </div>
      </Flex>
    </Space>
  );
};

render(<BaseExample />);
