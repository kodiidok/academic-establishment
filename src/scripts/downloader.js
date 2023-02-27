import Report from './report';
import Application from './application';

const TYPE = { REPORT: 'REPORT', APPLICATION: 'APPLICATION' };

class Downloader {
  static processRequest(req) {
    const request = JSON.parse(req);
    const rtnObj = {};
    rtnObj.status = false;
    try {
      if (request.KEY === this.getType().REPORT) {
        rtnObj.document = Report.createReport();
        rtnObj.status = true;
      } else if (request.KEY === this.getType().APPLICATION) {
        rtnObj.document = Application.getPdfBlob(JSON.stringify(request.DATA));
        rtnObj.status = true;
      }
      return rtnObj;
    } catch (error) {
      console.error('Error occurred while processRequest in Downloader', error);
      throw new Error(`Error occurred while processRequest`);
    }
  }

  static getType() {
    return TYPE;
  }
}

export default Downloader;
