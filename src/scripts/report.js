/* eslint-disable prefer-destructuring */
class Report {
  static getPdfBlob() {
    // var doc = DocumentApp.create('My Document');
    const doc = createReport();
    // var paragraph = doc.getBody().appendParagraph('Hello World! This is a new Document!');
    const file = DriveApp.getFileById(doc.getId());
    const blob = file.getBlob();
    const bytes = blob.getBytes();
    const b64 = Utilities.base64Encode(bytes);
    return b64;
  }

  static loadSheetData() {
    const ss = SpreadsheetApp.openById('1MTE8MdB-BwDG80wFlNI8zaADsnkG3XJsHxLW79ndXa4');
    const ws = ss.getSheetByName('mainsheet');
    const data = ws.getDataRange().getValues();
    return JSON.stringify(data);
  }

  static loadRequiredData() {
    const details = {
      report: 'short listed',
      posts: [
        'Lecturer (Probationary)',
        // 'Lecturer (Unconfirmed)',
        // 'Senior Lecturer I',
        // 'Senior Lecturer II'
      ],
      department: 'Department of Computer Science',
      faculty: 'Faculty of Science',
      description:
        'The department is especially looking for candidates having a four years B.Sc. degree in Agricultural Technology and Management/ Agriculture/Agricultural Science from a recognized University.Candidates who are applying for Lecturer (unconfirmed) and SeniorLecturer Grade II/I should have postgraduate qualification and teaching experience as stipulated in relevant circulars in the field ofIndustrial Biotechnology.',
    };
    return details;
  }

  static loadDoc() {
    const doc = DocumentApp.openById('1LLj7_1g-_l0AHUVMMx3GwErRnXwRXckifgi5o-mDCjc');
    const body = doc.getBody();
    initializePage(body);
    return doc;
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
      .setPageHeight(595.276)
      .setPageWidth(841.89)
      .setMarginTop(30)
      .setMarginLeft(50)
      .setMarginRight(50)
      .setMarginBottom(50);
  }

  static initializeStyles() {
    const bodyStyle = {
      [DocumentApp.Attribute.FONT_FAMILY]: 'Roboto Serif',
      [DocumentApp.Attribute.FONT_SIZE]: 8,
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
      [DocumentApp.Attribute.BORDER_WIDTH]: 0,
    };
    const titleStyle = {
      [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]: DocumentApp.HorizontalAlignment.CENTER,
      [DocumentApp.Attribute.BOLD]: true,
      [DocumentApp.Attribute.UNDERLINE]: false,
    };
    const subtitleStyle = {
      [DocumentApp.Attribute.BOLD]: true,
    };
    const officeUseOnly = {
      [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]: DocumentApp.HorizontalAlignment.CENTER,
      [DocumentApp.Attribute.SPACING_AFTER]: 50,
      [DocumentApp.Attribute.PADDING_TOP]: 0,
    };
    const metaTitleStyle = {
      [DocumentApp.Attribute.BOLD]: true,
      [DocumentApp.Attribute.FONT_SIZE]: 10,
    };
    const rightStyle = {
      [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]: DocumentApp.HorizontalAlignment.RIGHT,
    };

    styles = {
      bodyStyle,
      centerStyle,
      tableStyle,
      justifyStyle,
      titleStyle,
      subtitleStyle,
      officeUseOnly,
      metaTitleStyle,
      rightStyle,
    };

    return styles;
  }

  // format

  static formatTitle(table, styles) {
    table.setAttributes(styles.tableStyle);
    for (let i = 0; i < table.getCell(0, 0).getNumChildren(); i += 1) {
      table.getCell(0, 0).getChild(i).setAttributes(styles.metaTitleStyle);
    }
    for (let i = 0; i < table.getCell(0, 1).getNumChildren(); i += 1) {
      table.getCell(0, 1).getChild(i).setAttributes(styles.metaTitleStyle);
      table.getCell(0, 1).getChild(i).setAttributes(styles.rightStyle);
    }
  }

  static formatDate(table, styles) {
    table.setAttributes(styles.tableStyle);

    const rightcell = table.getCell(0, 1);
    const para = rightcell.getChild(0);

    const paraStyle = {};
    paraStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.RIGHT;
    para.setAttributes(paraStyle);
  }

  static formatSymbols(table, styles) {
    table.setAttributes(styles.tableStyle);

    const rightcell1 = table.getCell(0, 2);
    const rightcell2 = table.getCell(0, 3);
    const para1 = rightcell1.getChild(0);
    const para2 = rightcell2.getChild(0);

    const paraStyle = {};
    paraStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.RIGHT;

    para1.setAttributes(paraStyle);
    para2.setAttributes(paraStyle);
  }

