# পডকাস্ট ব্যবস্থাপনা

## যোগ করুন
1. পডকাস্ট যোগ করার পেজ খুলুন
![পডকাস্ট সেটিংস স্ক্রিনশট](/images/manage-1.png)
2. পডকাস্ট তথ্য পূরণ করুন, অডিও ফাইল ও ছবি আপলোড করুন, তারপর 【প্রকাশ করুন】 ক্লিক করুন
![পডকাস্ট সেটিংস স্ক্রিনশট](/images/manage-2.png)

## সম্পাদনা
1. পডকাস্ট সম্পাদনার পেজ খুলুন
![পডকাস্ট সেটিংস স্ক্রিনশট](/images/manage-3.png)
2. তথ্য সম্পাদনা করে 【সংরক্ষণ করুন】 ক্লিক করুন
![পডকাস্ট সেটিংস স্ক্রিনশট](/images/manage-4.png)

## ফিল্ড রেফারেন্স

  | ফিল্ড | বর্ণনা |
  |---|---|
  | Audio File <span style="color: red;">*</span> | আবশ্যক। অডিও ফাইল আপলোড করুন বা অডিও URL (https) দিন। |
  | Duration (seconds) | সংরক্ষণের সময় “Audio File” থেকে স্বয়ংক্রিয়ভাবে শনাক্ত হয়, সেকেন্ডে, শুধু পড়ার জন্য। |
  | Audio Length (bytes) | সংরক্ষণের সময় “Audio File” থেকে স্বয়ংক্রিয়ভাবে শনাক্ত হয়, শুধু পড়ার জন্য। |
  | Audio MIME Type | সংরক্ষণের সময় “Audio File” থেকে স্বয়ংক্রিয়ভাবে শনাক্ত হয়, শুধু পড়ার জন্য, ডিফল্ট `audio/mpeg`। |
  | Explicit <span style="color: red;">*</span> | আবশ্যক। `clean` বা `explicit` বাছুন। |
  | Episode Type <span style="color: red;">*</span> | আবশ্যক। `full`, `trailer` বা `bonus` বাছুন। |
  | Episode Number | ঐচ্ছিক, তবে সুপারিশ করা হয়। পূর্ণসংখ্যা। |
  | Season Number | ঐচ্ছিক। পূর্ণসংখ্যা। |
  | Episode Author (override) | ঐচ্ছিক। এই এপিসোডের জন্য channel author বদলে দেয়। |
  | Episode Cover (square) | ঐচ্ছিক। বর্গাকার ছবি, 1400-3000px সুপারিশ করা হয়। channel cover বদলে দেয়। |
  | Transcript (optional) | ঐচ্ছিক। transcript ফাইল আপলোড করুন বা URL দিন, vtt/srt/txt/pdf ইত্যাদি সমর্থিত। |
  | iTunes Title (optional) | ঐচ্ছিক। Apple Podcasts-এর এপিসোড শিরোনামের বিকল্প মান। |
  | Chapters (Podcasting 2.0) | ঐচ্ছিক। chapters JSON ফাইল বা URL। |
  | Chapters MIME Type | ঐচ্ছিক। chapters ফাইলের MIME type, ডিফল্ট `application/json+chapters`। |
  | Soundbites (Podcasting 2.0) | সম্মিলিত ফিল্ড। একটি বা একাধিক highlight clip যোগ করুন; প্রতিটিতে start time, duration এবং title থাকে। |
  | Subtitle | ঐচ্ছিক। iTunes-এর সংক্ষিপ্ত সাবটাইটেল। |
  | Summary | ঐচ্ছিক। iTunes-এর plain-text summary। |
  | Custom GUID (optional) | ঐচ্ছিক। কাস্টম RSS GUID; খালি থাকলে এপিসোড লিংক ব্যবহার হয়। |
  | iTunes Block | ঐচ্ছিক। `yes` Apple Podcasts-এ এপিসোড লুকায়, ডিফল্ট `no`। |
  | Members | এপিসোডের সদস্য বাছুন, সাধারণত admin, author বা editor। |
  | Guests | এপিসোডের অতিথি বাছুন, সাধারণত contributor। |

## নোট
- <span style="color: red;">*</span> চিহ্নিত ফিল্ডগুলো আবশ্যক।

