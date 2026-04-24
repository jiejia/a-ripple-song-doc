# پوڈکاسٹ کی ترتیبات
یہ فیلڈز بنیادی طور پر پوڈکاسٹ RSS بنانے کے لیے استعمال ہوتے ہیں۔

## کیسے کھولیں
![پوڈکاسٹ ترتیبات کا اسکرین شاٹ](/images/settings-1.png)

## فیلڈ حوالہ
| فیلڈ | وضاحت |
|---|---|
| Podcast RSS URL | موجودہ پوڈکاسٹ RSS URL صرف پڑھنے کے لیے دکھاتا ہے۔ آپ اس فیلڈ پر کلک کر کے اسے منتخب اور کاپی کر سکتے ہیں، یا feed براہ راست کھول سکتے ہیں۔ |
| Podcast Title <span style="color: red;">*</span> | لازمی۔ پوڈکاسٹ کا عنوان۔ اگر خالی ہو تو RSS سائٹ کے عنوان پر واپس چلا جائے گا۔ |
| Podcast Subtitle | اختیاری۔ مختصر سب ٹائٹل یا ٹیگ لائن جو کچھ کلائنٹس دکھاتے ہیں۔ |
| Podcast Description <span style="color: red;">*</span> | لازمی۔ پوڈکاسٹ کی سادہ متن والی وضاحت۔ یہ RSS میں description / iTunes summary کے طور پر جاتی ہے۔ |
| Podcast Author (itunes:author) <span style="color: red;">*</span> | لازمی۔ پوڈکاسٹ کا مصنف یا پروڈیوسر جو ڈائریکٹریز میں دکھائی دیتا ہے۔ |
| Owner Name <span style="color: red;">*</span> | لازمی۔ مالک کی معلومات کے لیے `<itunes:owner><itunes:name>` کی قدر۔ |
| Owner Email <span style="color: red;">*</span> | لازمی۔ `<itunes:owner><itunes:email>` کی قدر۔ براہِ کرم ایسا پتہ دیں جو تصدیقی ای میل وصول کر سکے۔ |
| Podcast Cover (1400-3000px square) <span style="color: red;">*</span> | لازمی۔ پوڈکاسٹ کور تصویر۔ JPG/PNG، مربع، 1400-3000px، اور 512KB سے کم ہونی چاہیے۔ |
| Default Explicit Flag <span style="color: red;">*</span> | لازمی۔ طے شدہ explicit مواد کا نشان۔ clean یا explicit منتخب کریں۔ ایپیسوڈ فیلڈز اسے اوور رائیڈ کر سکتی ہیں۔ |
| Language (RFC 5646) <span style="color: red;">*</span> | لازمی۔ پوڈکاسٹ کی زبان، مثلاً en-US، zh-CN، یا ja-JP۔ |
| Primary Category (Apple Podcasts) <span style="color: red;">*</span> | لازمی۔ Apple Podcasts کی بنیادی category۔ کم از کم ایک category منتخب کرنا ضروری ہے۔ |
| Secondary Category (optional) | اختیاری۔ ثانوی category جسے کچھ پوڈکاسٹ ڈائریکٹریز سپورٹ کرتی ہیں۔ |
| Copyright (optional) | اختیاری۔ کاپی رائٹ بیان، جو `<copyright>` میں جاتا ہے۔ |
| iTunes Type (itunes:type) | اختیاری۔ Apple Podcasts شو ٹائپ۔ اختیارات: unset، episodic، serial۔ |
| iTunes Title (optional) | اختیاری۔ Apple Podcasts کے لیے مخصوص عنوان۔ صرف تب استعمال کریں جب یہ عام پوڈکاسٹ عنوان سے مختلف ہونا چاہیے۔ |
| iTunes Block (itunes:block) | اختیاری۔ yes، Apple Podcasts میں پورا شو چھپا دیتا ہے۔ ڈیفالٹ no ہے۔ |
| iTunes Complete (itunes:complete) | اختیاری۔ yes مطلب شو مکمل ہو چکا ہے اور مزید اپ ڈیٹ نہیں ہوگا۔ ڈیفالٹ no ہے۔ |
| iTunes New Feed URL (itunes:new-feed-url) | اختیاری۔ صرف نئے RSS URL پر منتقل ہونے کے وقت استعمال کریں۔ |
| podcast:locked | Podcasting 2.0 فیلڈ۔ غیر مجاز feed منتقلی سے بچانے کے لیے ڈیفالٹ yes ہوتا ہے۔ |
| podcast:locked owner (optional) | اختیاری۔ Podcasting 2.0 feed منتقلی کی تصدیق کے لیے مالک کا ای میل۔ |
| podcast:guid (optional) | اختیاری۔ Podcasting 2.0 GUID۔ اگر خالی ہو تو feed سائٹ URL کو fallback کے طور پر استعمال کرے گا۔ |
| Apple Podcasts Verify Code | اختیاری۔ Apple Podcasts verification code، جو `podcast:txt purpose="applepodcastsverify"` کے طور پر نکلتا ہے۔ |
| Podcasting 2.0 Funding Links | مرکب فیلڈ۔ آپ فنڈنگ یا سپورٹ کے کئی لنکس شامل کر سکتے ہیں؛ ہر آئٹم میں URL اور Label ہوتا ہے۔ اگر خالی ہو تو `podcast:funding` نہیں نکلے گا۔ |
| Generator (optional) | اختیاری۔ RSS `<generator>` کا مواد۔ اگر خالی ہو تو یہ ٹیگ نہیں نکلے گا۔ |

## نوٹس
- جن فیلڈز پر <span style="color: red;">*</span> ہے وہ لازمی ہیں۔
