let codeEditor = ace.edit("js");
let codeEditorcss = ace.edit("css");
let codeEditorhtml = ace.edit("html");
let html = document.querySelector(".html");
let css = document.querySelector(".css");
let js = document.querySelector(".js");


let editorLib = {
  init() {
    codeEditorhtml.setTheme("ace/theme/monokai");
    codeEditorhtml.session.setMode("ace/mode/html");
    codeEditorhtml.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      cursorStyle: "smooth",
      showLineNumbers: true,
    });

    codeEditor.setTheme("ace/theme/monokai");
    codeEditor.session.setMode("ace/mode/javascript");
    codeEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      cursorStyle: "smooth",
      showLineNumbers: true,
    });
    codeEditorcss.setTheme("ace/theme/monokai");
    codeEditorcss.session.setMode("ace/mode/css");
    codeEditorcss.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      cursorStyle: "smooth",
      showLineNumbers: true,
    });
  },
};


editorLib.init();

codeEditorhtml.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  
</body>
</html>`);

codeEditorcss.setValue(`/*If you are facing problems for the background,
You can uncomment the next line.*/
/*body{background:white;}*/
`);


codeEditor.focus()

function run() {
  document.querySelector(".output").contentDocument.documentElement.innerHTML =
    codeEditorhtml.getValue() +
    "<style>" +
    codeEditorcss.getValue() +
    "</style>";
}

document.querySelector(".play").addEventListener("click", function () {
  document.querySelector(".output").contentWindow.console.clear()
  try {
    document.querySelector(".output").contentWindow.eval(codeEditor.getValue());
  } catch (e) {
    document
      .querySelector(".output")
      .contentWindow.console.error(e.name + ": " + e.message);
  }

  run()
});
codeEditor.setValue(`console.log("This is Console")
`)
document.querySelector(".play").click()