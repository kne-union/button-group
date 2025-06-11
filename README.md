
# button-group


### 描述

实现了一个按钮组,loading按钮,确认按钮和加载按钮.


### 安装

```shell
npm i --save @kne/button-group
```


### 概述

这是一个基于React和Ant Design的按钮组件库，提供了一系列功能强大且易用的按钮组件。该库主要包含以下组件：

### 主要组件

#### ButtonGroup
一个智能的按钮组组件，能够根据容器宽度自动调整显示的按钮数量。当空间不足时，会自动将多余的按钮收纳到下拉菜单中，确保良好的用户体验和界面布局。

#### LoadingButton
一个封装了加载状态管理的按钮组件。它提供了一个`useLoading` hook，可以轻松处理异步操作时的加载状态，使按钮在执行异步操作时自动显示加载状态。

#### ConfirmButton
一个带有确认机制的按钮组件，支持两种确认模式：
- 弹窗确认（Popconfirm）
- 模态框确认（Modal）

同时提供了以下变体：
- ConfirmLink：确认链接组件
- ConfirmText：确认文本组件
- withConfirm：用于为其他组件添加确认功能的高阶组件（HOC）

#### FetchButton
一个集成了数据请求功能的按钮组件，基于`@kne/react-fetch`库实现。它可以直接处理API请求，并在请求过程中自动管理加载状态。

### 特性

- 组件化：每个组件都是独立的，可以单独使用
- 国际化：支持多语言（中文、英文）
- 类型安全：使用PropTypes进行类型检查
- 自适应：ButtonGroup组件能够根据容器宽度自动调整
- 可扩展：提供了HOC和Hook方便进行功能扩展
- 用户体验：内置了加载状态、确认机制等常用交互功能

### 设计理念

该组件库的设计理念是提供一系列开箱即用的按钮组件，同时保持足够的灵活性和可扩展性。通过合理的抽象和封装，使开发者能够轻松处理常见的按钮交互场景，如：
- 异步操作的加载状态
- 危险操作的确认机制
- 数据请求的状态管理
- 按钮组的自适应布局


### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- ButtonGroup
- 这里填写示例说明
- _ButtonGroup(@kne/current-lib_button-group)[import * as _ButtonGroup from "@kne/button-group"],antd(antd)

```jsx
const { default: ButtonGroup, ConfirmButton } = _ButtonGroup;
const { Flex, Button } = antd;
const { useState, useEffect } = React;

const Example = () => {
  const [width, setWidth] = useState(200);
  return (<Flex gap={8}>
    <div style={{ width: `${width}px` }}>
      <ButtonGroup
        list={[{
          type: 'primary', children: '操作1'
        }, {
          children: '操作2',
          tooltipProps: {
            title: '操作2'
          }
        }, {
          children: '操作3', disabled: true,
          tooltipProps: {
            title: '操作3==='
          }
        }, {
          children: '操作3', message: '确定要执行操作吗？', disabled: true
        }, {
          children: '操作3', message: '确定要执行操作吗？'
        }]}
      />
    </div>
    <Flex gap={8}>
      <Button
        onClick={() => {
          setWidth((width) => {
            return width + 20;
          });
        }}
      >
        增加容器宽度
      </Button>
      <Button
        onClick={() => {
          setWidth((width) => {
            return width - 20;
          });
        }}
      >
        减少容器宽度
      </Button>
    </Flex>
  </Flex>);
};

const CompactExample = () => {
  const [width, setWidth] = useState(200);
  return (<Flex gap={8}>
    <div style={{ width: `${width}px` }}>
      <ButtonGroup
        compact
        list={[{
          type: 'primary', children: '操作1'
        }, {
          children: '操作2'
        }, {
          children: '操作3'
        }, {
          children: '操作3', message: '确定要执行操作吗？'
        }]}
      />
    </div>
    <Flex gap={8}>
      <Button
        onClick={() => {
          setWidth((width) => {
            return width + 20;
          });
        }}
      >
        增加容器宽度
      </Button>
      <Button
        onClick={() => {
          setWidth((width) => {
            return width - 20;
          });
        }}
      >
        减少容器宽度
      </Button>
    </Flex>
  </Flex>);
};

const LoadChildren = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return null;
  }
  return children({
    onClick: () => {
      console.log('加载完成');
    }
  });
};
const FunctionProps = () => {
  const [width, setWidth] = useState(200);
  return (<Flex gap={8}>
    <div style={{ width: `${width}px` }}>
      <ButtonGroup
        list={[(props) => {
          return (<Button {...props} type="primary">
            操作1
          </Button>);
        }, (props) => {
          return <Button {...props}>操作2</Button>;
        }, (props) => {
          return <Button {...props}>操作3</Button>;
        }, (props) => {
          return (<LoadChildren key={props.key}>
            {({ onClick }) => {
              return (<ConfirmButton
                {...props}
                isModal={props.isDropdown}
                message="确定要执行操作吗？"
                onClick={onClick}
              >
                操作4
              </ConfirmButton>);
            }}
          </LoadChildren>);
        }]}
      />
    </div>
    <Flex gap={8}>
      <Button
        onClick={() => {
          setWidth((width) => {
            return width + 20;
          });
        }}
      >
        增加容器宽度
      </Button>
      <Button
        onClick={() => {
          setWidth((width) => {
            return width - 20;
          });
        }}
      >
        减少容器宽度
      </Button>
    </Flex>
  </Flex>);
};

const BaseExample = () => {
  return <div>
    <Flex vertical gap={8}>
      <div>base:</div>
      <Example />
      <div>compact:</div>
      <CompactExample />
      <div>function props:</div>
      <FunctionProps />
    </Flex>
  </div>;
};

render(<BaseExample />);

```

