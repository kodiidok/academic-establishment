/* eslint-disable prefer-destructuring */
function loadSheetData() {
  const ss = SpreadsheetApp.openById('1MTE8MdB-BwDG80wFlNI8zaADsnkG3XJsHxLW79ndXa4');
  const ws = ss.getSheetByName('mainsheet');
  const data = ws.getDataRange().getValues();
  // Logger.log(JSON.stringify(data[0]));
  // Logger.log(JSON.stringify(data[1]));
  return JSON.stringify(data);
}

function processData(retdata) {
  const obj = {};

  obj.INFO = {
    APPLICATION: {
      TIMESTAMP: retdata[0],
      ID: retdata[1],
    },
    VACANCY: {
      ID: retdata[2],
      FACULTY: retdata[3],
      DEPARTMENT: retdata[4],
      POST: retdata[5],
    },
  };

  obj.PERSONAL_DETAILS = {
    GENDER: retdata[6],
    TITLE: retdata[7],
    INITNAME: retdata[8],
    FULLNAME: retdata[9],
    DATE_OF_BIRTH: retdata[10],
    PERMANENT_RESIDENCE: retdata[11],
    CIVIL_STATUS: retdata[12],
    MOBILE: retdata[13],
    RESIDENCE: retdata[14],
    EMAIL: retdata[15],
    DISTRICT: retdata[16],
    ELECTORATE: retdata[17],
    PROVINCE: retdata[18],
    CITY: retdata[19],
    CITIZENSHIP: retdata[20],
    NIC: retdata[21],
    BY_DESCENT_OR_REGISTRATION: retdata[22],
    SPECIFY_COUNTRY: retdata[23],
    PASSPORT_NO: retdata[24],
    PROFICIENCY: retdata[25],
  };

  obj.BASIC_DEGREE = retdata[26];

  obj.POSTGRADUATE_DEGREE = retdata[27];

  obj.RESEARCH = {
    BOOKS: retdata[28],
    JOURNALS: retdata[29],
    ABSTRACTS: retdata[30],
  };

  obj.AWARDS = retdata[31];

  obj.EXTRA_CURRICULAR = retdata[32];

  obj.PRESENT_OCCUPATION = {
    DESIGNATION: retdata[33],
    DEPARTMENT: retdata[34],
    STARTED_WORKING: retdata[35],
    SALARY: retdata[36],
  };

  obj.PREVIOUS_EMPLOYMENTS = retdata[37];

  obj.REFREES = {
    REFEREE_1: retdata[38],
    REFREE_2: retdata[39],
  };

  obj.DECLARATION = {
    COMMENDATIONS_PUNISHMENTS: {
      STATUS: retdata[40],
      DETAILS: retdata[41],
    },
    VACATION_POST_NOTICES: {
      STATUS: retdata[42],
      DETAILS: retdata[43],
    },
    BOND_VIOLATIONS: {
      STATUS: retdata[44],
      BOND_VALUE: retdata[45],
      UNIVERSITY: retdata[46],
    },
  };

  obj.SHORTLISTED_STATUS = retdata[47];

  return obj;
}

function loadDoc() {
  const doc = DocumentApp.openById('1tABbydTrHuEJ1oD0Uu_1SA4b8zzQMmvZ-LoK-LJaNrU');
  const body = doc.getBody();
  initializePage(body);
  return doc;
}

function initializePage(body) {
  body
    .clear()
    .setPageHeight(841.89)
    .setPageWidth(595.276)
    .setMarginTop(30)
    .setMarginLeft(50)
    .setMarginRight(50)
    .setMarginBottom(50);
}

function createMasterTable(body) {
  body.insertTable(0, [['', '']]);
  body.insertTable(1, [[''], ['']]);
  body.insertTable(2, [[''], [''], [''], [''], [''], [''], ['']]);
  body.insertTable(3, [[''], ['']]);
  body.insertTable(4, [[''], ['']]);
  body.insertTable(5, [[''], [''], [''], ['']]);
  body.insertTable(6, [[''], ['']]);
  body.insertTable(7, [[''], ['']]);
  body.insertTable(8, [[''], ['']]);
  body.insertTable(9, [[''], ['']]);
  body.insertTable(10, [[''], ['']]);
  body.insertTable(11, [[''], ['']]);
}

