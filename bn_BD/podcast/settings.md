# পডকাস্ট সেটিংস
এই ফিল্ডগুলো মূলত পডকাস্ট RSS তৈরি করতে ব্যবহৃত হয়।

## কীভাবে খুলবেন
![পডকাস্ট সেটিংসের স্ক্রিনশট](/images/settings-1.png)

## ফিল্ড রেফারেন্স
| ফিল্ড | বর্ণনা |
|---|---|
| Podcast RSS URL | বর্তমান পডকাস্ট RSS URL শুধু-পাঠযোগ্যভাবে দেখায়। আপনি ফিল্ডে ক্লিক করে সেটি নির্বাচন ও কপি করতে পারেন, অথবা feed সরাসরি খুলতে পারেন। |
| Podcast Title <span style="color: red;">*</span> | আবশ্যক। পডকাস্টের শিরোনাম। খালি থাকলে RSS সাইটের শিরোনামে ফিরে যাবে। |
| Podcast Subtitle | ঐচ্ছিক। সংক্ষিপ্ত সাবটাইটেল বা ট্যাগলাইন, যা কিছু ক্লায়েন্ট দেখায়। |
| Podcast Description <span style="color: red;">*</span> | আবশ্যক। পডকাস্টের সরল-পাঠ্য বিবরণ। এটি RSS-এ description / iTunes summary হিসেবে যায়। |
| Podcast Author (itunes:author) <span style="color: red;">*</span> | আবশ্যক। পডকাস্টের লেখক বা প্রযোজক, যা ডিরেক্টরিতে দেখায়। |
| Owner Name <span style="color: red;">*</span> | আবশ্যক। মালিকের তথ্যের জন্য `<itunes:owner><itunes:name>` মান। |
| Owner Email <span style="color: red;">*</span> | আবশ্যক। `<itunes:owner><itunes:email>` মান। অনুগ্রহ করে এমন ইমেল দিন, যা যাচাইকরণ বার্তা পেতে পারে। |
| Podcast Cover (1400-3000px square) <span style="color: red;">*</span> | আবশ্যক। পডকাস্ট কভার ছবি। JPG/PNG, বর্গাকার, 1400-3000px, এবং 512KB-এর কম হতে হবে। |
| Default Explicit Flag <span style="color: red;">*</span> | আবশ্যক। ডিফল্ট explicit কনটেন্ট ফ্ল্যাগ। clean বা explicit নির্বাচন করুন। এপিসোড ফিল্ড এটি override করতে পারে। |
| Language (RFC 5646) <span style="color: red;">*</span> | আবশ্যক। পডকাস্টের ভাষা, যেমন en-US, zh-CN, বা ja-JP। |
| Primary Category (Apple Podcasts) <span style="color: red;">*</span> | আবশ্যক। Apple Podcasts-এর প্রধান category। অন্তত একটি category বেছে নিতে হবে। |
| Secondary Category (optional) | ঐচ্ছিক। গৌণ category, যা কিছু podcast directory সমর্থন করে। |
| Copyright (optional) | ঐচ্ছিক। কপিরাইট বিবৃতি, যা `<copyright>`-এ যায়। |
| iTunes Type (itunes:type) | ঐচ্ছিক। Apple Podcasts শো টাইপ। বিকল্প: unset, episodic, serial। |
| iTunes Title (optional) | ঐচ্ছিক। Apple Podcasts-এর জন্য আলাদা শিরোনাম। সাধারণ পডকাস্ট শিরোনাম থেকে আলাদা হলে তবেই ব্যবহার করুন। |
| iTunes Block (itunes:block) | ঐচ্ছিক। yes, Apple Podcasts-এ পুরো শো লুকিয়ে দেয়। ডিফল্ট no। |
| iTunes Complete (itunes:complete) | ঐচ্ছিক। yes মানে শো শেষ হয়ে গেছে এবং আর আপডেট হবে না। ডিফল্ট no। |
| iTunes New Feed URL (itunes:new-feed-url) | ঐচ্ছিক। নতুন RSS URL-এ স্থানান্তরের সময়ই ব্যবহার করুন। |
| podcast:locked | Podcasting 2.0 ফিল্ড। অননুমোদিত feed migration ঠেকাতে ডিফল্ট yes থাকে। |
| podcast:locked owner (optional) | ঐচ্ছিক। Podcasting 2.0 feed migration যাচাইয়ের জন্য মালিকের ইমেল। |
| podcast:guid (optional) | ঐচ্ছিক। Podcasting 2.0 GUID। খালি থাকলে feed সাইট URL-কে fallback হিসেবে ব্যবহার করবে। |
| Apple Podcasts Verify Code | ঐচ্ছিক। Apple Podcasts verification code, যা `podcast:txt purpose="applepodcastsverify"` হিসেবে আউটপুট হয়। |
| Podcasting 2.0 Funding Links | সম্মিলিত ফিল্ড। আপনি একাধিক funding বা support link যোগ করতে পারেন; প্রতিটি আইটেমে URL এবং Label থাকে। খালি থাকলে `podcast:funding` আউটপুট হবে না। |
| Generator (optional) | ঐচ্ছিক। RSS `<generator>` কন্টেন্ট। খালি থাকলে এই ট্যাগ আউটপুট হবে না। |

## নোট
- যেসব ফিল্ডে <span style="color: red;">*</span> আছে সেগুলো আবশ্যক।
