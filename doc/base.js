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
        <ButtonGroup itemClassName="btn-no-padding"
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
