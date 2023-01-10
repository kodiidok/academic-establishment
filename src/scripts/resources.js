import DatabaseOperations from './DBOperations';
import Utils from './utils';

class Resources {
  static initialLoading() {
    const rtnObj = {};
    try {
      rtnObj.appUser = this.resolveAppUser();
      rtnObj.scriptUrl = Utils.getScriptUrl();
      rtnObj.appName = Utils.getAppName();
      rtnObj.appDescription = Utils.getAppDescription();
      rtnObj.appRedirectURL = Utils.getAppRedirectURL();
      rtnObj.facultiesDepartments = this.getFacultiesAndDepartmentsList();
      rtnObj.posts = this.getPostData();
      rtnObj.data = this.getVacancyData();

      return rtnObj;
    } catch (error) {
      console.error('Error occurred while saveLeave in Resources', error);
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
        const foundObj = DatabaseOperations.queryDatabase(`KEY:Email === "${email}"`);

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

  static getVacancyData() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getVacanciesDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getVacanciesListSheetName());
      const foundObj = DatabaseOperations.queryDatabase(`KEY:STATUS === "OPEN"`);

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
      DatabaseOperations.initilizeDatabase(Utils.getVacanciesDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getPostListSheetName());
      const foundObj = DatabaseOperations.queryDatabase(`KEY:POST !== "POST"`);

      const retObj = {};

      retObj.posts = foundObj;

      return retObj;
    } catch (error) {
      console.error('Error occurred while getPostData in Resources', error);
      throw new Error(`Error occurred while getPostData`);
    }
  }

  static getFacultiesAndDepartmentsList() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getFacultyDepartmentDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getFacultyDepartmentSheetName());
      const foundObj = DatabaseOperations.queryDatabase(`KEY:Department !== "Department"`);

      const retObj = {};

      retObj.facultiesDepartments = foundObj;

      return retObj;
    } catch (error) {
      console.error('Error occurred while getFacultiesAndDepartmentsList in Resources', error);
      throw new Error(`Error occurred while getFacultiesAndDepartmentsList`);
    }
  }

  static saveRequest(obj) {
    try {
      if (obj) {
        DatabaseOperations.cacheEnabled = false;
        DatabaseOperations.initilizeDatabase(Utils.getVacanciesDBID());
        DatabaseOperations.openDatabaseConnection(Utils.getApplicationSheetName());

        const currentDate = Utils.getCurrentDate();

        const request = {
          id: '=ROW()',
          SubmittedDate: currentDate,
          Category: obj.Category,
          Post: obj.Post,
          VacancyID: obj.VacancyID,
          Gender: obj.Gender,
          Title: obj.Title,
          FirstName: obj.FirstName,
          Surname: obj.Surname,
          FullName: obj.FullName,
          DateOfBirth: obj.DateOfBirth,
          PostalAddress: obj.PostalAddress,
          NIC: obj.NIC,
          Mobile: obj.Mobile,
          Telephone: obj.Telephone,
          Email: obj.Email,
          District: obj.District,
          Electorate: obj.Electorate,
          Province: obj.Province,
          City: obj.City,
          Nationality: obj.Nationality,
          Citizenship: obj.Citizenship,
          CivilStatus: obj.CivilStatus,
          SpouseName: obj.SpouseName,
          SpouseDesignation: obj.SpouseDesignation,
          Faculty: obj.Faculty,
          Department: obj.Department,
          HighestEducation: obj.HighestEducation,
          ProficiencyOnLanguages: obj.ProficiencyOnLanguages,

          BasicDegree: obj.BasicDegree,
          BasicDegreeUniversity: obj.BasicDegreeUniversity,
          BasicDegreeYear: obj.BasicDegreeYear,
          BasicDegreeClass: obj.BasicDegreeClass,
          BasicDegreeGPA: obj.BasicDegreeGPA,

          PGDegree01: obj.PGDegree01,
          PGDegree01University: obj.PGDegree01University,
          PGDegree01Country: obj.PGDegree01Country,
          PGDegree01Year: obj.PGDegree01Year,
          PGDegree01Class: obj.PGDegree01Class,
          PGDegree01GPA: obj.PGDegree01GPA,

          PGDegree02: obj.PGDegree02,
          PGDegree02University: obj.PGDegree02University,
          PGDegree02Country: obj.PGDegree02Country,
          PGDegree02Year: obj.PGDegree02Year,
          PGDegree02Class: obj.PGDegree02Class,
          PGDegree02GPA: obj.PGDegree02GPA,

          PGDegree03: obj.PGDegree03,
          PGDegree03University: obj.PGDegree03University,
          PGDegree03Country: obj.PGDegree03Country,
          PGDegree03Year: obj.PGDegree03Year,
          PGDegree03Class: obj.PGDegree03Class,
          PGDegree03GPA: obj.PGDegree03GPA,

          Publications: obj.Publications,

          Designation: obj.Designation,
          Institution: obj.Institution,
          PresentOccupationFrom: obj.PresentOccupationFrom,
          SalaryDrawn: obj.SalaryDrawn,

          PreviousEmployments: obj.PreviousEmployments,
          Selected: '',
          SelectedBy: '',
        };

        const funcStatus = DatabaseOperations.saveItem(request);

        if (!funcStatus) {
          console.error(`Error occurred while saveRequest in Resources`);
        }

        // Send Mail to Submitter
        const heading = 'ONLINE APPLICATION - University of Peradeniya';
        const description = 'Your application has been submitted successfully..!';
        const name = obj.FullName;
        const email = obj.Email;
        const post = obj.Post;
        const { VacancyID } = obj;
        const faculty = obj.Faculty;
        const department = obj.Department;
        const emailAddress = `${obj.Email},${Utils.getProcessingEmails()}`;

        Utils.sendMail(heading, description, emailAddress, name, email, post, VacancyID, faculty, department);

        return funcStatus;
      }

      return '';
    } catch (error) {
      console.error('Error occurred while saveRequest in Resources', error);
      throw new Error(`Error occurred while saveRequest`);
    }
  }
}

export default Resources;
