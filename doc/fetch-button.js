const { FetchButton } = _ButtonGroup;
const { Space, Typography, message, Card, Alert, Form, Input, Select, Button, Flex } = antd;
const { useState } = React;

// 基础用法
const BasicExample = () => {
  const handleSuccess = ({ data }) => {
    message.success(`获取数据成功: ${data}`);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">
        点击按钮触发 API 请求，自动管理加载状态
      </Typography.Text>
      <FetchButton
        type="primary"
        api={{
          loader: async () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({ data: '用户信息数据' });
              }, 1500);
            });
          }
        }}
        onClick={handleSuccess}
      >
        获取用户信息
      </FetchButton>
    </Space>
  );
};

// 带参数请求
const WithParamsExample = () => {
  const [userId, setUserId] = useState('1');

  const handleSuccess = ({ data }) => {
    message.success(`获取成功: ${JSON.stringify(data)}`);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">传递参数到 API 请求</Typography.Text>
      <Space>
        <Select
          value={userId}
          onChange={setUserId}
          style={{ width: 120 }}
          options={[
            { value: '1', label: '用户1' },
            { value: '2', label: '用户2' },
            { value: '3', label: '用户3' }
          ]}
        />
        <FetchButton
          params={{ userId }}
          api={{
            loader: async ({ params }) => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve({ data: { userId: params.userId, name: `用户${params.userId}`, role: '管理员' } });
                }, 1000);
              });
            }
          }}
          onClick={handleSuccess}
        >
          获取用户详情
        </FetchButton>
      </Space>
    </Space>
  );
};

// 成功和失败回调
const CallbackExample = () => {
  const [status, setStatus] = useState('');
  const [shouldFail, setShouldFail] = useState(false);

  const handleSuccess = ({ data }) => {
    setStatus('success');
    message.success('数据加载成功');
    console.log('成功数据:', data);
  };

  const handleError = (error) => {
    setStatus('error');
    message.error('数据加载失败');
    console.error('错误信息:', error);
  };

  return (
    <Card title="成功与失败回调" style={{ width: 450 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Button onClick={() => setShouldFail(!shouldFail)} size="small">
            {shouldFail ? '切换为成功' : '切换为失败'}
          </Button>
        </Space>
        <FetchButton
          type="primary"
          api={{
            loader: async () => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (shouldFail) {
                    reject(new Error('模拟的请求失败'));
                  } else {
                    resolve({ data: { message: '请求成功', timestamp: Date.now() } });
                  }
                }, 1000);
              });
            }
          }}
          onSuccess={handleSuccess}
          onError={handleError}
        >
          {shouldFail ? '失败请求' : '成功请求'}
        </FetchButton>
        {status === 'success' && <Alert message="上次请求：成功" type="success" />}
        {status === 'error' && <Alert message="上次请求：失败" type="error" />}
      </Space>
    </Card>
  );
};

// 导出文件场景
const ExportExample = () => {
  const handleExport = ({ data }) => {
    message.success(`导出成功: ${data.url}`);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Typography.Text type="secondary">模拟文件导出场景</Typography.Text>
      <Space>
        <FetchButton
          api={{
            loader: async () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve({ data: { url: '/download/report.xlsx', size: '2.5MB' } });
                }, 2000);
              });
            }
          }}
          onClick={handleExport}
        >
          导出报表
        </FetchButton>
        <FetchButton
          type="primary"
          api={{
            loader: async () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve({ data: { url: '/download/data.csv', size: '1.2MB' } });
                }, 1500);
              });
            }
          }}
          onClick={handleExport}
        >
          导出 CSV
        </FetchButton>
      </Space>
    </Space>
  );
};

