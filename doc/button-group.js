const { default: ButtonGroup } = _ButtonGroup;
const { Flex, Button, Space, Typography } = antd;
const { useState } = React;
const { Text } = Typography;

// 基础用法 - 自动适应容器宽度
const BasicExample = () => {
  const [width, setWidth] = useState(300);
  return (
    <Flex gap={16} vertical>
      <Text type="secondary">调整容器宽度查看自适应效果</Text>
      <Flex gap={8}>
        <div style={{ width: `${width}px`, padding: '12px', background: '#f5f5f5', borderRadius: '8px' }}>
          <ButtonGroup
            list={[
              { type: 'primary', children: '新建' },
              { type: 'default', children: '编辑' },
              { type: 'default', children: '导出' },
              { type: 'default', children: '打印' },
              { children: '更多操作1', message: '确定执行吗？' },
              { children: '更多操作2', message: '确定执行吗？' }
            ]}
          />
        </div>
      </Flex>
      <Space>
        <Button onClick={() => setWidth(w => Math.max(200, w - 50))}>减少宽度</Button>
        <Button onClick={() => setWidth(w => Math.min(600, w + 50))}>增加宽度</Button>
      </Space>
    </Flex>
  );
};

// 紧凑模式
const CompactExample = () => {
  return (
    <Flex gap={16} vertical>
      <Text type="secondary">紧凑模式（适用于工具栏）</Text>
      <ButtonGroup
        compact
        list={[
          { type: 'primary', children: '保存' },
          { children: '撤销' },
          { children: '重做' },
          { children: '删除', isDelete: true }
        ]}
      />
    </Flex>
  );
};

// 链接样式 - 更多按钮
const LinkStyleExample = () => {
  const [width, setWidth] = useState(200);
  return (
    <Flex gap={16} vertical>
      <Text type="secondary">链接样式（适用于表格操作栏）</Text>
      <div style={{ width: `${width}px` }}>
        <ButtonGroup
          moreType="link"
          list={[
            { children: '查看', type: 'link' },
            { children: '编辑', type: 'link' },
            { children: '删除', type: 'link', isDelete: true, message: '确定删除吗？' },
            { children: '审核', type: 'link' },
            { children: '驳回', type: 'link' }
          ]}
        />
      </div>
      <Space>
        <Button onClick={() => setWidth(w => Math.max(150, w - 30))}>-</Button>
        <Button onClick={() => setWidth(w => Math.min(400, w + 30))}>+</Button>
      </Space>
    </Flex>
  );
};

// 指定显示数量
const FixedLengthExample = () => {
  const [showLength, setShowLength] = useState(2);
  return (
    <Flex gap={16} vertical>
      <Text type="secondary">指定显示按钮数量（showLength）</Text>
      <Space>
        <Button
          type={showLength === 1 ? 'primary' : 'default'}
          onClick={() => setShowLength(1)}
        >
          显示1个
        </Button>
        <Button
          type={showLength === 2 ? 'primary' : 'default'}
          onClick={() => setShowLength(2)}
        >
          显示2个
        </Button>
        <Button
          type={showLength === 3 ? 'primary' : 'default'}
          onClick={() => setShowLength(3)}
        >
          显示3个
        </Button>
      </Space>
      <ButtonGroup
        showLength={showLength}
        list={[
          { type: 'primary', children: '主要操作' },
          { children: '次要操作1' },
          { children: '次要操作2' },
          { children: '次要操作3' },
          { children: '次要操作4' }
        ]}
      />
    </Flex>
  );
};

// 自定义渲染函数
const CustomRenderExample = () => {
  const CustomButton = (props) => (
    <Button {...props} style={{ borderRadius: '4px' }}>
      {props.children}
    </Button>
  );

  return (
    <Flex gap={16} vertical>
      <Text type="secondary">自定义渲染（支持函数式配置）</Text>
      <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '8px', width: '280px' }}>
        <ButtonGroup
          moreType="link"
          list={[
            (props) => <CustomButton {...props} type="primary">自定义按钮</CustomButton>,
            (props) => <CustomButton {...props}>按钮2</CustomButton>,
            (props) => <CustomButton {...props}>按钮3</CustomButton>,
            (props) => <CustomButton {...props}>按钮4</CustomButton>
          ]}
        />
      </div>
    </Flex>
  );
};

// 禁用状态与隐藏
const StateExample = () => {
  const [disabled, setDisabled] = useState(true);
  const [hidden, setHidden] = useState(true);

  return (
    <Flex gap={16} vertical>
      <Text type="secondary">禁用与隐藏状态</Text>
      <Space>
        <Button onClick={() => setDisabled(!disabled)}>
          {disabled ? '启用' : '禁用'}操作3
        </Button>
        <Button onClick={() => setHidden(!hidden)}>
          {hidden ? '显示' : '隐藏'}操作4
        </Button>
      </Space>
      <ButtonGroup
        list={[
          { type: 'primary', children: '操作1' },
          { children: '操作2' },
          { children: '操作3', disabled },
          { children: '操作4', hidden },
          { children: '操作5', message: '确定吗？' }
        ]}
      />
    </Flex>
  );
};

// 工具提示
const TooltipExample = () => {
  return (
    <Flex gap={16} vertical>
      <Text type="secondary">禁用按钮提示（tooltipProps）</Text>
      <ButtonGroup
        list={[
          { type: 'primary', children: '可用操作' },
          {
            children: '已禁用操作',
            disabled: true,
            tooltipProps: {
              title: '此操作暂时不可用，请先完成前置步骤',
              placement: 'bottom'
            }
          },
          {
            children: '需要权限',
            disabled: true,
            tooltipProps: {
              title: '您没有执行此操作的权限',
              placement: 'bottom'
            }
          }
        ]}
      />
    </Flex>
  );
};

const BaseExample = () => {
  return (
    <Space direction="vertical" size="large">
      <Typography.Title level={3}>ButtonGroup 自适应按钮组</Typography.Title>
      <Typography.Paragraph>
        ButtonGroup 是一个自适应按钮组组件，能够根据容器宽度自动调整显示的按钮数量，
        多余的按钮会放入下拉菜单中。适用于操作栏、工具栏、表格操作列等场景。
      </Typography.Paragraph>

      <Flex vertical gap={32}>
        <div>
          <Typography.Title level={4}>基础用法</Typography.Title>
          <BasicExample />
        </div>

        <div>
          <Typography.Title level={4}>紧凑模式</Typography.Title>
          <CompactExample />
        </div>

        <div>
          <Typography.Title level={4}>链接样式</Typography.Title>
          <LinkStyleExample />
        </div>

        <div>
          <Typography.Title level={4}>指定显示数量</Typography.Title>
          <FixedLengthExample />
        </div>

        <div>
          <Typography.Title level={4}>自定义渲染</Typography.Title>
          <CustomRenderExample />
        </div>

        <div>
          <Typography.Title level={4}>禁用与隐藏</Typography.Title>
          <StateExample />
        </div>

        <div>
          <Typography.Title level={4}>禁用提示</Typography.Title>
          <TooltipExample />
        </div>
      </Flex>
    </Space>
  );
};

render(<BaseExample />);
