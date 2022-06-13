function doGet(e) {
const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
    .setTitle('課題登録')
    .setFaviconUrl('https://raw.githubusercontent.com/Gobousei/kousei/main/gobousei.png');
  return htmlOutput;
}

function getAppUrl() {
  return ScriptApp.getService().getUrl();
}
function doSubmitAjax(req) {
    const params = req.parameters;
    const resObj = {};
    //この1行を追加
    insertRecord(params);
    return resObj;
  }
    function insertRecord(param){
    let reservationTime = 0;
    const fromDate = new Date(param.calendar_date_from +' ' + param.calendar_time_from);
    const toDate = new Date(param.calendar_date_to + ' ' + param.calendar_time_to);

    //この順番にスプレッドシートに格納される
    const data = [[
      param.user_id, 
      param.userName, 
      param.calendar_date_from,
      param.calendar_time_from,
      new Date()
    ]];
    //SPREAD_SHEET_IDは連携するスプレッドシートのID、SHEET_NAMEはシート名をそれぞれ置き換えてください。
    const app = SpreadsheetApp.openById('1jqkhIYkAq18_uqZKkZw0DcuislNF3TZHmJz90BV7zZ0');
    const sheet = app.getSheetByName('シート1');
    const insertRow = sheet.getDataRange().getLastRow() + 1;  //挿入行
    const insertCol = 1;  //挿入列
    const insertRowNum = data.length;  //挿入行数
    const insertColNum = data[0].length;  //挿入列数(データ数)
    const insertRange = sheet.getRange(insertRow, insertCol,insertRowNum,insertColNum);
    //スプレッドシートに書きこむAPI
    insertRange.setValues(data);
  }
