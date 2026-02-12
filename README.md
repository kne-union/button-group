# button-group

### 描述

实现了一个按钮组,loading按钮,确认按钮和加载按钮.

### 安装

```shell
npm i --save @kne/button-group
```

### 概述

@kne/button-group 是一个 React 按钮组件库，提供了一系列功能丰富的按钮组件，用于简化常见的按钮交互场景。该库专注于提供自适应布局、加载状态管理、确认操作和数据请求等功能，使开发者能够快速实现各种复杂的按钮交互需求。

### ButtonGroup

自适应按钮组组件，能够根据容器宽度自动调整显示的按钮数量。当容器宽度不足以显示所有按钮时，会自动将多余的按钮放入下拉菜单中，确保界面布局美观且功能完整。

**主要特性：**
- 自动适应容器宽度
- 支持紧凑模式（Space.Compact）
- 支持链接样式（适用于表格操作列）
- 可指定显示的按钮数量
- 支持禁用、隐藏状态
- 支持自定义按钮渲染
- 支持禁用按钮的工具提示

**适用场景：**
- 操作栏、工具栏
- 表格操作列
- 面板标题栏
- 任何需要自适应按钮布局的场景

### LoadingButton

封装了加载状态的按钮组件，简化了异步操作的处理。通过内置的状态管理，在异步操作执行期间自动显示加载状态，提升用户体验。同时提供了 useLoading hook，方便在其他组件中复用加载状态管理逻辑。

**主要特性：**
- 自动管理加载状态
- 支持自定义加载文案
- 自动处理错误情况
- 支持 loading 属性手动控制
- 提供的 useLoading Hook 可在其他组件使用

**适用场景：**
- 表单提交按钮
- 数据导出按钮
- 任何需要异步操作的按钮
- 非按钮组件的异步状态管理

### ConfirmButton

带有确认功能的按钮组件，支持弹窗确认（Popconfirm）和模态框确认（Modal）两种模式。适用于需要用户二次确认的操作，如删除、提交等重要操作。同时提供了 ConfirmLink 和 ConfirmText 变体，以及 withConfirm 高阶组件，满足不同场景的确认需求。

**主要特性：**
- 支持 Popconfirm 和 Modal 两种确认模式
- 支持危险操作样式（红色按钮）
- 可自定义确认和取消按钮文案
- 提供 ConfirmLink 和 ConfirmText 变体
- 确认时自动显示加载状态

**适用场景：**
- 删除操作
- 数据提交
- 审核操作
- 表格行操作（使用 ConfirmLink/ConfirmText）
- 任何需要用户二次确认的操作

### FetchButton

集成了数据请求功能的按钮组件，基于 @kne/react-fetch 库实现。可以直接处理 API 请求，并在请求过程中自动管理加载状态，简化了数据交互的实现。

**主要特性：**
- 自动管理请求加载状态
- 支持请求成功/失败回调
- 支持参数传递
- 支持请求拦截（beforeFetch）
- 基于 @kne/react-fetch 实现

**适用场景：**
- 数据刷新按钮
- 文件导出按钮
- API 请求按钮
- 任何按钮触发的数据请求场景

### ButtonFooter

页面底部按钮区域组件，可以自动计算高度并设置 CSS 变量，方便页面布局和样式调整。在小屏幕下，会自动将内容渲染到 body，确保按钮始终可见。

**主要特性：**
- 自动计算高度并设置 CSS 变量
- 响应式设计，小屏幕下固定到底部
- 支持多种布局方式（居中、左右分布等）
- 适用于表单页面的底部操作区

**适用场景：**
- 表单页面底部操作按钮
- 详情页面底部操作按钮
- 对话框底部按钮
- 任何需要固定在底部的操作按钮区域

## 组件关系

```
ButtonGroup (自适应布局)
  ├── LoadingButton (加载状态)
  ├── ConfirmButton (确认功能)
  │   ├── ConfirmLink (链接变体)
  │   └── ConfirmText (文本变体)
  └── FetchButton (数据请求)
      └── 基于 LoadingButton

ButtonFooter (底部固定区域)
```

## 设计理念

