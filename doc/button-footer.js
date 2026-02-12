const { ButtonFooter } = _ButtonGroup;
const { Flex, Button, Space, Typography, Card, Form, Input } = antd;
const { useState } = React;

// 基础用法
const BasicExample = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">
        ButtonFooter 固定在页面底部，在小屏幕（≤768px）下自动渲染到 body
      </Typography.Text>
      <Card
        title="页面内容区域"
        style={{ width: 400, minHeight: 200 }}
      >
        <Typography.Paragraph>
          这是页面的主要内容区域。ButtonFooter 会自动计算高度并设置 CSS 变量，
          方便页面布局调整。
        </Typography.Paragraph>
        <Typography.Paragraph>
          在移动端，按钮会自动固定在屏幕底部，确保操作按钮始终可见。
        </Typography.Paragraph>
      </Card>
      <ButtonFooter>
        <Flex justify="flex-end" gap={8} style={{ padding: '16px 24px', background: '#fff', borderTop: '1px solid #f0f0f0' }}>
          <Button>取消</Button>
          <Button type="primary">保存</Button>
        </Flex>
      </ButtonFooter>
    </Space>
  );
};

// 表单提交场景
const FormExample = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('保存成功');
    }, 1000);
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('提交成功');
    }, 1000);
  };

  return (
    <Card title="表单底部操作" style={{ width: 500 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text type="secondary">
          适用于表单页面的底部操作按钮
        </Typography.Text>
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="名称">
            <Input placeholder="请输入名称" />
          </Form.Item>
          <Form.Item name="desc" label="描述">
            <Input.TextArea placeholder="请输入描述" rows={4} />
          </Form.Item>
        </Form>
        <ButtonFooter>
          <Flex justify="flex-end" gap={8} style={{ padding: '16px 0', borderTop: '1px solid #f0f0f0' }}>
            <Button onClick={() => form.resetFields()}>重置</Button>
            <Button onClick={handleSave}>保存草稿</Button>
            <Button type="primary" loading={loading} onClick={handleSubmit}>
              提交
            </Button>
          </Flex>
        </ButtonFooter>
      </Space>
    </Card>
  );
};

// 居中对齐
const CenterExample = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">按钮居中对齐</Typography.Text>
      <Card title="对话框" style={{ width: 400 }}>
        <Typography.Paragraph>
          这是对话框的内容区域，底部按钮居中对齐。
        </Typography.Paragraph>
      </Card>
      <ButtonFooter>
        <Flex justify="center" gap={8} style={{ padding: '16px 24px', background: '#fff', borderTop: '1px solid #f0f0f0' }}>
          <Button>关闭</Button>
          <Button type="primary">确认</Button>
        </Flex>
      </ButtonFooter>
    </Space>
  );
};

// 多按钮布局
const MultipleButtonsExample = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">多个操作按钮</Typography.Text>
      <Card title="详情页面" style={{ width: 450 }}>
        <Typography.Paragraph>
          页面详情内容区域...
        </Typography.Paragraph>
        <Typography.Paragraph>
          支持多个按钮布局，包括主要操作、次要操作等。
        </Typography.Paragraph>
      </Card>
      <ButtonFooter>
        <Flex justify="space-between" align="middle" style={{ padding: '12px 24px', background: '#fff', borderTop: '1px solid #f0f0f0' }}>
          <Space>
            <Button type="text" danger>删除</Button>
            <Button type="text">导出</Button>
          </Space>
          <Space>
            <Button>编辑</Button>
            <Button type="primary">提交审核</Button>
          </Space>
        </Flex>
      </ButtonFooter>
    </Space>
  );
};

// 紧凑样式
const CompactExample = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">紧凑样式</Typography.Text>
      <Card title="设置页面" style={{ width: 400 }}>
        <Typography.Paragraph>
          系统设置内容区域...
        </Typography.Paragraph>
      </Card>
      <ButtonFooter>
        <Flex justify="flex-end" gap={8} style={{ padding: '8px 0', borderTop: '1px solid #f0f0f0' }}>
          <Button size="small">取消</Button>
          <Button size="small" type="primary">保存设置</Button>
        </Flex>
      </ButtonFooter>
    </Space>
  );
};