function generateHeader(table) {
  table.getCell(0, 0).insertParagraph(0, 'UNIVERSITY OF PERADENIYA');
  table.getCell(0, 0).removeChild(table.getCell(0, 0).getChild(1));

  table.getCell(0, 1).insertParagraph(0, 'Office use only');
  table.getCell(0, 1).removeChild(table.getCell(0, 1).getChild(1));
}

function generateApplicationInfo(table, data) {
  const cell1 = table.getCell(0, 0);
  cell1.insertParagraph(0, 'APPLICATION FOR THE POST OF');
  cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

  const cell2 = table.getCell(1, 0);
  cell2.insertParagraph(0, `${data.VACANCY.POST}, ${data.VACANCY.DEPARTMENT}, ${data.VACANCY.FACULTY}`);
  cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
}

function generatePersonalDetails(table, data) {
  const cell1 = table.getCell(0, 0);
  cell1.insertParagraph(0, 'PERSONAL DETAILS');
  cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

  const cell2 = table.getCell(1, 0);
  cell2.insertParagraph(0, `Title: ${data.TITLE}`);
  cell2.insertParagraph(1, `Name with Initials: ${data.INITNAME}`);
  cell2.insertParagraph(2, `Full Name: ${data.FULLNAME}`);
  cell2.insertParagraph(3, `Gender: ${data.GENDER}`);
  cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));

  const cell3 = table.getCell(2, 0);
  cell3.insertParagraph(0, `Date of birth: ${data.DATE_OF_BIRTH}`);
  cell3.removeChild(cell3.getChild(cell3.getNumChildren() - 1));

  const cell4 = table.getCell(3, 0);
  cell4.insertParagraph(0, `Permanent Residence: ${data.PERMANENT_RESIDENCE}`);
  cell4.insertParagraph(1, `Mobile: ${data.MOBILE}`);
  cell4.insertParagraph(2, `Home: ${data.RESIDENCE}`);
  cell4.insertParagraph(3, `Email: ${data.EMAIL}`);
  cell4.removeChild(cell4.getChild(cell4.getNumChildren() - 1));

  const cell5 = table.getCell(4, 0);
  cell5.insertParagraph(0, `Civil Status: ${data.CIVIL_STATUS}`);
  cell5.removeChild(cell5.getChild(cell5.getNumChildren() - 1));

  const cell6 = table.getCell(5, 0);
  cell6.insertParagraph(0, `District: ${data.DISTRICT}`);
  cell6.insertParagraph(1, `Electorate: ${data.ELECTORATE}`);
  cell6.insertParagraph(2, `Province: ${data.PROVINCE}`);
  cell6.insertParagraph(3, `City: ${data.CITY}`);
  cell6.removeChild(cell6.getChild(cell6.getNumChildren() - 1));

  const cell7 = table.getCell(6, 0);
  cell7.insertParagraph(0, `Are you a citizen of Sri Lanka: ${data.CITIZENSHIP}`);
  cell7.insertParagraph(1, `State whether by Descent or Registration: ${data.BY_DESCENT_OR_REGISTRATION}`);
  cell7.insertParagraph(2, `National Identity Card No: ${data.NIC}`);
  cell7.insertParagraph(
    3,
    `If you are not a citizen of Sri Lanka, State the country of Citizenship: ${data.SPECIFY_COUNTRY}`
  );
  cell7.insertParagraph(4, `Passport No: ${data.PASSPORT_NO}`);
  cell7.insertParagraph(5, `Proficiency: ${data.PROFICIENCY}`);
  cell7.removeChild(cell7.getChild(cell7.getNumChildren() - 1));
}

function processDegree(data) {
  let title = '';
  for (let i = 0; i < 2; i += 1) {
    if (data[i]) {
      title = data[i];
    }
  }

  let subject = '';
  for (let i = 2; i < 4; i += 1) {
    if (data[i]) {
      subject = data[i].charAt(0).toUpperCase() + data[i].slice(1);
    }
  }

  let method = '';
  if (data[10]) {
    method = `${data[10]}`;
  }

  const name = `${title} ${subject}`;
  const university = `${data[4]}, ${data[5]}`;
  const duration = `From\t${data[6]}\nTo\t${data[7]}`;
  const performance = `(${data[8]}, ${data[9]})`;

  const retobj = { name, university, duration, performance, method };
  return retobj;
}

