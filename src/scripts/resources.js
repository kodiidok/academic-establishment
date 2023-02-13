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

      rtnObj.applications = this.getApplicationsData();

      // rtnObj.reqMain = this.getReqMainData();
      // rtnObj.requirements = this.getRequirements();

      return rtnObj;
    } catch (error) {
      console.error('Error occurred while initialLoading in Resources', error);
      throw new Error(`Error occurred while initialLoading`);
    }
  }

  static initialShortlistAppLoading() {
    const rtnObj = {};
    try {
      // rtnObj.appUser = this.resolveAppUser();
      rtnObj.scriptUrl = Utils.getScriptUrl();
      rtnObj.appName = Utils.getAppName();
      rtnObj.appDescription = Utils.getAppDescription();
      rtnObj.appRedirectURL = Utils.getAppRedirectURL();

      rtnObj.posts = this.getPostData();
      rtnObj.faculties = this.getFacultyData();
      rtnObj.departments = this.getDepartmentData();

      rtnObj.applications = this.getApplicationsData();

      rtnObj.test = 'TESTED CODE WORKS!';

      return rtnObj;
    } catch (error) {
      console.error('Error occurred while initialShortlistAppLoading in Resources', error);
      throw new Error(`Error occurred while initialShortlistAppLoading`);
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

  static getApplicationsData() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase(Utils.getTestMainDBID());
      DatabaseOperations.openDatabaseConnection(Utils.getApplicationSheetName());
      // const foundObj = DatabaseOperations.queryDatabase(`KEY:STATUS === "OPEN"`);
      const foundObj = DatabaseOperations.readDatabaseCache();

      // return JSON.stringify(foundObj);
      return foundObj;
    } catch (error) {
      console.error('Error occurred while getApplicationSheetData in Resources', error);
      throw new Error(`Error occurred while getApplicationSheetData`);
    }
  }

  static getApplications() {
    const rtnObj = {};
    try {
      rtnObj.applications = this.getApplicationsData();
      return rtnObj;
    } catch (error) {
      console.error('Error occurred while getApplications in Resources', error);
      throw new Error(`Error occurred while getApplications`);
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
      DatabaseOperations.initilizeDatabase(Utils.getDataDBID());
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
      DatabaseOperations.initilizeDatabase(Utils.getDataDBID());
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
      DatabaseOperations.initilizeDatabase(Utils.getDataDBID());
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

  static updateApplicationStatus(obj) {
    const request = obj;
    let retObj = '';
    try {
      if (obj) {
        DatabaseOperations.cacheEnabled = false;
        DatabaseOperations.initilizeDatabase(Utils.getTestMainDBID());
        DatabaseOperations.openDatabaseConnection(Utils.getApplicationSheetName());
        // const foundObj = DatabaseOperations.queryDatabase(`KEY:STATUS === "OPEN"`);
        request[0] = Utils.formatDate(request[0]); /* `2023-01-29T01:25:38.000Z` into `01/29/2023 1:25:38` */
        request[35] = Utils.formatDate(request[35]); /* `2023-01-29T01:25:38.000Z` into `01/29/2023 1:25:38` */
        retObj = DatabaseOperations.updateItem(request);
      }
      return retObj;
    } catch (error) {
      console.error('Error occurred while updateApplicationStatus in Resources', error);
      throw new Error(`Error occurred while updateApplicationStatus`);
    }
  }
}

export default Resources;
