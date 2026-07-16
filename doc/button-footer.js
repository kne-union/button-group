const { ButtonFooter } = _ButtonGroup;
const { Flex, Button, Card, Form, Input, Typography, Alert, message } = antd;

const BaseExample = () => {
  const [form] = Form.useForm();

  return (
    <Flex vertical gap={16} style={{ width: '100%', minHeight: 360 }}>
      <Alert
        type="info"
        showIcon
        message="请切换到手机模式预览"
        description="ButtonFooter 在移动端会将操作栏固定到底部。请点击示例预览工具栏中的「手机」图标，切换为手机模式后查看效果。"
      />
      <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
        桌面端按钮跟随文档流排列；移动端会将下方操作栏 Portal 到可视区域底部并固定显示。
      </Typography.Paragraph>
      <Card title="用户信息编辑" style={{ flex: 1 }}>
        <Form form={form} layout="vertical">
          <Form.Item name="username" label="用户名">
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="email" label="邮箱">
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item name="phone" label="手机号">
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item name="department" label="部门">
            <Input placeholder="请输入部门" />
          </Form.Item>
          <Form.Item name="position" label="职位">
            <Input placeholder="请输入职位" />
          </Form.Item>
          <Form.Item name="company" label="公司">
            <Input placeholder="请输入公司名称" />
          </Form.Item>
          <Form.Item name="address" label="联系地址">
            <Input placeholder="请输入联系地址" />
          </Form.Item>
          <Form.Item name="emergencyContact" label="紧急联系人">
            <Input placeholder="请输入紧急联系人" />
          </Form.Item>
          <Form.Item name="emergencyPhone" label="紧急联系电话">
            <Input placeholder="请输入紧急联系电话" />
          </Form.Item>
          <Form.Item name="remark" label="备注">
            <Input.TextArea placeholder="请输入备注" rows={6} />
          </Form.Item>
        </Form>
      </Card>
      <ButtonFooter>
        <Flex justify="flex-end" gap={8} style={{ padding: '16px 24px' }}>
          <Button onClick={() => form.resetFields()}>重置</Button>
          <Button type="primary" onClick={() => message.success('保存成功')}>
            保存
          </Button>
        </Flex>
      </ButtonFooter>
    </Flex>
  );
};

render(<BaseExample />);
