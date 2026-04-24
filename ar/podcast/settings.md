# إعدادات البودكاست
تُستخدم هذه الحقول بشكل أساسي لإنشاء RSS الخاص بالبودكاست.

## كيفية الفتح
![لقطة شاشة لإعدادات البودكاست](/images/settings-1.png)

## مرجع الحقول
| الحقل | الوصف |
|---|---|
| Podcast RSS URL | يعرض عنوان RSS الحالي للبودكاست للقراءة فقط. يمكنك النقر داخل الحقل لتحديده ونسخه، أو فتح الـ feed مباشرة. |
| Podcast Title <span style="color: red;">*</span> | مطلوب. عنوان البودكاست. إذا كان فارغًا، فسيعود RSS إلى عنوان الموقع. |
| Podcast Subtitle | اختياري. عنوان فرعي قصير أو شعار يظهره بعض العملاء. |
| Podcast Description <span style="color: red;">*</span> | مطلوب. وصف نصي للبودكاست. يُرسل إلى RSS كـ description / ملخص iTunes. |
| Podcast Author (itunes:author) <span style="color: red;">*</span> | مطلوب. مؤلف أو منتج البودكاست الذي يظهر في الأدلة. |
| Owner Name <span style="color: red;">*</span> | مطلوب. قيمة `<itunes:owner><itunes:name>` لمعلومات المالك. |
| Owner Email <span style="color: red;">*</span> | مطلوب. قيمة `<itunes:owner><itunes:email>`. استخدم عنوانًا يمكنه استقبال رسائل التحقق. |
| Podcast Cover (1400-3000px square) <span style="color: red;">*</span> | مطلوب. صورة غلاف البودكاست. يجب أن تكون JPG/PNG، مربعة، 1400-3000px، وأقل من 512KB. |
| Default Explicit Flag <span style="color: red;">*</span> | مطلوب. مؤشر المحتوى الصريح الافتراضي. اختر clean أو explicit. يمكن لحقول الحلقة أن تتجاوزه. |
| Language (RFC 5646) <span style="color: red;">*</span> | مطلوب. لغة البودكاست، مثل en-US أو zh-CN أو ja-JP. |
| Primary Category (Apple Podcasts) <span style="color: red;">*</span> | مطلوب. الفئة الرئيسية في Apple Podcasts. يجب اختيار فئة واحدة على الأقل. |
| Secondary Category (optional) | اختياري. فئة ثانوية تدعمها بعض أدلة البودكاست. |
| Copyright (optional) | اختياري. بيان حقوق النشر يُرسل إلى `<copyright>`. |
| iTunes Type (itunes:type) | اختياري. نوع العرض في Apple Podcasts. الخيارات: غير محدد، episodic، serial. |
| iTunes Title (optional) | اختياري. عنوان مخصص لـ Apple Podcasts. استخدمه فقط إذا كان يجب أن يختلف عن عنوان البودكاست العادي. |
| iTunes Block (itunes:block) | اختياري. yes يخفي البودكاست بالكامل في Apple Podcasts. القيمة الافتراضية no. |
| iTunes Complete (itunes:complete) | اختياري. yes يعني أن البودكاست مكتمل ولن يتم تحديثه. القيمة الافتراضية no. |
| iTunes New Feed URL (itunes:new-feed-url) | اختياري. استخدمه فقط عند الانتقال إلى عنوان RSS جديد. |
| podcast:locked | حقل Podcasting 2.0. القيمة الافتراضية yes لمنع نقل feed غير المصرح به. |
| podcast:locked owner (optional) | اختياري. بريد المالك المستخدم للتحقق من نقل feed في Podcasting 2.0. |
| podcast:guid (optional) | اختياري. GUID لـ Podcasting 2.0. إذا كان فارغًا، سيستخدم feed عنوان الموقع كخيار احتياطي. |
| Apple Podcasts Verify Code | اختياري. رمز التحقق لـ Apple Podcasts، ويُخرج كـ `podcast:txt purpose="applepodcastsverify"`. |
| Podcasting 2.0 Funding Links | حقل مركب. يمكنك إضافة عدة روابط للتمويل أو الدعم؛ كل عنصر يحتوي على URL و Label. إذا كان فارغًا، فلن يُخرج `podcast:funding`. |
| Generator (optional) | اختياري. محتوى `<generator>` الخاص بـ RSS. إذا كان فارغًا، فلن تُخرج العلامة. |

## ملاحظات
- الحقول المعلَّمة بـ <span style="color: red;">*</span> مطلوبة.