- LoadingButton
- 这里填写示例说明
- _ButtonGroup(@kne/current-lib_button-group)[import * as _ButtonGroup from "@kne/button-group"],antd(antd)

```jsx
const { LoadingButton } = _ButtonGroup;
const { Space, App } = antd;
const BaseExample = () => {
  const { message } = App.useApp();
  const clickHandler = () => {
    message.success('点击按钮1s后完成加载');
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('完成');
        resolve();
      }, 1000);
    });
  };
  return (<Space wrap>
    <LoadingButton onClick={clickHandler}>按钮</LoadingButton>
    <LoadingButton onClick={clickHandler}>
      {(isLoading) => (isLoading ? '正在加载中...' : '切换加载文案')}
    </LoadingButton>
  </Space>);
};

render(<BaseExample />);

```

- ConfirmButton
- 这里填写示例说明
- _ButtonGroup(@kne/current-lib_button-group)[import * as _ButtonGroup from "@kne/button-group"],antd(antd)

```jsx
const { ConfirmButton, ConfirmLink, ConfirmText } = _ButtonGroup;
const { Flex } = antd;
const BaseExample = () => {
  return <Flex gap={8} vertical>
    <Flex gap={8}>
      <ConfirmButton message="确定要删除吗?" onClick={() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('确定删除');
            resolve();
          }, 500);
        });
      }}>删除</ConfirmButton>

      <ConfirmButton disabled message="确定要删除吗?" onClick={() => {
        console.log('确定删除');
      }}>删除</ConfirmButton>

      <ConfirmButton title="确定要删除吗?"
                     message="删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除"
                     onClick={() => {
                       return new Promise((resolve) => {
                         setTimeout(() => {
                           console.log('确定删除');
                           resolve();
                         }, 500);
                       });
                     }}>删除</ConfirmButton>

      <ConfirmButton isDelete message="确定要删除吗?" onClick={() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('确定删除');
            resolve();
          }, 500);
        });
      }}>删除</ConfirmButton>

      <ConfirmButton isDelete title="确定要删除吗?"
                     message="删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除"
                     onClick={() => {
                       return new Promise((resolve) => {
                         setTimeout(() => {
                           console.log('确定删除');
                           resolve();
                         }, 500);
                       });
                     }}>删除</ConfirmButton>
    </Flex>
    <Flex gap={8}>
      <ConfirmButton isModal message="确定要删除吗?" onClick={() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('确定删除');
            resolve();
          }, 500);
        });
      }}>删除</ConfirmButton>

      <ConfirmButton isModal title="确定要删除吗?"
                     message="删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除"
                     onClick={() => {
                       return new Promise((resolve) => {
                         setTimeout(() => {
                           console.log('确定删除');
                           resolve();
                         }, 500);
                       });
                     }}>删除</ConfirmButton>

      <ConfirmButton isModal isDelete message="确定要删除吗?" onClick={() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('确定删除');
            resolve();
          }, 500);
        });
      }}>删除</ConfirmButton>

      <ConfirmButton isModal isDelete title="确定要删除吗?"
                     message="删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除删除"
                     onClick={() => {
                       return new Promise((resolve) => {
                         setTimeout(() => {
                           console.log('确定删除');
                           resolve();
                         }, 500);
                       });
                     }}>删除</ConfirmButton>
    </Flex>
    <Flex gap={8}>
      <ConfirmLink onClick={() => {
        console.log('删除');
      }}>删除</ConfirmLink>
      <ConfirmText onClick={() => {
        console.log('删除');
      }}>删除</ConfirmText>
    </Flex>
  </Flex>;
};

render(<BaseExample />);

```

- FetchButton
- 这里填写示例说明
- _ButtonGroup(@kne/current-lib_button-group)[import * as _ButtonGroup from "@kne/button-group"],(@kne/current-lib_button-group/dist/index.css),antd(antd)

```jsx
const { FetchButton } = _ButtonGroup;

const BaseExample = () => {
  return <div>
    <FetchButton api={{
      loader: async () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ data: 'xxxxx' });
          }, 1000);
        });
      }
    }} onClick={(data) => {
      console.log(data);
    }}>点击加载数据</FetchButton>
  </div>;
};

render(<BaseExample />);

```


### API

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

