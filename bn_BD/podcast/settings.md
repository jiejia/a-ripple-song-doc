# পডকাস্ট সেটিংস
এই ফিল্ডগুলো মূলত পডকাস্ট RSS তৈরি করতে ব্যবহৃত হয়।

## কীভাবে খুলবেন
![পডকাস্ট সেটিংসের স্ক্রিনশট](/images/settings-1.png)

## ফিল্ড রেফারেন্স
| ফিল্ড | বর্ণনা |
|---|---|
| পডকাস্ট RSS URL | বর্তমান পডকাস্ট RSS URL শুধু-পাঠযোগ্যভাবে দেখায়। আপনি ফিল্ডে ক্লিক করে সেটি নির্বাচন ও কপি করতে পারেন, অথবা feed সরাসরি খুলতে পারেন। |
| পডকাস্ট শিরোনাম <span style="color: red;">*</span> | আবশ্যক। পডকাস্টের শিরোনাম। খালি থাকলে RSS সাইটের শিরোনামে ফিরে যাবে। |
| পডকাস্ট সাবটাইটেল | ঐচ্ছিক। সংক্ষিপ্ত সাবটাইটেল বা ট্যাগলাইন, যা কিছু ক্লায়েন্ট দেখায়। |
| পডকাস্ট বিবরণ <span style="color: red;">*</span> | আবশ্যক। পডকাস্টের সরল-পাঠ্য বিবরণ। এটি RSS-এ description / iTunes summary হিসেবে যায়। |
| পডকাস্ট লেখক (itunes:author) <span style="color: red;">*</span> | আবশ্যক। পডকাস্টের লেখক বা প্রযোজক, যা ডিরেক্টরিতে দেখায়। |
| মালিকের নাম <span style="color: red;">*</span> | আবশ্যক। মালিকের তথ্যের জন্য `<itunes:owner><itunes:name>` মান। |
| মালিকের ইমেল <span style="color: red;">*</span> | আবশ্যক। `<itunes:owner><itunes:email>` মান। অনুগ্রহ করে এমন ইমেল দিন, যা যাচাইকরণ বার্তা পেতে পারে। |
| পডকাস্ট কভার (1400-3000px বর্গাকার) <span style="color: red;">*</span> | আবশ্যক। পডকাস্ট কভার ছবি। JPG/PNG, বর্গাকার, 1400-3000px, এবং 512KB-এর কম হতে হবে। |
| ডিফল্ট এক্সপ্লিসিট ফ্ল্যাগ <span style="color: red;">*</span> | আবশ্যক। ডিফল্ট explicit কনটেন্ট ফ্ল্যাগ। clean বা explicit নির্বাচন করুন। এপিসোড ফিল্ড এটি override করতে পারে। |
| ভাষা (RFC 5646) <span style="color: red;">*</span> | আবশ্যক। পডকাস্টের ভাষা, যেমন en-US, zh-CN, বা ja-JP। |
| প্রধান বিভাগ (Apple Podcasts) <span style="color: red;">*</span> | আবশ্যক। Apple Podcasts-এর প্রধান category। অন্তত একটি category বেছে নিতে হবে। |
| গৌণ বিভাগ (ঐচ্ছিক) | ঐচ্ছিক। গৌণ category, যা কিছু podcast directory সমর্থন করে। |
| কপিরাইট (ঐচ্ছিক) | ঐচ্ছিক। কপিরাইট বিবৃতি, যা `<copyright>`-এ যায়। |
| iTunes ধরন (itunes:type) | ঐচ্ছিক। Apple Podcasts শো টাইপ। বিকল্প: unset, episodic, serial। |
| iTunes শিরোনাম (ঐচ্ছিক) | ঐচ্ছিক। Apple Podcasts-এর জন্য আলাদা শিরোনাম। সাধারণ পডকাস্ট শিরোনাম থেকে আলাদা হলে তবেই ব্যবহার করুন। |
| iTunes ব্লক (itunes:block) | ঐচ্ছিক। yes, Apple Podcasts-এ পুরো শো লুকিয়ে দেয়। ডিফল্ট no। |
| iTunes সম্পূর্ণ (itunes:complete) | ঐচ্ছিক। yes মানে শো শেষ হয়ে গেছে এবং আর আপডেট হবে না। ডিফল্ট no। |
| নতুন iTunes ফিড URL (itunes:new-feed-url) | ঐচ্ছিক। নতুন RSS URL-এ স্থানান্তরের সময়ই ব্যবহার করুন। |
| podcast:locked | Podcasting 2.0 ফিল্ড। অননুমোদিত feed migration ঠেকাতে ডিফল্ট yes থাকে। |
| podcast:locked মালিক (ঐচ্ছিক) | ঐচ্ছিক। Podcasting 2.0 feed migration যাচাইয়ের জন্য মালিকের ইমেল। |
| podcast:guid (ঐচ্ছিক) | ঐচ্ছিক। Podcasting 2.0 GUID। খালি থাকলে feed সাইট URL-কে fallback হিসেবে ব্যবহার করবে। |
| Apple Podcasts যাচাইকরণ কোড | ঐচ্ছিক। Apple Podcasts verification code, যা `podcast:txt purpose="applepodcastsverify"` হিসেবে আউটপুট হয়। |
| Podcasting 2.0 তহবিল লিংক | সম্মিলিত ফিল্ড। আপনি একাধিক funding বা support link যোগ করতে পারেন; প্রতিটি আইটেমে URL এবং Label থাকে। খালি থাকলে `podcast:funding` আউটপুট হবে না। |
| জেনারেটর (ঐচ্ছিক) | ঐচ্ছিক। RSS `<generator>` কন্টেন্ট। খালি থাকলে এই ট্যাগ আউটপুট হবে না। |

## নোট
- যেসব ফিল্ডে <span style="color: red;">*</span> আছে সেগুলো আবশ্যক।
