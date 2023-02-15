class Report {
  static loadDoc() {
    const doc = DocumentApp.openById('1LLj7_1g-_l0AHUVMMx3GwErRnXwRXckifgi5o-mDCjc');
    const body = doc.getBody();
    initializePage(body);
    return doc.getBody();
  }

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
      [DocumentApp.Attribute.BORDER_WIDTH]: 0,
    };
    const titleStyle = {
      [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]: DocumentApp.HorizontalAlignment.CENTER,
      [DocumentApp.Attribute.BOLD]: true,
      [DocumentApp.Attribute.UNDERLINE]: true,
    };
    const subtitleStyle = {
      [DocumentApp.Attribute.BOLD]: true,
    };
    const styles = { bodyStyle, centerStyle, tableStyle, justifyStyle, titleStyle, subtitleStyle };
    return styles;
  }

  static formatTitle(table, styles) {
    table.setAttributes(styles.tableStyle);
    for (let i = 0; i < table.getCell(0, 0).getNumChildren(); i += 1) {
      table.getCell(0, 0).getChild(i).setAttributes(styles.titleStyle);
    }
  }

  static formatDate(table, styles) {
    table.setAttributes(styles.tableStyle);
  }

  static formatSymbols(table, styles) {
    table.setAttributes(styles.tableStyle);
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
      if (i % 3 === 0) {
        table.getCell(0, 0).getChild(i).setAttributes(styles.titleStyle);
        table
          .getCell(0, 0)
          .getChild(i)
          .setAttributes({
            [DocumentApp.Attribute.SPACING_AFTER]: 2,
          });
      } else if ((i - 1) % 3 === 0) {
        const subtable = table.getCell(0, 0).getChild(i);
        subtable.getRow(0).setAttributes(styles.subtitleStyle);
        subtable.getCell(0, 0).setAttributes({
          [DocumentApp.Attribute.WIDTH]: 120,
        });
        subtable.getCell(0, 2).setAttributes({
          [DocumentApp.Attribute.WIDTH]: 80,
        });
        subtable.getCell(0, 3).setAttributes({
          [DocumentApp.Attribute.WIDTH]: 80,
        });
        subtable.getCell(0, 5).setAttributes({
          [DocumentApp.Attribute.WIDTH]: 30,
        });
        subtable.getCell(0, 6).setAttributes({
          [DocumentApp.Attribute.WIDTH]: 30,
        });
      }
    }
  }

  static formatPage(body, tables) {
    const styles = initializeStyles();
    body.setAttributes(styles.bodyStyle);

    formatTitle(tables.tableTitle, styles);
    formatDate(tables.tableDates, styles);
    formatSymbols(tables.tableSymbols, styles);
    formatSignatures(tables.tableSignatures, styles);
    formatDescription(tables.tableDescription, styles);
    formatReports(tables.tableReports, styles);
  }

  static generateTitle(table, posts, department, faculty) {
    let titlePost = 'post of ';
    posts.forEach((post) => {
      titlePost += post.toUpperCase();
      titlePost += '/';
    });
    titlePost = titlePost.substring(0, titlePost.length - 1);
    titlePost += ', ';
    titlePost += department;
    titlePost += ',';
    titlePost += faculty;

    table.getCell(0, 0).insertParagraph(0, 'University of Peradeniya'.toUpperCase());
    table.getCell(0, 0).insertParagraph(1, titlePost.toUpperCase());
    table.getCell(0, 0).removeChild(table.getCell(0, 0).getChild(2));
  }

  static generateDates(table, advertised, closed) {
    const dateAdvertised = `Advertised on : ${advertised}`;
    const dateClosed = `Application closed on : ${closed}`;

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
    // const obj = JSON.parse(retdata);
    // const applicants = obj.applicants;

    const posts = ['Lecturer (Probationary)', 'Lecturer (Unconfirmed)', 'Senior Lecturer I', 'Senior Lecturer II'];

    const applicants = [
      ['Lecturer (Probationary)', '1', '1', '1', '1', '1', '1', '1'],
      ['Lecturer (Unconfirmed)', '2', '2', '2', '2', '2', '2', '2'],
      ['Lecturer (Probationary)', '1', '1', '1', '1', '1', '1', '1'],
      ['Lecturer (Unconfirmed)', '2', '2', '2', '2', '2', '2', '2'],
      ['Senior Lecturer I', '3', '3', '3', '3', '3', '3', '3'],
      ['Lecturer (Unconfirmed)', '2', '2', '2', '2', '2', '2', '2'],
      ['Senior Lecturer II', '4', '4', '4', '4', '4', '4', '4'],
    ];

    let i = 0;
    posts.forEach((post) => {
      const cell = table.getCell(0, 0);
      const data = [
        [
          'Name Address & DOB',
          'Qualifications',
          'Medals/Prizes/Scholarship & Publications',
          'Extra Curricular Activities',
          'Experience',
          'PC',
          'TR',
          'Remarks',
        ],
      ];
      applicants.forEach((applicant) => {
        if (applicant[0] === post) {
          data.push(applicant);
        }
      });
      if (data.length > 1) {
        const title = cell.insertParagraph(i, post.toUpperCase());
        cell.insertTable(i + 1, data);
        cell.insertParagraph(i + 2, '');
        i += 3;
      }
    });

    const removeIndex = table.getCell(0, 0).getNumChildren() - 1;
    table.getCell(0, 0).removeChild(table.getCell(0, 0).getChild(removeIndex));
  }

  static createMasterTable(body) {
    body.insertTable(0, [['']]);
    body.insertTable(1, [['', '']]);
    body.insertTable(2, [['', '', '', '']]);
    body.insertTable(3, [['']]);
    body.insertTable(4, [['']]);
    body.insertTable(5, [['', '', '', '']]);
  }

  static updateDocument() {
    // details
    const details = {
      posts: ['Lecturer (Probationary)', 'Lecturer (Unconfirmed)', 'Senior Lecturer I', 'Senior Lecturer II'],
      department: 'Department of Computer Science',
      faculty: 'Faculty of Science',
      description:
        'The department is especially looking for candidates having a four years B.Sc. degree in Agricultural Technology and Management/ Agriculture/Agricultural Science from a recognized University.Candidates who are applying for Lecturer (unconfirmed) and SeniorLecturer Grade II/I should have postgraduate qualification and teaching experience as stipulated in relevant circulars in the field ofIndustrial Biotechnology.',
    };

    const body = loadDoc();

    // structure
    createMasterTable(body);

    // content
    const tableTitle = body.getTables()[0];
    generateTitle(tableTitle, details.posts, details.department, details.faculty);

    const tableDates = body.getTables()[1];
    generateDates(tableDates, '05.12.2021', '04.01.2022');

    const tableSymbols = body.getTables()[2];
    generateSymbols(tableSymbols);

    const tableDescription = body.getTables()[3];
    generateDescription(tableDescription, details.description);

    const tableSignatures = body.getTables()[5];
    generateSignatures(tableSignatures);

    const tableReports = body.getTables()[4];
    generateReports(tableReports);

    // format
    const tables = { tableTitle, tableDates, tableSymbols, tableDescription, tableSignatures, tableReports };
    formatPage(body, tables);
  }

  // 0 : TIMESTAMP
  // 1 : APPLICATION ID
  // 2 : VACANCY ID
  // 3 : VACANCY FACULTY
  // 4 : VACANCY DEPARTMENT
  // 5 : VACANCY POST
  // 6 : GENDER
  // 7 : TITLE
  // 8 : NAME WITH INITITALS
  // 9 : FULLNAME
  // 10 : DATE OF BIRTH
  // 11 : PERMENANT RESIDENCE
  // 12 : CIVIL STATUS
  // 13 : MOBILE
  // 14 : RESIDENCE
  // 15 : EMAIL
  // 16 : DISTRICT
  // 17 : ELECTORATE
  // 18 : PROVINCE
  // 19 : CITY
  // 20 : CITIZENSHIP
  // 21 : NIC
  // 22 : BY DESCENT OR REGISTRATION
  // 23 : SPECIFY COUNTRY
  // 24 : PASSPORT NO
  // 25 : PROFFECIENCY
  // 26 : BASIC DEGREE
  // 27 : POSTGRADUATE DEGREE
  // 28 : BOOKS
  // 29 : JOURNALS
  // 30 : ABSTRACTS
  // 31 : AWARDS / SCHOLARSHIPS / MEDALS
  // 32 : EXTRA CURRICULAR ACTIVITIES
  // 33 : PRESENT OCCUPATION DESIGNATION
  // 34 : DEPARTMENT / INSTITUTE
  // 35 : STARTED WORKING FROM
  // 36 : SALARY DRAWN
  // 37 : PREVIOUS EMPLOYMENTS
  // 38 : REFEREE 1
  // 39 : REFREE 2
  // 40 : COOMENDATIONS / PUNISHMENTS
  // 41 : IF YES SPECIFY
  // 42 : VACATION POST NOTICES
  // 43 : IF YES SPECIFY
  // 44 : BOND VIOLATION
  // 45 : BOND VALUE
  // 46 : UNIVERSITY / INSTITUTE
  // 47 : SHORTLISTED STATUS

  // const headers =
  //     '["TIMESTAMP","APPLICATION ID","VACANCY ID","VACANCY FACULTY","VACANCY DEPARTMENT","VACANCY POST","GENDER","TITLE","NAME WITH INITITALS","FULLNAME","DATE OF BIRTH","PERMENANT RESIDENCE","CIVIL STATUS","MOBILE","RESIDENCE","EMAIL","DISTRICT","ELECTORATE","PROVINCE","CITY","CITIZENSHIP","NIC","BY DESCENT OR REGISTRATION","SPECIFY COUNTRY","PASSPORT NO","PROFFECIENCY","BASIC DEGREE","POSTGRADUATE DEGREE","BOOKS","JOURNALS","ABSTRACTS","AWARDS / SCHOLARSHIPS / MEDALS","EXTRA CURRICULAR ACTIVITIES","PRESENT OCCUPATION DESIGNATION","DEPARTMENT / INSTITUTE","STARTED WORKING FROM","SALARY DRAWN","PREVIOUS EMPLOYMENTS","REFEREE 1","REFREE 2","COOMENDATIONS / PUNISHMENTS","IF YES SPECIFY","VACATION POST NOTICES","IF YES SPECIFY","BOND VIOLATION","BOND VALUE","UNIVERSITY / INSTITUTE","SHORTLISTED STATUS"]';
  //   const exampleRow =
  //     '["2023-01-27T03:45:38.000Z",1,1,"Faculty of Agriculture","Department of Physics","Lecturer (Probationary)","Female","Ms.","N.M. Perera","Narmada Malini Perera","1994-02-11T00:00:00.000Z","22/E, Lane Park Avenue","Single",701234567,811234567,"example@gmail.com","Colombo","Colombo 7","Western","Kandy","Other","940892207V","byRegistration","","","["sinhala","tamil","english"]",""[[\\"B.Sc.\\",\\"\\",\\"zoology\\",\\"\\",\\"University of Peradeniya\\",\\"Argentina\\",\\"2023-01-11\\",\\"2023-01-02\\",\\"First Class\\",\\"3.78\\"]]"",""[[\\"P.hD.\\",\\"\\",\\"\\",\\"\\",\\"\\",\\"Azerbaijan\\",\\"2023-01-09\\",\\"2023-01-05\\",\\"\\",\\"\\",\\"by Research\\"],[\\"\\",\\"\\",\\"\\",\\"\\",\\"colombo\\",\\"Armenia\\",\\"2023-01-02\\",\\"2023-01-09\\",\\"Second Lower\\",\\"\\",\\"by Research\\"]]"",""[[\\"book1\\",\\"author1\\",\\"2023-01-01\\",\\"213576\\"]]"",""[[\\"journal2\\",\\"undefined\\",\\"source2\\",\\"2023-01-24\\",\\"indexed\\",\\"conference\\"]]"",""[[\\"abstract3\\",\\"author3\\",\\"source3\\",\\"2023-01-07\\",\\"non-indexed\\",\\"other\\"]]"",""[[\\"award1\\",\\"institute1\\",\\"2005\\",\\"Best Performance\\"],[\\"scholarship1\\",\\"University of Kurtin\\",\\"2014\\",\\"Semiconductor research\\"]]"",""[[\\"extra1\\",\\"2006\\",\\"National\\",\\"description1\\"]]"","present designation","present dept","2023-01-15T00:00:00.000Z",20000,""[[\\"previous designation\\",\\"SLIIT\\",\\"2021-06-29\\",\\"2023-01-31\\",\\"reason1\\"]]"","{"rName1":"Name 1","rTelephone1":"0811234567","rAddress1":"address 1","rEmail1":"emxail1@gmail.com"}","{"rName2":"Name 2","rTelephone2":"0813065040","rAddress2":"address 2","rEmail2":"exmail2@gmail.com"}","No","","No","","No","","","approved"]';

  static prepareData() {}
}

export default Report;