  static formatDescription(table, styles) {
    table.setAttributes(styles.tableStyle);
    table.getCell(0, 0).getChild(0).setAttributes(styles.justifyStyle);
  }

  static formatSignatures(table, styles) {
    table.setAttributes(styles.tableStyle);
    table.getCell(0, 0).setAttributes({
      [DocumentApp.Attribute.WIDTH]: 250,
      [DocumentApp.Attribute.PADDING_TOP]: 50,
    });
    table.getCell(0, 1).setAttributes({
      [DocumentApp.Attribute.WIDTH]: 170,
      [DocumentApp.Attribute.PADDING_TOP]: 50,
    });
    table.getCell(0, 2).setAttributes({
      [DocumentApp.Attribute.PADDING_TOP]: 50,
    });
    table.getCell(0, 3).setAttributes({
      [DocumentApp.Attribute.WIDTH]: 100,
      [DocumentApp.Attribute.PADDING_TOP]: 50,
    });
    table
      .getCell(0, 3)
      .getChild(0)
      .setAttributes({
        [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]: DocumentApp.HorizontalAlignment.RIGHT,
        [DocumentApp.Attribute.PADDING_TOP]: 50,
      });
  }

  static formatReports(table, styles) {
    table.setAttributes(styles.tableStyle);
    const numChildren = table.getCell(0, 0).getNumChildren();
    for (let i = 0; i < numChildren; i += 1) {
      const subtable = table.getCell(0, 0).getChild(i);
      subtable.getRow(0).setAttributes(styles.subtitleStyle);
      subtable.getCell(0, 0).setAttributes({
        [DocumentApp.Attribute.WIDTH]: 80,
      });
      subtable.getCell(0, 1).setAttributes({
        [DocumentApp.Attribute.WIDTH]: 100,
      });
      subtable.getCell(0, 2).setAttributes({
        [DocumentApp.Attribute.WIDTH]: 100,
      });
      subtable.getCell(0, 3).setAttributes({
        [DocumentApp.Attribute.WIDTH]: 80,
      });
      subtable.getCell(0, 6).setAttributes({
        [DocumentApp.Attribute.WIDTH]: 30,
      });
      subtable.getCell(0, 7).setAttributes({
        [DocumentApp.Attribute.WIDTH]: 30,
      });
    }
  }

