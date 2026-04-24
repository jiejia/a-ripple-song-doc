# पॉडकास्ट प्रबंधन

## जोड़ना
1. पॉडकास्ट जोड़ने वाला पेज खोलें
![पॉडकास्ट सेटिंग्स स्क्रीनशॉट](/images/manage-1.png)
2. पॉडकास्ट जानकारी भरें, ऑडियो फ़ाइल और इमेज अपलोड करें, फिर 【प्रकाशित करें】 पर क्लिक करें
![पॉडकास्ट सेटिंग्स स्क्रीनशॉट](/images/manage-2.png)

## संपादन
1. पॉडकास्ट संपादन वाला पेज खोलें
![पॉडकास्ट सेटिंग्स स्क्रीनशॉट](/images/manage-3.png)
2. जानकारी संपादित करें और 【सहेजें】 पर क्लिक करें
![पॉडकास्ट सेटिंग्स स्क्रीनशॉट](/images/manage-4.png)

## फ़ील्ड संदर्भ

  | फ़ील्ड | विवरण |
  |---|---|
  | Audio File <span style="color: red;">*</span> | आवश्यक। ऑडियो फ़ाइल अपलोड करें या ऑडियो URL (https) दर्ज करें। |
  | Duration (seconds) | सहेजने पर “Audio File” से अपने-आप पता चलता है, सेकंड में, केवल पढ़ने के लिए। |
  | Audio Length (bytes) | सहेजने पर “Audio File” से अपने-आप पता चलता है, केवल पढ़ने के लिए। |
  | Audio MIME Type | सहेजने पर “Audio File” से अपने-आप पता चलता है, केवल पढ़ने के लिए, डिफ़ॉल्ट `audio/mpeg`। |
  | Explicit <span style="color: red;">*</span> | आवश्यक। `clean` या `explicit` चुनें। |
  | Episode Type <span style="color: red;">*</span> | आवश्यक। `full`, `trailer` या `bonus` चुनें। |
  | Episode Number | वैकल्पिक, लेकिन अनुशंसित। पूर्णांक। |
  | Season Number | वैकल्पिक। पूर्णांक। |
  | Episode Author (override) | वैकल्पिक। इस एपिसोड के लिए चैनल लेखक को बदल देता है। |
  | Episode Cover (square) | वैकल्पिक। वर्गाकार छवि, 1400-3000px अनुशंसित। चैनल कवर को बदल देती है। |
  | Transcript (optional) | वैकल्पिक। ट्रांसक्रिप्ट फ़ाइल अपलोड करें या URL दें, vtt/srt/txt/pdf आदि समर्थित हैं। |
  | iTunes Title (optional) | वैकल्पिक। Apple Podcasts के लिए एपिसोड शीर्षक का वैकल्पिक मान। |
  | Chapters (Podcasting 2.0) | वैकल्पिक। chapters JSON फ़ाइल या URL। |
  | Chapters MIME Type | वैकल्पिक। chapters फ़ाइल का MIME प्रकार, डिफ़ॉल्ट `application/json+chapters`। |
  | Soundbites (Podcasting 2.0) | संयुक्त फ़ील्ड। एक या अधिक highlight clips जोड़ें; हर clip में start time, duration और title होता है। |
  | Subtitle | वैकल्पिक। iTunes का छोटा सबटाइटल। |
  | Summary | वैकल्पिक। iTunes का plain-text summary। |
  | Custom GUID (optional) | वैकल्पिक। कस्टम RSS GUID; खाली रहने पर एपिसोड लिंक उपयोग होता है। |
  | iTunes Block | वैकल्पिक। `yes` Apple Podcasts में एपिसोड छिपाता है, डिफ़ॉल्ट `no`। |
  | Members | एपिसोड के सदस्य चुनें, आमतौर पर administrators, authors या editors। |
  | Guests | एपिसोड के guests चुनें, आमतौर पर contributors। |

## नोट्स
- जिन फ़ील्ड्स पर <span style="color: red;">*</span> है वे आवश्यक हैं।

