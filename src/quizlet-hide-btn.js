(function () {
  function buildBtn() {
    btn = document.createElement("button");
    btn.innerHTML = "hide ch";
    btn.setAttribute("id", "lei-hide-btn");
    body = document.querySelector("body");
    body.appendChild(btn);
    btn.addEventListener("click", () => {
      addStyleFn();
    });
  }

  function buildEnBlackBtn() {
    btn = document.createElement("button");
    btn.innerHTML = "hide EN";
    btn.setAttribute("id", "lei-hide-btn__en");
    body = document.querySelector("body");
    body.appendChild(btn);
    btn.addEventListener("click", () => {
      console.log("click");
      addStyleFnEn();
    });
  }

  function buildStyleTag() {
    style = document.createElement("style");
    style.type = "text/css";
    head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(style);
  }

  function addStyle() {
    let counter = 0;
    buildStyleTag();
    const btnCss =
      "#lei-hide-btn{position: fixed;top: 300px;left: 20px;width: 50px;height: 50px;}";
    style.appendChild(document.createTextNode(btnCss));
    return function () {
      let css = "";
      if (counter % 2) {
        css = ".SetPageTerm-definitionText{display:none}";
      } else {
        css = ".SetPageTerm-definitionText{display:block}";
      }
      console.log("counter", counter);
      style.appendChild(document.createTextNode(css));
      counter++;
    };
  }

  function addStyleEn() {
    let counter = 0;
    const btnCss =
      "#lei-hide-btn__en{position: fixed;top: 250px;left: 20px;width: 50px;height: 50px;}";
    style.appendChild(document.createTextNode(btnCss));
    return function () {
      let css = "";
      if (counter % 2) {
        css = ".SetPageTerm-wordText{background:black}";
      } else {
        css = ".SetPageTerm-wordText{background:transparent}";
      }
      console.log("counter", counter);
      style.appendChild(document.createTextNode(css));
      counter++;
    };
  }

  addStyleFn = addStyle();
  addStyleFnEn = addStyleEn();

  buildBtn();
  buildEnBlackBtn();
  buildStyleTag();
  addStyleFn();
  addStyleFnEn();
})();
