function outputfunc(text, cls) {
  if (typeof text == "string") {
    document.querySelector(".console").contentDocument.body.innerHTML = `${
      document.querySelector(".console").contentDocument.body.innerHTML
    }<p class="${cls}">${text}</p>${styles}`;
  } else if (typeof text == "number") {
    document.querySelector(".console").contentDocument.body.innerHTML = "";
    document.querySelector(".console").contentDocument.body.innerHTML = `${
      document.querySelector(".console").contentDocument.body.innerHTML
    }<p class="${cls}">${text}</p>${styles}`;
  } else if (typeof text == "object" && Array.isArray(text)) {
    document.querySelector(".console").contentDocument.body.innerHTML = "";
    document.querySelector(".console").contentDocument.body.innerHTML = `${
      document.querySelector(".console").contentDocument.body.innerHTML
    }<p class="${cls}">Array : [${text}]</p>${styles}`;
  } else if (typeof text == "object" && !Array.isArray(text)) {
    document.querySelector(".console").contentDocument.body.innerHTML = "";
    for (const [key, value] of Object.entries(text)) {
      document.querySelector(".console").contentDocument.body.innerHTML = `${
        document.querySelector(".console").contentDocument.body.innerHTML
      }<p class="${cls}">Object : {${key}:${value}}</p>${styles}`;
    }
  }
}


let styles = `<style>.error{color:black;background:#ff8a69;}.warn{color:black;background:#feff7a;}.log{color:black;background:#7aff90;}
.log,.warn,.error,.info{border-radius:15px;font-size:12px;text-align:center;}.info{color:black;background:#82f0ff;}</style>`;

document.querySelector(".output").contentWindow.console = {
  log(text) {
    outputfunc(text, "log");
  },
  warn(text) {
    outputfunc(text, "warn");
  },
  info(text) {
    outputfunc(text, "info");
  },
  error(text) {
    outputfunc(text, "error");
  },
  clear() {
    document.querySelector(".console").contentDocument.body.innerText = "";
  },
};

document.querySelector(".output").contentWindow.alert = function (text) {
  document.querySelector(".alert").style.opacity = "0.9";
  document.querySelector(".alertext").innerHTML = text;
  document.querySelector(".ok").addEventListener("click", function () {
    document.querySelector(".alert").style.opacity = "0";
  });
};

let h = document.querySelector(".h");
let c = document.querySelector(".c");
let j = document.querySelector(".j");

h.addEventListener("click", function () {
  document.querySelector(".html").style.zIndex = "1";
  document.querySelector(".css").style.zIndex = "0";
  document.querySelector(".js").style.zIndex = "0";
  h.style.borderBottom = "solid white 2px"
  c.style.borderBottom = "solid white 0px"
  j.style.borderBottom="solid white 0px"
});
c.addEventListener("click", function () {

  document.querySelector(".html").style.zIndex = "0"
  document.querySelector(".css").style.zIndex = "1"
  document.querySelector(".js").style.zIndex = "0"
  h.style.borderBottom="solid white 0px"
  c.style.borderBottom = "solid white 2px"
  j.style.borderBottom="solid white 0px"
});
j.addEventListener("click", function () {

  document.querySelector(".html").style.zIndex = "0"
  document.querySelector(".css").style.zIndex = "0"
  document.querySelector(".js").style.zIndex = "1"
  h.style.borderBottom = "solid white 0px"
  c.style.borderBottom="solid white 0px"
  j.style.borderBottom="solid white 2px"
});

