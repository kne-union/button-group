
# button-group


### 描述

实现了一个按钮组,loading按钮,确认按钮和加载按钮.


### 安装

```shell
npm i --save @kne/button-group
```


### 概述

@kne/button-group 是一个React按钮组件库，提供了一系列功能丰富的按钮组件，用于简化常见的按钮交互场景。该库专注于提供自适应布局、加载状态管理、确认操作和数据请求等功能，使开发者能够快速实现各种复杂的按钮交互需求。

### 主要组件

#### ButtonGroup

自适应的按钮组组件，能够根据容器宽度自动调整显示的按钮数量。当容器宽度不足以显示所有按钮时，会自动将多余的按钮放入下拉菜单中，确保界面布局美观且功能完整。

#### LoadingButton

封装了加载状态的按钮组件，简化了异步操作的处理。通过内置的状态管理，在异步操作执行期间自动显示加载状态，提升用户体验。同时提供了useLoading hook，方便在其他组件中复用加载状态管理逻辑。

#### ConfirmButton

带有确认功能的按钮组件，支持弹窗确认和模态框确认两种模式。适用于需要用户二次确认的操作，如删除、提交等重要操作。同时提供了ConfirmLink和ConfirmText变体，以及withConfirm高阶组件，满足不同场景的确认需求。

#### FetchButton

集成了数据请求功能的按钮组件，基于@kne/react-fetch库实现。可以直接处理API请求，并在请求过程中自动管理加载状态，简化了数据交互的实现。

#### ButtonFooter

页面底部按钮区域组件，可以自动计算高度并设置CSS变量，方便页面布局和样式调整。

### 特性

- **自适应布局**：根据容器宽度自动调整按钮显示方式
- **加载状态管理**：简化异步操作的加载状态处理
- **操作确认**：提供多种确认模式，增强用户操作安全性
- **数据请求集成**：简化按钮与后端API的交互
- **国际化支持**：内置中英文语言包
- **高度可定制**：组件提供丰富的配置选项

### 设计理念

该组件库的设计理念是通过封装常见的按钮交互模式，提供开箱即用的解决方案，同时保持足够的灵活性和可扩展性。主要体现在以下几个方面：

1. **关注点分离**：每个组件专注于解决特定的问题，如ButtonGroup专注于布局，LoadingButton专注于状态管理。

2. **组合优于继承**：通过组合不同的功能组件，可以实现复杂的交互需求，如FetchButton就是LoadingButton与数据请求功能的组合。

3. **声明式API**：提供简洁明了的API，使开发者能够以声明式的方式描述UI和交互行为。

4. **渐进式增强**：基础组件可以独立使用，也可以与其他组件组合使用，实现更复杂的功能。

5. **用户体验优先**：注重细节，如自适应布局、加载状态反馈等，提升最终用户的使用体验。


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
  return (
    <Flex gap={8}>
      <div style={{ width: `${width}px` }}>
        <ButtonGroup
          list={[
            {
              type: 'primary',
              children: '操作1'
            },
            {
              type: 'primary',
              children: '操作1-1',
              hidden: true
            },
            {
              children: '操作2',
              tooltipProps: {
                title: '操作2'
              }
            },
            {
              children: '操作3',
              disabled: true,
              tooltipProps: {
                title: '操作3==='
              }
            },
            {
              children: '操作4',
              message: '确定要执行操作吗？',
              disabled: true
            },
            {
              children: '操作5',
              message: '确定要执行操作吗？'
            }
          ]}
          more="..."
        />
      </div>
      <Flex gap={8}>
        <Button
          onClick={() => {
            setWidth(width => {
              return width + 20;
            });
          }}>
          增加容器宽度
        </Button>
        <Button
          onClick={() => {
            setWidth(width => {
              return width - 20;
            });
          }}>
          减少容器宽度
        </Button>
      </Flex>
    </Flex>
  );
};

const CompactExample = () => {
  const [width, setWidth] = useState(200);
  return (
    <Flex gap={8}>
      <div style={{ width: `${width}px` }}>
        <ButtonGroup
          compact
          list={[
            {
              type: 'primary',
              children: '操作1'
            },
            {
              children: '操作2'
            },
            {
              children: '操作3',
              hidden: true
            },
            {
              children: '操作4',
              message: '确定要执行操作吗？'
            }
          ]}
        />
      </div>
      <Flex gap={8}>
        <Button
          onClick={() => {
            setWidth(width => {
              return width + 20;
            });
          }}>
          增加容器宽度
        </Button>
        <Button
          onClick={() => {
            setWidth(width => {
              return width - 20;
            });
          }}>
          减少容器宽度
        </Button>
      </Flex>
    </Flex>
  );
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
  return (
    <Flex gap={8}>
      <div style={{ width: `${width}px` }}>
        <ButtonGroup
          moreType="link"
          list={[
            props => {
              return (
                <Button {...props} type="link">
                  操作1
                </Button>
              );
            },
            props => {
              return <Button {...props} type="link">操作2</Button>;
            },
            props => {
              return <Button {...props} type="link">操作3</Button>;
            },
            props => {
              return (
                <LoadChildren key={props.key}>
                  {({ onClick }) => {
                    return (
                      <ConfirmButton {...props} type="link" isModal={props.isDropdown} message="确定要执行操作吗？" onClick={onClick}>
                        操作4
                      </ConfirmButton>
                    );
                  }}
                </LoadChildren>
              );
            }
          ]}
        />
      </div>
      <Flex gap={8}>
        <Button
          onClick={() => {
            setWidth(width => {
              return width + 20;
            });
          }}>
          增加容器宽度
        </Button>
        <Button
          onClick={() => {
            setWidth(width => {
              return width - 20;
            });
          }}>
          减少容器宽度
        </Button>
      </Flex>
    </Flex>
  );
};

const BaseExample = () => {
  return (
    <div>
      <Flex vertical gap={8}>
        <div>base:</div>
        <Example />
        <div>compact:</div>
        <CompactExample />
        <div>function props:</div>
        <FunctionProps />
      </Flex>
    </div>
  );
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

- ButtonFooter
- 这里填写示例说明
- _ButtonGroup(@kne/current-lib_button-group)[import * as _ButtonGroup from "@kne/button-group"],(@kne/current-lib_button-group/dist/index.css),antd(antd)

```jsx
const { ButtonFooter } = _ButtonGroup;
const { Flex, Button } = antd;
const BaseExample = () => {
  return (
    <ButtonFooter>
      <Flex justify="space-between" align="middle">
        <Button>按钮</Button>
      </Flex>
    </ButtonFooter>
  );
};

render(<BaseExample />);

```


### API

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