该组件库的设计理念是通过封装常见的按钮交互模式，提供开箱即用的解决方案，同时保持足够的灵活性和可扩展性：

1. **关注点分离**：每个组件专注于解决特定的问题，如 ButtonGroup 专注于布局，LoadingButton 专注于状态管理。

2. **组合优于继承**：通过组合不同的功能组件，可以实现复杂的交互需求，如 FetchButton 就是 LoadingButton 与数据请求功能的组合。

3. **声明式 API**：提供简洁明了的 API，使开发者能够以声明式的方式描述 UI 和交互行为。

4. **渐进式增强**：基础组件可以独立使用，也可以与其他组件组合使用，实现更复杂的功能。

5. **用户体验优先**：注重细节，如自适应布局、加载状态反馈等，提升最终用户的使用体验。

## 特性总结

- **自适应布局**：根据容器宽度自动调整按钮显示方式
- **加载状态管理**：简化异步操作的加载状态处理
- **操作确认**：提供多种确认模式，增强用户操作安全性
- **数据请求集成**：简化按钮与后端 API 的交互
- **国际化支持**：内置中英文语言包
- **高度可定制**：组件提供丰富的配置选项
- **响应式设计**：适配不同屏幕尺寸
- **TypeScript 友好**：完整的类型定义


### 示例

#### 示例代码

- ButtonGroup 基础用法
- ButtonGroup 能够根据容器宽度自动调整显示的按钮数量，并将多余的按钮放入下拉菜单中。适用于操作栏、工具栏等场景。
- _ButtonGroup(@kne/current-lib_button-group)[import * as _ButtonGroup from "@kne/button-group"],antd(antd)

```jsx
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
        <div style={{ width: &#96;${width}px&#96;, padding: '12px', background: '#f5f5f5', borderRadius: '8px' }}>
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
      <div style={{ width: &#96;${width}px&#96; }}>
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

```

- LoadingButton 加载按钮
- LoadingButton 封装了加载状态，简化异步操作的处理。点击按钮时自动显示加载状态，避免重复提交。
- _ButtonGroup(@kne/current-lib_button-group)[import * as _ButtonGroup from "@kne/button-group"],antd(antd)

