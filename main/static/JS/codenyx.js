// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
  
  //backspce bug fix START
        if (inputBox.value.length == 0) {
          suggBox.textContent = '';
        }

   //backspace bug fix END
  
  let userData = (e.target.value).trim(); //fixed this too (with trim), so suggBox doesn't appear when only spacebar
  let emptyArr = [];

  if (userData) {
    icon.onclick = () => {
      webLink = `https://www.codenyx.am/${userData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    }
    emptyArr = superArr.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });


    console.log(emptyArr)
    emptyArr = emptyArr.map((data) => {
      // passing return data inside li tag
      console.log(data)

      if (html.indexOf(data) != -1 && css.indexOf(data) != -1) {
        return data = `<li>${data} <img   src="https://cdn-icons-png.flaticon.com/512/732/732190.png" class="qwerty"> <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" class="qwerty"></li>`;
      }

      else if (html.indexOf(data) != -1) {
        return data = `<li>${data} <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" class="qwerty"></li>`;
      }

      else if (css.indexOf(data) != -1) {
        return data = `<li>${data} <img   src="https://cdn-icons-png.flaticon.com/512/732/732190.png" class="qwerty"></li>`;
      }



    });
    searchWrapper.classList.add("active"); //show autocomplete box
    showhtml(emptyArr);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }

  } else {
    searchWrapper.classList.remove("active"); //hide autocomplete box

  }
}

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    webLink = `https://www.codenyx.am/${selectData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  }
  searchWrapper.classList.remove("active");
}

function showhtml(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<i>${userValue}</li>`;
  } else {
    listData = list.join('');

  }
  suggBox.innerHTML = listData;
}

let html = [
  "doctype",
  "comment",
  "address",
  "article",
  "audio",
  "aside",
  "area",
  "abbr",
  "a",
  "blockquote",
  "button",
  "body",
  "base",
  "bdi",
  "bdo",
  "br",
  "b",
  "colgroup",
  "caption",
  "canvas",
  "code",
  "cite",
  "col",
  "datalist",
  "details",
  "dialog",
  "data",
  "div",
  "del",
  "dfn",
  "dd",
  "dt",
  "dl",
  "figcaption",
  "fieldset",
  "embed",
  "footer",
  "figure",
  "form",
  "em",
  "h1-h6",
  "header",
  "html",
  "head",
  "hr",
  "iframe",
  "input",
  "img",
  "ins",
  "i",
  "legend",
  "label",
  "link",
  "kbd",
  "li",
  "meter",
  "meta",
  "mark",
  "mail",
  "map",
  "optgroup",
  "noscript",
  "output",
  "object",
  "option",
  "nav",
  "ol",
  "progress",
  "picture",
  "param",
  "pre",
  "p",
  "ruby",
  "rp",
  "rt",
  "q",
  "summary",
  "section",
  "source",
  "strong",
  "select",
  "script",
  "style",
  "samp",
  "span",
  "small",
  "sup",
  "svg",
  "sub",
  "s",
  "template",
  "textarea",
  "thead",
  "tbody",
  "tfoot",
  "track",
  "table",
  "title",
  "time",
  "tr",
  "th",
  "td",
  "video",
  "wbr",
  "var",
  "ul",
  "u",
];
let css = [
  "align-content",
  "align-items",
  "align-self",
  "all",
  "animation",
  "animation-name",
  "animation-delay",
  "animation-duration",
  "animation-direction",
  "animation-fill-mode",
  "animation-play-state",
  "animation-iteration-count",
  "animation-timing-function",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-repeat",
  "background-size",
  "border",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-?image-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "box-decoration-break",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "backface-visibility",
  "bottom",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "counter-increment",
  "counter-reset",
  "caption-side",
  "caret-color",
  "@charset",
  "content",
  "cursor",
  "color",
  "clear",
  "clip",
  "empty-cells",
  "direction",
  "display",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "font",
  "@font-face",
  "font-family",
  "font-feature-settings",
  "@font-feature-values",
  "font-language-override",
  "font-kerning",
  "font-size",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-weight",
  "filter",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-gap",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-gap",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "gap",
  "hanging-punctuation",
  "height",
  "hyphens",
  "image-rendering",
  "@import",
  "isolation",
  "justify-content",
  "@keyframes",
  "line-break",
  "line-height",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "letter-spacing",
  "left",
  "margin",
  "margin-bottom",
  "margin-left",
  "margin-right",
  "margin-top",
  "mask",
  "mask-image",
  "mask-clip",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "max-height",
  "max-width",
  "min-height",
  "min-width",
  "mix-blend-mode",
  "@media",
  "outlinev",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "object-fit",
  "object-position",
  "orphans",
  "opacity",
  "order",
  "padding",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-top",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "perspective",
  "perspective-origin",
  "pointer-events",
  "position",
  "quotes",
  "resize",
  "right",
  "row-gap",
  "scroll-behavior",
  "text-align",
  "text-align-last",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-shadow",
  "text-transform",
  "text-underline-position",
  "transform",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "tab-size",
  "table-layout",
  "top",
  "unicode-bidi",
  "user-select",
  "vertical-align",
  "visibility",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "white-space",
  "widows",
  "width",
  "z-index",
];

let superArr = html.concat(css);
superArr = [...new Set(superArr)];

$("input[type=range]").change(function () {
  $(".firstBlock , .what").css("border-radius", $(this).val() + "px");
});
$("input[type=range]").change(function () {
  $(".border-top-left-radius1 , .border-top-left-radius").css("border-top-left-radius", $(this).val() + "px");
});
$("input[type=range]").change(function () {
  $(".border-top-right-radius1 , .border-top-right-radius").css("border-top-right-radius", $(this).val() + "px");
});
$("input[type=range]").change(function () {
  $(".border-bottom-right-radius1 , .border-bottom-right-radius").css("border-bottom-right-radius", $(this).val() + "px");
});
$("input[type=range]").change(function () {
  $(".border-bottom-left-radius1 , .border-bottom-left-radius").css("border-bottom-left-radius", $(this).val() + "px");
});
function printValue(sliderID, spanbox) {
  var x = document.getElementById(spanbox);
  var y = document.getElementById(sliderID);
  x.value = y.value;
  document.getElementById('rangeValue1').value = document.getElementById('rangeValue1').value + "px;"
}
function slideValue(sliderID, spanbox) {
  var x = document.getElementById(spanbox);
  var y = document.getElementById(sliderID);
  y.value = parseInt(x.value);
}
window.onload = function () {
  printValue("slide1", "rangeValue1");
};

var title = ["Кот учел, что вы ушли🙀", "Вернитесь скорее пока...", "Кот не обиделся😽😽😽"];
i = 0;
function sec() {
  i = (i + 1) % title.length;
  jQuery(document).prop("title", title[i])
}
window.onload = function () {
  var a = document.title;
  jQuery(document).bind("visibilitychange", function () {
    document.hidden ? secinterval = setInterval(sec, 3E3) : clearInterval(secinterval);
    jQuery(document).prop("title", document.hidden ? title[0] : a)
  })
};
$('body').removeClass('lock-scroll');

function lockScroll() {
  if ($('body').hasClass('lock-scroll')) {
      $('body').removeClass('lock-scroll');
  }
  else{
      $('body').addClass('lock-scroll');
  }
}