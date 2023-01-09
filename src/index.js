const DATABASE = '1MTE8MdB-BwDG80wFlNI8zaADsnkG3XJsHxLW79ndXa4';
const ss = SpreadsheetApp.openById(DATABASE);

function doGet(e) {
  if (!e.parameter.page) {
    // When no specific page requested, return "home page" Ex : ?page=hod
    const tmp = HtmlService.createTemplateFromFile('index');
    tmp.vacancy = loadVacancies()
      .vacancy.map(function (r) {
        return `<option>${parseInt(r[0], 10)}</option>`;
      })
      .join();
    tmp.post = loadVacancies()
      .post.map(function (r) {
        return `<option>${r[0]}</option>`;
      })
      .join('');
    tmp.fac = loadVacancies()
      .fac.map(function (r) {
        return `<option>${r[0]}</option>`;
      })
      .join('');
    tmp.dept = loadVacancies()
      .dept.map(function (r) {
        return `<option>${r[0]}</option>`;
      })
      .join('');
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

function loadVacancies() {
  const wsVacancy = ss.getSheetByName('vacancy');
  const wsPost = ss.getSheetByName('post');
  const wsFac = ss.getSheetByName('faculty');
  const wsDept = ss.getSheetByName('department');

  const vacancy = wsVacancy.getDataRange().getValues();
  const post = wsPost.getDataRange().getValues();
  const fac = wsFac.getDataRange().getValues();
  const dept = wsDept.getDataRange().getValues();

  return { vacancy, post, fac, dept };
}

function saveRequest(request) {
  const ws = ss.getSheetByName('mainsheet');
  const wsPd = ss.getSheetByName('sheetNamepd');
  const wsBd = ss.getSheetByName('sheetNameBasicdegree');
  Logger.log(request);
  console.log(request);

  ws.appendRow([new Date(), request.vacancyID, request.vacancyPost, request.vacancyFac, request.vacancyDept]);

  wsPd.appendRow([request.pdGender,request.personalTitle,request.personalNameInit,request.personalFullName,request.personalAddress,
    request.civilstatus,request.personalMobile,request.personalTp,request.personalEmail,request.district,
    request.electorate,request.province,request.city,  request.nic,request.specifyCountry,request.passportNo,
    request.spouseName ,request.spouseDesignation,request.highestEducation]);

  wsBd.appendRow([request.basicDegree,request.bdCountry,request.bdUniversity,request.bdYearFrom,request.bdYearTo,request.bdClass,request.bdGPA])

}

global.doGet = doGet;
global.include = include;
global.loadVacancies = loadVacancies;
global.saveRequest = saveRequest;
