# إدارة البودكاست

## الإضافة
1. افتح صفحة إضافة بودكاست
![لقطة إعدادات البودكاست](/images/manage-1.png)
2. أدخل معلومات البودكاست وارفع ملف الصوت والصورة، ثم انقر 【نشر】
![لقطة إعدادات البودكاست](/images/manage-2.png)

## التعديل
1. افتح صفحة تعديل بودكاست
![لقطة إعدادات البودكاست](/images/manage-3.png)
2. عدّل معلومات البودكاست ثم انقر 【حفظ】
![لقطة إعدادات البودكاست](/images/manage-4.png)

## مرجع الحقول

  | الحقل | الوصف |
  |---|---|
  | Audio File <span style="color: red;">*</span> | مطلوب. ارفع ملفًا صوتيًا أو أدخل رابط ملف صوتي (https). |
  | Duration (seconds) | يُكتشف تلقائيًا عند الحفظ من “Audio File”، بالثواني، للقراءة فقط. |
  | Audio Length (bytes) | يُكتشف تلقائيًا عند الحفظ من “Audio File”، للقراءة فقط. |
  | Audio MIME Type | يُكتشف تلقائيًا عند الحفظ من “Audio File”، للقراءة فقط، والافتراضي `audio/mpeg`. |
  | Explicit <span style="color: red;">*</span> | مطلوب. اختر `clean` أو `explicit`. |
  | Episode Type <span style="color: red;">*</span> | مطلوب. اختر `full` أو `trailer` أو `bonus`. |
  | Episode Number | اختياري، لكن يُنصح به. رقم صحيح. |
  | Season Number | اختياري. رقم صحيح. |
  | Episode Author (override) | اختياري. يستبدل مؤلف القناة لهذه الحلقة فقط. |
  | Episode Cover (square) | اختياري. صورة مربعة، يُنصح بـ 1400-3000px. تستبدل غلاف القناة. |
  | Transcript (optional) | اختياري. ارفع ملف تفريغ أو أدخل رابطًا، مع دعم vtt/srt/txt/pdf وغيرها. |
  | iTunes Title (optional) | اختياري. قيمة بديلة لعنوان الحلقة في Apple Podcasts. |
  | Chapters (Podcasting 2.0) | اختياري. ملف JSON أو رابط للفصول. |
  | Chapters MIME Type | اختياري. نوع MIME لملف الفصول، والافتراضي `application/json+chapters`. |
  | Soundbites (Podcasting 2.0) | حقل مركب. أضف مقطعًا أو أكثر؛ كل مقطع يتضمن وقت البدء والمدة والعنوان. |
  | Subtitle | اختياري. عنوان فرعي قصير لـ iTunes. |
  | Summary | اختياري. ملخص نصي لـ iTunes. |
  | Custom GUID (optional) | اختياري. GUID مخصص لـ RSS؛ إذا كان فارغًا يُستخدم رابط الحلقة. |
  | iTunes Block | اختياري. `yes` يخفي الحلقة في Apple Podcasts، والافتراضي `no`. |
  | Members | اختر أعضاء الحلقة، عادةً المدراء أو المؤلفين أو المحررين. |
  | Guests | اختر ضيوف الحلقة، عادةً المساهمين. |

## ملاحظات
- الحقول المعلّمة بـ <span style="color: red;">*</span> إلزامية.