```jsx
const { LoadingButton, useLoading } = _ButtonGroup;
const { Space, Button, Typography, message, Card, Alert, Flex } = antd;
const { useState } = React;

// 基础用法 - 自动加载状态
const BasicExample = () => {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('操作成功！');
        resolve();
      }, 1500);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">点击按钮，自动管理加载状态</Typography.Text>
      <Space wrap>
        <LoadingButton type="primary" onClick={handleClick}>
          保存数据
        </LoadingButton>
        <LoadingButton onClick={handleClick}>提交审核</LoadingButton>
        <LoadingButton danger onClick={handleClick}>删除</LoadingButton>
      </Space>
    </Space>
  );
};

// 自定义加载文案
const CustomTextExample = () => {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('上传完成');
        resolve();
      }, 2000);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">使用函数自定义加载时的文案</Typography.Text>
      <Space>
        <LoadingButton onClick={handleClick}>
          {(isLoading) => (isLoading ? '正在上传...' : '上传文件')}
        </LoadingButton>
        <LoadingButton onClick={handleClick} type="primary">
          {(isLoading) => (isLoading ? '提交中...' : '提交订单')}
        </LoadingButton>
      </Space>
    </Space>
  );
};

// 错误处理
const ErrorExample = () => {
  const [shouldFail, setShouldFail] = useState(false);

  const handleClick = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          message.error('操作失败，请重试');
          reject(new Error('操作失败'));
        } else {
          message.success('操作成功');
          resolve();
        }
      }, 1000);
    });
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">
        演示错误处理：加载状态会自动解除
      </Typography.Text>
      <Space>
        <Button onClick={() => setShouldFail(!shouldFail)}>
          {shouldFail ? '切换为成功' : '切换为失败'}
        </Button>
      </Space>
      <Space>
        <LoadingButton onClick={handleClick}>
          {shouldFail ? '会失败的操作' : '会成功的操作'}
        </LoadingButton>
      </Space>
      {shouldFail && <Alert message="当前设置为失败模式" type="warning" />}
    </Space>
  );
};

// 手动控制加载状态
const ManualExample = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('手动控制加载完成');
    }, 2000);
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">通过 loading 属性手动控制加载状态</Typography.Text>
      <LoadingButton loading={loading} onClick={handleClick}>
        手动控制加载
      </LoadingButton>
    </Space>
  );
};

// useLoading Hook 示例
const UseLoadingExample = () => {
  const { isLoading, callback } = useLoading(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('Hook 模式操作完成');
        resolve();
      }, 1500);
    });
  });

  return (
    <Card title="useLoading Hook" style={{ width: 400 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text type="secondary">
          在非按钮组件中使用 useLoading 管理异步状态
        </Typography.Text>
        <Space>
          <Button onClick={callback} loading={isLoading}>
            使用 Hook
          </Button>
          <Button onClick={() => {}}>
            独立按钮（不受影响）
          </Button>
        </Space>
        {isLoading && (
          <Alert message="当前状态：加载中" type="info" showIcon />
        )}
      </Space>
    </Card>
  );
};

// 不同按钮类型
const ButtonTypesExample = () => {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('完成');
        resolve();
      }, 1000);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">支持所有 Ant Design Button 类型</Typography.Text>
      <Space wrap>
        <LoadingButton type="primary" onClick={handleClick}>Primary</LoadingButton>
        <LoadingButton type="default" onClick={handleClick}>Default</LoadingButton>
        <LoadingButton type="dashed" onClick={handleClick}>Dashed</LoadingButton>
        <LoadingButton type="link" onClick={handleClick}>Link</LoadingButton>
        <LoadingButton type="text" onClick={handleClick}>Text</LoadingButton>
      </Space>
      <Space wrap>
        <LoadingButton type="primary" ghost onClick={handleClick}>Primary Ghost</LoadingButton>
        <LoadingButton type="default" ghost onClick={handleClick}>Default Ghost</LoadingButton>
      </Space>
    </Space>
  );
};

// 图标按钮
const IconExample = () => {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('操作完成');
        resolve();
      }, 1200);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">支持图标</Typography.Text>
      <Space>
        <LoadingButton type="primary" icon={<span>⬆️</span>} onClick={handleClick}>
          上传
        </LoadingButton>
        <LoadingButton icon={<span>⬇️</span>} onClick={handleClick}>
          下载
        </LoadingButton>
        <LoadingButton danger icon={<span>🗑️</span>} onClick={handleClick}>
          删除
        </LoadingButton>
      </Space>
    </Space>
  );
};

// 实际应用场景 - 表单提交
const FormSubmitExample = () => {
  const handleSubmit = async () => {
    // 模拟表单验证
    await new Promise(resolve => setTimeout(resolve, 500));
    // 模拟 API 请求
    await new Promise((resolve) => {
      setTimeout(() => {
        message.success('表单提交成功！');
        resolve();
      }, 1500);
    });
  };

  return (
    <Card title="表单提交场景" style={{ width: 400 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text type="secondary">
          点击提交按钮，自动防止重复提交
        </Typography.Text>
        <Space>
          <LoadingButton type="primary" onClick={handleSubmit}>
            提交表单
          </LoadingButton>
          <Button onClick={() => message.info('已取消')}>取消</Button>
        </Space>
      </Space>
    </Card>
  );
};

const BaseExample = () => {
  return (
    <Space direction="vertical" size="large">
      <Typography.Title level={3}>LoadingButton 加载按钮</Typography.Title>
      <Typography.Paragraph>
        LoadingButton 封装了加载状态，简化异步操作的处理。点击按钮时自动显示加载状态，
        避免重复提交，同时提供 useLoading Hook 供其他组件使用。
      </Typography.Paragraph>

      <Flex vertical gap={32}>
        <div>
          <Typography.Title level={4}>基础用法</Typography.Title>
          <BasicExample />
        </div>

        <div>
          <Typography.Title level={4}>自定义加载文案</Typography.Title>
          <CustomTextExample />
        </div>

        <div>
          <Typography.Title level={4}>错误处理</Typography.Title>
          <ErrorExample />
        </div>

        <div>
          <Typography.Title level={4}>手动控制加载状态</Typography.Title>
          <ManualExample />
        </div>

        <div>
          <Typography.Title level={4}>useLoading Hook</Typography.Title>
          <UseLoadingExample />
        </div>

        <div>
          <Typography.Title level={4}>不同按钮类型</Typography.Title>
          <ButtonTypesExample />
        </div>

        <div>
          <Typography.Title level={4}>图标按钮</Typography.Title>
          <IconExample />
        </div>

        <div>
          <Typography.Title level={4}>实际应用场景</Typography.Title>
          <FormSubmitExample />
        </div>
      </Flex>
    </Space>
  );
};

render(<BaseExample />);

```

