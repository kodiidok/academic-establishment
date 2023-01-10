const db = '1MTE8MdB-BwDG80wFlNI8zaADsnkG3XJsHxLW79ndXa4';
const ss = SpreadsheetApp.openById(db);
const retObj = {};

function doGet(e) {
  if (!e.parameter.page) {
    // When no specific page requested, return "home page" Ex : ?page=hod
    const tmp = HtmlService.createTemplateFromFile('index');
    return tmp
      .evaluate()
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  // else, use page parameter to pick an html file from the script
  // .title()
  return HtmlService.createTemplateFromFile(e.parameter.page)
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function loadData() {
  const vid = ss.getSheetByName('vacancy').getDataRange().getValues();
  const vpost = ss.getSheetByName('post').getDataRange().getValues();
  const vfac = ss.getSheetByName('faculty').getDataRange().getValues();
  const vdept = ss.getSheetByName('department').getDataRange().getValues();

  retObj.ss = ss;
  retObj.vid = vid;
  retObj.vpost = vpost;
  retObj.vfac = vfac;
  retObj.vdept = vdept;

  return retObj;
}

function saveData(r) {
  const ws = ss.getSheetByName('mainsheet');
  let status = '';
  ws.appendRow([
    new Date(),
    r.appid,
    r.vid,
    r.vpost,
    r.vfac,
    r.vdept,
    r.pgd,
    r.awards,
    r.books,
    r.journals,
    r.abstracts,
    r.extraCurrActivity,
    r.poDesignation,
    r.poDept,
    r.poFrom,
    r.poSalaryDrawn,
  ]);
  status = true;
  return status;
}

global.doGet = doGet;
global.include = include;
global.loadData = loadData;
global.saveData = saveData;
