# 管理播客

## 添加
1. 进入添加播客页面
![播客设置截图](/images/manage-1.png)
2. 填写播客信息，上传播客音频文件和图片，填写完毕后点击【发布】
![播客设置截图](/images/manage-2.png)

## 编辑
1. 进入编辑播客页面
![播客设置截图](/images/manage-3.png)
2. 编辑播客信息后，点击【保存】
![播客设置截图](/images/manage-4.png)

## 字段说明

  | 字段名称 | 说明 |
  |---|---|
  | 音频文件 <span style="color: red;">*</span> | 必填。上传音频文件或输入音频文件 URL（https）。 |
  | 时长（秒） | 保存时从“音频文件”自动识别，单位为秒，只读。 |
  | 音频大小（字节） | 保存时从“音频文件”自动识别文件大小，只读。 |
  | 音频 MIME 类型 | 保存时从“音频文件”自动识别 MIME 类型，只读，默认 `audio/mpeg`。 |
  | 内容分级 <span style="color: red;">*</span> | 必填。选择 `clean` 或 `explicit`。 |
  | 剧集类型 <span style="color: red;">*</span> | 必填。选择 `full`、`trailer` 或 `bonus`。 |
  | 集数 | 可选，但推荐填写。整数。 |
  | 季数 | 可选。整数。 |
  | 剧集作者（覆盖） | 可选。覆盖当前剧集的频道作者。 |
  | 剧集封面（正方形） | 可选。方形图片，建议 1400-3000px。覆盖频道封面。 |
  | 文字稿（可选） | 可选。上传文字稿文件或输入文字稿 URL，支持 vtt/srt/txt/pdf 等。 |
  | iTunes 标题（可选） | 可选。Apple Podcasts 的剧集标题覆盖值。 |
  | 章节（Podcasting 2.0） | 可选。章节 JSON 文件或 URL。 |
  | 章节 MIME 类型 | 可选。章节文件 MIME 类型，默认 `application/json+chapters`。 |
  | 音频片段（Podcasting 2.0） | 复合字段。可添加一个或多个精彩片段；每个片段包含开始时间、持续时间、标题。 |
  | 副标题 | 可选。iTunes 的简短副标题。 |
  | 摘要 | 可选。iTunes 的纯文本摘要。 |
  | 自定义 GUID（可选） | 可选。自定义 RSS GUID；留空则使用剧集链接。 |
  | iTunes 屏蔽 | 可选。`yes` 表示在 Apple Podcasts 中隐藏该剧集，默认 `no`。 |
  | 成员 | 选择当前剧集成员，通常为管理员、作者、编辑。 |
  | 嘉宾 | 选择当前剧集嘉宾，通常为贡献者。 |

## 注意事项
- 带 <span style="color: red;">*</span> 字段必填