- ConfirmButton 确认按钮
- ConfirmButton 带有确认功能，支持弹窗确认和模态框确认两种模式。适用于删除、提交等重要操作。
- _ButtonGroup(@kne/current-lib_button-group)[import * as _ButtonGroup from "@kne/button-group"],antd(antd)

```jsx
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
                <ConfirmButton key="edit" type="link" message={&#96;确定编辑 ${item.name} 吗？&#96;} onClick={handleEdit}>
                  编辑
                </ConfirmButton>,
                <ConfirmButton key="audit" type="link" message={&#96;确定通过 ${item.name} 的审核吗？&#96;} onClick={handleAudit}>
                  审核
                </ConfirmButton>,
                <ConfirmButton
                  key="delete"
                  type="link"
                  danger
                  message={&#96;确定删除 ${item.name} 吗？此操作无法撤销。&#96;}
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
        message.success(&#96;已删除 ${selectedCount} 条数据&#96;);
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
            message={&#96;确定要删除选中的 ${selectedCount} 条数据吗？此操作无法撤销。&#96;}
            onClick={handleBatchDelete}
          >
            批量删除
          </ConfirmButton>
          <ConfirmButton
            disabled={selectedCount === 0}
            message={&#96;确定导出选中的 ${selectedCount} 条数据吗？&#96;}
            onClick={() => {
              message.success(&#96;正在导出 ${selectedCount} 条数据&#96;);
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

```

- FetchButton 请求按钮
- FetchButton 集成了数据请求功能，自动管理加载状态和请求流程。适用于按钮触发 API 请求的场景。
- _ButtonGroup(@kne/current-lib_button-group)[import * as _ButtonGroup from "@kne/button-group"],(@kne/current-lib_button-group/dist/index.css),antd(antd)

