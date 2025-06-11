### API 文档

### ButtonGroup

自适应的按钮组组件，能够根据容器宽度自动调整显示的按钮数量。

#### 属性

| 属性名 | 类型 | 默认值 | 说明 |
|-------|------|-------|------|
| children | ReactNode | - | 按钮组的子元素，通常是一系列按钮 |
| moreText | string | "更多" | 更多按钮的文本 |
| className | string | - | 自定义类名 |
| style | object | - | 自定义样式 |
| dropdownProps | object | - | 传递给Dropdown组件的属性 |
| menuProps | object | - | 传递给Menu组件的属性 |
| buttonProps | object | - | 传递给更多按钮的属性 |
| maxWidth | number | - | 最大宽度，超过此宽度的按钮将被放入下拉菜单 |
| minWidth | number | - | 最小宽度，低于此宽度的按钮将被放入下拉菜单 |
| gap | number | 8 | 按钮之间的间距 |
| moreButtonWidth | number | 80 | 更多按钮的宽度 |
| getContainer | function | - | 获取容器元素的函数 |
| getPopupContainer | function | - | 获取弹出层容器的函数 |
| onVisibleChange | function | - | 下拉菜单可见性变化时的回调函数 |

#### 示例

```jsx
import ButtonGroup from '@kne/button-group';
import { Button } from 'antd';

const Example = () => (
  <ButtonGroup>
    <Button>按钮1</Button>
    <Button>按钮2</Button>
    <Button>按钮3</Button>
    <Button>按钮4</Button>
  </ButtonGroup>
);
```

### LoadingButton

封装了加载状态的按钮组件。

#### 属性

| 属性名 | 类型 | 默认值 | 说明 |
|-------|------|-------|------|
| loading | boolean | false | 是否显示加载状态 |
| onClick | function | - | 点击事件处理函数，支持异步函数 |
| ...rest | - | - | 其他属性将传递给Ant Design的Button组件 |

#### useLoading Hook

用于管理异步操作的加载状态。

| 返回值 | 类型 | 说明 |
|-------|------|------|
| loading | boolean | 当前的加载状态 |
| withLoading | function | 包装异步函数，自动管理加载状态的高阶函数 |

#### 示例

```jsx
// 使用LoadingButton组件
import { LoadingButton } from '@kne/button-group';

const Example = () => (
  <LoadingButton 
    onClick={async () => {
      await someAsyncOperation();
    }}
  >
    提交
  </LoadingButton>
);

// 使用useLoading hook
import { useLoading } from '@kne/button-group';
import { Button } from 'antd';

const Example = () => {
  const { loading, withLoading } = useLoading();
  
  return (
    <Button 
      loading={loading}
      onClick={withLoading(async () => {
        await someAsyncOperation();
      })}
    >
      提交
    </Button>
  );
};
```

### ConfirmButton

带有确认功能的按钮组件。

#### 属性

| 属性名 | 类型 | 默认值 | 说明 |
|-------|------|-------|------|
| type | string | 'popconfirm' | 确认类型，可选值：'popconfirm'(弹窗确认)、'modal'(模态框确认) |
| title | string \| ReactNode | - | 确认提示的标题 |
| okText | string | '确定' | 确认按钮的文本 |
| cancelText | string | '取消' | 取消按钮的文本 |
| onConfirm | function | - | 确认操作的回调函数 |
| onCancel | function | - | 取消操作的回调函数 |
| modalProps | object | - | 当type为'modal'时，传递给Modal组件的属性 |
| popconfirmProps | object | - | 当type为'popconfirm'时，传递给Popconfirm组件的属性 |
| ...rest | - | - | 其他属性将传递给Button组件 |

#### ConfirmLink

带有确认功能的链接组件。

| 属性名 | 类型 | 默认值 | 说明 |
|-------|------|-------|------|
| 与ConfirmButton相同 | - | - | - |

#### ConfirmText

带有确认功能的文本组件。

| 属性名 | 类型 | 默认值 | 说明 |
|-------|------|-------|------|
| 与ConfirmButton相同 | - | - | - |

#### withConfirm HOC

用于为组件添加确认功能的高阶组件。

| 参数 | 类型 | 默认值 | 说明 |
|-------|------|-------|------|
| options | object | - | 确认选项，与ConfirmButton的属性相同 |

#### 示例

```jsx
// 使用ConfirmButton
import { ConfirmButton } from '@kne/button-group';

const Example = () => (
  <ConfirmButton 
    type="popconfirm"
    title="确定要删除吗？"
    onConfirm={() => console.log('已确认')}
  >
    删除
  </ConfirmButton>
);

// 使用withConfirm HOC
import { withConfirm } from '@kne/button-group';
import { Button } from 'antd';

const ConfirmDeleteButton = withConfirm({
  title: '确定要删除吗？',
  type: 'modal'
})(Button);

const Example = () => (
  <ConfirmDeleteButton onClick={() => console.log('已确认')}>
    删除
  </ConfirmDeleteButton>
);
```

### FetchButton

集成了数据请求功能的按钮组件。

#### 属性

| 属性名 | 类型 | 默认值 | 说明 |
|-------|------|-------|------|
| api | object | - | API配置对象，遵循@kne/react-fetch的API格式 |
| onClick | function | - | 请求成功后的回调函数，接收{data}作为参数 |
| ...rest | - | - | 其他属性将传递给LoadingButton组件 |

#### 示例

```jsx
import { FetchButton } from '@kne/button-group';

const Example = () => (
  <FetchButton
    api={{
      url: '/api/example',
      method: 'POST',
      data: { id: 1 }
    }}
    onClick={({ data }) => console.log('请求成功', data)}
  >
    提交
  </FetchButton>
);
```
