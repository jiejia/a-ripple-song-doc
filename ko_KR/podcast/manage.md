# 팟캐스트 관리

## 추가
1. 팟캐스트 추가 페이지를 엽니다
![팟캐스트 설정 스크린샷](/images/manage-1.png)
2. 팟캐스트 정보를 입력하고 오디오 파일과 이미지를 업로드한 뒤 【발행】을 클릭합니다
![팟캐스트 설정 스크린샷](/images/manage-2.png)

## 편집
1. 팟캐스트 편집 페이지를 엽니다
![팟캐스트 설정 스크린샷](/images/manage-3.png)
2. 정보를 편집한 뒤 【저장】을 클릭합니다
![팟캐스트 설정 스크린샷](/images/manage-4.png)

## 필드 안내

  | 필드 | 설명 |
  |---|---|
  | 오디오 파일 <span style="color: red;">*</span> | 필수. 오디오 파일을 업로드하거나 오디오 URL(https)을 입력하세요. |
  | 길이(초) | 저장 시 “Audio File”에서 자동 감지되며, 초 단위의 읽기 전용 값입니다. |
  | 오디오 길이(바이트) | 저장 시 “Audio File”에서 자동 감지되며, 읽기 전용입니다. |
  | 오디오 MIME 유형 | 저장 시 “Audio File”에서 자동 감지되며, 읽기 전용이고 기본값은 `audio/mpeg`입니다. |
  | 명시적 <span style="color: red;">*</span> | 필수. `clean` 또는 `explicit`를 선택하세요. |
  | 에피소드 유형 <span style="color: red;">*</span> | 필수. `full`, `trailer`, `bonus` 중 선택하세요. |
  | 에피소드 번호 | 선택 사항이지만 권장합니다. 정수 값입니다. |
  | 시즌 번호 | 선택 사항입니다. 정수 값입니다. |
  | 에피소드 작성자(재정의) | 선택 사항. 이 에피소드에 한해 channel author를 바꿉니다. |
  | 에피소드 커버(정사각형) | 선택 사항. 1400-3000px 권장 정사각형 이미지입니다. channel cover를 바꿉니다. |
  | 대본(선택 사항) | 선택 사항. transcript 파일을 업로드하거나 URL을 입력하세요. vtt/srt/txt/pdf 등을 지원합니다. |
  | iTunes 제목(선택 사항) | 선택 사항. Apple Podcasts용 에피소드 제목 대체값입니다. |
  | 챕터(Podcasting 2.0) | 선택 사항. chapters JSON 파일 또는 URL입니다. |
  | 챕터 MIME 유형 | 선택 사항. chapters 파일의 MIME type이며 기본값은 `application/json+chapters`입니다. |
  | 오디오 하이라이트(Podcasting 2.0) | 복합 필드입니다. 하나 이상의 highlight clip을 추가할 수 있으며, 각 항목에는 시작 시간, 길이, 제목이 들어갑니다. |
  | 부제 | 선택 사항. iTunes용 짧은 부제입니다. |
  | 요약 | 선택 사항. iTunes용 일반 텍스트 요약입니다. |
  | 사용자 지정 GUID(선택 사항) | 선택 사항. 사용자 정의 RSS GUID입니다. 비어 있으면 에피소드 링크를 사용합니다. |
  | iTunes 차단 | 선택 사항. `yes`면 Apple Podcasts에서 에피소드를 숨깁니다. 기본값은 `no`입니다. |
  | 구성원 | 에피소드 멤버를 선택합니다. 보통 관리자, 작성자, 편집자입니다. |
  | 게스트 | 에피소드 게스트를 선택합니다. 보통 기여자입니다. |

## 참고
- <span style="color: red;">*</span> 표시된 필드는 필수입니다.

