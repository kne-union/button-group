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
