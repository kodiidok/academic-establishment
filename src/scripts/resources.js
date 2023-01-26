import DatabaseOperations from './DBOperations';
import Utils from './utils';

class Resources {
  static initialLoading() {
    const rtnObj = {};
    try {
      // rtnObj.appUser = this.resolveAppUser();
      rtnObj.scriptUrl = Utils.getScriptUrl();
      rtnObj.appName = Utils.getAppName();
      rtnObj.appDescription = Utils.getAppDescription();
      rtnObj.appRedirectURL = Utils.getAppRedirectURL();
      // rtnObj.facultiesDepartments = this.getFacultiesAndDepartmentsList();
      rtnObj.posts = this.getPostData();
      rtnObj.vacancies = this.getVacancyData();
      rtnObj.faculties = this.getFacultyData();
      rtnObj.departments = this.getDepartmentData();

      rtnObj.bdTitles = this.getBdTitleData();
      rtnObj.pgdTitles = this.getPgdTitleData();
      rtnObj.subjectAreas = this.getSubjectAreaData();

      // rtnObj.reqMain = this.getReqMainData();
      // rtnObj.requirements = this.getRequirements();

      return rtnObj;
    } catch (error) {
      console.error('Error occurred while initialLoading in Resources', error);
      throw new Error(`Error occurred while initialLoading`);
    }
  }

  static resolveAppUser() {
    try {
      const retObj = {};

      if (Utils.getCurrentUser()) {
        const email = Utils.getCurrentUser();

        DatabaseOperations.cacheEnabled = false;
        DatabaseOperations.initilizeDatabase(Utils.getMainDBID());
        DatabaseOperations.openDatabaseConnection(Utils.getAppRoleSheetName());
        // const foundObj = DatabaseOperations.queryDatabase(`KEY:Email === "${email}"`);
        // const foundObj = DatabaseOperations.readDatabaseCache();

        if (foundObj && typeof foundObj !== 'undefined') {
          retObj.data = foundObj;
          return retObj;
        }
        const facCode = Utils.getCurrentUser().split('@')[1].split('.')[0];
        let faculty = '';
        switch (facCode) {
          case 'agri':
            faculty = 'Faculty of Agriculture';
            break;
          case 'ahs':
            faculty = 'Faculty of Allied Health Sciences';
            break;
          case 'arts':
            faculty = 'Faculty of Arts';
            break;
          case 'dental':
            faculty = 'Faculty of Dental Sciences';
            break;
          case 'eng':
            faculty = 'Faculty of Engineering';
            break;
          case 'mgt':
            faculty = 'Faculty of Management';
            break;
          case 'med':
            faculty = 'Faculty of Medicine';
            break;
          case 'sci':
            faculty = 'Faculty of Science';
            break;
          case 'vet':
            faculty = 'Faculty of Veterinary Medicine and Animal Science';
            break;
          default:
            faculty = 'UNIVERSITY OF PERADENIYA';
            break;
        }

        const guestUser = {
          Name: 'INTERNAL_USER',
          Email: email,
          Faculty: faculty,
          Department: '',
          Role: 'USER_UOP',
        };

        const outerArray = [];
        outerArray.push(guestUser);
        retObj.data = outerArray;

        return retObj;
      }
      const guestUser = {
        Name: 'Guest',
        Email: '',
        Faculty: '',
        Department: '',
        Role: 'GUEST',
      };

      const outerArray = [];
      outerArray.push(guestUser);
      retObj.data = outerArray;

      return retObj;
    } catch (error) {
      console.error('Error occurred while resolveAppUser in Resources', error);
      throw new Error(`Error occurred while resolveAppUser`);
    }
  }

