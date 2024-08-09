## [과제1] 디자인 → 개발 핸드오프 실습

---

### 1. 마크업 설계

- section 내부에 heading 요소 `<h2>` 제공하되 `sr-only` 클래스 부여
- 동일한 구조가 반복되는 목록의 형태 : `<ul><li></li></ul>`의 구조로 마크업
- 마우스 클릭 및 키보드로 접근 가능하도록 `<a>` 태그로 감싸기
- 왼쪽 이미지 `<img>`, 오른쪽 텍스트`<span>`으로 배치

```
    <section>
      <h2 class="sr-only">Architecture List</h2>
      <ul class="menu-list">
        <li class="menu-item">
          <a href="#">
            <img
              src="./assets/Architecture-01.jpg"
              alt=""
            />
            <span>History of Architecture</span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#">
            <img
              src="./assets/Architecture-02.jpg"
              alt=""
            />
            <span>Building design</span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#">
            <img
              src="./assets/Architecture-03.jpg"
              alt=""
            />
            <span>Graphics</span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#">
            <img
              src="./assets/Architecture-04.jpg"
              alt=""
            />
            <span>Climatology</span>
          </a>
        </li>
      </ul>
    </section>
```

### 2. 스타일 부여

- body에 배경색(#1F1F1F)과 font-family 정의
- `sr-only` 클래스를 위한 스타일 정의
- `ul`에 `display:flex` 선언하고, 자식인 `li`는 `column` 방향으로 정렬, 각 `li`들의 갭은 `2px`,
- 디바이스가 줄어들 경우를 대비해 `<ul>`의 최소 너비로 `320px` 부여
- `li > a`에 `display:flex` 선언하고, `a`의 하위에 있는 `img` 와 `span` 이 `row` 방향 및 가운데 정렬되도록 `align-items: center` 와 갭을 `20px`

```
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

body {
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  background: #1F1F1F;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  border-width: 0;
}

.menu-list {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: 2px;
  min-width: 320px;

  a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 20px;
    padding: 12px;
    text-decoration: none;
    background: #141415;
  }

  span {
    font-size: 20px;
    font-weight: 400;
    line-height: 120%;
    color: #fff;
  }
}
```

> 🤔 키보드로 접근 가능한 구조로 만들기 위해 메뉴 목록이라고 상상(?)하고, a 태그로 감쌌는데 이게 과제 출제 의도에 맞게 접근한건지 조금 헷갈림

> 🤔 처음에는 a 태그에 aria-lable 속성을 부여했다가 a > span 요소에 대체 텍스트가 있는데 굳이 속성을 줄 필요가 있을까 싶어서 스크린리더 설치해서 들어보고 aria-lable은 삭제함..