  static formatHeader(table, styles) {
    table.setAttributes(styles.tableStyle);

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

  static formatPage(body, tables) {
    const styles = initializeStyles();
    body.setAttributes(styles.bodyStyle);

    formatHeader(tables[0], styles);
    formatTitle(tables[1], styles);
    formatDate(tables[2], styles);
    formatSymbols(tables[3], styles);
    formatDescription(tables[4], styles);
    formatReports(tables[5], styles);
    formatSignatures(tables[6], styles);
  }

  // process

  static processData(retdata) {
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

  static processDegree(data) {
    // Logger.log(`${data[0]}, ${data[1]}, ${data[2]}, ${data[3]}`);

    let title = '';
    if (data[0]) {
      title = data[0];
      // Logger.log(0);
    } else if (data[1]) {
      title = data[1];
      // Logger.log(1);
    }

    let subject = '';
    if (data[2]) {
      subject = data[2];
      // Logger.log(2);
    } else if (data[3]) {
      subject = data[3];
      // Logger.log(3);
    }

    let method = '';
    if (data[10]) {
      method = `${data[10]}`;
    }

    const name = `${title} ${subject}`;
    const university = `${data[4]}, ${data[5]}`;
    const duration = `From\t${data[6]}\nTo\t${data[7]}`;
    const performance = `(${data[8]}, ${data[9]})`;
    const retobj = `\n${name}\n${university}\n${duration}\n${performance}\n\n`;
    return retobj;
  }

  static processDegrees(retdata) {
    const rawdata = JSON.parse(JSON.parse(retdata));
    const data = [];
    rawdata.forEach((item) => {
      const temp = processDegree(item);
      data.push(temp);
    });
    return data;
  }

  static processPublications(retdata) {
    const data = retdata;
    let publications = '';
    data.forEach((item) => {
      let publication = '';
      item.forEach((element) => {
        publication += `${element}\n`;
      });
      publications += `${publication}\n`;
    });
    return publications;
  }

  static processResearch(retdata) {
    let books = processPublications(JSON.parse(JSON.parse(retdata.BOOKS)));
    let journals = processPublications(JSON.parse(JSON.parse(retdata.JOURNALS)));
    let abstracts = processPublications(JSON.parse(JSON.parse(retdata.ABSTRACTS)));

    if (!books) {
      books = 'None';
    }

    if (!journals) {
      journals = 'None';
    }

    if (!abstracts) {
      abstracts = 'None';
    }

    const data = `BOOKS\n\n${books}JOURNALS\n\n${journals}ABSTRACTS\n\n${abstracts}`;

    return data;
  }

  static processAward(retdata) {
    const data = retdata;
    let award = '';
    data.forEach((item) => {
      award += `${item}\n`;
    });
    return `${award}\n`;
  }

  static processAwards(retdata) {
    const rawdata = JSON.parse(JSON.parse(retdata));
    const data = [];
    rawdata.forEach((item) => {
      data.push(processAward(item));
    });
    return data;
  }

  static processActivity(retdata) {
    const data = retdata;
    let activity = '';
    data.forEach((item) => {
      activity += `${item}\n`;
    });
    return `${activity}\n`;
  }

  static processActivities(retdata) {
    const rawdata = JSON.parse(JSON.parse(retdata));
    const data = [];
    rawdata.forEach((item) => {
      data.push(processActivity(item));
    });
    return data;
  }

  static processPresentEmployment(retdata) {
    let data = '';
    data += `${retdata.DESIGNATION}\n`;
    data += `${retdata.DEPARTMENT}\n`;
    data += `${retdata.STARTED_WORKING.substring(0, 10)}\n`;
    data += `${retdata.SALARY}\n`;
    return data;
  }

  static processExperience(retdata) {
    const data = retdata;
    let experience = '';
    data.forEach((item) => {
      experience += `${item}\n`;
    });
    return `${experience}\n`;
  }

  static processExperiences(retdata) {
    const rawdata = JSON.parse(JSON.parse(retdata));
    const data = [];
    rawdata.forEach((item) => {
      data.push(processExperience(item));
    });
    return data;
  }

  static processApplicant(retdata) {
    const obj = retdata;

    const post = obj.INFO.VACANCY.POST;
    const value0 = post;

    const name = obj.PERSONAL_DETAILS.FULLNAME;
    const address = obj.PERSONAL_DETAILS.PERMANENT_RESIDENCE;
    const dob = obj.PERSONAL_DETAILS.DATE_OF_BIRTH;
    const value1 = `${name}\n\n${address}\n\n${dob}`;

    const bdegree = processDegrees(obj.BASIC_DEGREE);
    const pgdegree = processDegrees(obj.POSTGRADUATE_DEGREE);
    const value2 = `UNIVERSITY EDUCATION\n${bdegree}\n\nPOSTGRADUATE QUALIFICATIONS\n${pgdegree}`;

    const research = processResearch(obj.RESEARCH);
    const value3 = `${research}`;

    const awards = processAwards(obj.AWARDS);
    const value4 = `${awards}`;

    const extra = processActivities(obj.EXTRA_CURRICULAR);
    const value5 = `${extra}`;

    const presentExp = processPresentEmployment(obj.PRESENT_OCCUPATION);
    const previousExp = processExperiences(obj.PREVIOUS_EMPLOYMENTS);
    const value6 = `AT PRESENT\n\n${presentExp}\nPAST EXPERIENCES\n\n${previousExp}`;

    const value7 = '';
    const value8 = '';
    const value9 = '';

    const applicant = [value0, value1, value2, value3, value4, value5, value6, value7, value8, value9];

    return applicant;
  }

  // generate

  static generateTitle(table, post, department, faculty, report) {
    let titlePost = 'post of ';
    // posts.forEach((post) => {
    //   titlePost += post.toUpperCase();
    //   titlePost += '/';
    // });
    // titlePost = titlePost.substring(0,titlePost.length-1);
    titlePost += post;
    titlePost += '\n';
    titlePost += department;
    titlePost += ',';
    titlePost += faculty;

    const cell1 = table.getCell(0, 0);
    cell1.insertParagraph(0, titlePost.toUpperCase());
    cell1.removeChild(cell1.getChild(cell1.getNumChildren() - 1));

    const reportType = `${report} applicants`;
    const cell2 = table.getCell(0, 1);
    cell2.insertParagraph(0, reportType.toUpperCase());
    cell2.removeChild(cell2.getChild(cell2.getNumChildren() - 1));
  }

  static generateDates(table, advertised, closed) {
    const dateAdvertised = `Advertised on : ${advertised}`;
    const dateClosed = `Calling for Applications closed on : ${closed}`;

    table.getCell(0, 0).insertParagraph(0, dateAdvertised);
    table.getCell(0, 0).removeChild(table.getCell(0, 0).getChild(1));

    table.getCell(0, 1).insertParagraph(0, dateClosed);
    table.getCell(0, 1).removeChild(table.getCell(0, 1).getChild(1));
  }

  static generateSymbols(table) {
    table.getCell(0, 0).insertParagraph(0, 'TR: Transcript');
    table.getCell(0, 0).removeChild(table.getCell(0, 0).getChild(1));

    table.getCell(0, 1).insertParagraph(0, 'PC: Sent through proper channel');
    table.getCell(0, 1).removeChild(table.getCell(0, 1).getChild(1));

    table.getCell(0, 2).insertParagraph(0, "RR: Referee's Report");
    table.getCell(0, 2).removeChild(table.getCell(0, 2).getChild(1));

    table.getCell(0, 3).insertParagraph(0, 'R: Remarks');
    table.getCell(0, 3).removeChild(table.getCell(0, 3).getChild(1));
  }

  static generateDescription(table, description) {
    table.getCell(0, 0).insertParagraph(0, description);
    table.getCell(0, 0).removeChild(table.getCell(0, 0).getChild(1));
  }

  static generateSignatures(table) {
    table.getCell(0, 0).insertParagraph(0, 'Head of the Department ..................................');
    table.getCell(0, 0).removeChild(table.getCell(0, 0).getChild(1));

    table.getCell(0, 1).insertParagraph(0, 'Dean .....................................');
    table.getCell(0, 1).removeChild(table.getCell(0, 1).getChild(1));

    table.getCell(0, 2).insertParagraph(0, 'Snr. Asst. Registrar ...........................................');
    table.getCell(0, 2).removeChild(table.getCell(0, 2).getChild(1));

    table.getCell(0, 3).insertParagraph(0, '......./03/2023');
    table.getCell(0, 3).removeChild(table.getCell(0, 3).getChild(1));
  }

  static generateReports(table, retdata) {
    const applicants = [];
    retdata.forEach((item) => {
      applicants.push(processApplicant(item));
    });

    const posts = ['Lecturer (Probationary)'];

    let i = 0;
    posts.forEach((post) => {
      const cell = table.getCell(0, 0);
      const data = [
        [
          'Name Address & DOB',
          'Qualifications',
          'Research Publications',
          'Awards/Medals/Prizes/Scholarships',
          'Extra Curricular Activities',
          'Experience',
          'PC',
          'TR',
          'Remarks',
        ],
      ];
      applicants.forEach((applicant) => {
        if (applicant[0] === post) {
          applicant.splice(0, 1);
          data.push(applicant);
        }
      });
      if (data.length > 1) {
        // const title = cell.insertParagraph(i, post.toUpperCase());
        // cell.insertTable(i+1, data);
        // cell.insertParagraph(i+2, '');
        // i += 3;
        cell.insertTable(i, data);
        i += 1;
      }
    });

    const removeIndex = table.getCell(0, 0).getNumChildren() - 1;
    table.getCell(0, 0).removeChild(table.getCell(0, 0).getChild(removeIndex));
  }

  static generateHeader(table) {
    const cell1 = table.getCell(0, 0);
    const imageElement = cell1.insertImage(0, loadResources().image);
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

  static createMasterTable(body) {
    body.insertTable(0, [['', '']]);
    body.insertTable(1, [['', '']]);
    body.insertTable(2, [['', '']]);
    body.insertTable(3, [['', '', '', '']]);
    body.insertTable(4, [['']]);
    body.insertTable(5, [['']]);
    body.insertTable(6, [['', '', '', '']]);
  }

  // document

  static updateDocument(retdata) {
    const { data } = retdata;
    const { details } = retdata;

    const doc = loadDoc();
    const body = doc.getBody();

    createMasterTable(body);
    const tableMaster = body.getTables();

    generateHeader(tableMaster[0]);
    generateTitle(tableMaster[1], details.posts, details.department, details.faculty, details.report);
    generateDates(tableMaster[2], '05.12.2021', '04.01.2022');
    generateSymbols(tableMaster[3]);
    generateDescription(tableMaster[4], details.description);
    generateReports(tableMaster[5], data);
    generateSignatures(tableMaster[6]);

    // format
    formatPage(body, tableMaster);

    return doc;
  }

  static createReport() {
    const data = JSON.parse(loadSheetData());
    data.splice(0, 1);
    const processedDetails = loadRequiredData();
    const processedData = [];
    data.forEach((item) => {
      processedData.push(processData(item));
    });
    const doc = updateDocument({ data: processedData, details: processedDetails });
    return doc;
  }
}

export default Report;
