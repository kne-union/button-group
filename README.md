
# button-group


### 描述

实现了一个按钮组,loading按钮,确认按钮和加载按钮


### 安装

```shell
npm i --save @kne/button-group
```

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
          children: '操作2'
        }, {
          children: '操作3', disabled: true
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

| 属性名         | 说明                             | 类型                              | 默认值                                                    |
|-------------|--------------------------------|---------------------------------|--------------------------------------------------------|
| list        | button按钮属性的数组                  | array                           | []                                                     |
| more        | 更多按钮占位                         | jsx                             | <Button>更多<Icon type="icon-arrow-thin-down"/></Button> |
| compact     | 是否为紧凑模式                        | boolean                         | false                                                  |
| size        | 当compact为false时为按钮间隔大小，否则为按钮大小 | 'small','middle','large',number | 8                                                      |
| split,align | 参考antd Space                   | -                               | -                                                      |

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

