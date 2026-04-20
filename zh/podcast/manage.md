# 管理播客

## 添加
1. 进入添加播客页面
![播客设置截图](/images/manage-1.png)
2. 填写播客信息，上传播客音频文件和图片,填写完毕后点击【发布】
![播客设置截图](/images/manage-2.png)

## 编辑
1. 进入编辑播客页面
![播客设置截图](/images/manage-3.png)
2. 编辑播客信息后，点击【保存】
![播客设置截图](/images/manage-4.png)

## 字段说明

  | 字段 | 说明 |
  |---|---|
  | Audio File <span style="color: red;">*</span> | 必填。上传音频文件或输入音频文件 URL。 |
  | Duration (seconds) | 自动检测。保存时从 Audio File 读取音频时长，单位秒，只读。 |
  | Audio Length (bytes) | 自动检测。保存时从 Audio File 读取文件大小，单位 bytes，只读。 |
  | Audio MIME Type | 自动检测。保存时从 Audio File 读取 MIME 类型，只读，默认 audio/mpeg。 |
  | Explicit <span style="color: red;">*</span> | 必填。选择 clean 或 explicit。 |
  | Episode Type <span style="color: red;">*</span> | 必填。选择 full、trailer 或 bonus。 |
  | Episode Number | 可选，推荐填写。整数。 |
  | Season Number | 可选。整数。 |
  | Episode Author (override) | 可选。覆盖频道作者，仅作用于当前单集。 |
  | Episode Cover (square) | 可选。单集封面，建议方形 1400-3000px，覆盖频道封面。 |
  | Transcript (optional) | 可选。上传转录文件或输入转录 URL，支持 vtt/srt/txt/pdf 等。 |
  | iTunes Title (optional) | 可选。Apple Podcasts 的单集标题覆盖值。 |
  | Chapters (Podcasting 2.0) | 可选。章节 JSON 文件或 URL。 |
  | Chapters MIME Type | 可选。章节文件 MIME 类型，默认 application/json+chapters。 |
  | Soundbites (Podcasting 2.0) | 复合字段。可添加一个或多个精彩片段；每个片段包含开始时间、持续时间、标题。 |
  | Subtitle | 可选。iTunes 单集短副标题。 |
  | Summary | 可选。iTunes 单集纯文本摘要。 |
  | Custom GUID (optional) | 可选。自定义 RSS GUID；为空时使用单集链接。 |
  | iTunes Block | 可选。yes 表示在 Apple Podcasts 隐藏该单集，默认 no。 |
  | Members | 选择当前单集成员，通常为管理员、作者、编辑。 |
  | Guests | 选择当前单集嘉宾，通常为贡献者。 |

## 注意事项
- 带 <span style="color: red;">*</span> 字段必填
