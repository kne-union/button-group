### ButtonGroup

ButtonGroup 是一个基于 Ant Design 的增强型按钮组合组件，提供以下特性：

- 支持按钮列表自动排列和溢出处理
- 内置国际化支持
- 响应式布局
- 可定制的"更多"下拉菜单
- 紧凑模式(compact)
- 动态显示控制

#### 基本用法

```jsx
import {ButtonGroup} from './ButtonGroup';

function Example() {
    const buttonList = [
        <Button key="1">操作1</Button>,
        <Button key="2">操作2</Button>,
        <Button key="3">操作3</Button>
    ];

    return (
        <ButtonGroup list={buttonList}/>
    );
}
```

#### 动态显示控制

```jsx
// 只显示前2个按钮，其余放入下拉菜单
<ButtonGroup
    list={buttonList}
    showLength={2}
/>
```

#### 自定义下拉容器

```jsx
<ButtonGroup
    list={buttonList}
    getPopupContainer={() => document.getElementById('container')}
/>
```

#### 紧凑模式

```jsx
<ButtonGroup
    list={buttonList}
    compact={true}
/>
```

#### 注意事项

1. 组件依赖 Ant Design 的 `Button`, `Dropdown`, `Space`, `Tooltip` 组件
2. 需要确保项目已配置 `@kne/react-intl` 国际化提供者
3. 响应式布局基于 `@kne/use-resize` 实现

### ConfirmButton

ConfirmButton 是一个增强型的确认操作按钮组件，主要提供以下核心功能：

1. **操作确认机制**：在执行关键操作前要求用户二次确认
2. **多种确认形式**：支持模态框(Modal)和弹出确认框(Pop confirm)两种交互方式
3. **国际化支持**：内置多语言配置
4. **加载状态管理**：支持异步操作时的加载状态显示
5. **自定义内容**：允许灵活配置确认内容和操作按钮

#### 1. 自定义确认内容

通过 `renderModal` 属性可以完全自定义模态框内容：

```jsx
<ConfirmButton
    renderModal={(close) => (
        <div>
            <h3>自定义标题</h3>
            <p>自定义确认内容</p>
            <button onClick={close}>关闭</button>
        </div>
    )}
>
    <Button>自定义按钮</Button>
</ConfirmButton>
```

#### 2. 异步操作处理

组件内置了异步操作处理，会自动处理加载状态：

```jsx
const handleConfirm = async () => {
    await doSomethingAsync();
    // 操作完成后会自动关闭确认框
};

<ConfirmButton onClick={handleConfirm}>
    <Button>异步操作</Button>
</ConfirmButton>
```

#### 使用建议

1. 对关键操作（如删除、修改重要数据）必须使用确认机制
2. 根据场景选择适合的确认形式：
    - 复杂确认内容使用 `isModal`
    - 简单确认使用 Pop confirm
3. 异步操作时利用内置的 loading 状态提升用户体验

### FetchButton

FetchButton 是一个封装了数据请求功能的按钮组件，主要特点：
- 基于 `useFetch` 实现数据请求管理
- 内置加载状态显示
- 自动处理请求错误
- 与 `LoadingButton` 组件无缝集成

#### 核心功能

1. **数据请求封装**：简化API调用流程
2. **加载状态管理**：请求期间自动显示加载状态
3. **错误处理**：自动拦截请求错误
4. **回调支持**：提供成功回调机制

#### 基本用法

```jsx
import FetchButton from './FetchButton';

<FetchButton 
  api={{ url: '/api/data' }}
  onClick={({ data }) => console.log(data)}
>
  获取数据
</FetchButton>
```

### LoadingButton

LoadingButton 是一个增强版的 Ant Design 按钮组件，主要提供以下核心功能：
- **自动加载状态管理**：在执行异步操作时自动显示加载状态
- **防重复提交**：防止用户在操作未完成时重复点击
- **错误处理**：自动捕获并处理异步操作中的错误

#### 基础用法
```jsx
import { LoadingButton, useLoading } from './LoadingButton';

function MyComponent() {
  const handleClick = async () => {
    // 异步操作
  };

  return (
    <LoadingButton onClick={handleClick}>
      提交
    </LoadingButton>
  );
}
```

#### 使用 useLoading Hook
```jsx
function MyComponent() {
  const { isLoading, callback } = useLoading(async () => {
    // 异步操作
  });

  return (
    <Button loading={isLoading} onClick={callback}>
      提交
    </Button>
  );
}
```

#### 使用建议

1. **关键操作**：对所有可能产生副作用的操作使用 LoadingButton
2. **用户体验**：超过 500ms 的异步操作建议显示加载状态
3. **错误处理**：结合全局错误处理机制使用
4. **性能优化**：对于频繁触发的操作，考虑添加防抖/节流
