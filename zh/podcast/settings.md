# 播客设置
主要用于播客 RSS 生成的字段

## 如何进入
![播客设置截图](/images/settings-1.png)

## 字段说明
  | 字段名称 | 说明 |
  |---|---|
  | 播客 RSS 地址 | 只读显示当前播客 RSS 地址，可点击输入框选择复制，也可打开 feed。 |
  | 播客标题 <span style="color: red;">*</span> | 必填。播客标题；为空时 RSS 里会回退到站点标题。 |
  | 播客副标题 | 可选。播客短副标题/标语，一些客户端会显示。 |
  | 播客描述 <span style="color: red;">*</span> | 必填。播客节目描述，纯文本；输出到 RSS 的 description / iTunes summary。 |
  | 播客作者（itunes:author） <span style="color: red;">*</span> | 必填。播客作者/出品方，显示在播客目录中。 |
  | 所有者姓名 <span style="color: red;">*</span> | 必填。RSS `<itunes:owner><itunes:name>`，用于播客所有者信息。 |
  | 所有者邮箱 <span style="color: red;">*</span> | 必填。RSS `<itunes:owner><itunes:email>`，应填写可接收验证邮件的邮箱。 |
  | 播客封面（1400–3000px 正方形） <span style="color: red;">*</span> | 必填。播客封面；要求 JPG/PNG、正方形、1400–3000px，文件大小需小于 512KB。 |
  | 默认露骨标记 <span style="color: red;">*</span> | 必填。默认内容分级，选项为 `clean` 或 `explicit`；单集字段可覆盖。 |
  | 语言（RFC 5646） <span style="color: red;">*</span> | 必填。播客语言，例如 `en-US`、`zh-CN`、`ja-JP` 等。 |
  | 主分类（Apple Podcasts） <span style="color: red;">*</span> | 必填。Apple Podcasts 主分类，至少需要选择一个。 |
  | 次分类（可选） | 可选。第二分类，部分播客目录支持。 |
  | 版权（可选） | 可选。版权声明，输出到 RSS `<copyright>`。 |
  | iTunes 类型（itunes:type） | 可选。Apple Podcasts 节目类型，选项为未设置、`episodic`、`serial`。 |
  | iTunes 标题（可选） | 可选。Apple Podcasts 专用标题；只有需要和普通播客标题不同时才填。 |
  | iTunes 屏蔽（itunes:block） | 可选。`yes` 表示在 Apple Podcasts 隐藏整个节目，默认 `no`。 |
  | iTunes 完结（itunes:complete） | 可选。`yes` 表示节目已完结，不再更新，默认 `no`。 |
  | iTunes 新订阅源 URL（itunes:new-feed-url） | 可选。仅在迁移到新的 RSS 地址时填写。 |
  | podcast:locked | Podcasting 2.0 字段。默认 `yes`，用于防止未经授权迁移订阅源。 |
  | podcast:locked owner（可选） | 可选。用于 Podcasting 2.0 订阅源迁移验证的所有者邮箱。 |
  | podcast:guid（可选） | 可选。Podcasting 2.0 GUID；为空时订阅源使用站点 URL 作为后备。 |
  | Apple Podcasts 验证码 | 可选。Apple Podcasts 验证码，输出为 `podcast:txt purpose="applepodcastsverify"`。 |
  | Podcasting 2.0 赞助链接 | 复合字段。可添加多个赞助/支持链接；每项包含 URL 和标签。为空则不输出 `podcast:funding`。 |
  | 生成器（可选） | 可选。RSS `<generator>` 内容；为空则不输出该标签。 |

## 注意
- 带 <span style="color: red;">*</span> 字段必填