```jsx
const { FetchButton } = _ButtonGroup;
const { Space, Typography, message, Card, Alert, Form, Input, Select, Button, Flex } = antd;
const { useState } = React;

// 基础用法
const BasicExample = () => {
  const handleSuccess = ({ data }) => {
    message.success(&#96;获取数据成功: ${data}&#96;);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">
        点击按钮触发 API 请求，自动管理加载状态
      </Typography.Text>
      <FetchButton
        type="primary"
        api={{
          loader: async () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({ data: '用户信息数据' });
              }, 1500);
            });
          }
        }}
        onClick={handleSuccess}
      >
        获取用户信息
      </FetchButton>
    </Space>
  );
};

// 带参数请求
const WithParamsExample = () => {
  const [userId, setUserId] = useState('1');

  const handleSuccess = ({ data }) => {
    message.success(&#96;获取成功: ${JSON.stringify(data)}&#96;);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">传递参数到 API 请求</Typography.Text>
      <Space>
        <Select
          value={userId}
          onChange={setUserId}
          style={{ width: 120 }}
          options={[
            { value: '1', label: '用户1' },
            { value: '2', label: '用户2' },
            { value: '3', label: '用户3' }
          ]}
        />
        <FetchButton
          params={{ userId }}
          api={{
            loader: async ({ params }) => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve({ data: { userId: params.userId, name: &#96;用户${params.userId}&#96;, role: '管理员' } });
                }, 1000);
              });
            }
          }}
          onClick={handleSuccess}
        >
          获取用户详情
        </FetchButton>
      </Space>
    </Space>
  );
};

// 成功和失败回调
const CallbackExample = () => {
  const [status, setStatus] = useState('');
  const [shouldFail, setShouldFail] = useState(false);

  const handleSuccess = ({ data }) => {
    setStatus('success');
    message.success('数据加载成功');
    console.log('成功数据:', data);
  };

  const handleError = (error) => {
    setStatus('error');
    message.error('数据加载失败');
    console.error('错误信息:', error);
  };

  return (
    <Card title="成功与失败回调" style={{ width: 450 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Button onClick={() => setShouldFail(!shouldFail)} size="small">
            {shouldFail ? '切换为成功' : '切换为失败'}
          </Button>
        </Space>
        <FetchButton
          type="primary"
          api={{
            loader: async () => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (shouldFail) {
                    reject(new Error('模拟的请求失败'));
                  } else {
                    resolve({ data: { message: '请求成功', timestamp: Date.now() } });
                  }
                }, 1000);
              });
            }
          }}
          onSuccess={handleSuccess}
          onError={handleError}
        >
          {shouldFail ? '失败请求' : '成功请求'}
        </FetchButton>
        {status === 'success' && <Alert message="上次请求：成功" type="success" />}
        {status === 'error' && <Alert message="上次请求：失败" type="error" />}
      </Space>
    </Card>
  );
};

// 导出文件场景
const ExportExample = () => {
  const handleExport = ({ data }) => {
    message.success(&#96;导出成功: ${data.url}&#96;);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">模拟文件导出场景</Typography.Text>
      <Space>
        <FetchButton
          api={{
            loader: async () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve({ data: { url: '/download/report.xlsx', size: '2.5MB' } });
                }, 2000);
              });
            }
          }}
          onClick={handleExport}
        >
          导出报表
        </FetchButton>
        <FetchButton
          type="primary"
          api={{
            loader: async () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve({ data: { url: '/download/data.csv', size: '1.2MB' } });
                }, 1500);
              });
            }
          }}
          onClick={handleExport}
        >
          导出 CSV
        </FetchButton>
      </Space>
    </Space>
  );
};

// 表单提交场景
const FormSubmitExample = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = ({ data }) => {
    setSubmittedData(data);
    message.success('表单提交成功');
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);
      // 使用 FetchButton 内部处理，这里只是演示
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
      message.success('验证通过');
    } catch (error) {
      message.error('请检查表单内容');
    }
  };

  return (
    <Card title="表单提交场景" style={{ width: 450 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[{ required: true, message: '请输入邮箱' }]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>
        </Form>
        <Space>
          <FetchButton
            type="primary"
            api={{
              loader: async ({ params }) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve({ data: { id: 123, ...params, createTime: new Date().toISOString() } });
                  }, 1500);
                });
              }
            }}
            beforeFetch={() => {
              const values = form.getFieldsValue();
              if (!values.username || !values.email) {
                message.error('请填写完整信息');
                return false;
              }
              return true;
            }}
            onClick={handleSubmit}
          >
            提交表单
          </FetchButton>
          <Button onClick={() => form.resetFields()}>重置</Button>
        </Space>
        {submittedData && (
          <Alert
            message="提交成功"
            description={JSON.stringify(submittedData, null, 2)}
            type="success"
          />
        )}
      </Space>
    </Card>
  );
};

// 刷新数据场景
const RefreshExample = () => {
  const [data, setData] = useState(null);
  const [lastRefresh, setLastRefresh] = useState(null);

  const handleRefresh = ({ data: newData }) => {
    setData(newData);
    setLastRefresh(new Date().toLocaleTimeString());
    message.success('数据已更新');
  };

  return (
    <Card title="刷新数据场景" style={{ width: 450 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Typography.Text type="secondary">上次刷新：</Typography.Text>
          <Typography.Text>{lastRefresh || '从未刷新'}</Typography.Text>
        </Space>
        <FetchButton
          api={{
            loader: async () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve({
                    data: {
                      users: [
                        { id: 1, name: '用户A', status: '在线' },
                        { id: 2, name: '用户B', status: '离线' },
                        { id: 3, name: '用户C', status: '在线' }
                      ],
                      total: 3
                    }
                  });
                }, 1000);
              });
            }
          }}
          onClick={handleRefresh}
        >
          刷新数据
        </FetchButton>
        {data && (
          <Alert
            message={&#96;当前数据：${data.users.length} 个用户在线&#96;}
            type="info"
          />
        )}
      </Space>
    </Card>
  );
};

// beforeFetch 拦截
const BeforeFetchExample = () => {
  const [allowed, setAllowed] = useState(true);

  const handleFetch = ({ data }) => {
    message.success('请求通过');
  };

  const beforeFetch = () => {
    if (!allowed) {
      message.warning('请求被 beforeFetch 拦截');
      return false;
    }
    return true;
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">beforeFetch 可以拦截请求</Typography.Text>
      <Space>
        <Button onClick={() => setAllowed(!allowed)} size="small">
          {allowed ? '拦截请求' : '允许请求'}
        </Button>
      </Space>
      <FetchButton
        api={{
          loader: async () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({ data: '请求成功' });
              }, 800);
            });
          }
        }}
        beforeFetch={beforeFetch}
        onClick={handleFetch}
      >
        {allowed ? '发送请求' : '请求已拦截'}
      </FetchButton>
    </Space>
  );
};

const BaseExample = () => {
  return (
    <Space direction="vertical" size="large">
      <Typography.Title level={3}>FetchButton 请求按钮</Typography.Title>
      <Typography.Paragraph>
        FetchButton 集成了数据请求功能，基于 @kne/react-fetch 库实现。
        自动管理加载状态，支持成功/失败回调、参数传递、请求拦截等功能。
      </Typography.Paragraph>

      <Flex vertical gap={32}>
        <div>
          <Typography.Title level={4}>基础用法</Typography.Title>
          <BasicExample />
        </div>

        <div>
          <Typography.Title level={4}>带参数请求</Typography.Title>
          <WithParamsExample />
        </div>

        <div>
          <Typography.Title level={4}>成功与失败回调</Typography.Title>
          <CallbackExample />
        </div>

        <div>
          <Typography.Title level={4}>文件导出场景</Typography.Title>
          <ExportExample />
        </div>

        <div>
          <Typography.Title level={4}>表单提交场景</Typography.Title>
          <FormSubmitExample />
        </div>

        <div>
          <Typography.Title level={4}>刷新数据场景</Typography.Title>
          <RefreshExample />
        </div>

        <div>
          <Typography.Title level={4}>请求拦截</Typography.Title>
          <BeforeFetchExample />
        </div>
      </Flex>
    </Space>
  );
};

render(<BaseExample />);

```

