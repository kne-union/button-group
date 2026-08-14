const { ButtonFooter } = _ButtonGroup;
const { Flex, Button, Card, Form, Input, Typography, Alert, message, Radio, Space } = antd;

const PLACEMENT_OPTIONS = [
  { label: 'bottom', value: 'bottom' },
  { label: 'bottomStart', value: 'bottomStart' },
  { label: 'bottomEnd', value: 'bottomEnd' },
  { label: 'top', value: 'top' },
  { label: 'topStart', value: 'topStart' },
  { label: 'topEnd', value: 'topEnd' }
];

const BaseExample = () => {
  const [form] = Form.useForm();
  const [placement, setPlacement] = React.useState('bottom');

  return (
    <Flex vertical gap={16} style={{ width: '100%', minHeight: 360 }}>
      <Alert
        type="info"
        showIcon
        message="请切换到手机模式预览"
        description="ButtonFooter 在移动端会将操作栏固定到指定位置。请点击示例预览工具栏中的「手机」图标，切换为手机模式后查看效果，并通过下方选项切换 placement。"
      />
      <Space direction="vertical" size={4}>
        <Typography.Text type="secondary">placement（移动端固定条位置）</Typography.Text>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={PLACEMENT_OPTIONS}
          value={placement}
          onChange={e => setPlacement(e.target.value)}
        />
      </Space>
      <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
        桌面端按钮跟随文档流排列；移动端会将下方操作栏 Portal 到可视区域，并按 placement 固定到顶部/底部，同时控制内容水平对齐。
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
      <ButtonFooter placement={placement}>
        <Button onClick={() => form.resetFields()}>重置</Button>
        <Button type="primary" onClick={() => message.success('保存成功')}>
          保存
        </Button>
      </ButtonFooter>
    </Flex>
  );
};

render(<BaseExample />);