// 表单提交场景
const FormSubmitExample = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = ({ data }) => {
    setSubmittedData(data);
    message.success('表单提交成功');
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);
      // 使用 FetchButton 内部处理，这里只是演示
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
      message.success('验证通过');
    } catch (error) {
      message.error('请检查表单内容');
    }
  };

  return (
    <Card title="表单提交场景" style={{ width: 450 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[{ required: true, message: '请输入邮箱' }]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>
        </Form>
        <Space>
          <FetchButton
            type="primary"
            api={{
              loader: async ({ params }) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve({ data: { id: 123, ...params, createTime: new Date().toISOString() } });
                  }, 1500);
                });
              }
            }}
            beforeFetch={() => {
              const values = form.getFieldsValue();
              if (!values.username || !values.email) {
                message.error('请填写完整信息');
                return false;
              }
              return true;
            }}
            onClick={handleSubmit}
          >
            提交表单
          </FetchButton>
          <Button onClick={() => form.resetFields()}>重置</Button>
        </Space>
        {submittedData && (
          <Alert
            message="提交成功"
            description={JSON.stringify(submittedData, null, 2)}
            type="success"
          />
        )}
      </Space>
    </Card>
  );
};

// 刷新数据场景
const RefreshExample = () => {
  const [data, setData] = useState(null);
  const [lastRefresh, setLastRefresh] = useState(null);

  const handleRefresh = ({ data: newData }) => {
    console.log(newData);
    setData(newData);
    setLastRefresh(new Date().toLocaleTimeString());
    message.success('数据已更新');
  };

  return (
    <Card title="刷新数据场景" style={{ width: 450 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Typography.Text type="secondary">上次刷新：</Typography.Text>
          <Typography.Text>{lastRefresh || '从未刷新'}</Typography.Text>
        </Space>
        <FetchButton
          api={{
            loader: async () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve({
                    users: [
                      { id: 1, name: '用户A', status: '在线' },
                      { id: 2, name: '用户B', status: '离线' },
                      { id: 3, name: '用户C', status: '在线' }
                    ],
                    total: 3
                  });
                }, 1000);
              });
            }
          }}
          onClick={handleRefresh}
        >
          刷新数据
        </FetchButton>
        {data && (
          <Alert
            message={`当前数据：${data.users?.length} 个用户在线`}
            type="info"
          />
        )}
      </Space>
    </Card>
  );
};

// beforeFetch 拦截
const BeforeFetchExample = () => {
  const [allowed, setAllowed] = useState(true);

  const handleFetch = ({ data }) => {
    message.success('请求通过');
  };

  const beforeFetch = () => {
    if (!allowed) {
      message.warning('请求被 beforeFetch 拦截');
      return false;
    }
    return true;
  };

  return (
    <Space direction="vertical">
      <Typography.Text type="secondary">beforeFetch 可以拦截请求</Typography.Text>
      <Space>
        <Button onClick={() => setAllowed(!allowed)} size="small">
          {allowed ? '拦截请求' : '允许请求'}
        </Button>
      </Space>
      <FetchButton
        api={{
          loader: async () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({ data: '请求成功' });
              }, 800);
            });
          }
        }}
        beforeFetch={beforeFetch}
        onClick={handleFetch}
      >
        {allowed ? '发送请求' : '请求已拦截'}
      </FetchButton>
    </Space>
  );
};

const BaseExample = () => {
  return (
    <Space direction="vertical" size="large">
      <Typography.Title level={3}>FetchButton 请求按钮</Typography.Title>
      <Typography.Paragraph>
        FetchButton 集成了数据请求功能，基于 @kne/react-fetch 库实现。
        自动管理加载状态，支持成功/失败回调、参数传递、请求拦截等功能。
      </Typography.Paragraph>

      <Flex vertical gap={32}>
        <div>
          <Typography.Title level={4}>基础用法</Typography.Title>
          <BasicExample />
        </div>

        <div>
          <Typography.Title level={4}>带参数请求</Typography.Title>
          <WithParamsExample />
        </div>

        <div>
          <Typography.Title level={4}>成功与失败回调</Typography.Title>
          <CallbackExample />
        </div>

        <div>
          <Typography.Title level={4}>文件导出场景</Typography.Title>
          <ExportExample />
        </div>

        <div>
          <Typography.Title level={4}>表单提交场景</Typography.Title>
          <FormSubmitExample />
        </div>

        <div>
          <Typography.Title level={4}>刷新数据场景</Typography.Title>
          <RefreshExample />
        </div>

        <div>
          <Typography.Title level={4}>请求拦截</Typography.Title>
          <BeforeFetchExample />
        </div>
      </Flex>
    </Space>
  );
};

render(<BaseExample />);
