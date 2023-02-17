import Resources from './scripts/resources';
import Utils from './scripts/utils';
import Downloader from './scripts/downloader';

function doGet(e) {
  let htmlOutput = '';
  if (!e.parameter.page) {
    // When no specific page requested, return "home page" Ex : ?page=hod
    htmlOutput = HtmlService.createTemplateFromFile('index_shortlist');
    return htmlOutput
      .evaluate()
      .setTitle(Utils.getAppName())
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  // else, use page parameter to pick an html file from the script

  htmlOutput = HtmlService.createTemplateFromFile(e.parameter.page);
  return htmlOutput
    .evaluate()
    .setTitle(Utils.getAppName(e.parameter.page))
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function initialLoading(app) {
  return JSON.stringify(Resources.initialLoading(app));
}

function saveRequest(obj) {
  return JSON.stringify(Resources.saveRequest(obj));
}

function router(key) {
  return Resources.getUrl(key);
}

function updateApplicationStatus(obj) {
  return JSON.stringify(Resources.updateApplicationStatus(obj));
}

function getScriptUrl() {
  return Utils.getScriptUrl();
}

function download(key) {
  return Downloader.processRequest(key);
}

let tempData = '';

function getTempData() {
  tempData = PropertiesService.getScriptProperties().getProperty('tempData');
  return tempData;
}

function setTempData(obj) {
  tempData = JSON.stringify(obj);
  PropertiesService.getScriptProperties().setProperty('tempData', tempData);
}

global.doGet = doGet;
global.include = include;
global.initialLoading = initialLoading;
global.saveRequest = saveRequest;

global.getTempData = getTempData;
global.setTempData = setTempData;
global.router = router;
global.download = download;

global.updateApplicationStatus = updateApplicationStatus;
global.getScriptUrl = getScriptUrl;
global.generateReport = generateReport;
global.downloadApplication = downloadApplication;
