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
