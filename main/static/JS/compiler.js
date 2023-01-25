Split(["#editor", "#iframe"]);
function update() {
  var idoc = document.getElementById("iframe").contentWindow.document;

  idoc.open();
  idoc.write(editor.getValue());
  idoc.close();
}

function setupEditor() {
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/tomorrow_night_blue");
  editor.getSession().setMode("ace/mode/html");
  editor.setAutoScrollEditorIntoView(true);
  editor.resize();
  editor.renderer.updateFull();
  editor.setOption("enableEmmet", true);
  editor.setValue(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>Hello Codenyx</p>
</body>
</html>`,
    1
  ); //1 = moves cursor to end

  editor.getSession().on("change", function () {
    update();
  });

  editor.focus();

  editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    cursorStyle: 'smooth_and_slim',
    fontSize: "16pt",
    enableLiveAutocompletion: true
  });
}

setupEditor();
update();

function ready() {}
///Надо потом подумать как красиво добавить кнопку сохранить
// function download(filename, text) {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);

//     element.style.display = 'none';
//     document.body.appendChild(element);

//     element.click();

//     document.body.removeChild(element);
// }
// function save() {
//     download('file.html', editor.getValue());
// }