function generateBasicDegree(table, data) {
  const retdata = JSON.parse(JSON.parse(data));

  const cell1 = table.getCell(0, 0);
  cell1.insertParagraph(0, 'BASIC DEGREE');
  cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

  const cell2 = table.getCell(1, 0);
  const content = cell2.insertTable(0);
  const headerRow = content.appendTableRow();
  headerRow.appendTableCell('Name of the degree');
  headerRow.appendTableCell('Duration');
  retdata.forEach((element) => {
    const degree = processDegree(element);
    const row = content.appendTableRow();
    row.appendTableCell(`${degree.name}\n${degree.university}\n${degree.performance}`);
    row.appendTableCell(`${degree.duration}`);
  });
  cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
}

function generatePostgraduateDegree(table, data) {
  const retdata = JSON.parse(JSON.parse(data));

  const cell1 = table.getCell(0, 0);
  cell1.insertParagraph(0, 'POSTGRADUATE DEGREES');
  cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

  const cell2 = table.getCell(1, 0);
  const content = cell2.insertTable(0);
  const headerRow = content.appendTableRow();
  headerRow.appendTableCell('Name of the degree');
  headerRow.appendTableCell('Duration');
  retdata.forEach((element) => {
    const degree = processDegree(element);
    const row = content.appendTableRow();
    row.appendTableCell(`${degree.name}\n${degree.university}\n${degree.performance}\n${degree.method}`);
    row.appendTableCell(`${degree.duration}`);
  });
  cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
}

function generateResearch(table, data) {
  const BOOKS = JSON.parse(JSON.parse(data.BOOKS));
  const JOURNALS = JSON.parse(JSON.parse(data.JOURNALS));
  const ABSTRACTS = JSON.parse(JSON.parse(data.ABSTRACTS));

  const cell1 = table.getCell(0, 0);
  cell1.insertParagraph(0, 'RESEARCH PUBLICATIONS');
  cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

  const cell2 = table.getCell(1, 0);
  cell2.insertParagraph(0, 'BOOKS');
  const content1 = cell2.insertTable(1);
  const headerRow1 = content1.appendTableRow();
  headerRow1.appendTableCell('Name');
  headerRow1.appendTableCell('Author');
  headerRow1.appendTableCell('Date');
  headerRow1.appendTableCell('ISBN');
  BOOKS.forEach((element) => {
    const row = content1.appendTableRow();
    row.appendTableCell(`${element[0]}`);
    row.appendTableCell(`${element[1]}`);
    row.appendTableCell(`${element[2]}`);
    row.appendTableCell(`${element[3]}`);
  });
  cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));

  const cell3 = table.getCell(2, 0);
  cell3.insertParagraph(0, 'JOURNALS');
  const content2 = cell3.insertTable(1);
  const headerRow2 = content2.appendTableRow();
  headerRow2.appendTableCell('Name');
  headerRow2.appendTableCell('Author');
  headerRow2.appendTableCell('Source');
  headerRow2.appendTableCell('Date');
  headerRow2.appendTableCell('Indexed / Non Indexed');
  headerRow2.appendTableCell('Conference / By Research');
  JOURNALS.forEach((element) => {
    const row = content2.appendTableRow();
    row.appendTableCell(`${element[0]}`);
    row.appendTableCell(`${element[1]}`);
    row.appendTableCell(`${element[2]}`);
    row.appendTableCell(`${element[3]}`);
    row.appendTableCell(`${element[4]}`);
    row.appendTableCell(`${element[5]}`);
  });
  cell3.removeChild(cell3.getChild(cell3.getNumChildren() - 1));

  const cell4 = table.getCell(3, 0);
  cell4.insertParagraph(0, 'ABSTRACTS');
  const content3 = cell4.insertTable(1);
  const headerRow3 = content3.appendTableRow();
  headerRow3.appendTableCell('Name');
  headerRow3.appendTableCell('Author');
  headerRow3.appendTableCell('Source');
  headerRow3.appendTableCell('Date');
  headerRow3.appendTableCell('Indexed / Non Indexed');
  headerRow3.appendTableCell('Conference / By Research');
  ABSTRACTS.forEach((element) => {
    const row = content3.appendTableRow();
    row.appendTableCell(`${element[0]}`);
    row.appendTableCell(`${element[1]}`);
    row.appendTableCell(`${element[2]}`);
    row.appendTableCell(`${element[3]}`);
    row.appendTableCell(`${element[4]}`);
    row.appendTableCell(`${element[5]}`);
  });
  cell4.removeChild(cell4.getChild(cell4.getNumChildren() - 1));
}

