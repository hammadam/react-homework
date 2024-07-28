## [과제2] 아토믹 컴포넌트 구현

---

### 1. 피그마로 마켓컬리 푸터 영역 SNS 아이콘을 컴포넌트화 구현

[푸터 영역 SNS 아이콘 피그마 링크]

[푸터 영역 SNS 아이콘 피그마 링크]: https://www.figma.com/design/U54Js6oapGKdjqeapo4jck/%EB%A7%88%EC%BC%93%EC%BB%AC%EB%A6%AC-%ED%91%B8%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98?node-id=0-1&t=yNjbt2uSczUJZbmJ-1

### 2. SNS 아이콘 컴포넌트 생성 및 렌더링

```js
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

  // JSX
  return (
    <a className="SnsIcons" href="#" aria-label={typeMessage}>
      <img src={iconPath} alt={name} width={size} height={size} />
    </a>
  );
}

function FooterSnsIcons() {
  // JSX
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

> 🤔 환경구성하는 부분에서 시간이 상당히 오래 걸렸다. 아직 익숙하지 않은 듯.

> 🤔 과제 제출 시간이 다가와서 리드미 문서 작성할 시간이 부족하다. 제출 이후에 추가 수정할 예정..ㅠ
