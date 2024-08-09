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