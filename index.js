const s = ele => document.querySelector(ele).style;

/* content 요소 만들기 */
const converter = document.createElement("div");
const content = document.createTextNode("Googlify");
converter.appendChild(content);
const current = document.querySelector("#topSearchWrap");
current.appendChild(converter);

converter.style.position = "absolute";
converter.style.top = "29px";
converter.style.right = "100px";
converter.style.cursor = "pointer";
converter.style.fontWeight = "bold";
converter.style.fontSize = "15px";
converter.style.padding = "5px";

converter.addEventListener("mouseover", () => converter.style.backgroundColor = "lightgray");
converter.addEventListener("mouseout", () => converter.style.backgroundColor = "white");
converter.style.color = "rgb(23, 183, 94)";

/* 로컬스토리지 값 가져오기 */
const googlifyValue = () => localStorage.getItem("googlify");
// true = 현재 원래 메인 화면 나와야함
// false = googlify 된 화면 나와야함

/* 로컬스토리지 값 없으면 만들기 */
if (googlifyValue() === null) {
  localStorage.setItem("googlify", "true");
}

/* 로컬스토리지 값에 따른 초기값 설정 */
if (googlifyValue() === "false") {
  converter.textContent = "undo";
  s("#container").display = "none";
  s("#footer").display = "none";
  s("#u_skip").display = "none";
	s("#wrap").marginTop = "25vh";
	s("html").backgroundColor = "white";
	s("#wrap").backgroundColor = "white";
	s("#topSearchWrap").backgroundColor = "white";
	s("#header").width = "866px";
	s("#wrap").minWidth = "900px";

  s("#container").opacity = "0";
  s("#footer").opacity = "0";
}
if (googlifyValue() === "true") {
  s("#container").opacity = "1";
  s("#footer").opacity = "1";
  s("#wrap").marginTop = "0vh";
  s("#header").width = "1280px";
}

/* converter 리스너 */
converter.addEventListener("click", () => {
  s("#container").transition = "opacity .5s";
  s("#footer").transition = "opacity .5s";
  s("#wrap").transition = "margin-top .5s";
  s("#header").transition = "width .5s";

	if (googlifyValue() === "false") {
    document.body.style.overflow = 'visible';

    converter.textContent = "Googlify";
    s("#container").display = "block";
    s("#footer").display = "block";

    setTimeout(() => {
      s("#container").opacity = "1";
      s("#footer").opacity = "1";
    }, 0);
    s("#wrap").marginTop = "0vh";
    s("html").backgroundColor = "";
    s("#wrap").backgroundColor = "";
    s("#topSearchWrap").backgroundColor = "";
    s("#header").width = "1280px";
    s("#wrap").minWidth = "1340px";

    setTimeout(() => {
      s("#wrap").transition = "all 0s";
      s("#u_skip").display = "block";
    }, 500);

    localStorage.setItem("googlify", "true");
    return;
	}

  if (googlifyValue() === "true") {
    document.body.style.overflow = 'hidden';

    converter.textContent = "undo";
    s("#container").opacity = "0";
    s("#footer").opacity = "0";
    s("#u_skip").display = "none";
    s("#wrap").marginTop = "25vh";
    s("html").backgroundColor = "white";
    s("#wrap").backgroundColor = "white";
    s("#topSearchWrap").backgroundColor = "white";
    s("#header").width = "866px";
    s("#wrap").minWidth = "900px";
  
    setTimeout(() => {
      s("#container").display = "none";
      s("#footer").display = "none";
      s("#wrap").transition = "all 0s";
    }, 500);
  
    localStorage.setItem("googlify", "false");
  }
});