### ButtonGroup 组件

ButtonGroup是一个自适应的按钮组组件，能够根据容器宽度自动调整显示的按钮数量，并将多余的按钮放入下拉菜单中。

#### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | ReactNode | - | 按钮组的子元素，通常是一系列按钮 |
| className | string | - | 自定义类名 |
| style | object | - | 自定义样式 |
| moreText | string | "更多" | 更多按钮的文本 |
| buttonWidth | number | - | 按钮的固定宽度，如果不设置则自动计算 |
| buttonMargin | number | 8 | 按钮之间的间距 |
| dropdownProps | object | - | 传递给Dropdown组件的属性 |
| menuProps | object | - | 传递给Menu组件的属性 |
| getPopupContainer | function | - | 菜单渲染父节点，默认渲染到body上 |
| onVisibleChange | function | - | 菜单显示状态改变时的回调函数 |
| onMoreClick | function | - | 点击更多按钮时的回调函数 |
| onMenuClick | function | - | 点击菜单项时的回调函数 |
| moreIcon | ReactNode | - | 自定义更多按钮的图标 |
| moreButtonProps | object | - | 传递给更多按钮的属性 |
| forceRender | boolean | false | 是否强制渲染所有按钮，不进行自适应处理 |

### LoadingButton 组件

LoadingButton是一个封装了加载状态的按钮组件，简化了异步操作的处理。

#### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| onClick | function | - | 点击按钮时的回调函数，可以返回Promise |
| loading | boolean | false | 是否显示加载状态 |
| disabled | boolean | false | 是否禁用按钮 |
| children | ReactNode | - | 按钮内容 |
| ...rest | - | - | 其他传递给Button组件的属性 |

### useLoading Hook

useLoading是一个用于管理异步操作加载状态的Hook。

#### 参数与返回值

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| - | - | - | 不接受参数 |

**返回值**：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| loading | boolean | 当前加载状态 |
| withLoading | function | 包装异步函数，自动管理加载状态 |

### ConfirmButton 组件

ConfirmButton是一个带有确认功能的按钮组件，支持弹窗确认和模态框确认两种模式。

#### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | ReactNode | - | 按钮内容 |
| onClick | function | - | 确认后的回调函数 |
| title | string \| ReactNode | - | 确认框标题 |
| content | string \| ReactNode | - | 确认框内容 |
| okText | string | "确定" | 确认按钮文字 |
| cancelText | string | "取消" | 取消按钮文字 |
| type | "popconfirm" \| "modal" | "popconfirm" | 确认框类型，支持气泡确认框和模态框 |
| modalProps | object | - | 传递给Modal组件的属性（当type为"modal"时有效） |
| popconfirmProps | object | - | 传递给Popconfirm组件的属性（当type为"popconfirm"时有效） |
| ...rest | - | - | 其他传递给Button组件的属性 |

### ConfirmLink 组件

ConfirmLink是ConfirmButton的变体，渲染为链接样式。

#### 属性

与ConfirmButton相同，但默认渲染为链接样式。

### ConfirmText 组件

ConfirmText是ConfirmButton的变体，渲染为纯文本样式。

#### 属性

与ConfirmButton相同，但默认渲染为纯文本样式。

### withConfirm 高阶组件

withConfirm是一个高阶组件，用于为任意组件添加确认功能。

#### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | object | - | 确认框配置选项 |
| options.title | string \| ReactNode | - | 确认框标题 |
| options.content | string \| ReactNode | - | 确认框内容 |
| options.okText | string | "确定" | 确认按钮文字 |
| options.cancelText | string | "取消" | 取消按钮文字 |
| options.type | "popconfirm" \| "modal" | "popconfirm" | 确认框类型 |
| options.modalProps | object | - | 传递给Modal组件的属性 |
| options.popconfirmProps | object | - | 传递给Popconfirm组件的属性 |

### FetchButton 组件

FetchButton是一个集成了数据请求功能的按钮组件，基于@kne/react-fetch库实现。

#### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | ReactNode | - | 按钮内容 |
| api | string \| object \| function | - | 请求API，可以是字符串、对象或函数 |
| params | object | - | 请求参数 |
| onSuccess | function | - | 请求成功回调 |
| onError | function | - | 请求失败回调 |
| beforeFetch | function | - | 请求前处理函数，返回false可阻止请求 |
| afterFetch | function | - | 请求后处理函数 |
| fetchOptions | object | - | 传递给fetch函数的选项 |
| ...rest | - | - | 其他传递给LoadingButton组件的属性 |

### ButtonFooter 组件

ButtonFooter是一个页面底部按钮区域组件，可以自动计算高度并设置CSS变量。

#### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | ReactNode | - | 按钮区域内容 |
| className | string | - | 自定义类名 |
