## [과제3] 컴포넌트 속성 검사 및 테스트

바닐라 프로젝트 UI 결과물 중 일부를 선별한 후, 리액트를 사용해 컴포넌트로 구현.
컴포넌트 구현 과정에서 속성 검사 및 테스트 코드를 작성
속성 검사는 prop-types, TypeScript 중 선택

---

### 1. 작업방향 선정

- 아토믹 컴포넌트 구현 과제에서 구현했던 마켓컬리 푸터 영역 SNS 아이콘 컴포넌트에 속성 검사 추가 작성
- 속성검사는 prop-types를 활용하기로 함


### 2. 개발 환경 세팅

- jsx를 컴파일 해줄 도구로 연결했던 `Babel`은 지우고
- `Vite` 환경으로 구성함
- `React`, `Node` 타입 선언 패키지 설치
- `@vitejs/plugin-react` 설치
- `ESLint` 설치 및 환경구성
- `@` 기호를 절대경로로 사용 설정
- React의 `<StrictMode>` 로 작업

### 3. 컴포넌트 쪼개기 및 속성 검사

**main.jsx**

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FooterSnsIcons from '@/components/footer/FooterSnsIcons';
import "@/styles/main.css"


const domNode = document.getElementById("react-app");
createRoot(domNode).render(
  <StrictMode>
    <FooterSnsIcons />
  </StrictMode>
);
```




**FooterSnsIcons.jsx**

```jsx
import SnsIcons from "./SnsIcons";

function FooterSnsIcons() {
  // JSX
  return (
    <div className="footer__sns-list">
      <ul className="FooterSnsIcons">
        <li className="footer__sns-item footer__sns-item--blog">
          <SnsIcons name="네이버 블로그" type="naver-blog" size={30} />
        </li>
        <li className="footer__sns-item footer__sns-item--facebook">
          <SnsIcons name="페이스북" type="facebook" size={30} />
        </li>
        <li className="footer__sns-item footer__sns-item--instagram">
          <SnsIcons name="인스타그램" type="instagram" size={30} />
        </li>
        <li className="footer__sns-item footer__sns-item--post">
          <SnsIcons name="네이버 포스트" type="naver-post" size={30} />
        </li>
        <li className="footer__sns-item footer__sns-item--youtube">
          <SnsIcons name="유튜브" type="youtube" size={30} />
        </li>
      </ul>
    </div>
  );
}

export default FooterSnsIcons;
```



**SnsIcons.jsx**

```jsx
import { number, oneOf } from 'prop-types';

SnsIcons.propTypes={
  type: oneOf(['naver-blog', 'facebook', 'instagram', 'naver-post', 'youtube']),
  size: number.isRequired,
}

function SnsIcons({ type = "facebook", size = 30 }) {
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

  // JSX
  return (
    <a className="SnsIcons" href="#" aria-label={typeMessage}>
      <img src={iconPath} alt={name} width={size} height={size} />
    </a>
  );
}

export default SnsIcons;

```




### 4. 구현된 결과 확인

![initial](https://github.com/hammadam/react-homework/blob/main/00-readme-Image/02-last.png?raw=true)


> 🤔 과제 제출시간을 못 지켜서 제출을 못했다가 뒤늦게 작업을 마저해서 업로드해봄. 

> 😇 과제 당시에 "Uncaught ReferenceError : oneOf is not defined"라는 에러 메시지 때문에 도통 풀리지 않아서 과제를 포기했었는데, 다시 차근차근 보니 뒤늦게서야 "at SnsIcons.jsx" 라는게 보이지 않는가.. 그제서야 어디서 문제가 생겼는지 눈에 들어오기 시작했고 결국 찾아낼 수 있었다.
