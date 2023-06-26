# 프로젝트명
신세계 I&C 주관의 스파로스 아카데미에서 진행한 스타벅스 온라인 스토어 클론 코딩 프로젝트이며 웹앱 형태로 구현했습니다.
> ※ 테스트 시 iphone 12 로 진행하시면 훨씬 예쁜 화면을 보실 수 있습니다!


## 클론코딩 주제(스타벅스 온라인 스토어)
|경로|주제|
|:-:|:-:|
|스타벅스 모바일 어플리케이션에서<br>order탭에 있는 쇼핑하러 가기 버튼으로 접속|스타벅스 온라인 스토어(모바일 웹)을<br>구현하는 것이 목표|
|<img src = "https://user-images.githubusercontent.com/90381800/228540848-46946a3f-5507-4e2f-a11f-bf9510330504.png" width="200px" height="500px">|<img src = "https://user-images.githubusercontent.com/90381800/228541721-2c4df1d0-b1cd-47bc-90f9-d6bcc1575a67.png" width="200px" height="500px">|


## 기능

|메인|검색|전체상품|
|:-:|:-:|:-:|
|![메인](https://user-images.githubusercontent.com/90381800/230259182-1ebc2ebd-1f73-4098-a91e-7191a5c761dd.gif)|![검색](https://user-images.githubusercontent.com/90381800/230259196-ed1c184c-22b2-4651-8be3-7fad85df4e02.gif)|![전체상품](https://user-images.githubusercontent.com/90381800/230259207-c4ebd1b2-57eb-4454-8c21-1803fcdaed7a.gif)|
|장바구니|로그인|
|![장바구니](https://user-images.githubusercontent.com/90381800/230259251-f9289e83-f3c5-42c9-8469-c0f7cd79ab14.gif)|![로그인](https://user-images.githubusercontent.com/90381800/230259259-62c5a510-7396-4d83-b75c-2e429b79ff76.gif)|


## 👇 디렉토리 구조
```
├─components
│  ├─layouts
│  ├─pages
│  │  ├─cart
│  │  ├─filter
│  │  ├─search
│  │  └─signup
│  │      └─ui
│  ├─sections
│  └─ui
├─data
├─pages
│  ├─api
│  └─product
├─public
│  └─assets
│      ├─css
│      │  ├─common
│      │  ├─layouts
│      │  └─pages
│      └─images
│          ├─banner
│          ├─icons
│          ├─logo
│          └─products
├─state
├─styles
└─types
    └─UserRequest
```


## 페이지 접근 권한
|권한|이름|
|:-:|:-:|
|USER|로그인한 유저|
|GUEST|게스트|


## 기여 방법

1. (<https://github.com/yourname/yourproject/fork>)을 포크합니다.
2. (`git checkout -b feature/fooBar`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요. 
5. 풀리퀘스트를 보내주세요.

## Tech stack
FrontEnt  
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
<img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" />
<img src="https://img.shields.io/badge/Recoil-5A29E4?style=flat&logo=Recoil&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-000000?style=flat&logo=Axios&logoColor=white" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />


<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki

## ENV
* NodeJs
* NextJs

## 핵심 기능

1. 로그인/회원가입
2. 장바구니
3. 배송지 관리
4. 상품 추천
5. 검색