function processAwards(data) {
  const retObj = { name: '', institute: '', year: '', details: '' };

  retObj.name = data[0];
  retObj.institute = data[1];
  retObj.year = data[2];
  retObj.details = data[3];

  return retObj;
}

function generateAwards(table, data) {
  const retdata = JSON.parse(JSON.parse(data));

  const cell1 = table.getCell(0, 0);
  cell1.insertParagraph(0, 'AWARDS, MEDALS & SCHOLARSHIPS');
  cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

  const cell2 = table.getCell(1, 0);
  const content = cell2.insertTable(0);
  const headerRow = content.appendTableRow();
  headerRow.appendTableCell('Name of the Award');
  headerRow.appendTableCell('University/Institute');
  headerRow.appendTableCell('Year');
  headerRow.appendTableCell('Details');
  retdata.forEach((element) => {
    const award = processAwards(element);
    const row = content.appendTableRow();
    row.appendTableCell(`${award.name}`);
    row.appendTableCell(`${award.institute}`);
    row.appendTableCell(`${award.year}`);
    row.appendTableCell(`${award.details}`);
  });
  cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
}

function processExtraCurricular(data) {
  const retObj = { name: '', duration: '', level: '', details: '' };

  retObj.name = data[0];
  retObj.duration = data[1];
  retObj.level = data[2];
  retObj.details = data[3];

  return retObj;
}

function generateExtraCurricular(table, data) {
  const retdata = JSON.parse(JSON.parse(data));

  const cell1 = table.getCell(0, 0);
  cell1.insertParagraph(0, 'EXTRA CURRICULAR ACTIVITIES');
  cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

  const cell2 = table.getCell(1, 0);
  const content = cell2.insertTable(0);
  const headerRow = content.appendTableRow();
  headerRow.appendTableCell('Name of the Activity');
  headerRow.appendTableCell('Duration');
  headerRow.appendTableCell('Level');
  headerRow.appendTableCell('Details');
  retdata.forEach((element) => {
    const activity = processExtraCurricular(element);
    const row = content.appendTableRow();
    row.appendTableCell(`${activity.name}`);
    row.appendTableCell(`${activity.duration}`);
    row.appendTableCell(`${activity.level}`);
    row.appendTableCell(`${activity.details}`);
  });
  cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
}

function generatePresentEmployment(table, data) {
  const cell1 = table.getCell(0, 0);
  cell1.insertParagraph(0, 'PRESENT EMPLOYMENT');
  cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

  const cell2 = table.getCell(1, 0);
  cell2.insertParagraph(0, `${data.DESIGNATION}`);
  cell2.insertParagraph(1, `${data.DEPARTMENT}`);
  cell2.insertParagraph(2, `Started working from: ${data.STARTED_WORKING}`);
  cell2.insertParagraph(3, `Salary: ${data.SALARY}`);
  cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
}

function processPreviousEmployement(data) {
  const retObj = {};
  retObj.designation = `${data[0]},\n${data[1]}`;
  retObj.duration = `${data[2]}\n${data[3]}`;
  retObj.reason = data[4];
  return retObj;
}

function generatePreviousEmployement(table, data) {
  const retdata = JSON.parse(JSON.parse(data));

  const cell1 = table.getCell(0, 0);
  cell1.insertParagraph(0, 'PREVIOUS EMPLOYMENTS');
  cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

  const cell2 = table.getCell(1, 0);
  const content = cell2.insertTable(0);
  const headerRow = content.appendTableRow();
  headerRow.appendTableCell('Designation');
  headerRow.appendTableCell('Duration');
  headerRow.appendTableCell('Reasons for leaving');
  retdata.forEach((element) => {
    const prevEmp = processPreviousEmployement(element);
    const row = content.appendTableRow();
    row.appendTableCell(prevEmp.designation);
    row.appendTableCell(prevEmp.duration);
    row.appendTableCell(prevEmp.reason);
  });
  cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
}

