# 管理播客

## 新增
1. 進入新增播客頁面
![播客設定截圖](/images/manage-1.png)
2. 填寫播客資訊，上傳播客音訊檔與圖片，完成後點擊【發布】
![播客設定截圖](/images/manage-2.png)

## 編輯
1. 進入編輯播客頁面
![播客設定截圖](/images/manage-3.png)
2. 編輯播客資訊後，點擊【儲存】
![播客設定截圖](/images/manage-4.png)

## 欄位說明

  | 欄位名稱 | 說明 |
  |---|---|
  | 音訊檔案 <span style="color: red;">*</span> | 必填。上傳音訊檔或輸入音訊檔 URL（https）。 |
  | 時長（秒） | 儲存時會從「音訊檔案」自動識別，單位為秒，只讀。 |
  | 音訊大小（位元組） | 儲存時會從「音訊檔案」自動識別檔案大小，只讀。 |
  | 音訊 MIME 類型 | 儲存時會從「音訊檔案」自動識別 MIME 類型，只讀，預設 `audio/mpeg`。 |
  | 內容分級 <span style="color: red;">*</span> | 必填。選擇 `clean` 或 `explicit`。 |
  | 劇集類型 <span style="color: red;">*</span> | 必填。選擇 `full`、`trailer` 或 `bonus`。 |
  | 集數 | 可選，但建議填寫。整數。 |
  | 季數 | 可選。整數。 |
  | 劇集作者（覆寫） | 可選。覆蓋目前集數的頻道作者。 |
  | 劇集封面（正方形） | 可選。方形圖片，建議 1400-3000px。覆蓋頻道封面。 |
  | 文字稿（可選） | 可選。上傳文字稿檔案或輸入文字稿 URL，支援 vtt/srt/txt/pdf 等。 |
  | iTunes 標題（可選） | 可選。Apple Podcasts 的集數標題覆蓋值。 |
  | 章節（Podcasting 2.0） | 可選。章節 JSON 檔案或 URL。 |
  | 章節 MIME 類型 | 可選。章節檔案 MIME 類型，預設 `application/json+chapters`。 |
  | 聲音片段（Podcasting 2.0） | 複合欄位。可新增一個或多個精彩片段；每個片段包含開始時間、持續時間、標題。 |
  | 副標題 | 可選。iTunes 的簡短副標。 |
  | 摘要 | 可選。iTunes 的純文字摘要。 |
  | 自訂 GUID（可選） | 可選。自訂 RSS GUID；留空則使用集數連結。 |
  | iTunes 封鎖 | 可選。`yes` 表示在 Apple Podcasts 中隱藏該集，預設 `no`。 |
  | 成員 | 選擇目前集數成員，通常為管理員、作者、編輯。 |
  | 嘉賓 | 選擇目前集數嘉賓，通常為貢獻者。 |

## 注意事項
- 帶 <span style="color: red;">*</span> 字段必填
