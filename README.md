### 使用方法

```
git clone https://github.com/leifeng/metacode
```

把目录拖到 chrome 的扩展中心页面

### 字段说明

| 字段            | 值                                                                               | 说明                                                         |
| --------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| part            | ""(无),search(搜索位置),tablebar(列表上方),table(列表更多操作)                   | 授权按钮位置                                                 |
| extendSource    | "normal"(普通值),"url"(url 参数),"localStorage"(本地存储)                        | 用于扩展值来源                                               |
| extendValus     | "",逗号隔开比如"id,name,abc"                                                     | 用于扩展值（类似 hideValue）                                 |
| btnShow         | true(默认)                                                                       | 是否显示授权按钮                                             |
| defaultvalue    | ""                                                                               | 用于输入框的默认值                                           |
| hideValue       | ""（普通值）,"query_key"(获取 url 中的值),"localStorage_key"（获取本地存储的值） | 用于隐藏表单（208）默认值或者 url 中的 key、本地存储中的 key |
| sourceType      | ""                                                                               | 有数据源下拉列表中的 type 值                                 |
| canSort         | false                                                                            | 是否可排序，用于 table 列表                                  |
| isWait          | false                                                                            | 是否延时加载，用于有默认值的下拉组件                         |
| showAll         | false                                                                            | 是否显示“全部”，用于下拉组件                                 |
| type300         | 0(单选)，1(多选)                                                                 | 组合控件类型（用于区分联动）                                 |
| order           | ""(默认),asc(升序),desc(降序)                                                    | 该字段的排序规则                                             |
| linkId          | ""                                                                               | 用于一表多图的联动关系                                       |
| linkUrl         | ""                                                                               | 下钻页面地址                                                 |
| layout          | ""                                                                               | 用于 dashboard 中的布局方式                                  |
| group           | ""                                                                               | 用于 dashboard 布局组名                                      |
| componentName   | ""                                                                               | 用于 dashboard 中的组件名称                                  |
| position        | ""                                                                               | 用于 dashboard 中的组件位置信息                              |
| padding         | 0                                                                                | 用于 dashboard 中的组件 padding                              |
| height          | 默认 300                                                                         | 用于 dashboard 中的组件高度                                  |
| layoutGroup     | ""                                                                               | 用于 dashboard 对应布局的组名                                |
| layoutLink      | ""                                                                               | 标题链接                                                     |
| extendBindName  | ""                                                                               | 扩展组件关联字段名                                           |
| extendBindValue | ""                                                                               | 扩展组件关联值                                               |
| extendType      | 同元素类型                                                                       | 扩展组件类型                                                 |
| extendSource    | ""                                                                               | 扩展组件数据源                                               |
| mutex           | []                                                                               | 授权互斥关系 (key@value)                                     |
| regular         | ""                                                                               | 正则对象                                                     |
| regularTip      | ""                                                                               | 正则错误提示                                                 |
| format          | ""                                                                               | 时间格式化                                                   |

### 正则说明

| key       | 说明     |
| --------- | -------- |
| maxLength | 最长长度 |
| minLength | 最小长度 |
