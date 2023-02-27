class Application {
  /* eslint-disable prefer-destructuring */
  static loadSheetData() {
    const ss = SpreadsheetApp.openById('1MTE8MdB-BwDG80wFlNI8zaADsnkG3XJsHxLW79ndXa4');
    const ws = ss.getSheetByName('mainsheet');
    const data = ws.getDataRange().getValues();
    // Logger.log(JSON.stringify(data[0]));
    // Logger.log(JSON.stringify(data[1]));
    return JSON.stringify(data);
  }

  static loadDoc() {
    const doc = DocumentApp.openById('1tABbydTrHuEJ1oD0Uu_1SA4b8zzQMmvZ-LoK-LJaNrU');
    const body = doc.getBody();
    this.initializePage(body);
    return doc;
  }

  static createDoc() {
    const newDoc = DocumentApp.create('New Document');
    const doc = DocumentApp.openById(newDoc.getId());
    const body = doc.getBody();
    this.initializePage(body);
    return doc;
  }

  static getPdfBlob(req) {
    try {
      const doc = this.createReport(req);
      const file = DriveApp.getFileById(doc.getId());
      const blob = file.getBlob();
      const bytes = blob.getBytes();
      const b64 = Utilities.base64Encode(bytes);
      return b64;
    } catch (error) {
      console.error('Error occurred while getPdfBlob in Application', error);
      throw new Error(`Error occurred while getPdfBlob`);
    }
  }

  static loadResources() {
    const imageFileId = '1fMEJOMTQ176x0h7BphieEu3CFwfqHMH8';
    const image = DriveApp.getFileById(imageFileId).getBlob();
    return { image };
  }

  // initialize

  static initializePage(body) {
    body
      .clear()
      .setPageHeight(841.89)
      .setPageWidth(595.276)
      .setMarginTop(30)
      .setMarginLeft(50)
      .setMarginRight(50)
      .setMarginBottom(50);
  }

  static initializeStyles() {
    const bodyStyle = {
      [DocumentApp.Attribute.FONT_FAMILY]: 'Roboto Serif',
      [DocumentApp.Attribute.FONT_SIZE]: 9,
      [DocumentApp.Attribute.LINE_SPACING]: 0.06,
    };
    const centerStyle = {
      [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]: DocumentApp.HorizontalAlignment.CENTER,
    };
    const justifyStyle = {
      [DocumentApp.Attribute.BORDER_WIDTH]: 0,
      [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]: DocumentApp.HorizontalAlignment.JUSTIFY,
    };
    const tableStyle = {
      narrow: {
        [DocumentApp.Attribute.BORDER_WIDTH]: 1,
      },
      thick: {
        [DocumentApp.Attribute.BORDER_WIDTH]: 3,
      },
      remove: {
        [DocumentApp.Attribute.BORDER_WIDTH]: 0,
      },
    };
    const titleStyle = {
      [DocumentApp.Attribute.BOLD]: true,
      [DocumentApp.Attribute.FONT_SIZE]: 11,
    };
    const subtitleStyle = {
      [DocumentApp.Attribute.BOLD]: true,
    };
    const officeUseOnly = {
      [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]: DocumentApp.HorizontalAlignment.CENTER,
      [DocumentApp.Attribute.SPACING_AFTER]: 50,
      [DocumentApp.Attribute.PADDING_TOP]: 0,
    };
    const headerStyle = {
      university: {
        [DocumentApp.Attribute.BOLD]: true,
        [DocumentApp.Attribute.FONT_SIZE]: 12,
      },
      country: {
        [DocumentApp.Attribute.BOLD]: true,
        [DocumentApp.Attribute.FONT_SIZE]: 10,
      },
    };
    const styles = {
      bodyStyle,
      centerStyle,
      tableStyle,
      justifyStyle,
      titleStyle,
      subtitleStyle,
      officeUseOnly,
      headerStyle,
    };
    return styles;
  }

  // format

  static formatPage(body, tblMaster) {
    const styles = this.initializeStyles();
    body.setAttributes(styles.bodyStyle);

    this.formatHeader(tblMaster[0], styles);
    this.formatPost(tblMaster[1], styles);
    this.formatPersonalDetails(tblMaster[2], styles);
    this.formatBasicDegree(tblMaster[3], styles);
    this.formatPostgraduateDegree(tblMaster[4], styles);
    this.formatResearch(tblMaster[5], styles);
    this.formatAwards(tblMaster[6], styles);
    this.formatExtraCurricular(tblMaster[7], styles);
    this.formatPresentEmployment(tblMaster[8], styles);
    this.formatPreviousEmployement(tblMaster[9], styles);
    this.formatRefrees(tblMaster[10], styles);
    this.formatDeclaration(tblMaster[11], styles);
    this.formatApplicantSignature(tblMaster[12], styles);
    this.formatNotes(tblMaster[13], styles);
    this.formatOfficeSignature(tblMaster[14], styles);
  }

  static formatHeader(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const leftcell = table.getChild(0).getChild(0);
    const leftpara = leftcell.getChild(1);

    const textToFind = 'UNIVERSITY OF PERADENIYA';
    const startIndex = leftpara.getText().indexOf(textToFind);
    const endIndex = startIndex + textToFind.length;
    if (startIndex !== -1) {
      const textElement = leftpara.editAsText();
      textElement.setBold(startIndex, endIndex, true);
      textElement.setFontSize(startIndex, endIndex, 12);
    }

    const rightcell = table.getChild(0).getChild(1);
    const rightpara = rightcell.getChild(0).getChild(0).getChild(0).getChild(0);
    rightcell.setAttributes(styles.officeUseOnly);
    rightpara.setAttributes(styles.officeUseOnly);
  }

  static formatPost(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell1 = table.getCell(0, 0);
    const cell2 = table.getCell(1, 0);

    const cell1Styles = {};
    cell1Styles[DocumentApp.Attribute.PADDING_TOP] = 30;
    cell1Styles[DocumentApp.Attribute.PADDING_BOTTOM] = 0;
    cell1.setAttributes(cell1Styles);

    const cell2Styles = {};
    cell2Styles[DocumentApp.Attribute.PADDING_BOTTOM] = 15;
    cell2Styles[DocumentApp.Attribute.PADDING_TOP] = 0;
    cell2.setAttributes(cell2Styles);

    cell1.getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatPersonalDetails(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell1 = table.getCell(0, 0);
    cell1.getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatBasicDegree(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell1 = table.getCell(0, 0);
    cell1.getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatPostgraduateDegree(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell1 = table.getCell(0, 0);
    cell1.getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatResearch(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell1 = table.getCell(0, 0);
    cell1.getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatAwards(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell1 = table.getCell(0, 0);
    cell1.getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatExtraCurricular(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell1 = table.getCell(0, 0);
    cell1.getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatPresentEmployment(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell1 = table.getCell(0, 0);
    cell1.getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatPreviousEmployement(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell1 = table.getCell(0, 0);
    cell1.getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatRefrees(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell1 = table.getCell(0, 0);
    cell1.getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatDeclaration(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell1 = table.getCell(0, 0);
    cell1.getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatApplicantSignature(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell = table.getCell(0, 0);

    const signature1 = cell.getChild(1);
    const signature2 = cell.getChild(3);

    signature1.setAttributes(styles.tableStyle.remove);
    signature2.setAttributes(styles.tableStyle.remove);

    const cellStyles = {};
    cellStyles[DocumentApp.Attribute.PADDING_TOP] = 40;
    cellStyles[DocumentApp.Attribute.PADDING_BOTTOM] = 20;
    cellStyles[DocumentApp.Attribute.PADDING_RIGHT] = 0;
    cellStyles[DocumentApp.Attribute.PADDING_LEFT] = 0;

    const paraStyles = {
      justify: {},
      center: {},
      right: {},
    };
    paraStyles.justify[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.JUSTIFY;
    paraStyles.center[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
    paraStyles.right[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.RIGHT;

    signature1.getCell(0, 0).setAttributes(cellStyles);
    signature1.getCell(0, 1).setAttributes(cellStyles);

    signature2.getCell(0, 0).setAttributes(cellStyles);
    signature2.getCell(0, 1).setAttributes(cellStyles);

    signature1.getCell(0, 1).getChild(0).setAttributes(paraStyles.right);
    signature2.getCell(0, 1).getChild(0).setAttributes(paraStyles.right);

    cell.getChild(0).setAttributes(paraStyles.justify);
    cell.getChild(2).setAttributes(paraStyles.justify);
  }

  static formatNotes(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell = table.getCell(0, 0);

    const cellStyles = {};
    cellStyles[DocumentApp.Attribute.WIDTH] = 5;

    const paraStyles = {};
    paraStyles[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.JUSTIFY;

    cell.getChild(0).setAttributes(styles.subtitleStyle);

    cell.getChild(1).setAttributes(styles.tableStyle.remove);
    cell.getChild(1).getCell(0, 0).setAttributes(cellStyles);

    cell.getChild(1).getCell(0, 1).getChild(0).setAttributes(paraStyles);
    cell.getChild(1).getCell(1, 1).getChild(0).setAttributes(paraStyles);
    cell.getChild(1).getCell(2, 1).getChild(0).setAttributes(paraStyles);

    cell.getChild(1).getCell(0, 0).getChild(0).setAttributes(styles.subtitleStyle);
    cell.getChild(1).getCell(1, 0).getChild(0).setAttributes(styles.subtitleStyle);
    cell.getChild(1).getCell(2, 0).getChild(0).setAttributes(styles.subtitleStyle);

    cell.getChild(1).getCell(0, 1).getChild(0).setAttributes(styles.subtitleStyle);
    cell.getChild(1).getCell(1, 1).getChild(0).setAttributes(styles.subtitleStyle);
    cell.getChild(1).getCell(2, 1).getChild(0).setAttributes(styles.subtitleStyle);
  }

  static formatOfficeSignature(table, styles) {
    table.setAttributes(styles.tableStyle.remove);

    const cell = table.getCell(0, 0);

    const cellStyles = {};
    cellStyles[DocumentApp.Attribute.PADDING_TOP] = 40;
    cellStyles[DocumentApp.Attribute.PADDING_BOTTOM] = 20;
    cellStyles[DocumentApp.Attribute.PADDING_RIGHT] = 0;
    cellStyles[DocumentApp.Attribute.PADDING_LEFT] = 0;

    const paraStyles = {
      justify: {},
      center: {},
      right: {},
    };
    paraStyles.justify[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.JUSTIFY;
    paraStyles.center[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
    paraStyles.right[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.RIGHT;

    cell.getChild(3).setAttributes(styles.tableStyle.remove);

    cell.getChild(3).getCell(0, 0).setAttributes(cellStyles);
    cell.getChild(3).getCell(0, 1).setAttributes(cellStyles);
    cell.getChild(3).getCell(1, 0).setAttributes(cellStyles);
    cell.getChild(3).getCell(1, 1).setAttributes(cellStyles);

    cell.getChild(3).getCell(0, 1).getChild(0).setAttributes(paraStyles.right);
    cell.getChild(3).getCell(1, 1).getChild(0).setAttributes(paraStyles.right);

    cell.getChild(0).setAttributes(paraStyles.center);
    cell.getChild(2).setAttributes(paraStyles.justify);
    cell.getChild(4).setAttributes(paraStyles.justify);
  }

  // process

  static processData(retdata) {
    try {
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
    } catch (error) {
      console.error('Error occurred while processData in Application', error);
      throw new Error(`Error occurred while processData`);
    }
  }

  static processDegree(data) {
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

  static processAwards(data) {
    const retObj = { name: '', institute: '', year: '', details: '' };

    retObj.name = data[0];
    retObj.institute = data[1];
    retObj.year = data[2];
    retObj.details = data[3];

    return retObj;
  }

  static processPreviousEmployement(data) {
    const retObj = {};
    retObj.designation = `${data[0]},\n${data[1]}`;
    retObj.duration = `${data[2]}\n${data[3]}`;
    retObj.reason = data[4];
    return retObj;
  }

  static processExtraCurricular(data) {
    const retObj = { name: '', duration: '', level: '', details: '' };

    retObj.name = data[0];
    retObj.duration = data[1];
    retObj.level = data[2];
    retObj.details = data[3];

    return retObj;
  }

  static processDeclaration(data) {
    const retObj = {};
    retObj.COMMENDATIONS_PUNISHMENTS = `Have you ever been Commended or Punished during your career in the University / Educational Institution: ${data.COMMENDATIONS_PUNISHMENTS.STATUS}\n\nIf yes, please specify:\n${data.COMMENDATIONS_PUNISHMENTS.DETAILS}`;
    retObj.VACATION_POST_NOTICES = `Have you ever been served with a Vacation of Post notice by any other University/ Government Institution? ${data.VACATION_POST_NOTICES.STATUS}\n\nIf so please provide details.\n${data.VACATION_POST_NOTICES.DETAILS}`;
    retObj.BOND_VIOLATIONS = `Have you ever been treated as a bond violator : ${data.BOND_VIOLATIONS.STATUS}\nIf yes, Please provide details :\n\nUniversity: ${data.BOND_VIOLATIONS.UNIVERSITY}\nBond value: ${data.BOND_VIOLATIONS.BOND_VALUE}`;
    return retObj;
  }

  // generate

  static generateHeader(table) {
    const cell1 = table.getCell(0, 0);
    const imageElement = cell1.insertImage(0, this.loadResources().image);
    cell1.insertParagraph(1, '\nUNIVERSITY OF PERADENIYA\nSri Lanka');
    imageElement.setWidth(120);
    imageElement.setHeight(120);
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

    const cell2 = table.getCell(0, 1);
    const content = cell2.insertTable(0);
    const row2 = content.appendTableRow();
    row2.appendTableCell('Office use only');
    cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
  }

  static generateApplicationInfo(table, data) {
    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(0, 'APPLICATION FOR THE POST OF');
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

    const cell2 = table.getCell(1, 0);
    cell2.insertParagraph(0, `${data.VACANCY.POST}, ${data.VACANCY.DEPARTMENT}, ${data.VACANCY.FACULTY}`);
    cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
  }

  static generatePersonalDetails(table, data) {
    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(0, '(1)\tPERSONAL DETAILS');
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

    const cell2 = table.getCell(1, 0);
    cell2.insertParagraph(0, `Title: \t${data.TITLE}`);
    cell2.insertParagraph(1, `Name with Initials: \t${data.INITNAME}`);
    cell2.insertParagraph(2, `Full Name: (underline Surname)\t${data.FULLNAME}`);
    cell2.insertParagraph(3, `Gender: \t${data.GENDER}`);
    cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));

    const cell3 = table.getCell(2, 0);
    cell3.insertParagraph(0, `Date of birth: (please attach a copy of the Birth Certificate)\n${data.DATE_OF_BIRTH}`);
    cell3.removeChild(cell3.getChild(cell3.getNumChildren() - 1));

    const cell4 = table.getCell(3, 0);
    cell4.insertParagraph(
      0,
      `Permanent Residence: (any change should be communicated immediately)\n${data.PERMANENT_RESIDENCE}\n`
    );
    cell4.insertParagraph(1, `Mobile: \t${data.MOBILE}`);
    cell4.insertParagraph(2, `Home: \t\t${data.RESIDENCE}`);
    cell4.insertParagraph(3, `Email: \t\t${data.EMAIL}`);
    cell4.removeChild(cell4.getChild(cell4.getNumChildren() - 1));

    const cell5 = table.getCell(4, 0);
    cell5.insertParagraph(0, `Civil Status: \t${data.CIVIL_STATUS}`);
    cell5.removeChild(cell5.getChild(cell5.getNumChildren() - 1));

    const cell6 = table.getCell(5, 0);
    cell6.insertParagraph(0, `District: \t${data.DISTRICT}`);
    cell6.insertParagraph(1, `Electorate: \t${data.ELECTORATE}`);
    cell6.insertParagraph(2, `Province: \t${data.PROVINCE}`);
    cell6.insertParagraph(3, `City: \t\t${data.CITY}`);
    cell6.removeChild(cell6.getChild(cell6.getNumChildren() - 1));

    const cell7 = table.getCell(6, 0);

    let result = '';

    result = data.CITIZENSHIP !== 'Other' ? 'Yes' : 'No';
    cell7.insertParagraph(0, `Are you a citizen of Sri Lanka: \t${result}`);
    result = data.BY_DESCENT_OR_REGISTRATION !== 'byRegistration' ? 'by descent' : 'by registration';
    cell7.insertParagraph(1, `State whether by Descent or Registration: \t${result}`);
    cell7.insertParagraph(2, `National Identity Card No: \t${data.NIC}`);
    cell7.insertParagraph(
      3,
      `\nIf you are not a citizen of Sri Lanka, State the country of Citizenship: \t${data.SPECIFY_COUNTRY}`
    );
    cell7.insertParagraph(4, `Passport No: \t${data.PASSPORT_NO}`);

    result = '';
    JSON.parse(data.PROFICIENCY).forEach((item) => {
      result += `${item}, `;
    });
    result = result.slice(0, result.length - 2);
    cell7.insertParagraph(5, `\nProficiency: \t${result}`);
    result = '';

    cell7.removeChild(cell7.getChild(cell7.getNumChildren() - 1));
  }

  static generateBasicDegree(table, data) {
    const retdata = JSON.parse(JSON.parse(data));

    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(
      0,
      '(2)\tUNIVERSITY EDUCATION\n(Degree, Diploma etc. In the case of Medical/Dental, please give details of 2nd, 3rd and Final Exams. Please attach copies of all certificates)'
    );
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

    const cell2 = table.getCell(1, 0);
    const content = cell2.insertTable(0);
    const headerRow = content.appendTableRow();
    headerRow.appendTableCell('Name of the Degree/Diploma etc.');
    headerRow.appendTableCell('Duration');
    retdata.forEach((element) => {
      const degree = this.processDegree(element);
      const row = content.appendTableRow();
      row.appendTableCell(`${degree.name}\n${degree.university}\n${degree.performance}`);
      row.appendTableCell(`${degree.duration}`);
    });
    cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
  }

  static generatePostgraduateDegree(table, data) {
    const retdata = JSON.parse(JSON.parse(data));

    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(0, '(3)\tPOSTGRADUATE QUALIFICATIONS\n(Please attach copies of all relevant certificates)');
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

    const cell2 = table.getCell(1, 0);
    const content = cell2.insertTable(0);
    const headerRow = content.appendTableRow();
    headerRow.appendTableCell('Name of the Degree/Diploma etc.');
    headerRow.appendTableCell('Duration');
    retdata.forEach((element) => {
      const degree = this.processDegree(element);
      const row = content.appendTableRow();
      row.appendTableCell(`${degree.name}\n${degree.university}\n${degree.performance}\n${degree.method}`);
      row.appendTableCell(`${degree.duration}`);
    });
    cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
  }

  static generateResearch(table, data) {
    const BOOKS = JSON.parse(JSON.parse(data.BOOKS));
    const JOURNALS = JSON.parse(JSON.parse(data.JOURNALS));
    const ABSTRACTS = JSON.parse(JSON.parse(data.ABSTRACTS));

    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(
      0,
      '(4)\tRESEARCH PUBLICATIONS\n(First degree Dissertation/Postgraduate Thesis are not considered as publications)'
    );
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

  static generateAwards(table, data) {
    const retdata = JSON.parse(JSON.parse(data));

    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(
      0,
      '(5)\tACADEMIC DISTINCTIONS, SCHOLARSHIPS, AWARDS, MEDALS etc.\n(Please attach copies of relevant certificates)'
    );
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

    const cell2 = table.getCell(1, 0);
    const content = cell2.insertTable(0);
    const headerRow = content.appendTableRow();
    headerRow.appendTableCell('Name of the Award');
    headerRow.appendTableCell('University/Institute');
    headerRow.appendTableCell('Year');
    headerRow.appendTableCell('Details');
    retdata.forEach((element) => {
      const award = this.processAwards(element);
      const row = content.appendTableRow();
      row.appendTableCell(`${award.name}`);
      row.appendTableCell(`${award.institute}`);
      row.appendTableCell(`${award.year}`);
      row.appendTableCell(`${award.details}`);
    });
    cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
  }

  static generateExtraCurricular(table, data) {
    const retdata = JSON.parse(JSON.parse(data));

    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(0, '(6)\tEXTRA CURRICULAR ACTIVITIES');
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

    const cell2 = table.getCell(1, 0);
    const content = cell2.insertTable(0);
    const headerRow = content.appendTableRow();
    headerRow.appendTableCell('Name of the Activity');
    headerRow.appendTableCell('Duration');
    headerRow.appendTableCell('Level');
    headerRow.appendTableCell('Details');
    retdata.forEach((element) => {
      const activity = this.processExtraCurricular(element);
      const row = content.appendTableRow();
      row.appendTableCell(`${activity.name}`);
      row.appendTableCell(`${activity.duration}`);
      row.appendTableCell(`${activity.level}`);
      row.appendTableCell(`${activity.details}`);
    });
    cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
  }

  static generatePresentEmployment(table, data) {
    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(0, '(7)\tPRESENT EMPLOYMENT');
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

    const cell2 = table.getCell(1, 0);
    cell2.insertParagraph(0, `${data.DESIGNATION}`);
    cell2.insertParagraph(1, `${data.DEPARTMENT}`);
    cell2.insertParagraph(2, `Started working from: ${data.STARTED_WORKING}`);
    cell2.insertParagraph(3, `Salary: ${data.SALARY}`);
    cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
  }

  static generatePreviousEmployement(table, data) {
    const retdata = JSON.parse(JSON.parse(data));

    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(0, '(8)\tPREVIOUS EMPLOYMENTS');
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

    const cell2 = table.getCell(1, 0);
    const content = cell2.insertTable(0);
    const headerRow = content.appendTableRow();
    headerRow.appendTableCell('Designation');
    headerRow.appendTableCell('Duration');
    headerRow.appendTableCell('Reasons for leaving');
    retdata.forEach((element) => {
      const prevEmp = this.processPreviousEmployement(element);
      const row = content.appendTableRow();
      row.appendTableCell(prevEmp.designation);
      row.appendTableCell(prevEmp.duration);
      row.appendTableCell(prevEmp.reason);
    });
    cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
  }

  static generateRefrees(table, data) {
    const refree1 = JSON.parse(data.REFEREE_1);
    const refree2 = JSON.parse(data.REFREE_2);

    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(
      0,
      '(9)\tREFEREES\n\nNote:\nSubmitting two non-related referees reports is compulsory. You can send referees reports either along with the application under sealed envelope\nor\nReferees may requested to send referees reports directly addressed to the Vice-Chancellor of this University indicating "Name of the applicant, post applied & the department" at the top left hand corner of the envelope'
    );
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

  static generateDeclaration(table, data) {
    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(0, '(10)\tDECLARATION');
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

    const cell2 = table.getCell(1, 0);
    cell2.insertParagraph(0, this.processDeclaration(data).COMMENDATIONS_PUNISHMENTS);
    cell2.insertParagraph(1, '');
    cell2.insertParagraph(2, this.processDeclaration(data).VACATION_POST_NOTICES);
    cell2.insertParagraph(3, '');
    cell2.insertParagraph(4, this.processDeclaration(data).BOND_VIOLATIONS);
    cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
  }

  static generateApplicantSignature(table) {
    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(
      0,
      'I hereby certify that all the particulars submitted by me in this application are true and accurate. I am aware that if any of these particulars are found to be false or inaccurate, I am liable to be disqualified before selection and to be dismissed without any compensation if the inaccuracy is detected after appointment'
    );
    const content1 = cell1.insertTable(1);
    const row1 = content1.appendTableRow();
    row1.appendTableCell('Date');
    row1.appendTableCell('Signature of Applicant');
    cell1.insertParagraph(
      2,
      'I express my willingness to resign from the present position ifI am not released in order to accept the post.'
    );
    const content2 = cell1.insertTable(3);
    const row2 = content2.appendTableRow();
    row2.appendTableCell('Date');
    row2.appendTableCell('Signature of Applicant');
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));
  }

  static generateNotes(table) {
    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(0, 'Note');
    const content1 = cell1.insertTable(1);
    const row1 = content1.appendTableRow();
    row1.appendTableCell('1');
    row1.appendTableCell(
      'Submit your application according to the detailed requirements indicated in the web site www.pdn.ac.lk'
    );
    const row2 = content1.appendTableRow();
    row2.appendTableCell('2');
    row2.appendTableCell(
      'All applicants must complete the qualifications & experience by the closing date of the application. No qualification fulfilled after the closing date will be considered.'
    );
    const row3 = content1.appendTableRow();
    row3.appendTableCell('3');
    row3.appendTableCell(
      'Applicants not submitted according to this format and submitted without copies of required certificates to support qualifications & experience will be rejected.'
    );
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));
  }

  static generateOfficeSignature(table) {
    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(0, '(To be completed by the Head of the Department where applicable)\n\n');
    cell1.insertParagraph(1, 'Vice Chancellor,\nUniversity of Peradeniya\n');
    cell1.insertParagraph(
      2,
      'The application is forwarded. Please note that if he/she is selected for the said post, he/she can be/cannot be released from the service.'
    );
    const content = cell1.insertTable(3);
    const row1 = content.appendTableRow();
    row1.appendTableCell('Date');
    row1.appendTableCell('Signature of Head of the Department');
    const row2 = content.appendTableRow();
    row2.appendTableCell('Date');
    row2.appendTableCell('Signature of Head of the Institution');
    cell1.insertParagraph(
      4,
      'Note: The candidates are required to send their academic transcripts in support of the application, in consultation with the authorities of the respective Universities where they studied. Their applications will not be considered in the absence of the academic transcript.'
    );
    cell1.insertParagraph(5, '\nSenior Assistant Registrar / Academic Establishments, UPDN');
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));
  }

  // document

  static createMasterTable(body) {
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
    body.insertTable(12, [['']]);
    body.insertTable(13, [['']]);
    body.insertTable(14, [['']]);
  }

  static updateDocument(req) {
    try {
      const data = req;
      const doc = this.loadDoc();
      // const doc = this.createDoc();
      const body = doc.getBody();

      this.createMasterTable(body);
      const tblMaster = body.getTables();

      this.generateHeader(tblMaster[0]);
      body.insertHorizontalRule(1);
      this.generateApplicationInfo(tblMaster[1], data.INFO);
      this.generatePersonalDetails(tblMaster[2], data.PERSONAL_DETAILS);
      body.insertPageBreak(4);
      this.generateBasicDegree(tblMaster[3], data.BASIC_DEGREE);
      this.generatePostgraduateDegree(tblMaster[4], data.POSTGRADUATE_DEGREE);
      this.generateResearch(tblMaster[5], data.RESEARCH);
      body.insertPageBreak(8);
      this.generateAwards(tblMaster[6], data.AWARDS);
      this.generateExtraCurricular(tblMaster[7], data.EXTRA_CURRICULAR);
      this.generatePresentEmployment(tblMaster[8], data.PRESENT_OCCUPATION);
      this.generatePreviousEmployement(tblMaster[9], data.PREVIOUS_EMPLOYMENTS);
      this.generateRefrees(tblMaster[10], data.REFREES);
      body.insertPageBreak(14);
      this.generateDeclaration(tblMaster[11], data.DECLARATION);
      body.insertHorizontalRule(16);
      this.generateApplicantSignature(tblMaster[12]);
      this.generateNotes(tblMaster[13]);
      body.insertPageBreak(19);
      this.generateOfficeSignature(tblMaster[14]);

      this.formatPage(body, tblMaster);

      return doc;
    } catch (error) {
      console.error('Error occurred while updateDocument in Application', error);
      throw new Error(`Error occurred while updateDocument`);
    }
  }

  static createReport(req) {
    try {
      const data = JSON.parse(req);
      const processedData = this.processData(data);
      const doc = this.updateDocument(processedData);
      return doc;
    } catch (error) {
      console.error('Error occurred while createReport in Application', error);
      throw new Error(`Error occurred while createReport`);
    }
  }
}

export default Application;
