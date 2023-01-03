// responsive padding

const body = document.body;

switch (true) {
  case window.innerWidth > 1400:
    body.style.paddingLeft = "400px";
    body.style.paddingRight = "400px";
    break;
  case window.innerWidth <= 1400 && window.innerWidth > 992:
    body.style.paddingLeft = "300px";
    body.style.paddingRight = "300px";
    break;
  case window.innerWidth <= 992 && window.innerWidth > 768:
    body.style.paddingLeft = "200px";
    body.style.paddingRight = "200px";
    break;
  case window.innerWidth <= 768 && window.innerWidth > 576:
    body.style.paddingLeft = "100px";
    body.style.paddingRight = "100px";
    break;
  default:
    body.style.paddingLeft = "";
    body.style.paddingRight = "";
    break;
}

// Educacion tab

const edTabs = Array.from(document.getElementsByName("collapse-datos-ed"));

let isCollapsedEd = [false, false, false];
let defaultAttributesEd = ["", "", ""];

edTabs.forEach((edTab, i) => {
  defaultAttributesEd[i] = edTab.getAttribute("class");

  edTab.addEventListener("click", () => {
    !isCollapsedEd[i]
      ? // sobreescribe la clase de bootstrap
        edTab.setAttribute("class", defaultAttributesEd[i] + " border-bottom-0")
      : setTimeout(() => {
          edTab.setAttribute("class", defaultAttributesEd[i]);
        }, "250");

    isCollapsedEd[i] = !isCollapsedEd[i];
  });
});

// Experiencia tab

const exTabs = Array.from(document.getElementsByName("collapse-datos-ex"));

let isCollapsedEx = [false, false, false];
let defaultAttributesEx = ["", "", ""];

exTabs.forEach((exTab, i) => {
  defaultAttributesEx[i] = exTab.getAttribute("class");

  exTab.addEventListener("click", () => {
    !isCollapsedEx[i]
      ? // sobreescribe la clase de bootstrap
        exTab.setAttribute("class", defaultAttributesEx[i] + " border-bottom-0")
      : setTimeout(() => {
          exTab.setAttribute("class", defaultAttributesEx[i]);
        }, "250");

    isCollapsedEx[i] = !isCollapsedEx[i];
  });
});
