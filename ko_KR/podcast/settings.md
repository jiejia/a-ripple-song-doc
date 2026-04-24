# 팟캐스트 설정
이 필드는 주로 팟캐스트 RSS를 생성하는 데 사용됩니다.

## 여는 방법
![팟캐스트 설정 스크린샷](/images/settings-1.png)

## 필드 안내
| 필드 | 설명 |
|---|---|
| 팟캐스트 RSS URL | 현재 팟캐스트 RSS URL을 읽기 전용으로 보여줍니다. 입력칸을 클릭해 선택하고 복사할 수 있고, feed를 바로 열 수도 있습니다. |
| 팟캐스트 제목 <span style="color: red;">*</span> | 필수. 팟캐스트 제목입니다. 비어 있으면 RSS가 사이트 제목으로 되돌아갑니다. |
| 팟캐스트 부제 | 선택 사항. 일부 클라이언트가 표시하는 짧은 부제나 태그라인입니다. |
| 팟캐스트 설명 <span style="color: red;">*</span> | 필수. 일반 텍스트 형태의 팟캐스트 설명입니다. RSS의 description / iTunes summary로 출력됩니다. |
| 팟캐스트 작성자 (itunes:author) <span style="color: red;">*</span> | 필수. 디렉터리에 표시되는 팟캐스트 작성자 또는 제작자입니다. |
| 소유자 이름 <span style="color: red;">*</span> | 필수. 소유자 정보로 쓰이는 `<itunes:owner><itunes:name>` 값입니다. |
| 소유자 이메일 <span style="color: red;">*</span> | 필수. `<itunes:owner><itunes:email>` 값입니다. 인증 메일을 받을 수 있는 주소를 넣으세요. |
| 팟캐스트 커버(1400-3000px 정사각형) <span style="color: red;">*</span> | 필수. 팟캐스트 커버 이미지입니다. JPG/PNG, 정사각형, 1400-3000px, 512KB 미만이어야 합니다. |
| 기본 명시적 플래그 <span style="color: red;">*</span> | 필수. 기본 explicit 콘텐츠 플래그입니다. clean 또는 explicit를 선택하세요. 에피소드 필드가 이를 덮어쓸 수 있습니다. |
| 언어(RFC 5646) <span style="color: red;">*</span> | 필수. 팟캐스트 언어입니다. 예: en-US, zh-CN, ja-JP. |
| 주 카테고리 (Apple Podcasts) <span style="color: red;">*</span> | 필수. Apple Podcasts 기본 카테고리입니다. 최소 하나를 선택해야 합니다. |
| 보조 카테고리(선택 사항) | 선택 사항. 일부 팟캐스트 디렉터리에서 지원하는 보조 카테고리입니다. |
| 저작권(선택 사항) | 선택 사항. `<copyright>`로 출력되는 저작권 표기입니다. |
| iTunes 유형 (itunes:type) | 선택 사항. Apple Podcasts 쇼 유형입니다. 옵션은 미설정, episodic, serial입니다. |
| iTunes 제목(선택 사항) | 선택 사항. Apple Podcasts 전용 제목입니다. 일반 팟캐스트 제목과 달라야 할 때만 사용하세요. |
| iTunes 차단 (itunes:block) | 선택 사항. yes이면 Apple Podcasts에서 전체 쇼를 숨깁니다. 기본값은 no입니다. |
| iTunes 완료 (itunes:complete) | 선택 사항. yes이면 쇼가 완료되어 더 이상 업데이트되지 않음을 뜻합니다. 기본값은 no입니다. |
| 새 iTunes 피드 URL (itunes:new-feed-url) | 선택 사항. 새 RSS URL로 이전할 때만 사용하세요. |
| podcast:locked | Podcasting 2.0 항목입니다. 무단 feed 이전을 막기 위해 기본값은 yes입니다. |
| podcast:locked 소유자(선택 사항) | 선택 사항. Podcasting 2.0 feed 이전 검증에 사용하는 소유자 이메일입니다. |
| podcast:guid(선택 사항) | 선택 사항. Podcasting 2.0 GUID입니다. 비어 있으면 사이트 URL을 대체값으로 사용합니다. |
| Apple Podcasts 인증 코드 | 선택 사항. Apple Podcasts 검증 코드입니다. `podcast:txt purpose="applepodcastsverify"`로 출력됩니다. |
| Podcasting 2.0 후원 링크 | 복합 항목입니다. 여러 후원 또는 지원 링크를 추가할 수 있습니다. 각 항목은 URL과 Label을 포함합니다. 비어 있으면 `podcast:funding`이 출력되지 않습니다. |
| 생성기(선택 사항) | 선택 사항. RSS `<generator>` 내용입니다. 비어 있으면 태그가 출력되지 않습니다. |

## 참고
- <span style="color: red;">*</span>가 표시된 항목은 필수입니다.
