# 播客設定
這些欄位主要用於播客 RSS 產生。

## 如何開啟
![播客設定截圖](/images/settings-1.png)

## 欄位說明
| 欄位 | 說明 |
|---|---|
| Podcast RSS URL | 只讀顯示目前的播客 RSS URL。可點擊輸入框選取並複製，也可以直接開啟 feed。 |
| Podcast Title <span style="color: red;">*</span> | 必填。播客標題；若留空，RSS 會回退為網站標題。 |
| Podcast Subtitle | 可選。播客簡短副標或標語，部分用戶端會顯示。 |
| Podcast Description <span style="color: red;">*</span> | 必填。播客節目純文字描述；會輸出到 RSS 的 description / iTunes summary。 |
| Podcast Author (itunes:author) <span style="color: red;">*</span> | 必填。播客作者或出品方，會顯示在播客目錄中。 |
| Owner Name <span style="color: red;">*</span> | 必填。RSS `<itunes:owner><itunes:name>` 的值，用於播客所有者資訊。 |
| Owner Email <span style="color: red;">*</span> | 必填。RSS `<itunes:owner><itunes:email>` 的值，請填寫可接收驗證信的信箱。 |
| Podcast Cover (1400-3000px square) <span style="color: red;">*</span> | 必填。播客封面圖片，需為 JPG/PNG、正方形、1400-3000px，且小於 512KB。 |
| Default Explicit Flag <span style="color: red;">*</span> | 必填。預設露骨內容標記，請選擇 clean 或 explicit。單集欄位可覆蓋。 |
| Language (RFC 5646) <span style="color: red;">*</span> | 必填。播客語言，例如 en-US、zh-CN 或 ja-JP。 |
| Primary Category (Apple Podcasts) <span style="color: red;">*</span> | 必填。Apple Podcasts 主分類，至少要選一個。 |
| Secondary Category (optional) | 可選。次分類，部分播客目錄支援。 |
| Copyright (optional) | 可選。版權聲明，會輸出到 RSS `<copyright>`。 |
| iTunes Type (itunes:type) | 可選。Apple Podcasts 節目類型。選項為未設定、episodic、serial。 |
| iTunes Title (optional) | 可選。Apple Podcasts 專用標題，只有需要和一般播客標題不同時才填。 |
| iTunes Block (itunes:block) | 可選。yes 會在 Apple Podcasts 隱藏整個節目。預設為 no。 |
| iTunes Complete (itunes:complete) | 可選。yes 表示節目已完結，不再更新。預設為 no。 |
| iTunes New Feed URL (itunes:new-feed-url) | 可選。僅在搬移到新的 RSS URL 時使用。 |
| podcast:locked | Podcasting 2.0 欄位。預設為 yes，可防止未授權的 feed 轉移。 |
| podcast:locked owner (optional) | 可選。Podcasting 2.0 轉移驗證時使用的所有者信箱。 |
| podcast:guid (optional) | 可選。Podcasting 2.0 GUID；若留空，feed 會改用網站 URL 作為後備。 |
| Apple Podcasts Verify Code | 可選。Apple Podcasts 驗證碼，會以 `podcast:txt purpose="applepodcastsverify"` 輸出。 |
| Podcasting 2.0 Funding Links | 複合欄位。可新增多個贊助或支持連結；每一筆包含 URL 與 Label。若留空，`podcast:funding` 不會輸出。 |
| Generator (optional) | 可選。RSS `<generator>` 內容；若留空則不輸出該標籤。 |

## 注意
- 帶 <span style="color: red;">*</span> 的欄位為必填。
