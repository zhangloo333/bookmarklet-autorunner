(function () {
  function buildBtn() {
    btn = document.createElement("button");
    btn.innerHTML = "hide ch";
    btn.setAttribute("id", "lei-hide-btn");
    body = document.querySelector("body");
    body.appendChild(btn);
    btn.addEventListener("click", () => {
      console.log("cick");
      addStyleFn();
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
    btnCss = "#lei-hide-btn{position: fixed;top: 300px;left: 20px;width: 50px;height: 50px;}";
    style.appendChild(document.createTextNode(btnCss));
    return function () {
      css = "";

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

  addStyleFn = addStyle();
  buildBtn();
  buildStyleTag();
  addStyleFn();
})();