// 禁用状态
const DisabledExample = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">按钮禁用状态</Typography.Text>
      <Space>
        <Button onClick={() => setDisabled(!disabled)} size="small">
          {disabled ? '启用按钮' : '禁用按钮'}
        </Button>
      </Space>
      <Card title="详情页" style={{ width: 400 }}>
        <Typography.Paragraph>
          内容区域...
        </Typography.Paragraph>
      </Card>
      <ButtonFooter>
        <Flex justify="flex-end" gap={8} style={{ padding: '16px 0', borderTop: '1px solid #f0f0f0' }}>
          <Button disabled={disabled}>编辑</Button>
          <Button type="primary" disabled={disabled}>
            提交
          </Button>
        </Flex>
      </ButtonFooter>
    </Space>
  );
};

// 步骤条场景
const StepsExample = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepContent = [
    '第一步：填写基本信息',
    '第二步：上传相关文件',
    '第三步：确认提交信息'
  ];

  return (
    <Card title="步骤操作" style={{ width: 450 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text type="secondary">
          当前步骤：{currentStep + 1} / {totalSteps}
        </Typography.Text>
        <div style={{ padding: '24px', background: '#f5f5f5', borderRadius: '8px', minHeight: '100px' }}>
          <Typography.Text>{stepContent[currentStep]}</Typography.Text>
        </div>
        <ButtonFooter>
          <Flex justify="space-between" style={{ padding: '16px 0', borderTop: '1px solid #f0f0f0' }}>
            <Button disabled={currentStep === 0} onClick={prevStep}>
              上一步
            </Button>
            <Button
              type="primary"
              onClick={currentStep === totalSteps - 1 ? () => message.success('提交成功') : nextStep}
            >
              {currentStep === totalSteps - 1 ? '提交' : '下一步'}
            </Button>
          </Flex>
        </ButtonFooter>
      </Space>
    </Card>
  );
};

// 实际应用场景 - 完整页面
const FullPageExample = () => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    message.success('提交成功');
  };

  const handleSave = () => {
    message.success('已保存草稿');
  };

  return (
    <Card title="完整页面示例" style={{ width: 500 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text type="secondary">
          模拟一个完整的表单页面，包含标题、内容区和底部操作按钮
        </Typography.Text>
        <div style={{ minHeight: '200px', padding: '20px', background: '#fafafa', borderRadius: '8px' }}>
          <Typography.Title level={5}>用户信息编辑</Typography.Title>
          <Form form={form} layout="vertical">
            <Form.Item name="username" label="用户名">
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item name="email" label="邮箱">
              <Input placeholder="请输入邮箱" />
            </Form.Item>
          </Form>
        </div>
        <ButtonFooter>
          <Flex justify="flex-end" gap={12} style={{ padding: '16px 24px', background: '#fff', borderTop: '1px solid #f0f0f0' }}>
            <Button onClick={() => form.resetFields()}>重置</Button>
            <Button onClick={handleSave}>保存草稿</Button>
            <Button type="primary" onClick={handleSubmit}>提交</Button>
          </Flex>
        </ButtonFooter>
      </Space>
    </Card>
  );
};

const BaseExample = () => {
  return (
    <Space direction="vertical" size="large">
      <Typography.Title level={3}>ButtonFooter 底部按钮区</Typography.Title>
      <Typography.Paragraph>
        ButtonFooter 是页面底部按钮区域组件，可以自动计算高度并设置 CSS 变量。
        在小屏幕（≤768px）下，会将内容渲染到 body，确保按钮始终可见。
        适用于表单页面、详情页面、对话框等场景。
      </Typography.Paragraph>

      <Flex vertical gap={32}>
        <div>
          <Typography.Title level={4}>基础用法</Typography.Title>
          <BasicExample />
        </div>

        <div>
          <Typography.Title level={4}>表单提交场景</Typography.Title>
          <FormExample />
        </div>

        <div>
          <Typography.Title level={4}>居中对齐</Typography.Title>
          <CenterExample />
        </div>

        <div>
          <Typography.Title level={4}>多按钮布局</Typography.Title>
          <MultipleButtonsExample />
        </div>

        <div>
          <Typography.Title level={4}>紧凑样式</Typography.Title>
          <CompactExample />
        </div>

        <div>
          <Typography.Title level={4}>禁用状态</Typography.Title>
          <DisabledExample />
        </div>

        <div>
          <Typography.Title level={4}>步骤操作</Typography.Title>
          <StepsExample />
        </div>

        <div>
          <Typography.Title level={4}>完整页面示例</Typography.Title>
          <FullPageExample />
        </div>
      </Flex>
    </Space>
  );
};

render(<BaseExample />);
