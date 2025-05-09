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
