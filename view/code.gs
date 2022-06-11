
function doGet(e) {
const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
    .setTitle('学習')
    .setFaviconUrl('https://raw.githubusercontent.com/Gobousei/kousei/main/gobousei.png');
  return htmlOutput;
}

function deletefunc(){
  var ss_id2 = '1YPWfD2YIzfNzJ4Om8ZLewmeel_LkHZBhFuciEcxOXZQ';
var sh_name2 = 'シート1'; //スプレッドシートのシート名を指定
var sh2 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name2);
var delete1 = sh2.deleteRow(2)
sh2.insertRowAfter(100)
}
function getScriptUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}
