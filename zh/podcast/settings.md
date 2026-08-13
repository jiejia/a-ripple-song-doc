# 播客设置
主要用于播客 RSS 生成的字段

## 如何进入
![播客设置截图](/images/settings-1.png)

## 字段说明
| 字段名称 | 说明 |
|---|---|
| 播客 RSS 地址 | 只读 HTML 字段，显示当前播客 RSS 地址；点击输入框即可选择并复制，复制后可访问该地址打开 Feed。 |
| 播客标题 <span style="color: red;">*</span> | 必填文本字段，默认值为站点标题；为空时 RSS 回退到站点标题。 |
| 播客副标题 | 可选文本字段，用于填写播客短副标题或标语，部分客户端会显示。 |
| 播客描述 <span style="color: red;">*</span> | 必填文本区域，默认值为站点描述；填写播客纯文本描述，输出到 RSS 的 `description` 和 `itunes:summary`。 |
| 播客作者（`itunes:author`） <span style="color: red;">*</span> | 必填文本字段，默认值为站点标题；作为播客作者或出品方显示在播客目录中。 |
| 所有者姓名 <span style="color: red;">*</span> | 必填文本字段，默认值为站点标题；输出到 RSS 的 `<itunes:owner><itunes:name>`。 |
| 所有者邮箱 <span style="color: red;">*</span> | 必填邮箱字段，默认值为 WordPress 管理员邮箱；输出到 RSS 的 `<itunes:owner><itunes:email>`，应填写可接收验证邮件的邮箱。 |
| 播客封面（1400–3000px 正方形） <span style="color: red;">*</span> | 必填媒体库图片字段。要求 JPG/PNG、正方形、1400–3000px，文件大小不超过 512KB；保存的值为媒体附件 ID，用于生成 `itunes:image`。 |
| 默认露骨标记 <span style="color: red;">*</span> | 必填选择字段，选项为 `clean`（无露骨内容）和 `explicit`，默认值为 `clean`；单集字段可以覆盖。 |
| 语言（RFC 5646） <span style="color: red;">*</span> | 必填选择字段，当前选项为 `en-US` 和 `zh-CN`；默认使用 WordPress 站点语言，未设置时为 `en-US`。 |
| 主分类（Apple Podcasts） <span style="color: red;">*</span> | 必填选择字段，包含 `(not set)` 和 Apple Podcasts 分类；应至少选择一个主分类。 |
| 次分类（可选） | 可选选择字段，包含 `(not set)` 和 Apple Podcasts 分类，部分目录支持第二分类。 |
| 版权（可选） | 可选文本字段，填写版权声明，输出到 RSS 的 `<copyright>`。 |
| iTunes 类型（`itunes:type`） | 可选选择字段，选项为 `(not set)`、`episodic` 和 `serial`。 |
| iTunes 标题（可选） | 可选文本字段。只有需要使用不同于普通播客标题的 Apple Podcasts 标题时才填写。 |
| iTunes 屏蔽（`itunes:block`） | 可选选择字段，选项为 `no` 和 `yes`，默认值为 `no`；选择 `yes` 时在 Apple Podcasts 中隐藏整个节目。 |
| iTunes 完结（`itunes:complete`） | 可选选择字段，选项为 `no` 和 `yes`，默认值为 `no`；选择 `yes` 表示节目已完结且不会再更新。 |
| iTunes 新订阅源 URL（`itunes:new-feed-url`） | 可选 URL 字段，仅在将节目迁移到新的 RSS 地址时填写。 |
| `podcast:locked` | 可选选择字段，选项为 `yes` 和 `no`，默认值为 `yes`；`yes`（推荐）用于防止未经授权迁移订阅源。 |
| `podcast:locked` 所有者（可选） | 可选邮箱字段，用于 Podcasting 2.0 订阅源迁移时验证所有权。 |
| `podcast:guid`（可选） | 可选文本字段，默认值为站点 URL；为空时订阅源使用站点 URL 作为后备 GUID。 |
| Apple Podcasts 验证码 | 可选文本字段，用于 Apple Podcasts 验证订阅源所有权，输出为 `podcast:txt purpose="applepodcastsverify"`。 |
| Podcasting 2.0 赞助链接（`podcast:funding`） | 可选复合字段，可添加多个链接；每项包含 URL（URL 字段，建议使用 `https`）和标签。为空时不生成 `podcast:funding` 标签。 |
| 生成器（可选） | 可选文本字段，填写 RSS `<generator>` 内容；为空时不生成该标签。 |

## 注意
- 带 <span style="color: red;">*</span> 字段必填
