# sangam-weather

| 박지윤 | 박진영 | 윤영인 | 김용민 |
| ------ | ------ | ------ | ------ |

## Project start

```bash
npm start
npm install
```

## Project 구조

```
sangam-weather
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ client
│  └─ src
│     ├─ components
│     │  ├─ clothes
│     │  ├─ recommend
│     │  └─ wheather
│     └─ public
│        ├─ img
│        └─ style
│           ├─ common.css
│           └─ reset.css
└─ server
   ├─ index.js
   ├─ openWeather.js
   └─ restaurant.json
```

## 유효성 검사 결과

![image](https://user-images.githubusercontent.com/122027452/236105662-e1b7dbaa-3b5e-4e94-be1c-ddf10c03ff2e.png)

## Used Stack

 <img src="https://img.shields.io/badge/HTML5-E34F26" >
<img src="https://img.shields.io/badge/CSS-1572B6" >
 <img src="https://img.shields.io/badge/Javascript-F7DF1E" >
 <img src="https://img.shields.io/badge/NodeJS-000000" >

## 👆 서비스 개발 이유

클라우드 서비스 과정 반에 멀리서 통학하시는 분들이 많은 것으로 압니다. 그래서 매번 상암동 날씨를 일일히 찾아보지 않고도 바로 확인해 볼 수 있는 서비스를 만들게 되었습니다. 그날의 날씨을 미리 확인하고 옷차림을 추천해 드립니다. 그리고 그날 날씨에 따라 랜덤으로 주변 식당을 추천해주어, 점심 메뉴를 걱정 할일이 없습니다 😁

## ✌ 구현 화면

<center>
<img src="https://user-images.githubusercontent.com/72537762/235884619-89536692-9ea1-44b5-a4db-2a24fe29cc89.gif" />

</center>

## 🖖 구현 기능

### 👕 날씨에 따른 옷차림 추천

openWeather의 API를 받아와서 상암동의 날씨 데이터를 기반으로 온도별 옷차림을 추천해드리고 있습니다.

[사용한 날씨API - openWeather](https://openweathermap.org/)

### 🍔 날씨에 어울리는 식당 추천

주변의 식당들을 JSON 파일로 리스트업하여, 해당 리스트를 받아오는 API를 구현했습니다. 날씨 조건에 따라서 어울리는 식당을 랜덤으로 추천해드리고 있습니다. 그리고 해당하는 음식점의 위치정보를 기반으로 카카오지도 API를 활용해, 지도를 표시해드리고 있습니다.

[사용한 카카오맵API](https://apis.map.kakao.com/)

## 협업과정

### Git

- 기능별로 브랜치 생성하여 각자 맡은 부분 작업
- Pull Request로 팀원들끼리 서로 코드를 확인 및 리뷰
- 각 기능별 이슈생성하여 태스크 관리
- Discord webhook으로 Git Repository 연동하여 git 관련 알림 푸쉬
- 어떤 내용을 작업했는지 알 수 있도록 커밋 컨벤션을 맞추고 최대한 메세지를 자세하게 작성

### Git commit convention

| 컨벤션   | 의미                                |
| -------- | ----------------------------------- |
| Feat     | 새로운 기능 개발                    |
| Fix      | 오류 수정                           |
| Style    | style css 수정, 코드 스타일 수정 등 |
| Refactor | 리팩토링                            |
| Docs     | 문서수정                            |
| Chore    | 빌드업무 수정, 패키지 매니저 수정   |

### Code

- htmlLoader 함수로 각자 작업한 html 조립하여 한페이지로 렌더링
- `.prettierrc`, `.eslintrc` 사용하여 코드 스타일 컨벤션을 맞춤

## 신경쓴 부분

- API KEY 보안을 위해 .env를 적용했습니다.
- fetch 작업을 할때 async와 await를 사용해서 깔끔한 코드를 작성하도록 노력했습니다.
- API 별로 파일을 관리하면 좋을 것 같아 날씨 관련 api만 따로 파일로 작성했습니다.
- 더 나은 사용자경험을 위해 API 통신중에는 로딩 화면이 보여지도록 구현했습니다.

## 소감

#### 😀 박지윤

##### ✅ 소감

이전에 해봤던 작업을 상암에 맞추어 다시 작업하며 env path를 설정해보는 것, htmlLoader로 조립식 구현을 해보는 것을 새로 해볼 수 있어서 유익하고 즐거운 팀프로젝트 였습니다.

##### ✅ 어려웠던 부분 & 해결 방법

.env를 최상위 루트로 두고 사용하고 싶었는데, path 설정을 통해 해결했습니다.
[env path 변경시 참고한 링크](https://42kim.github.io/tutorials/dotenv)

이전 팀프로젝트에서 하나의 파일로 작업하다보니 git push, merge 하는 부분이 힘들었었는데, 이부분을 효율적으로 할 수 있는 방법에 대해서 고민을 했습니다. 그래서 htmlLoader 라는 함수를 사용해서 각자 작업 한 부분을 조립식으로 구현하여, 이전보다 더 편리하게 협업을 할 수 있게 되었습니다.

```javascript
const htmlRoot = [
  'src/components/wheather/index.html',
  'src/components/clothes/clothes.html',
  'src/components/recommend/index.html',
];
const loadHTML = file => {
  const rawFile = new XMLHttpRequest();
  rawFile.open('GET', file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        const allText = rawFile.responseText;
        document.write(allText);
      }
    }
  };
  rawFile.send(null);
};
```

```html
<main>
  <script>
    for (const html of htmlRoot) {
      loadHTML(html);
    }
  </script>
</main>
```

#### 😀 박진영

##### ✅ 소감

git을 통해 처음 협업을 해보았는데, 많은 것을 배울수 있어서 좋았습니다.
서버에 배포하는 과정에서 서버와 로컬에서 node 버전이 달라 앱 실행이 되지 않는 문제가 있었는데, 버전 관리의 중요성도 배울수 있었습니다.

##### ✅ 어려웠던 부분 & 해결 방법

1. node 서버에서 사용하는 fetch api 는 node 18 버전부터 기본 탑재된 기능
2. node 18미만은 fetch lib을 install 해서 사용해야 함 (npm install)
   -> 어. 나는 node 18 아니어도 fetch를 썻었는데?

   - 클라이언트에서 사용하는 fetch는 JS에서 지원하는 fetch 함수였고
   - node 환경에서 fetch 를 사용하기 위해서는 npm 으로 설치가 필요했습니다. (node 18 미만)

❗ [해결방안]

1. 클라우드 서버에서 node 버전 업그레이드 (우분투 16,18 에서 node18 설치는 추가적인 설정 필요)
2. nvm으로 node 버전을 낮추고, node-fetch 라이브러리 설치
   - nvm install 버전
   - nvm use 버전

❗ [막혔던 점]
node서버에서 (/weather 요청을 받아) 날씨 api를 불러오는 fetch()를 사용하는 함수를 실행하던 중 네트워크 탭에서 아래와 같이 노출

![image](https://user-images.githubusercontent.com/122027452/236087767-1f1d4ea8-d9ae-4291-b16f-2d8ceb250963.png)

![image](https://user-images.githubusercontent.com/122027452/236114775-4093b529-9274-439b-bd95-90b24bad7c41.png)

![image](https://user-images.githubusercontent.com/122027452/236114998-c8767ccf-27dd-4424-aa02-d09578f68906.png)

에러가 아닌, 단순히 공통헤더를 설정하는 부분이었고
요청을 보내고 저 상태에서 계속 pending 상태가 되어 위와 같이 표시되고 있었습니다.

CORS 문제인줄 알고 잘못된 방향으로 문제를 해결하는데 시간을 썻지만
그래도 CORS에 대해서 자세히 학습할 수 있어서 의미있는 경험이었습니다.

#### 😀 윤영인

##### ✅ 소감

git과 github에 대해 많이 배울 수 있었습니다. 팀프로젝트 할 때 issue, pull request 등을 사용하는 방법에 대해 알게되었고 branch 관리하는 방법에 대해 새롭게 알게되었습니다. 그리고 원활한 소통을 위한 적절한 컨벤션을 사용하는 것도 연습할 수 있었습니다. `<li>`를 동적으로 추가하여 이미지 부여하는 방법과 파비콘 추가하는 새로운 경험을 할 수 있어서 유익했습니다.

##### ✅ 어려웠던 부분 & 해결 방법

동기 비동기에 대한 개념이 아직 어려워서, 옷 추천을 위해 필요한 날씨 데이터를 받아오는 방법에 대해 많은 고민을 하게 되었습니다. 해결하기 위해서 async함수 안에서 제가 만든 함수를 호출하여 data를 받아오는데 성공 했고, 관련내용을 공부를 더 해야 한다고 느끼게 되었습니다.

#### 😀 김용민

##### ✅ 소감

팀원들 덕분에 카카오 맵 api도 사용해 보고, javascript로 JSON 데이터 다루는 것도 경험해 볼 수 있어서 감사했습니다

##### ✅ 어려웠던 부분 & 해결 방법

카카오맵 API를 적용하고 크롬으로 실행하면 잘 작동되다가 개발자 도구만 키면 아래와 같은 에러가 발생했습니다. 캐시를 삭제하여 해결은 했지만 왜 그런지 사실 아직 잘 모르겠어서, 캐시,HTTP,cors등 많이 공부해야할 것 같다고 느꼈습니다.

<center>
<img  width="300" src="https://user-images.githubusercontent.com/72537762/236085280-fb6b5b7d-abe1-4316-8f13-5fb6c7c4fd95.png"/>
</center>

⬇ 참고한 카카오 데브 Q&A 답변

```text
http preflight 요청에서 https로 redirect시키는 hsts preload가 발생한 것이 cors 오류의 원인으로 확인되었고, 해당 문제는 크롬의 strict-transport-security 헤더에 대한 처리 버그로 예상하고 있습니다.

현재 strict-transport-security 헤더를 포함하지 않도록 변경하여 오류가 재현되지 않는 것을 확인하였습니다.
캐시가 남아있는 경우라면 아직 cors 오류가 발생하고 있을 것으로 예상되고, 이 경우는 위 캐시 삭제 가이드를 참고해서 캐시를 삭제 부탁드립니다.

불편을 드려 죄송하고, 혹 계속 오류가 발생하신다면 공유 부탁드립니다.
```
