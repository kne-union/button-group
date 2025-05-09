
# button-group


### 描述

实现了一个按钮组,loading按钮,确认按钮和加载按钮.


### 安装

```shell
npm i --save @kne/button-group
```


### 概述

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

### ButtonGroup

| 属性名               | 说明                             | 类型                              | 默认值                                                    |
|-------------------|--------------------------------|---------------------------------|--------------------------------------------------------|
| list              | button按钮属性的数组                  | array                           | []                                                     |
| more              | 更多按钮占位                         | jsx                             | <Button>更多<Icon type="icon-arrow-thin-down"/></Button> |
| compact           | 是否为紧凑模式                        | boolean                         | false                                                  |
| size              | 当compact为false时为按钮间隔大小，否则为按钮大小 | 'small','middle','large',number | 8                                                      |
| split,align       | 参考antd Space                   | -                               | -                                                      |
| showLength        | 控制显示的按钮数量                      | number                          | -                                                      |
| getPopupContainer | 下拉菜单渲染父节点                      | function                        | -                                                      |
| trigger           | 下拉菜单触发行为                       | string[]                        | ['hover']                                              |

### ConfirmButton

| 属性名          | 说明                                  | 类型       | 默认值     |
|--------------|-------------------------------------|----------|---------|
| message      | 删除提示                                | jsx      | 确定要删除吗？ |
| title        | 删除提示标题                              | jsx      | -       |
| isDelete     | 是否为删除操作                             | boolean  | true    |
| onClick      | 点击确认后执行的事件                          | function | -       |
| onCancel     | 点击取消后执行的事件                          | function | -       |
| disabled     | 按钮是否禁用                              | boolean  | -       |
| showCancel   | 是否显示取消按钮                            | boolean  | -       |
| cancelText   | 取消按钮文案                              | string   | 取消      |
| okText       | 确认按钮文案                              | string   | 确认      |
| isModal      | 是否以弹窗方式展示，默认为Popconfirm             | boolean  | false   |
| placement    | 当isModal为false时生效，指定Popconfirm的弹出方向 | string   | -       |
| getContainer | 指定Popconfirm或Modal弹出位置，一般不需要指定      | function | -       |

### ConfirmLink,ConfirmText

另外的一种按钮形式参数同ConfirmButton

### LoadingButton

| 属性名      | 说明                                                                                            | 类型           | 默认值 |
|----------|-----------------------------------------------------------------------------------------------|--------------|-----|
| onClick  | 点击按钮触发函数，可以返回一个Promise，当Promise再pending状态时Button将自动处于loading状态，当Promise返回结果会自动从loading切换回普通状态 | function     | -   |
| children | Button的子元素，可以为jsx或者function，为function时可以接收到loading状态用来切换显示内容                                  | jsx,function | -   |

### FetchButton

| 属性名 | 说明                     | 类型     | 默认值 |
|-----|------------------------|--------|-----|
| api | 请求参数参考@kne/react-fetch | object | -   |

