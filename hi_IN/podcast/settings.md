# पॉडकास्ट सेटिंग्स
इन फ़ील्ड्स का उपयोग मुख्य रूप से पॉडकास्ट RSS बनाने के लिए होता है।

## कैसे खोलें
![पॉडकास्ट सेटिंग्स का स्क्रीनशॉट](/images/settings-1.png)

## फ़ील्ड संदर्भ
| फ़ील्ड | विवरण |
|---|---|
| पॉडकास्ट RSS URL | वर्तमान पॉडकास्ट RSS URL को केवल पढ़ने के लिए दिखाता है। आप फ़ील्ड पर क्लिक करके उसे चुन और कॉपी कर सकते हैं, या feed सीधे खोल सकते हैं। |
| पॉडकास्ट शीर्षक <span style="color: red;">*</span> | आवश्यक। पॉडकास्ट का शीर्षक। खाली रहने पर RSS साइट के शीर्षक पर वापस जाता है। |
| पॉडकास्ट उपशीर्षक | वैकल्पिक। छोटा सबटाइटल या टैगलाइन, जिसे कुछ क्लाइंट दिखाते हैं। |
| पॉडकास्ट विवरण <span style="color: red;">*</span> | आवश्यक। पॉडकास्ट का सादा-पाठ विवरण। यह RSS में description / iTunes summary के रूप में जाता है। |
| पॉडकास्ट लेखक (itunes:author) <span style="color: red;">*</span> | आवश्यक। पॉडकास्ट का लेखक या निर्माता, जो निर्देशिकाओं में दिखता है। |
| मालिक का नाम <span style="color: red;">*</span> | आवश्यक। मालिक की जानकारी के लिए `<itunes:owner><itunes:name>` का मान। |
| मालिक का ईमेल <span style="color: red;">*</span> | आवश्यक। `<itunes:owner><itunes:email>` का मान। कृपया ऐसा ईमेल दें जो सत्यापन मेल प्राप्त कर सके। |
| पॉडकास्ट कवर (1400-3000px वर्गाकार) <span style="color: red;">*</span> | आवश्यक। पॉडकास्ट कवर इमेज। JPG/PNG, वर्गाकार, 1400-3000px, और 512KB से कम होनी चाहिए। |
| डिफ़ॉल्ट स्पष्ट फ़्लैग <span style="color: red;">*</span> | आवश्यक। डिफ़ॉल्ट explicit सामग्री फ़्लैग। clean या explicit चुनें। एपिसोड फ़ील्ड इसे override कर सकती हैं। |
| भाषा (RFC 5646) <span style="color: red;">*</span> | आवश्यक। पॉडकास्ट की भाषा, जैसे en-US, zh-CN, या ja-JP। |
| प्राथमिक श्रेणी (Apple Podcasts) <span style="color: red;">*</span> | आवश्यक। Apple Podcasts की मुख्य category। कम से कम एक category चुननी होगी। |
| द्वितीयक श्रेणी (वैकल्पिक) | वैकल्पिक। द्वितीयक category, जिसे कुछ podcast directories सपोर्ट करती हैं। |
| कॉपीराइट (वैकल्पिक) | वैकल्पिक। कॉपीराइट विवरण, जो `<copyright>` में जाता है। |
| iTunes प्रकार (itunes:type) | वैकल्पिक। Apple Podcasts शो टाइप। विकल्प: unset, episodic, serial। |
| iTunes शीर्षक (वैकल्पिक) | वैकल्पिक। Apple Podcasts के लिए अलग शीर्षक। केवल तभी उपयोग करें जब यह सामान्य पॉडकास्ट शीर्षक से अलग होना चाहिए। |
| iTunes ब्लॉक (itunes:block) | वैकल्पिक। yes, Apple Podcasts में पूरे शो को छिपा देता है। डिफ़ॉल्ट no है। |
| iTunes पूर्ण (itunes:complete) | वैकल्पिक। yes का मतलब शो पूरा हो चुका है और आगे अपडेट नहीं होगा। डिफ़ॉल्ट no है। |
| नया iTunes फ़ीड URL (itunes:new-feed-url) | वैकल्पिक। केवल नए RSS URL पर माइग्रेट करने के समय उपयोग करें। |
| podcast:locked | Podcasting 2.0 फ़ील्ड। अनधिकृत feed migration रोकने के लिए डिफ़ॉल्ट yes होता है। |
| podcast:locked मालिक (वैकल्पिक) | वैकल्पिक। Podcasting 2.0 feed migration सत्यापन के लिए मालिक का ईमेल। |
| podcast:guid (वैकल्पिक) | वैकल्पिक। Podcasting 2.0 GUID। खाली रहने पर feed साइट URL को fallback के रूप में उपयोग करेगा। |
| Apple Podcasts सत्यापन कोड | वैकल्पिक। Apple Podcasts verification code, जो `podcast:txt purpose="applepodcastsverify"` के रूप में आउटपुट होता है। |
| Podcasting 2.0 फंडिंग लिंक | संयुक्त फ़ील्ड। आप कई funding या support links जोड़ सकते हैं; हर आइटम में URL और Label होता है। खाली होने पर `podcast:funding` आउटपुट नहीं होगा। |
| जनरेटर (वैकल्पिक) | वैकल्पिक। RSS `<generator>` सामग्री। खाली होने पर यह टैग आउटपुट नहीं होगा। |

## नोट्स
- जिन फ़ील्ड्स पर <span style="color: red;">*</span> है वे आवश्यक हैं।