- ButtonFooter 底部按钮区
- ButtonFooter 是页面底部按钮区域组件，在小屏幕下自动将内容渲染到 body，方便表单页面的操作按钮布局。
- _ButtonGroup(@kne/current-lib_button-group)[import * as _ButtonGroup from "@kne/button-group"],(@kne/current-lib_button-group/dist/index.css),antd(antd)

```jsx
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

```

### API

自适应按钮组组件，能够根据容器宽度自动调整显示的按钮数量，并将多余的按钮放入下拉菜单中。

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| list | Array\<object \| function\> | [] | 按钮列表，可以是配置对象或渲染函数 |
| compact | boolean | false | 是否使用紧凑模式（Space.Compact） |
| showLength | number | - | 指定显示的按钮数量，不指定则自动计算 |
| more | ReactNode | - | 自定义"更多"按钮 |
| moreType | 'default' \| 'link' | 'default' | 更多按钮类型 |
| getPopupContainer | function | - | 下拉菜单渲染父节点 |
| trigger | string | - | 下拉菜单触发方式 |
| itemClassName | string | - | 按钮项的自定义类名 |
| ...SpaceProps | - | - | Space 组件的其他属性（size、split、align、style等） |

### list 配置项

当 list 项为对象时，支持以下属性：

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| children | ReactNode | - | 按钮内容 |
| type | string | - | 按钮类型（primary、default、dashed、link、text） |
| disabled | boolean | false | 是否禁用 |
| hidden | boolean | false | 是否隐藏 |
| confirm | boolean | false | 是否需要确认 |
| message | string \| ReactNode | - | 确认提示内容（设置后会自动使用 ConfirmButton） |
| isDelete | boolean | false | 是否为删除操作（红色按钮） |
| isModal | boolean | false | 是否使用模态框确认（在下拉菜单中自动启用） |
| buttonComponent | ReactComponent | - | 自定义按钮组件 |
| tooltipProps | object | - | Tooltip 组件属性（禁用时显示提示） |
| ...ButtonProps | - | - | Button 组件的其他属性 |

