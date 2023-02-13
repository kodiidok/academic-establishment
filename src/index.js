import Resources from './scripts/resources';
import Utils from './scripts/utils';
import Report from './scripts/report';
import DownloadApplication from './scripts/downloadApplication';

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
    .setTitle(Utils.getAppName())
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function initialLoading() {
  return JSON.stringify(Resources.initialLoading());
}

function saveRequest(obj) {
  return JSON.stringify(Resources.saveRequest(obj));
}

function updateApplicationStatus(obj) {
  return JSON.stringify(Resources.updateApplicationStatus(obj));
}

function initialShortlistAppLoading() {
  return JSON.stringify(Resources.initialShortlistAppLoading());
}

function getApplications() {
  return JSON.stringify(Resources.getApplications());
}

function getScriptUrl() {
  return Utils.getScriptUrl();
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

function generateReport() {
  Report.updateDocument();
}

function downloadApplication() {
  DownloadApplication.download();
}

global.doGet = doGet;
global.include = include;
global.initialLoading = initialLoading;
global.saveRequest = saveRequest;
global.initialShortlistAppLoading = initialShortlistAppLoading;
global.updateApplicationStatus = updateApplicationStatus;
global.getApplications = getApplications;
global.getScriptUrl = getScriptUrl;
global.getTempData = getTempData;
global.setTempData = setTempData;
global.generateReport = generateReport;
global.downloadApplication = downloadApplication;