function generateRefrees(table, data) {
  const refree1 = JSON.parse(data.REFEREE_1);
  const refree2 = JSON.parse(data.REFREE_2);

  const cell1 = table.getCell(0, 0);
  cell1.insertParagraph(0, 'REFEREES');
  cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

  const cell2 = table.getCell(1, 0);
  const content = cell2.insertTable(0);
  const headerRow = content.appendTableRow();
  headerRow.appendTableCell('Name');
  headerRow.appendTableCell('Address');
  headerRow.appendTableCell('Email');
  headerRow.appendTableCell('Telephone');

  const row1 = content.appendTableRow();
  row1.appendTableCell(refree1.rName1);
  row1.appendTableCell(refree1.rAddress1);
  row1.appendTableCell(refree1.rEmail1);
  row1.appendTableCell(refree1.rTelephone1);

  const row2 = content.appendTableRow();
  row2.appendTableCell(refree2.rName2);
  row2.appendTableCell(refree2.rAddress2);
  row2.appendTableCell(refree2.rEmail2);
  row2.appendTableCell(refree2.rTelephone2);

  cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
}

function processDeclaration(data) {
  const retObj = {};
  retObj.COMMENDATIONS_PUNISHMENTS = `Have you ever been Commended or Punished during your career in the University / Educational Institution: ${data.COMMENDATIONS_PUNISHMENTS.STATUS}\n\nIf yes, please specify:\n${data.COMMENDATIONS_PUNISHMENTS.DETAILS}`;
  retObj.VACATION_POST_NOTICES = `Have you ever been served with a Vacation of Post notice by any other University/ Government Institution? ${data.VACATION_POST_NOTICES.STATUS}\n\nIf so please provide details.\n${data.VACATION_POST_NOTICES.DETAILS}`;
  retObj.BOND_VIOLATIONS = `Have you ever been treated as a bond violator : ${data.BOND_VIOLATIONS.STATUS}\nIf yes, Please provide details :\n\nUniversity: ${data.BOND_VIOLATIONS.UNIVERSITY}\nBond value: ${data.BOND_VIOLATIONS.BOND_VALUE}`;
  return retObj;
}

function generateDeclaration(table, data) {
  const cell1 = table.getCell(0, 0);
  cell1.insertParagraph(0, 'DECLARATION');
  cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

  const cell2 = table.getCell(1, 0);
  cell2.insertParagraph(0, processDeclaration(data).COMMENDATIONS_PUNISHMENTS);
  cell2.insertParagraph(1, '');
  cell2.insertParagraph(2, processDeclaration(data).VACATION_POST_NOTICES);
  cell2.insertParagraph(3, '');
  cell2.insertParagraph(4, processDeclaration(data).BOND_VIOLATIONS);
  cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
}

function updateDocument() {
  const rawdata = JSON.parse(loadSheetData())[1];
  const data = processData(rawdata);
  const doc = loadDoc();
  const body = doc.getBody();

  createMasterTable(body);
  const tblMaster = body.getTables();

  generateHeader(tblMaster[0]);
  generateApplicationInfo(tblMaster[1], data.INFO);
  generatePersonalDetails(tblMaster[2], data.PERSONAL_DETAILS);
  body.insertPageBreak(3);
  generateBasicDegree(tblMaster[3], data.BASIC_DEGREE);
  generatePostgraduateDegree(tblMaster[4], data.POSTGRADUATE_DEGREE);
  generateResearch(tblMaster[5], data.RESEARCH);
  generateAwards(tblMaster[6], data.AWARDS);
  generateExtraCurricular(tblMaster[7], data.EXTRA_CURRICULAR);
  generatePresentEmployment(tblMaster[8], data.PRESENT_OCCUPATION);
  generatePreviousEmployement(tblMaster[9], data.PREVIOUS_EMPLOYMENTS);
  generateRefrees(tblMaster[10], data.REFREES);
  body.insertPageBreak(12);
  generateDeclaration(tblMaster[11], data.DECLARATION);
}
