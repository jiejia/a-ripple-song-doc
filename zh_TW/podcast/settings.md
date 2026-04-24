# 播客設定
這些欄位主要用於播客 RSS 產生。

## 如何開啟
![播客設定截圖](/images/settings-1.png)

## 欄位說明
| 欄位 | 說明 |
|---|---|
| 播客 RSS URL | 只讀顯示目前的播客 RSS URL。可點擊輸入框選取並複製，也可以直接開啟 feed。 |
| 播客標題 <span style="color: red;">*</span> | 必填。播客標題；若留空，RSS 會回退為網站標題。 |
| 播客副標題 | 可選。播客簡短副標或標語，部分用戶端會顯示。 |
| 播客描述 <span style="color: red;">*</span> | 必填。播客節目純文字描述；會輸出到 RSS 的 description / iTunes summary。 |
| 播客作者 (itunes:author) <span style="color: red;">*</span> | 必填。播客作者或出品方，會顯示在播客目錄中。 |
| 擁有者姓名 <span style="color: red;">*</span> | 必填。RSS `<itunes:owner><itunes:name>` 的值，用於播客所有者資訊。 |
| 擁有者郵箱 <span style="color: red;">*</span> | 必填。RSS `<itunes:owner><itunes:email>` 的值，請填寫可接收驗證信的信箱。 |
| 播客封面（1400-3000px 正方形） <span style="color: red;">*</span> | 必填。播客封面圖片，需為 JPG/PNG、正方形、1400-3000px，且小於 512KB。 |
| 預設露骨標記 <span style="color: red;">*</span> | 必填。預設露骨內容標記，請選擇 clean 或 explicit。單集欄位可覆蓋。 |
| 語言（RFC 5646） <span style="color: red;">*</span> | 必填。播客語言，例如 en-US、zh-CN 或 ja-JP。 |
| 主要分類（Apple Podcasts） <span style="color: red;">*</span> | 必填。Apple Podcasts 主分類，至少要選一個。 |
| 次要分類（可選） | 可選。次分類，部分播客目錄支援。 |
| 版權（可選） | 可選。版權聲明，會輸出到 RSS `<copyright>`。 |
| iTunes 類型（itunes:type） | 可選。Apple Podcasts 節目類型。選項為未設定、episodic、serial。 |
| iTunes 標題（可選） | 可選。Apple Podcasts 專用標題，只有需要和一般播客標題不同時才填。 |
| iTunes 封鎖（itunes:block） | 可選。yes 會在 Apple Podcasts 隱藏整個節目。預設為 no。 |
| iTunes 完結（itunes:complete） | 可選。yes 表示節目已完結，不再更新。預設為 no。 |
| iTunes 新訂閱源 URL（itunes:new-feed-url） | 可選。僅在搬移到新的 RSS URL 時使用。 |
| podcast:locked | Podcasting 2.0 欄位。預設為 yes，可防止未授權的 feed 轉移。 |
| podcast:locked owner（可選） | 可選。Podcasting 2.0 轉移驗證時使用的所有者信箱。 |
| podcast:guid（可選） | 可選。Podcasting 2.0 GUID；若留空，feed 會改用網站 URL 作為後備。 |
| Apple Podcasts 驗證碼 | 可選。Apple Podcasts 驗證碼，會以 `podcast:txt purpose="applepodcastsverify"` 輸出。 |
| Podcasting 2.0 贊助連結 | 複合欄位。可新增多個贊助或支持連結；每一筆包含 URL 與 Label。若留空，`podcast:funding` 不會輸出。 |
| 產生器（可選） | 可選。RSS `<generator>` 內容；若留空則不輸出該標籤。 |

## 注意
- 帶 <span style="color: red;">*</span> 的欄位為必填。
