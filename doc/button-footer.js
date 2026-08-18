const { ButtonFooter } = _ButtonGroup;
const { Flex, Button, Typography, Alert, Radio, Space, Tag } = antd;

const PLACEMENT_OPTIONS = [
  { label: 'bottom', value: 'bottom' },
  { label: 'bottomStart', value: 'bottomStart' },
  { label: 'bottomEnd', value: 'bottomEnd' },
  { label: 'top', value: 'top' },
  { label: 'topStart', value: 'topStart' },
  { label: 'topEnd', value: 'topEnd' }
];

const BaseExample = () => {
  const frameRef = React.useRef(null);
  const [placement, setPlacement] = React.useState('bottom');

  return (
    <Flex vertical gap={16} style={{ width: '100%' }}>
      <style>{`
        .demo-button-footer-bar {
          background: #e6f4ff !important;
        }
      `}</style>
      <Alert
        type="info"
        showIcon
        message="切换 placement 查看操作条位置"
        description="预览框模拟页面容器。操作条会按 placement 固定到顶部或底部，Start / 默认 / End 分别对应左、中、右对齐。"
      />
      <Space direction="vertical" size={4}>
        <Typography.Text type="secondary">placement</Typography.Text>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={PLACEMENT_OPTIONS}
          value={placement}
          onChange={e => setPlacement(e.target.value)}
        />
      </Space>
      <div
        ref={frameRef}
        className="kne-responsive-boundary"
        style={{
          position: 'relative',
          minHeight: 520,
          background: '#f5f5f5',
          borderRadius: 8,
          overflow: 'hidden',
          border: '1px solid #f0f0f0'
        }}
      >
        <div style={{ padding: 24 }}>
          <Space direction="vertical" size={12} style={{ width: '100%' }}>
            <Space>
              <Typography.Title level={5} style={{ margin: 0 }}>
                春季外套
              </Typography.Title>
              <Tag color="orange">待支付</Tag>
            </Space>
            <Typography.Text type="secondary">订单号 OD20260818001</Typography.Text>
            <Typography.Text>数量：1 件</Typography.Text>
            <Typography.Text>应付金额：¥299.00</Typography.Text>
            <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
              请在 29:59 内完成支付，超时订单将自动取消。
            </Typography.Paragraph>
          </Space>
        </div>
        <ButtonFooter placement={placement} target={() => frameRef.current} innerClassName="demo-button-footer-bar">
          <Button>取消订单</Button>
          <Button type="primary">去支付</Button>
        </ButtonFooter>
      </div>
    </Flex>
  );
};

render(<BaseExample />);
