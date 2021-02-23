let codeEditor = ace.edit("js");
let js = document.querySelector(".js");
let styles = `<style>.error{color:black;background:#ff8a69;}.warn{color:black;background:#feff7a;}.log{color:black;background:#7aff90;}
.log,.warn,.error,.info{border-radius:20px;font-size:12px;text-align:center;}.info{color:black;background:#82f0ff;}</style>`;

let editorLib = {
  init() {
    codeEditor.setTheme("ace/theme/monokai");
    codeEditor.session.setMode("ace/mode/javascript");
    codeEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      cursorStyle: "smooth",
      showLineNumbers: true,
    });
  },
};

editorLib.init();


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

document.querySelector(".console").contentWindow.console = {
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
    document.querySelector(".console").contentDocument.body.innerText=""
  }
};


document.querySelector(".console").contentWindow.alert = function (text) {
  document.querySelector(".alert").style.opacity = "1";
  document.querySelector(".alertext").innerHTML = text;
  document.querySelector(".ok").addEventListener("click", function () {
    document.querySelector(".alert").style.opacity = "0";
  });
};


document.querySelector(".play").addEventListener("click", function () {
  document.querySelector(".console").contentWindow.console.clear()
    try {
      document.querySelector(".console").contentWindow.eval(codeEditor.getValue());
    } catch (e) {
      document
        .querySelector(".console")
        .contentWindow.console.error(e.name + ": " + e.message);
    }
  
});
codeEditor.setValue(`console.log("This is Console")`)
document.querySelector(".play").click()