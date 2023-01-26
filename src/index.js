import Resources from './scripts/resources';
import Utils from './scripts/utils';

function doGet(e) {
  if (!e.parameter.page) {
    // When no specific page requested, return "home page" Ex : ?page=hod
    return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle(Utils.getAppName())
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  // else, use page parameter to pick an html file from the script
  return HtmlService.createTemplateFromFile(e.parameter.page)
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

global.doGet = doGet;
global.include = include;
global.initialLoading = initialLoading;
global.saveRequest = saveRequest;
