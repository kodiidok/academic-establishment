const db = '1MTE8MdB-BwDG80wFlNI8zaADsnkG3XJsHxLW79ndXa4';
const data = 'cHRoil7Yt2VQXOk-iEw4IvBuXm3kXDMFm-lUUYl2B2g';
const applications = '1-ujGTvr04DYNSEMDn4JYiO0x5jjwt8wBnXP61X07VTI';
const ss = SpreadsheetApp.openById(db);
const ssData = SpreadsheetApp.openById(data);
const ssApplications = SpreadsheetApp.openById(applications);

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
  const obj = {};

  const vid = ssData.getSheetByName('vacancy').getDataRange().getValues();
  const vpost = ssData.getSheetByName('post').getDataRange().getValues();
  const vfac = ssData.getSheetByName('faculty').getDataRange().getValues();
  const vdept = ssData.getSheetByName('department').getDataRange().getValues();

  obj.vid = vid;
  obj.vpost = vpost;
  obj.vfac = vfac;
  obj.vdept = vdept;

  return obj;
}

function saveData(r) {
  const ws = ssApplications.getSheetByName('mainsheet');
  let status = '';
  ws.appendRow([
    new Date(),
    r.appid,

    r.vid,
    r.vpost,
    r.vfac,
    r.vdept,

    r.pdGender,
    r.personalTitle,
    r.personalNameInit,
    r.personalFullName,
    r.personalDOB,
    r.personalAddress,
    r.civilstatus,
    r.personalMobile,
    r.personalTp,
    r.personalEmail,
    r.district,
    r.electorate,
    r.province,
    r.city,
    r.citizenship,
    r.descentOrReg,
    r.nic,
    r.specifyCountry,
    r.passportNo,
    r.spouseName,
    r.spouseDesignation,
    r.highestEducation,
    r.lang,

    r.basicDegree,
    r.bdCountry,
    r.bdUniversity,
    r.bdYearFrom,
    r.bdYearTo,
    r.bdClass,
    r.bdGPA,

    r.pgd,

    r.awards,

    r.books,
    r.journals,
    r.abstracts,

    r.commendations,
    r.publications,

    r.vacation,

    r.extraCurrActivity,

    r.poDesignation,
    r.poDept,
    r.poFrom,
    r.poSalaryDrawn,

    r.rName1,
    r.rTelephone1,
    r.rAddress1,
    r.rEmail1,
    r.rName2,
    r.rTelephone2,
    r.rAddress2,
    r.rEmail2,

    r.pEmployements,
    r.bondViolatorRadio,
    r.bondValue,
    r.uniInstitute,
  ]);
  status = true;
  return status;
}

global.doGet = doGet;
global.include = include;
global.loadData = loadData;
global.saveData = saveData;
