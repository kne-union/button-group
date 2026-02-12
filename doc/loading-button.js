const { LoadingButton, useLoading } = _ButtonGroup;
const { Space, Button, Typography, message, Card, Alert, Flex } = antd;
const { useState } = React;

// 基础用法 - 自动加载状态
const BasicExample = () => {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('操作成功！');
        resolve();
      }, 1500);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">点击按钮，自动管理加载状态</Typography.Text>
      <Space wrap>
        <LoadingButton type="primary" onClick={handleClick}>
          保存数据
        </LoadingButton>
        <LoadingButton onClick={handleClick}>提交审核</LoadingButton>
        <LoadingButton danger onClick={handleClick}>删除</LoadingButton>
      </Space>
    </Space>
  );
};

// 自定义加载文案
const CustomTextExample = () => {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('上传完成');
        resolve();
      }, 2000);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">使用函数自定义加载时的文案</Typography.Text>
      <Space>
        <LoadingButton onClick={handleClick}>
          {(isLoading) => (isLoading ? '正在上传...' : '上传文件')}
        </LoadingButton>
        <LoadingButton onClick={handleClick} type="primary">
          {(isLoading) => (isLoading ? '提交中...' : '提交订单')}
        </LoadingButton>
      </Space>
    </Space>
  );
};

// 错误处理
const ErrorExample = () => {
  const [shouldFail, setShouldFail] = useState(false);

  const handleClick = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          message.error('操作失败，请重试');
          reject(new Error('操作失败'));
        } else {
          message.success('操作成功');
          resolve();
        }
      }, 1000);
    });
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">
        演示错误处理：加载状态会自动解除
      </Typography.Text>
      <Space>
        <Button onClick={() => setShouldFail(!shouldFail)}>
          {shouldFail ? '切换为成功' : '切换为失败'}
        </Button>
      </Space>
      <Space>
        <LoadingButton onClick={handleClick}>
          {shouldFail ? '会失败的操作' : '会成功的操作'}
        </LoadingButton>
      </Space>
      {shouldFail && <Alert message="当前设置为失败模式" type="warning" />}
    </Space>
  );
};

// 手动控制加载状态
const ManualExample = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('手动控制加载完成');
    }, 2000);
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">通过 loading 属性手动控制加载状态</Typography.Text>
      <LoadingButton loading={loading} onClick={handleClick}>
        手动控制加载
      </LoadingButton>
    </Space>
  );
};

// useLoading Hook 示例
const UseLoadingExample = () => {
  const { isLoading, callback } = useLoading(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('Hook 模式操作完成');
        resolve();
      }, 1500);
    });
  });

  return (
    <Card title="useLoading Hook" style={{ width: 400 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text type="secondary">
          在非按钮组件中使用 useLoading 管理异步状态
        </Typography.Text>
        <Space>
          <Button onClick={callback} loading={isLoading}>
            使用 Hook
          </Button>
          <Button onClick={() => {}}>
            独立按钮（不受影响）
          </Button>
        </Space>
        {isLoading && (
          <Alert message="当前状态：加载中" type="info" showIcon />
        )}
      </Space>
    </Card>
  );
};

// 不同按钮类型
const ButtonTypesExample = () => {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('完成');
        resolve();
      }, 1000);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">支持所有 Ant Design Button 类型</Typography.Text>
      <Space wrap>
        <LoadingButton type="primary" onClick={handleClick}>Primary</LoadingButton>
        <LoadingButton type="default" onClick={handleClick}>Default</LoadingButton>
        <LoadingButton type="dashed" onClick={handleClick}>Dashed</LoadingButton>
        <LoadingButton type="link" onClick={handleClick}>Link</LoadingButton>
        <LoadingButton type="text" onClick={handleClick}>Text</LoadingButton>
      </Space>
      <Space wrap>
        <LoadingButton type="primary" ghost onClick={handleClick}>Primary Ghost</LoadingButton>
        <LoadingButton type="default" ghost onClick={handleClick}>Default Ghost</LoadingButton>
      </Space>
    </Space>
  );
};

// 图标按钮
const IconExample = () => {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        message.success('操作完成');
        resolve();
      }, 1200);
    });
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">支持图标</Typography.Text>
      <Space>
        <LoadingButton type="primary" icon={<span>⬆️</span>} onClick={handleClick}>
          上传
        </LoadingButton>
        <LoadingButton icon={<span>⬇️</span>} onClick={handleClick}>
          下载
        </LoadingButton>
        <LoadingButton danger icon={<span>🗑️</span>} onClick={handleClick}>
          删除
        </LoadingButton>
      </Space>
    </Space>
  );
};

// 实际应用场景 - 表单提交
const FormSubmitExample = () => {
  const handleSubmit = async () => {
    // 模拟表单验证
    await new Promise(resolve => setTimeout(resolve, 500));
    // 模拟 API 请求
    await new Promise((resolve) => {
      setTimeout(() => {
        message.success('表单提交成功！');
        resolve();
      }, 1500);
    });
  };

  return (
    <Card title="表单提交场景" style={{ width: 400 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text type="secondary">
          点击提交按钮，自动防止重复提交
        </Typography.Text>
        <Space>
          <LoadingButton type="primary" onClick={handleSubmit}>
            提交表单
          </LoadingButton>
          <Button onClick={() => message.info('已取消')}>取消</Button>
        </Space>
      </Space>
    </Card>
  );
};

const BaseExample = () => {
  return (
    <Space direction="vertical" size="large">
      <Typography.Title level={3}>LoadingButton 加载按钮</Typography.Title>
      <Typography.Paragraph>
        LoadingButton 封装了加载状态，简化异步操作的处理。点击按钮时自动显示加载状态，
        避免重复提交，同时提供 useLoading Hook 供其他组件使用。
      </Typography.Paragraph>

      <Flex vertical gap={32}>
        <div>
          <Typography.Title level={4}>基础用法</Typography.Title>
          <BasicExample />
        </div>

        <div>
          <Typography.Title level={4}>自定义加载文案</Typography.Title>
          <CustomTextExample />
        </div>

        <div>
          <Typography.Title level={4}>错误处理</Typography.Title>
          <ErrorExample />
        </div>

        <div>
          <Typography.Title level={4}>手动控制加载状态</Typography.Title>
          <ManualExample />
        </div>

        <div>
          <Typography.Title level={4}>useLoading Hook</Typography.Title>
          <UseLoadingExample />
        </div>

        <div>
          <Typography.Title level={4}>不同按钮类型</Typography.Title>
          <ButtonTypesExample />
        </div>

        <div>
          <Typography.Title level={4}>图标按钮</Typography.Title>
          <IconExample />
        </div>

        <div>
          <Typography.Title level={4}>实际应用场景</Typography.Title>
          <FormSubmitExample />
        </div>
      </Flex>
    </Space>
  );
};

render(<BaseExample />);
