import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

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
