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
