(function () {
    document.addEventListener("DOMContentLoaded", function (event) {
      var list = document.querySelectorAll(".make-snippet");
  
      [].forEach.call(list, function (el) {
        var snippet = el.innerHTML.replace(/</g, "&lt;");
        snippet = snippet.replace(/ /g, "&nbsp;");
        var code =
          '<pre class="language-markup"><code>' + snippet + "</pre></code>";
        el.insertAdjacentHTML("afterend", code);
      });
      if (window.Prism) {
        Prism.highlightAll(false);
      }
    });
  })();
  