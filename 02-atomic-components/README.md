## [과제2] 아토믹 컴포넌트 구현

바닐라 프로젝트 결과물 중 일부를, 리액트를 사용해 아토믹 컴포넌트로 구현하는 과제!

---

### 1. 피그마 작업

- 우리조(2조 아장아장화2팅) 작업물 마켓컬리 프로젝트에서 내가 맡았던 푸터 영역의 sns 아이콘 부분을 작업해보기로 함
- 피그마 툴을 활용한 마켓컬리 푸터 영역 SNS 아이콘 컴포넌트 작업
- status(상태) 보다는 type(타입,유형)을 선택할 때마다 블로그, 인스타그램, 페이스북, 포스트, 유튜브 아이콘으로 변경되게 작업
- [푸터 영역 SNS 아이콘 피그마 링크]

[푸터 영역 SNS 아이콘 피그마 링크]: https://www.figma.com/design/U54Js6oapGKdjqeapo4jck/%EB%A7%88%EC%BC%93%EC%BB%AC%EB%A6%AC-%ED%91%B8%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98?node-id=0-1&t=yNjbt2uSczUJZbmJ-1

![initial](https://github.com/hammadam/react-homework/blob/main/00-readme-Image/02-01-figma.png?raw=true)

### 2. 개발 환경 세팅

- pnpm을 활용한 live-server 설치 및 server.mjs 로 환경설정
- index.html DOCTYPE 선언 및 마크업 작성
- 자바스크립트 환경에서 구현됨을 알리는 `<noscript>` 추가
- `jsx`로 작업할 예정
- jsx를 컴파일 해줄 도구로 `Babel` 연결
- 컴포넌트를 뿌려줄(?) `<div id="react-app"></div>` 작성
- 파비콘 이미지 및 sns 아이콘은 동적자산으로 판단해서, public 폴더에 모아둠

**index.html**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>아토믹 컴포넌트 구현 실습</title>
    <link rel="shortcut icon" href="/public/favicon.ico" type="image/x-icon" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="stylesheet" href="src/styles/main.css" />

    <!-- @babel/standalone -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/jsx" data-type="module" src="src/main.js"></script>
  </head>

  <body>
    <noscript>이 앱을 사용하려면 JavaScript 활성화가 필요합니다.</noscript>
    <div id="react-app"></div>
  </body>
</html>
```

### 3. SNS 아이콘 컴포넌트 생성 및 렌더링

**main.js**

```jsx
function SnsIcons({ type = "naver-blog", size = 30 }) {
  let iconPath = "";
  let typeMessage = "";

  switch (type) {
    default:
    case "naver-blog":
      iconPath = "/icons/icon-naver-blog.svg";
      typeMessage = "네이버 블로그 바로가기";
      break;
    case "facebook":
      iconPath = "/icons/icon-facebook.svg";
      typeMessage = "페이스북 바로가기";
      break;
    case "instagram":
      iconPath = "/icons/icon-instagram.svg";
      typeMessage = "인스타그램 바로가기";
      break;
    case "naver-post":
      iconPath = "/icons/icon-naver-post.svg";
      typeMessage = "네이버 포스트 바로가기";
      break;
    case "youtube":
      iconPath = "/icons/icon-youtube.svg";
      typeMessage = "유튜브 바로가기";
      break;
  }

  return (
    <a className="SnsIcons" href="#" aria-label={typeMessage}>
      <img src={iconPath} alt={name} width={size} height={size} />
    </a>
  );
}

function FooterSnsIcons() {
  return (
    <div class="footer__sns-list">
      <ul className="FooterSnsIcons">
        <li className="footer__sns-item footer__sns-item--blog">
          <SnsIcons name="네이버 블로그" type="naver-blog" />
        </li>
        <li className="footer__sns-item footer__sns-item--facebook">
          <SnsIcons name="페이스북" type="facebook" />
        </li>
        <li className="footer__sns-item footer__sns-item--instagram">
          <SnsIcons name="인스타그램" type="instagram" />
        </li>
        <li className="footer__sns-item footer__sns-item--post">
          <SnsIcons name="네이버 포스트" type="naver-post" />
        </li>
        <li className="footer__sns-item footer__sns-item--youtube">
          <SnsIcons name="유튜브" type="youtube" />
        </li>
      </ul>
    </div>
  );
}

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(<FooterSnsIcons />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
```

### 4. 구현된 결과 확인 및 웹표준 검사 체크

![initial](https://github.com/hammadam/react-homework/blob/main/00-readme-Image/02-last.png?raw=true)
![initial](https://github.com/hammadam/react-homework/blob/main/00-readme-Image/02-03-browser1.png?raw=true)
![initial](https://github.com/hammadam/react-homework/blob/main/00-readme-Image/02-02-htmlcheck.png?raw=true)

> 🤔 환경구성하는 부분에서 시간이 상당히 오래 걸렸다. 저번 과제는 그냥 학습 저장소에 같이 올렸었는데 이번에는 과제 저장소를 따로 만들어서 깃 레포를 추가했고, 라이브서버도 pnpm으로 설치해서 작업했다. 아직 익숙하지 않은 듯.

> 😭 피그마 인터페이스가 달라져서 한참을 고생했다. 이 때문에 수업시간에 피그마 실습을 못 따라가서 당시에 엄청 속상했다. 과제를 하면서 달라진 인터페이스에 익숙해지는 시간을 조금 가졌다. 더 친해지자.. 피그마야...

> 😎 크롬의 확장프로그램에서 스크린리더를 설치하여 탭 포커스를 이동할 때마다 들려주는 소리를 직접 들어보았다. 마크업 작업시 불편하지 않게 이용할 수 있도록 신경쓰면서 작업했는데, 이 정도면 괜찮지 않을까 하는.. 생각이 든다.

> 🧐 바닐라 프로젝트 때 BEM 방식에 맞지 않게 네이밍을 했다는 피드백을 받았는데, `Block__Element--Modifier` 에서 Modifier 가 이해가 잘 안 되었는데 이번에는 챗지피티한테 물어가면서 이름을 지었다. 이제야 조금 이해된 것 같긴 하다.

> 🐣 사실 뭐 하는 과제인지도 파악 못하고 일단 피그마부터 냅다 작업해보았는데, 수업시간에 했던 내용을 참고로 따라하다보니 이제야 무슨 과제였는지 조금 알 것 같다. 파이널 프로젝트에서는 서버에 데이터 올리고, 그 데이터를 갖고 와서 컴포넌트화 하고.. 그러다보면 지금보다 조금 더 성장해 있겠지. 느려도 홧팅!! (응애)
