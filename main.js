// MCBBS-Module
// @id io.github.mcbbs-loader.runjs
// @name RunJS
// @icon https://www.picbed.cn/images/2020/11/13/OIP.jpg
// @author <a href='https://github.com/MCBBS-Loader' target='_blank'>MCBBS-Loader</a>
// @update https://cdn.jsdelivr.net/gh/MCBBS-Loader/MCBBS-RunJS@main/main.js
// @version 1.1.0
// -MCBBS-Module
var $ = window.AjQuery.$;
$("div.blockcode").each((i, eld) => {
  $(eld)
    .children()
    .each((i, el) => {
      if ($(el).attr("id")?.startsWith("code")) {
        $(eld).append("<em class='runcode'>运行代码</em>");
        $(eld)
          .children("em.runcode")
          .attr("onclick", parseCode($(el)));
      }
    });
});
function parseCode(el) {
  var strb = "";
  var cs = el.children().children().get();
  for (var l of cs) {
    strb += $(l)
      .html()
      .replace(/<br>/g, "\n")
      .replace(/&nbsp;/g, " ")
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<");
  }
  return strb;
}
