## [과제2] 아토믹 컴포넌트 구현

---

### 1. 피그마 작업

- 피그마 툴을 활용한 마켓컬리 푸터 영역 SNS 아이콘 컴포넌트 작업
- type을 선택할 때마다 블로그, 인스타그램, 페이스북, 포스트, 유튜브 아이콘으 변경
- [푸터 영역 SNS 아이콘 피그마 링크]

[푸터 영역 SNS 아이콘 피그마 링크]: https://www.figma.com/design/U54Js6oapGKdjqeapo4jck/%EB%A7%88%EC%BC%93%EC%BB%AC%EB%A6%AC-%ED%91%B8%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98?node-id=0-1&t=yNjbt2uSczUJZbmJ-1

![initial](https://github.com/hammadam/react-homework/blob/main/00-readme-Image/02-01-figma.png?raw=true)

### 2. 개발 환경 세팅

- 자바스크립트 환경에서 구현됨을 알리는 `<noscript>` 추가
- `jsx`로 작업할 예정 + jsx를 컴파일 해줄 도구로 `Babel` 선정
- 컴포넌트를 뿌려줄(?) `<div id="react-app"></div>` 작성

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
        <li className="footer__sns-item">
          <SnsIcons name="네이버 블로그" type="naver-blog" />
        </li>
        <li className="footer__sns-item">
          <SnsIcons name="페이스북" type="facebook" />
        </li>
        <li className="footer__sns-item">
          <SnsIcons name="인스타그램" type="instagram" />
        </li>
        <li className="footer__sns-item">
          <SnsIcons name="네이버 포스트" type="naver-post" />
        </li>
        <li className="footer__sns-item">
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
![initial](https://github.com/hammadam/react-homework/blob/main/00-readme-Image/02-02-htmlcheck.png?raw=true)

> 🤔 환경구성하는 부분에서 시간이 상당히 오래 걸렸다. 아직 익숙하지 않은 듯.