当 list 项为函数时，函数签名为：

```typescript
(props: { key: number; className: string }, context: { isDropdown: boolean }) => ReactNode
```

---

## LoadingButton

封装了加载状态的按钮组件，简化异步操作的处理。

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| onClick | function \| Promise | - | 点击按钮时的回调函数，可以返回 Promise |
| loading | boolean | false | 是否显示加载状态 |
| disabled | boolean | false | 是否禁用按钮 |
| children | ReactNode \| function | - | 按钮内容，可以是函数接收 loading 状态 |
| ...ButtonProps | - | - | Button 组件的其他属性 |

### useLoading Hook

用于管理异步操作加载状态的 Hook。

#### 参数

| 参数名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| callback | function | - | 异步回调函数 |

#### 返回值

| 名称 | 类型 | 说明 |
|------|------|------|
| isLoading | boolean | 当前加载状态 |
| setIsLoading | function | 设置加载状态的函数 |
| callback | function | 包装后的回调函数 |

---

## ConfirmButton

带有确认功能的按钮组件，支持弹窗确认和模态框确认两种模式。

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| children | ReactNode | - | 按钮内容 |
| onClick | function \| Promise | - | 确认后的回调函数，可以返回 Promise |
| title | string \| ReactNode | - | 确认框标题 |
| message | string \| ReactNode | - | 确认框内容 |
| okText | string | - | 确认按钮文字（默认根据 isDelete 动态显示） |
| cancelText | string | - | 取消按钮文字 |
| isModal | boolean | false | 是否使用模态框确认（默认为 Popconfirm） |
| isDelete | boolean | true | 是否为删除操作（红色按钮、确认按钮） |
| showCancel | boolean | true | 是否显示取消按钮 |
| placement | string | - | Popconfirm 的位置 |
| getContainer | function | - | 确认框渲染容器 |
| renderModal | function | - | 自定义 Modal 渲染函数 |
| onCancel | function | - | 取消按钮的回调 |
| ...ButtonProps | - | - | Button 组件的其他属性 |

### ConfirmLink

ConfirmButton 的链接样式变体。

### ConfirmText

ConfirmButton 的纯文本样式变体。

### withConfirm

高阶组件，用于为任意组件添加确认功能。

> ⚠️ 该 API 已标记为废弃，后续版本可能删除，建议不要使用。

---

## FetchButton

集成了数据请求功能的按钮组件，基于 @kne/react-fetch 库实现。

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| api | object \| function | - | 请求 API 配置 |
| params | object | - | 请求参数 |
| onSuccess | function | - | 请求成功回调，参数为 `{ data }` |
| onError | function | - | 请求失败回调 |
| beforeFetch | function | - | 请求前处理函数，返回 false 可阻止请求 |
| afterFetch | function | - | 请求后处理函数 |
| fetchOptions | object | - | 传递给 fetch 函数的选项 |
| onClick | function | - | 请求成功后的回调（与 onSuccess 相同） |
| ...LoadingButtonProps | - | - | LoadingButton 组件的其他属性 |

### api 配置

api 可以是对象或函数：

```typescript
// 对象形式
api: {
  loader: async ({ params }) => {
    return { data: 'response data' };
  }
}

// 函数形式
api: async ({ params }) => {
  return { data: 'response data' };
}
```

---

## ButtonFooter

页面底部按钮区域组件，可以自动计算高度并设置 CSS 变量。

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| children | ReactNode | - | 按钮区域内容 |
| className | string | - | 容器的自定义类名 |
| innerClassName | string | - | 内部容器的自定义类名 |
| target | HTMLElement | document.body | 移动端渲染的目标容器 |

### 特性

- 在小屏幕（≤768px）下，会将内容使用 Portal 渲染到 body
- 自动计算高度并设置 CSS 变量
- 适用于固定在页面底部的操作按钮区域
