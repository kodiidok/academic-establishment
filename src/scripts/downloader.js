import Report from './report';
import Application from './application';

class Downloader {
  static TYPE = { REPORT: 'REPORT', APPLICATION: 'APPLICATION' };

  static processRequest(retdata) {
    const rtnObj = {};
    rtnObj.status = false;
    try {
      if (retdata === Downloader.TYPE.REPORT) {
        rtnObj.document = Report.createReport();
        rtnObj.status = true;
      } else if (retdata === Downloader.TYPE.APPLICATION) {
        rtnObj.document = Application.createReport();
        rtnObj.status = true;
      }
      return rtnObj;
    } catch (error) {
      console.error('Error occurred while processRequest in Downloader', error);
      throw new Error(`Error occurred while processRequest`);
    }
  }
}

export default Downloader;