  static getReqMainData() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getReqDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getReqMainSheetName());
      // const foundObj = DatabaseOperations.queryDatabase(`KEY:STATUS === "OPEN"`);
      const foundObj = DatabaseOperations.readDatabaseCache();

      const retObj = {};

      retObj.reqMain = foundObj;

      return retObj;
    } catch (error) {
      console.error('Error occurred while getReqMainData in Resources', error);
      throw new Error(`Error occurred while getReqMainData`);
    }
  }

  static getRequirements() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getReqDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getReqSheetName());
      // const foundObj = DatabaseOperations.queryDatabase(`KEY:STATUS === "OPEN"`);
      const foundObj = DatabaseOperations.readDatabaseCache();

      const retObj = {};

      retObj.requirements = foundObj;

      return retObj;
    } catch (error) {
      console.error('Error occurred while getReqData in Resources', error);
      throw new Error(`Error occurred while getReqData`);
    }
  }

  static getBdTitleData() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getMainDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getBdTitlesListSheetName());
      // const foundObj = DatabaseOperations.queryDatabase(`KEY:STATUS === "OPEN"`);
      const foundObj = DatabaseOperations.readDatabaseCache();

      const retObj = {};

      retObj.bdTitles = foundObj;

      return retObj;
    } catch (error) {
      console.error('Error occurred while getBdTitleData in Resources', error);
      throw new Error(`Error occurred while getBdTitleData`);
    }
  }

  static getPgdTitleData() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getMainDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getPgdTitlesListSheetName());
      // const foundObj = DatabaseOperations.queryDatabase(`KEY:STATUS === "OPEN"`);
      const foundObj = DatabaseOperations.readDatabaseCache();

      const retObj = {};

      retObj.pgdTitles = foundObj;

      return retObj;
    } catch (error) {
      console.error('Error occurred while getPgdTitleData in Resources', error);
      throw new Error(`Error occurred while getPgdTitleData`);
    }
  }

  static getSubjectAreaData() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getMainDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getSubjectAreaListSheetName());
      // const foundObj = DatabaseOperations.queryDatabase(`KEY:STATUS === "OPEN"`);
      const foundObj = DatabaseOperations.readDatabaseCache();

      const retObj = {};

      retObj.subjectAreas = foundObj;

      return retObj;
    } catch (error) {
      console.error('Error occurred while getSubjectAreaData in Resources', error);
      throw new Error(`Error occurred while getSubjectAreaData`);
    }
  }

  static getVacancyData() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getDataDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getVacanciesListSheetName());
      // const foundObj = DatabaseOperations.queryDatabase(`KEY:STATUS === "OPEN"`);
      const foundObj = DatabaseOperations.readDatabaseCache();

      const retObj = {};

      retObj.vacancies = foundObj;

      return retObj;
    } catch (error) {
      console.error('Error occurred while getVacancyData in Resources', error);
      throw new Error(`Error occurred while getVacancyData`);
    }
  }

  static getPostData() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getDataDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getPostListSheetName());
      // const foundObj = DatabaseOperations.queryDatabase(`KEY:POST !== "POST"`);
      const foundObj = DatabaseOperations.readDatabaseCache();

      const retObj = {};

      retObj.posts = foundObj;

      return retObj;
    } catch (error) {
      console.error('Error occurred while getPostData in Resources', error);
      throw new Error(`Error occurred while getPostData`);
    }
  }

  static getFacultyData() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getDataDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getFacListSheetName());
      const foundObj = DatabaseOperations.readDatabaseCache();

      const retObj = {};

      retObj.faculties = foundObj;

      return retObj;
    } catch (error) {
      console.error('Error occurred while getFacultyData in Resources', error);
      throw new Error(`Error occurred while getFacultyData`);
    }
  }

  static getDepartmentData() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getDataDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getDeptListSheetName());
      const foundObj = DatabaseOperations.readDatabaseCache();

      const retObj = {};

      retObj.departments = foundObj;

      return retObj;
    } catch (error) {
      console.error('Error occurred while getDepartmentData in Resources', error);
      throw new Error(`Error occurred while getDepartmentData`);
    }
  }

  /*
  static saveRequest(obj) {
    try {
      if (obj) {
        DatabaseOperations.cacheEnabled = false;
        DatabaseOperations.initilizeDatabase(Utils.getMainDBID());
        DatabaseOperations.openDatabaseConnection(Utils.getApplicationSheetName());

        const currentDate = Utils.getCurrentDate();
        const applicationID = Utils.genApplicationID();

        const request = {
          // id: '=ROW()',
          ApplicationID: applicationID,
          SubmittedDate: currentDate,

          VacancyID: obj.vacancyID,
          VacancyPost: obj.vacancyPost,
          VacancyFaculty: obj.vacancyFac,
          VacancyDepartment: obj.vacancyDept,

          Gender: obj.pdGender,
          Title: obj.personalTitle,
          NameWithInitials: obj.personalNameInit,
          FullName: obj.personalFullName,
          DateOfBirth: obj.personalDOB,
          PostalAddress: obj.personalAddress,
          CivilStatus: obj.civilStatus,
          Mobile: obj.personalMobile,
          Recidence: obj.personalTp,
          Email: obj.personalEmail,
          District: obj.district,
          Electorate: obj.electorate,
          Province: obj.province,
          City: obj.city,
          Citizenship: obj.Citizenship,
          DescentOrByRegistration: obj.descentOrReg,
          NIC: obj.nic,
          CountryOfCitizenship: obj.specifyCountry,
          PassportNo: obj.passportNo,
          SpouseName: obj.spouseName,
          SpouseDesignation: obj.spouseDesignation,
          HighestEducation: obj.highestEducation,
          ProficiencyOnLanguages: obj.lang,

          BasicDegree: obj.basicDegree,
          BasicDegreeCountry: obj.bdCountry,
          BasicDegreeUniversity: obj.bdUniversity,
          BasicDegreeYearFrom: obj.bdYearFrom,
          BasicDegreeYearTo: obj.bdYearTo,
          BasicDegreeClass: obj.bdlass,
          BasicDegreeGPA: obj.bdGPA,

          PGDegree: obj.pgd,

          Awards: obj.awards,

          ResearchPublicationsBooks: obj.books,
          ResearchPublicationsJournals: obj.journals,
          ResearchPublicationsAbstracts: obj.abstracts,

          CommendationsAndPunishments: obj.commendations,

          Vacations: obj.vacations,

          ExtraCurricularActivities: obj.extraCurrActivity,

          RefereeName1: obj.rName1,
          RefereeTelephone1: obj.rTelephone1,
          RefereeAddress1: obj.rAddress1,
          RefereeEmail1: obj.rEmail1,

          RefereeName2: obj.rName2,
          RefereeTelephone2: obj.rTelephone2,
          RefereeAddress2: obj.rAddress2,
          RefereeEmail2: obj.rEmail2,

          Designation: obj.poDesignation,
          InstitutionOrDepartment: obj.poDept,
          PresentOccupationFrom: obj.poFrom,
          SalaryDrawn: obj.poSalaryDrawn,

          PreviousEmployments: obj.pEmployments,
          BondViolation: bondViolator,
          BondValue: bondValue,
          BondUniversityOrInstitute: uniInstitute,
        };

        const funcStatus = DatabaseOperations.saveItem(request);

        if (!funcStatus) {
          console.error(`Error occurred while saveRequest in Resources`);
        }

        // Send Mail to Submitter
        // const heading = 'ONLINE APPLICATION - University of Peradeniya';
        // const description = 'Your application has been submitted successfully..!';
        // const name = obj.FullName;
        // const email = obj.Email;
        // const post = obj.Post;
        // const { VacancyID } = obj;
        // const faculty = obj.Faculty;
        // const department = obj.Department;
        // const emailAddress = `${obj.Email},${Utils.getProcessingEmails()}`;

        // Utils.sendMail(heading, description, emailAddress, name, email, post, VacancyID, faculty, department);

        return funcStatus;
      }

      return '';
    } catch (error) {
      console.error('Error occurred while saveRequest in Resources', error);
      throw new Error(`Error occurred while saveRequest`);
    }
    DatabaseOperations.cacheEnabled = false;
    DatabaseOperations.initilizeDatabase(Utils.getMainDBID());
    DatabaseOperations.openDatabaseConnection(Utils.getApplicationSheetName());
    const request = obj;
    request.status = true;
    request.connectedDatabase = DatabaseOperations.saveItem(obj);
    return request;
  }
  */

  static saveRequest(obj) {
    let retObj = '';
    try {
      if (obj) {
        DatabaseOperations.cacheEnabled = false;
        DatabaseOperations.initilizeDatabase(Utils.getMainDBID());
        DatabaseOperations.openDatabaseConnection(Utils.getApplicationSheetName());
        retObj = DatabaseOperations.saveItem(obj);
      }
      return retObj;
    } catch (error) {
      console.error('Error occurred while saveRequest in Resources', error);
      throw new Error(`Error occurred while saveRequest`);
    }
  }
}

export default Resources;
