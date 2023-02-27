function doGet() {}
function include() {}
function initialLoading() {}
function saveRequest() {}
function getTempData() {}
function setTempData() {}
function router() {}
function download() {}
function updateApplicationStatus() {}
function getScriptUrl() {}
(() => {
  "use strict";
  var __webpack_modules__ = [
      ,
      (e, t, a) => {
        a.r(t), a.d(t, { default: () => n });
        var i = a(2),
          s = a(3);
        const n = class {
          static initialLoading(e) {
            let t = {};
            try {
              return (
                e
                  ? e === s.default.getApp().MAIN
                    ? (t = this.initialMainAppLoading())
                    : e === s.default.getApp().SHORTLIST
                    ? (t = this.initialShortlistAppLoading())
                    : e === s.default.getApp().REPORTS
                    ? (t = this.initialReportsAppLoading())
                    : e === s.default.getApp().VIEW &&
                      (t = this.initialViewAppLoading())
                  : (t = this.initialApplicationDataLoading()),
                t
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while initialLoading in Resources",
                  e
                ),
                new Error("Error occurred while initialLoading"))
              );
            }
          }
          static initialMainAppLoading() {
            const e = {};
            try {
              return (
                (e.scriptUrl = s.default.getScriptUrl()),
                (e.appName = s.default.getAppName()),
                (e.appDescription = s.default.getAppDescription()),
                (e.appRedirectURL = s.default.getAppRedirectURL()),
                (e.posts = this.getPostData()),
                (e.vacancies = this.getVacancyData()),
                (e.faculties = this.getFacultyData()),
                (e.departments = this.getDepartmentData()),
                (e.bdTitles = this.getBdTitleData()),
                (e.pgdTitles = this.getPgdTitleData()),
                (e.subjectAreas = this.getSubjectAreaData()),
                (e.applications = this.getApplicationsData()),
                e
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while initialMainAppLoading in Resources",
                  e
                ),
                new Error("Error occurred while initialMainAppLoading"))
              );
            }
          }
          static initialShortlistAppLoading() {
            const e = {};
            try {
              return (
                (e.scriptUrl = s.default.getScriptUrl()),
                (e.appName = s.default.getShortlistAppName()),
                (e.appDescription = s.default.getAppDescription()),
                (e.appRedirectURL = s.default.getAppRedirectURL()),
                (e.posts = this.getPostData()),
                (e.faculties = this.getFacultyData()),
                (e.departments = this.getDepartmentData()),
                (e.applications = this.getApplicationsData()),
                (e.test = "TESTED CODE WORKS!"),
                e
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while initialShortlistAppLoading in Resources",
                  e
                ),
                new Error("Error occurred while initialShortlistAppLoading"))
              );
            }
          }
          static initialApplicationDataLoading() {
            const e = {};
            try {
              return (e.applications = this.getApplicationsData()), e;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while initialApplicationDataLoading in Resources",
                  e
                ),
                new Error("Error occurred while initialApplicationDataLoading"))
              );
            }
          }
          static initialReportsAppLoading() {
            const e = {};
            try {
              return (
                (e.scriptUrl = s.default.getScriptUrl()),
                (e.appName = s.default.getReportsAppName()),
                (e.appDescription = s.default.getAppDescription()),
                (e.appRedirectURL = s.default.getAppRedirectURL()),
                (e.applications = this.getApplicationsData()),
                e
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while initialReportsAppLoading in Resources",
                  e
                ),
                new Error("Error occurred while initialReportsAppLoading"))
              );
            }
          }
          static initialViewAppLoading() {
            const e = {};
            try {
              return (
                (e.scriptUrl = s.default.getScriptUrl()),
                (e.appName = s.default.getViewAppName()),
                (e.appDescription = s.default.getAppDescription()),
                (e.appRedirectURL = s.default.getAppRedirectURL()),
                (e.applications = this.getApplicationsData()),
                e
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while initialReportsAppLoading in Resources",
                  e
                ),
                new Error("Error occurred while initialReportsAppLoading"))
              );
            }
          }
          static resolveAppUser() {
            try {
              const e = {};
              if (s.default.getCurrentUser()) {
                const t = s.default.getCurrentUser();
                if (
                  ((i.default.cacheEnabled = !1),
                  i.default.initilizeDatabase(s.default.getMainDBID()),
                  i.default.openDatabaseConnection(
                    s.default.getAppRoleSheetName()
                  ),
                  foundObj && "undefined" != typeof foundObj)
                )
                  return (e.data = foundObj), e;
                const a = s.default
                  .getCurrentUser()
                  .split("@")[1]
                  .split(".")[0];
                let n = "";
                switch (a) {
                  case "agri":
                    n = "Faculty of Agriculture";
                    break;
                  case "ahs":
                    n = "Faculty of Allied Health Sciences";
                    break;
                  case "arts":
                    n = "Faculty of Arts";
                    break;
                  case "dental":
                    n = "Faculty of Dental Sciences";
                    break;
                  case "eng":
                    n = "Faculty of Engineering";
                    break;
                  case "mgt":
                    n = "Faculty of Management";
                    break;
                  case "med":
                    n = "Faculty of Medicine";
                    break;
                  case "sci":
                    n = "Faculty of Science";
                    break;
                  case "vet":
                    n = "Faculty of Veterinary Medicine and Animal Science";
                    break;
                  default:
                    n = "UNIVERSITY OF PERADENIYA";
                }
                const l = {
                    Name: "INTERNAL_USER",
                    Email: t,
                    Faculty: n,
                    Department: "",
                    Role: "USER_UOP",
                  },
                  o = [];
                return o.push(l), (e.data = o), e;
              }
              const t = {
                  Name: "Guest",
                  Email: "",
                  Faculty: "",
                  Department: "",
                  Role: "GUEST",
                },
                a = [];
              return a.push(t), (e.data = a), e;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while resolveAppUser in Resources",
                  e
                ),
                new Error("Error occurred while resolveAppUser"))
              );
            }
          }
          static getApplicationsData() {
            try {
              (i.default.cacheEnabled = !1),
                i.default.initilizeDatabase(s.default.getTestMainDBID()),
                i.default.openDatabaseConnection(
                  s.default.getApplicationSheetName()
                );
              return i.default.readDatabaseCache();
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getApplicationSheetData in Resources",
                  e
                ),
                new Error("Error occurred while getApplicationSheetData"))
              );
            }
          }
          static getApplications() {
            const e = {};
            try {
              return (e.applications = this.getApplicationsData()), e;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getApplications in Resources",
                  e
                ),
                new Error("Error occurred while getApplications"))
              );
            }
          }
          static getReqMainData() {
            try {
              (i.default.cacheEnabled = !1),
                i.default.initilizeDatabase(s.default.getReqDBID()),
                i.default.openDatabaseConnection(
                  s.default.getReqMainSheetName()
                );
              const e = i.default.readDatabaseCache(),
                t = {};
              return (t.reqMain = e), t;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getReqMainData in Resources",
                  e
                ),
                new Error("Error occurred while getReqMainData"))
              );
            }
          }
          static getRequirements() {
            try {
              (i.default.cacheEnabled = !1),
                i.default.initilizeDatabase(s.default.getReqDBID()),
                i.default.openDatabaseConnection(s.default.getReqSheetName());
              const e = i.default.readDatabaseCache(),
                t = {};
              return (t.requirements = e), t;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getReqData in Resources",
                  e
                ),
                new Error("Error occurred while getReqData"))
              );
            }
          }
          static getBdTitleData() {
            try {
              (i.default.cacheEnabled = !1),
                i.default.initilizeDatabase(s.default.getDataDBID()),
                i.default.openDatabaseConnection(
                  s.default.getBdTitlesListSheetName()
                );
              const e = i.default.readDatabaseCache(),
                t = {};
              return (t.bdTitles = e), t;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getBdTitleData in Resources",
                  e
                ),
                new Error("Error occurred while getBdTitleData"))
              );
            }
          }
          static getPgdTitleData() {
            try {
              (i.default.cacheEnabled = !1),
                i.default.initilizeDatabase(s.default.getDataDBID()),
                i.default.openDatabaseConnection(
                  s.default.getPgdTitlesListSheetName()
                );
              const e = i.default.readDatabaseCache(),
                t = {};
              return (t.pgdTitles = e), t;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getPgdTitleData in Resources",
                  e
                ),
                new Error("Error occurred while getPgdTitleData"))
              );
            }
          }
          static getSubjectAreaData() {
            try {
              (i.default.cacheEnabled = !1),
                i.default.initilizeDatabase(s.default.getDataDBID()),
                i.default.openDatabaseConnection(
                  s.default.getSubjectAreaListSheetName()
                );
              const e = i.default.readDatabaseCache(),
                t = {};
              return (t.subjectAreas = e), t;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getSubjectAreaData in Resources",
                  e
                ),
                new Error("Error occurred while getSubjectAreaData"))
              );
            }
          }
          static getVacancyData() {
            try {
              (i.default.cacheEnabled = !1),
                i.default.initilizeDatabase(s.default.getDataDBID()),
                i.default.openDatabaseConnection(
                  s.default.getVacanciesListSheetName()
                );
              const e = i.default.readDatabaseCache(),
                t = {};
              return (t.vacancies = e), t;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getVacancyData in Resources",
                  e
                ),
                new Error("Error occurred while getVacancyData"))
              );
            }
          }
          static getPostData() {
            try {
              (i.default.cacheEnabled = !1),
                i.default.initilizeDatabase(s.default.getDataDBID()),
                i.default.openDatabaseConnection(
                  s.default.getPostListSheetName()
                );
              const e = i.default.readDatabaseCache(),
                t = {};
              return (t.posts = e), t;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getPostData in Resources",
                  e
                ),
                new Error("Error occurred while getPostData"))
              );
            }
          }
          static getFacultyData() {
            try {
              (i.default.cacheEnabled = !1),
                i.default.initilizeDatabase(s.default.getDataDBID()),
                i.default.openDatabaseConnection(
                  s.default.getFacListSheetName()
                );
              const e = i.default.readDatabaseCache(),
                t = {};
              return (t.faculties = e), t;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getFacultyData in Resources",
                  e
                ),
                new Error("Error occurred while getFacultyData"))
              );
            }
          }
          static getDepartmentData() {
            try {
              (i.default.cacheEnabled = !1),
                i.default.initilizeDatabase(s.default.getDataDBID()),
                i.default.openDatabaseConnection(
                  s.default.getDeptListSheetName()
                );
              const e = i.default.readDatabaseCache(),
                t = {};
              return (t.departments = e), t;
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getDepartmentData in Resources",
                  e
                ),
                new Error("Error occurred while getDepartmentData"))
              );
            }
          }
          static saveRequest(e) {
            let t = "";
            try {
              return (
                e &&
                  ((i.default.cacheEnabled = !1),
                  i.default.initilizeDatabase(s.default.getMainDBID()),
                  i.default.openDatabaseConnection(
                    s.default.getApplicationSheetName()
                  ),
                  (t = i.default.saveItem(e))),
                t
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while saveRequest in Resources",
                  e
                ),
                new Error("Error occurred while saveRequest"))
              );
            }
          }
          static updateApplicationStatus(e) {
            const t = e;
            let a = "";
            try {
              return (
                e &&
                  ((i.default.cacheEnabled = !1),
                  i.default.initilizeDatabase(s.default.getTestMainDBID()),
                  i.default.openDatabaseConnection(
                    s.default.getApplicationSheetName()
                  ),
                  (t[0] = s.default.formatDate(t[0])),
                  (t[35] = s.default.formatDate(t[35])),
                  (a = i.default.updateItem(t))),
                a
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while updateApplicationStatus in Resources",
                  e
                ),
                new Error("Error occurred while updateApplicationStatus"))
              );
            }
          }
          static getUrl(e) {
            const t = s.default.getScriptUrl();
            let a = "",
              i = "";
            try {
              return (
                e
                  ? ((i = `index_${e.toLowerCase()}`), (a = `${t}?page=${i}`))
                  : (a = `${t}`),
                a
              );
            } catch (e) {
              throw (
                (console.error("Error occurred while getUrl in Resources", e),
                new Error("Error occurred while getUrl"))
              );
            }
          }
        };
      },
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          });
        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
        class Database {
          static initilizeDatabase(e) {
            (this.DBID = e),
              (this.CACHE_TIMEOUT = 600),
              (this.CACHE_KEY = `DB${this.sheetName}`);
          }
          static openDatabaseConnection(e) {
            if (((this.sheetName = e), !this.DBID))
              throw (
                (console.error(
                  `Database Id is not defined. When trying to open the sheet :${e}`
                ),
                new Error("Database Id is not defined"))
              );
            if (!e)
              throw (
                (console.error(
                  `Database sheetName is not defined. When trying to open the sheet :${e}`
                ),
                new Error("Database sheetName is not defined"))
              );
            try {
              const t = SpreadsheetApp.openById(this.DBID);
              this.connectedDatabase = t.getSheetByName(e);
            } catch (t) {
              throw (
                (console.error(
                  `Error occured while opening the sheet. When trying to open the sheet :${e}error : `,
                  t
                ),
                new Error(`Error occured while opening the sheet : ${e}`, t))
              );
            }
          }
          static saveItem(e) {
            try {
              const t = JSON.parse(e);
              (t.timestamp =
                _utils__WEBPACK_IMPORTED_MODULE_0__.default.getCurrentDate()),
                (t.applicationID =
                  _utils__WEBPACK_IMPORTED_MODULE_0__.default.genApplicationID()),
                (t.connectedDatabase = this.connectedDatabase.getName());
              const a = [];
              return (
                a.push(t.timestamp),
                a.push(t.applicationID),
                a.push(t.vacancy.vid),
                a.push(t.vacancy.vfac),
                a.push(t.vacancy.vdept),
                a.push(t.vacancy.vpost),
                a.push(t.personalDetails.pdGender),
                a.push(t.personalDetails.personalTitle),
                a.push(t.personalDetails.personalNameInit),
                a.push(t.personalDetails.personalFullName),
                a.push(t.personalDetails.personalDOB),
                a.push(t.personalDetails.personalAddress),
                a.push(t.personalDetails.civilstatus),
                a.push(t.personalDetails.personalMobile),
                a.push(t.personalDetails.personalTp),
                a.push(t.personalDetails.personalEmail),
                a.push(t.personalDetails.district),
                a.push(t.personalDetails.electorate),
                a.push(t.personalDetails.province),
                a.push(t.personalDetails.city),
                a.push(t.personalDetails.citizenship),
                a.push(t.personalDetails.nic),
                a.push(t.personalDetails.descentOrReg),
                a.push(t.personalDetails.specifyCountry),
                a.push(t.personalDetails.passportNo),
                a.push(JSON.stringify(t.personalDetails.lang)),
                a.push(JSON.stringify(t.basicDegree)),
                a.push(JSON.stringify(t.postgradDegree)),
                a.push(JSON.stringify(t.researchPublications.researchBooks)),
                a.push(JSON.stringify(t.researchPublications.researchJournals)),
                a.push(
                  JSON.stringify(t.researchPublications.researchAbstracts)
                ),
                a.push(JSON.stringify(t.awards)),
                a.push(JSON.stringify(t.extraCurrActivity)),
                a.push(t.presentOccupation.poDesignation),
                a.push(t.presentOccupation.poDept),
                a.push(t.presentOccupation.poFrom),
                a.push(t.presentOccupation.poSalaryDrawn),
                a.push(JSON.stringify(t.previousEmployements)),
                a.push(JSON.stringify(t.refrees.refree1)),
                a.push(JSON.stringify(t.refrees.refree2)),
                a.push(t.declaration.commendations),
                a.push(t.declaration.specifyCommendations),
                a.push(t.declaration.vacations),
                a.push(t.declaration.specifyVacations),
                a.push(t.declaration.bondViolator),
                a.push(t.declaration.bondValue),
                a.push(t.declaration.bondUniInstitute),
                !0 === t.shortListStatus
                  ? a.push("short listed")
                  : a.push("pending"),
                (t.status = !0),
                this.connectedDatabase.appendRow(a),
                t
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while saving data in Resources",
                  e
                ),
                new Error("Error occurred while daving data"))
              );
            }
          }
          static updateItem(e) {
            const t = { status: !1 };
            try {
              if (!e)
                throw (
                  (console.error("No data inside array for updating"),
                  new Error("Error ocuured while updating data as an array"))
                );
              {
                const a = this.connectedDatabase.getLastRow();
                for (let t = 2; t <= a; t += 1)
                  this.connectedDatabase.getRange(t, 2).getValue() === e[1] &&
                    this.connectedDatabase
                      .getRange(t, 1, 1, this.connectedDatabase.getLastColumn())
                      .setValues([e]);
                t.status = !0;
              }
              return t;
            } catch (e) {
              throw (
                (console.error(
                  `Error ocuured while updating new Request in DBOperations${e.lineNumber}`,
                  e
                ),
                new Error(`Error ocuured while updating in DBOperations${e}`))
              );
            }
          }
          static updateDirect(e) {
            try {
              const t = [];
              if (
                (e &&
                  (t.push("=ROW()"),
                  t.push(e.eId),
                  t.push(e.regNo),
                  t.push(e.acYear),
                  t.push(e.semester),
                  t.push(e.batch),
                  t.push(e.courseCode),
                  t.push(e.remark),
                  t.push(e.credits),
                  t.push(e.date)),
                !(t.length > 0))
              )
                throw (
                  (console.error("No data inside array for updating"),
                  new Error("Error ocuured while updating data as an array"))
                );
              {
                const a = [];
                a.push(t),
                  this.connectedDatabase
                    .getRange(e.id, 1, 1, t.length)
                    .setValues(a),
                  this.cacheEnabled &&
                    CacheService.getScriptCache().remove(this.CACHE_KEY);
              }
              return "";
            } catch (e) {
              throw (
                (console.error(
                  `Error ocuured while updateDirect new Request in DBOperations${e.lineNumber}`,
                  e
                ),
                new Error(
                  `Error ocuured while updateDirect in DBOperations${e}`
                ))
              );
            }
          }
          static deleteItem(e) {
            let t = 0;
            try {
              const a = [];
              if (
                (e &&
                  Object.entries(e).forEach(([, e]) => {
                    a.push(e);
                  }),
                !(a.length > 0))
              )
                throw (
                  (console.error("No data for delete"),
                  new Error("Error ocuured while deleting data as an array"))
                );
              {
                const e = this.findObjectRow(a);
                this.connectedDatabase.deleteRow(e + 1),
                  (t = 1),
                  this.cacheEnabled &&
                    CacheService.getScriptCache().remove(this.CACHE_KEY);
              }
              return t;
            } catch (e) {
              throw (
                (console.error(
                  `Error ocuured while deleting new Request in DBOperations${e.lineNumber}`,
                  e
                ),
                new Error(`Error ocuured while deleting in DBOperations${e}`))
              );
            }
          }
          static deleteThreadSafe(e) {
            let t = 0;
            try {
              const a = [];
              e &&
                Object.entries(e).forEach(([, e]) => {
                  a.push(`${e}_DELETED`);
                });
              const i = [];
              if (
                (e &&
                  Object.entries(e).forEach(([, e]) => {
                    i.push(e);
                  }),
                !(a.length > 0))
              )
                throw (
                  (console.error("No data inside array for deleting"),
                  new Error("Error ocuured while deleting data as an array"))
                );
              {
                const e = this.findObjectRow(i),
                  s = [];
                s.push(a),
                  this.connectedDatabase
                    .getRange(e + 1, 1, 1, a.length)
                    .setValues(s),
                  this.cacheEnabled &&
                    CacheService.getScriptCache().remove(this.CACHE_KEY),
                  (t = 1);
              }
              return t;
            } catch (e) {
              throw (
                (console.error(
                  `Error ocuured while deleting  a request in DBOperations${e.lineNumber}`,
                  e
                ),
                new Error(`Error ocuured while deleting in DBOperations${e}`))
              );
            }
          }
          static findObjectRow(e) {
            const t = this.readDatabaseCache();
            let a = -1;
            return (
              e &&
                t.filter(
                  (t, i) => (
                    JSON.stringify(t) === JSON.stringify(e) && (a = i), null
                  )
                ),
              a
            );
          }
          static readDatabaseCache() {
            if (this.cacheEnabled) {
              const e = _utils__WEBPACK_IMPORTED_MODULE_0__.default.ChunkyCache(
                CacheService.getScriptCache(),
                92160
              );
              let t = null,
                a = [];
              if (((t = e.get(this.CACHE_KEY)), e && t)) a = JSON.parse(t);
              else {
                a = this.connectedDatabase.getDataRange().getValues();
                _utils__WEBPACK_IMPORTED_MODULE_0__.default
                  .ChunkyCache(CacheService.getScriptCache(), 92160)
                  .put(this.CACHE_KEY, JSON.stringify(a), this.CACHE_TIMEOUT);
              }
              return a;
            }
            return this.connectedDatabase.getDataRange().getValues();
          }
          static queryDatabase(query) {
            const allData = this.readDatabaseCache(),
              operatorsArray = query.split(" "),
              queryKeyArray = [];
            let operatorKeyArray = [];
            operatorsArray.filter(
              (e) => (
                e.indexOf("KEY:") > -1 && queryKeyArray.push(e.slice(4)), null
              )
            );
            const keyArray = [];
            if (((this.dataArray = []), allData && allData.length > 0))
              if (
                (allData[0].forEach(function (e) {
                  keyArray.push(e);
                }),
                operatorsArray.length > 1)
              ) {
                const results = allData.filter((r) => {
                  (operatorKeyArray = []),
                    operatorsArray.filter((e) => {
                      if (e.indexOf("KEY:") > -1) {
                        const t = `"${r[keyArray.indexOf(e.slice(4))]}"`;
                        operatorKeyArray.push(t);
                      } else operatorKeyArray.push(e);
                      return null;
                    });
                  const queryString = operatorKeyArray.join(" ");
                  return eval(queryString);
                });
                for (let e = 0; e < results.length; e += 1) {
                  const t = {};
                  for (let a = 0; a < keyArray.length; a += 1)
                    t[keyArray[a]] = results[e][a];
                  this.dataArray.push(t);
                }
              } else
                for (let e = 1; e < allData.length; e += 1) {
                  const t = {};
                  for (let a = 0; a < keyArray.length; a += 1)
                    t[keyArray[a]] = allData[e][a];
                  this.dataArray.push(t);
                }
            return this.dataArray;
          }
          static buildGoogleQuery(e) {
            const t =
              _utils__WEBPACK_IMPORTED_MODULE_0__.default.getSheetStructure(
                this.sheetName
              ).columns;
            let a = e;
            return (
              Object.entries(t).forEach(([e, t]) => {
                a = this.replaceAll(a, t, e);
              }),
              a
            );
          }
          static replaceAll(e, t, a) {
            return e.replace(new RegExp(t, "g"), a);
          }
          static googleQuery(e) {
            const t = this.buildGoogleQuery(e);
            return this.pareGoogleQuery(this.sendGoogleQuery(t));
          }
          static sendGoogleQuery(e) {
            try {
              const t =
                  _utils__WEBPACK_IMPORTED_MODULE_0__.default.getSheetStructure(
                    this.sheetName
                  ),
                a = `https://docs.google.com/spreadsheets/d/${
                  this.DBID
                }/gviz/tq?tqx=out:json&headers=1&sheet=${
                  this.sheetName
                }&range=${t.range}&tq=${encodeURIComponent(e)}`,
                i = UrlFetchApp.fetch(a, {
                  headers: {
                    Authorization: `Bearer ${ScriptApp.getOAuthToken()}`,
                  },
                }).getContentText();
              return JSON.parse(
                i
                  .replace("/*O_o*/", "")
                  .replace("google.visualization.Query.setResponse(", "")
                  .slice(0, -2)
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occured while sending URL Fetch request to Google Sheet API. ",
                  e
                ),
                new Error(
                  `Error occured while sending URL Fetch request to Google Sheet API.${e}`
                ))
              );
            }
          }
          static pareGoogleQuery(e) {
            const { rows: t } = e.table,
              { arrayNames: a } =
                _utils__WEBPACK_IMPORTED_MODULE_0__.default.getSheetStructure(
                  this.sheetName
                ),
              i = [];
            return (
              t.forEach(function (e) {
                const t = {};
                let s = 0;
                e.c.forEach(function (e) {
                  e && e.v && (t[a[s]] = e.v), (s += 1);
                }),
                  i.push(t);
              }),
              i
            );
          }
          static batchUpdate(e) {
            const t =
                _utils__WEBPACK_IMPORTED_MODULE_0__.default.getSheetStructure(
                  this.sheetName
                ),
              a = [],
              i = t.range.split(":");
            let s = "";
            const { sheetName: n } = this;
            e.forEach(function (e) {
              s = `${n}!${i[0]}${e.id}:${i[1]}${e.id}`;
              const l = {};
              (l.range = s), (l.majorDimension = "ROWS");
              const o = [];
              t.arrayNames.forEach(function (t, a) {
                0 === a ? o.push("=ROW()") : o.push(e[t]);
              }),
                (l.values = [o]),
                a.push(l);
            });
            const l = { valueInputOption: "USER_ENTERED", data: a };
            Sheets.Spreadsheets.Values.batchUpdate(l, this.DBID);
          }
          static batchUpdateNew(e) {
            const t = LockService.getScriptLock();
            t.waitLock(75e4);
            try {
              const a = this.connectedDatabase.getSheetId(),
                i = Object.entries(e).map(([e, t]) => ({
                  findReplace: {
                    find: e.toString(),
                    replacement: t.toString(),
                    matchEntireCell: !0,
                    sheetId: a,
                  },
                }));
              Sheets.Spreadsheets.batchUpdate({ requests: i }, this.DBID),
                console.info("unenroll suceeses");
            } catch (e) {
              console.error(
                "Error occured while updating batch new in DB. ",
                e
              );
            } finally {
              t.releaseLock();
            }
          }
          static cloneObject(e) {
            const t = {};
            return (
              Object.entries(e).forEach(([e, a]) => {
                t[e] = a;
              }),
              t
            );
          }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = Database;
      },
      (e, t, a) => {
        a.r(t), a.d(t, { default: () => d });
        const i = "Asia/Colombo",
          s = "MM/dd/yyyy HH:mm:ss",
          n =
            "https://script.google.com/macros/s/AKfycbx6wYqHr0XQjztRttC0pAdjriaJJIa3M-u6ABVrano/dev",
          l = "portal@gs.pdn.ac.lk",
          o = {
            MAIN: "MAIN",
            SHORTLIST: "SHORTLIST",
            VIEW: "VIEW",
            REPORTS: "REPORTS",
          };
        let c = null,
          p = [];
        class u {
          static ChunkyCache(e, t) {
            return {
              put(a, i, s) {
                const n = JSON.stringify(i),
                  l = Math.floor(t / 2);
                let o = 0;
                for (; o < n.length; )
                  (c = `${a}_${o}`),
                    p.push(c),
                    e.put(c, n.substr(o, l), s + 5),
                    (o += l);
                const u = { chunkSize: t, chunks: p, length: n.length };
                e.put(a, JSON.stringify(u), s);
              },
              get(t) {
                const a = e.get(t);
                if (null != a) {
                  const t = JSON.parse(a);
                  if (
                    ((p = t.chunks.map(function (t) {
                      return e.get(t);
                    })),
                    p.every(function (e) {
                      return null != e;
                    }))
                  )
                    return JSON.parse(p.join(""));
                }
                return null;
              },
            };
          }
          static getDateFormat() {
            return s;
          }
          static getCurrentDate() {
            return Utilities.formatDate(new Date(), i, s);
          }
          static getApp() {
            return o;
          }
          static generateUUID() {
            return `OA_${Utilities.formatDate(
              new Date(),
              i,
              "MMddyyyyHHmmss"
            )}`;
          }
          static parseDate(e) {
            return Utilities.formatDate(new Date(e), i, s);
          }
          static getCurrentUser() {
            return Session.getActiveUser().getEmail();
          }
          static getAppName(e) {
            let t = "",
              a = "";
            e && (a = e.slice(6, e.length).toUpperCase());
            try {
              return (
                a
                  ? a === u.getApp().SHORTLIST
                    ? (t = this.getShortlistAppName())
                    : a === u.getApp().REPORTS && (t = this.getReportsAppName())
                  : (t = this.getMainAppName()),
                t
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getAppName in Resources",
                  e
                ),
                new Error("Error occurred while getAppName"))
              );
            }
          }
          static getMainAppName() {
            return "ONLINE APPLICATION";
          }
          static getShortlistAppName() {
            return "APPLICATIONS SUMMARY";
          }
          static getViewAppName() {
            return "VIEW APPLICANT";
          }
          static getReportsAppName() {
            return "REPORTS";
          }
          static getAppDescription() {
            return "Academic Establishment. University of Peradeniya.";
          }
          static getAppRedirectURL() {
            return n;
          }
          static getScriptUrl() {
            return ScriptApp.getService().getUrl();
          }
          static getALIASMAIL() {
            return l;
          }
          static getMainDBID() {
            return "1R3ZBd0qe-Q9thnFtTXDUzMF18kCLd41IUrQbAX42JQ4";
          }
          static getTestMainDBID() {
            return "1MTE8MdB-BwDG80wFlNI8zaADsnkG3XJsHxLW79ndXa4";
          }
          static getReqDBID() {
            return "1QdubFe5pbNQyevoK_LQS021OPrYxve_aGuD9xGEUI4o";
          }
          static getReqMainSheetName() {
            return "mainsheet";
          }
          static getReqSheetName() {
            return "requirements";
          }
          static getAppRoleSheetName() {
            return "roles";
          }
          static getDataDBID() {
            return "1QdubFe5pbNQyevoK_LQS021OPrYxve_aGuD9xGEUI4o";
          }
          static getBdTitlesListSheetName() {
            return "basicDegreeTitles";
          }
          static getPgdTitlesListSheetName() {
            return "postgradDegreeTitles";
          }
          static getSubjectAreaListSheetName() {
            return "subjectAreas";
          }
          static getApplicationSheetName() {
            return "mainsheet";
          }
          static getVacanciesListSheetName() {
            return "vacancy";
          }
          static getPostListSheetName() {
            return "post";
          }
          static getFacListSheetName() {
            return "faculty";
          }
          static getDeptListSheetName() {
            return "department";
          }
          static getFacultyDepartmentDBID() {
            return "1MTE8MdB-BwDG80wFlNI8zaADsnkG3XJsHxLW79ndXa4";
          }
          static getFacultyDepartmentSheetName() {
            return "RolesAccount";
          }
          static getProcessingEmails() {
            return "portal@gs.pdn.ac.lk";
          }
          static sendMail(e, t, a, i, s, o, c, p, u) {
            try {
              let d =
                HtmlService.createHtmlOutputFromFile(
                  "email_template"
                ).getContent();
              (d = d.replace("%heading", e)),
                (d = d.replace("%description", t)),
                (d = d.replace("%param1", i)),
                (d = d.replace("%param2", s)),
                (d = d.replace("%param3", o)),
                (d = d.replace("%param4", c)),
                (d = d.replace("%param5", `${u} - ${p}`)),
                (d = d.replace("%appURL", n));
              const h = "Online Application -  University of Peradeniya";
              GmailApp.sendEmail(a, h, "", {
                from: l,
                replyTo: l,
                name: "University of Peradeniya",
                htmlBody: d,
              });
            } catch (e) {
              throw (
                (console.error("Error ocuured while Send Mail in Utils", e),
                new Error("Error ocuured while Send Mail in Utils"))
              );
            }
          }
          static errHandler(e, t) {
            let a = `${e.message}\n in file: ${e.fileName} on line: ${e.lineNumber}`;
            const i = `${APP_NAME} ERROR OCCURED | FOS APPS |  ${t}`;
            (a = `${i}\n${a}\n onError: ${JSON.stringify(this.onError)}`),
              GmailApp.sendEmail("youremail@sci.pdn.ac.lk", i, a);
          }
          static genApplicationID() {
            return SpreadsheetApp.openById(this.getMainDBID())
              .getSheetByName(this.getApplicationSheetName())
              .getLastRow();
          }
          static formatDate(e) {
            const t = new Date(e);
            return `${(t.getMonth() + 1).toString().padStart(2, "0")}/${t
              .getDate()
              .toString()
              .padStart(2, "0")}/${t.getFullYear()} ${t.getHours()}:${t
              .getMinutes()
              .toString()
              .padStart(2, "0")}:${t.getSeconds().toString().padStart(2, "0")}`;
          }
        }
        const d = u;
      },
      (e, t, a) => {
        a.r(t), a.d(t, { default: () => l });
        var i = a(5),
          s = a(6);
        const n = { REPORT: "REPORT", APPLICATION: "APPLICATION" };
        const l = class {
          static processRequest(e) {
            const t = JSON.parse(e),
              a = { status: !1 };
            try {
              return (
                t.KEY === this.getType().REPORT
                  ? ((a.document = i.default.createReport()), (a.status = !0))
                  : t.KEY === this.getType().APPLICATION &&
                    ((a.document = s.default.getPdfBlob(
                      JSON.stringify(t.DATA)
                    )),
                    (a.status = !0)),
                a
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while processRequest in Downloader",
                  e
                ),
                new Error("Error occurred while processRequest"))
              );
            }
          }
          static getType() {
            return n;
          }
        };
      },
      (e, t, a) => {
        a.r(t), a.d(t, { default: () => i });
        const i = class {
          static getPdfBlob() {
            const e = createReport(),
              t = DriveApp.getFileById(e.getId()).getBlob().getBytes();
            return Utilities.base64Encode(t);
          }
          static loadSheetData() {
            const e = SpreadsheetApp.openById(
              "1MTE8MdB-BwDG80wFlNI8zaADsnkG3XJsHxLW79ndXa4"
            )
              .getSheetByName("mainsheet")
              .getDataRange()
              .getValues();
            return JSON.stringify(e);
          }
          static loadRequiredData() {
            return {
              report: "short listed",
              posts: ["Lecturer (Probationary)"],
              department: "Department of Computer Science",
              faculty: "Faculty of Science",
              description:
                "The department is especially looking for candidates having a four years B.Sc. degree in Agricultural Technology and Management/ Agriculture/Agricultural Science from a recognized University.Candidates who are applying for Lecturer (unconfirmed) and SeniorLecturer Grade II/I should have postgraduate qualification and teaching experience as stipulated in relevant circulars in the field ofIndustrial Biotechnology.",
            };
          }
          static loadDoc() {
            const e = DocumentApp.openById(
                "1LLj7_1g-_l0AHUVMMx3GwErRnXwRXckifgi5o-mDCjc"
              ),
              t = e.getBody();
            return initializePage(t), e;
          }
          static loadResources() {
            return {
              image: DriveApp.getFileById(
                "1fMEJOMTQ176x0h7BphieEu3CFwfqHMH8"
              ).getBlob(),
            };
          }
          static initializePage(e) {
            e.clear()
              .setPageHeight(595.276)
              .setPageWidth(841.89)
              .setMarginTop(30)
              .setMarginLeft(50)
              .setMarginRight(50)
              .setMarginBottom(50);
          }
          static initializeStyles() {
            const e = {
                [DocumentApp.Attribute.FONT_FAMILY]: "Roboto Serif",
                [DocumentApp.Attribute.FONT_SIZE]: 8,
                [DocumentApp.Attribute.LINE_SPACING]: 0.06,
              },
              t = {
                [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]:
                  DocumentApp.HorizontalAlignment.CENTER,
              },
              a = {
                [DocumentApp.Attribute.BORDER_WIDTH]: 0,
                [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]:
                  DocumentApp.HorizontalAlignment.JUSTIFY,
              },
              i = { [DocumentApp.Attribute.BORDER_WIDTH]: 0 },
              s = {
                [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]:
                  DocumentApp.HorizontalAlignment.CENTER,
                [DocumentApp.Attribute.BOLD]: !0,
                [DocumentApp.Attribute.UNDERLINE]: !1,
              },
              n = { [DocumentApp.Attribute.BOLD]: !0 },
              l = {
                [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]:
                  DocumentApp.HorizontalAlignment.CENTER,
                [DocumentApp.Attribute.SPACING_AFTER]: 50,
                [DocumentApp.Attribute.PADDING_TOP]: 0,
              },
              o = {
                [DocumentApp.Attribute.BOLD]: !0,
                [DocumentApp.Attribute.FONT_SIZE]: 10,
              },
              c = {
                [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]:
                  DocumentApp.HorizontalAlignment.RIGHT,
              };
            return (
              (styles = {
                bodyStyle: e,
                centerStyle: t,
                tableStyle: i,
                justifyStyle: a,
                titleStyle: s,
                subtitleStyle: n,
                officeUseOnly: l,
                metaTitleStyle: o,
                rightStyle: c,
              }),
              styles
            );
          }
          static formatTitle(e, t) {
            e.setAttributes(t.tableStyle);
            for (let a = 0; a < e.getCell(0, 0).getNumChildren(); a += 1)
              e.getCell(0, 0).getChild(a).setAttributes(t.metaTitleStyle);
            for (let a = 0; a < e.getCell(0, 1).getNumChildren(); a += 1)
              e.getCell(0, 1).getChild(a).setAttributes(t.metaTitleStyle),
                e.getCell(0, 1).getChild(a).setAttributes(t.rightStyle);
          }
          static formatDate(e, t) {
            e.setAttributes(t.tableStyle);
            const a = e.getCell(0, 1).getChild(0),
              i = {};
            (i[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
              DocumentApp.HorizontalAlignment.RIGHT),
              a.setAttributes(i);
          }
          static formatSymbols(e, t) {
            e.setAttributes(t.tableStyle);
            const a = e.getCell(0, 2),
              i = e.getCell(0, 3),
              s = a.getChild(0),
              n = i.getChild(0),
              l = {};
            (l[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
              DocumentApp.HorizontalAlignment.RIGHT),
              s.setAttributes(l),
              n.setAttributes(l);
          }
          static formatDescription(e, t) {
            e.setAttributes(t.tableStyle),
              e.getCell(0, 0).getChild(0).setAttributes(t.justifyStyle);
          }
          static formatSignatures(e, t) {
            e.setAttributes(t.tableStyle),
              e
                .getCell(0, 0)
                .setAttributes({
                  [DocumentApp.Attribute.WIDTH]: 250,
                  [DocumentApp.Attribute.PADDING_TOP]: 50,
                }),
              e
                .getCell(0, 1)
                .setAttributes({
                  [DocumentApp.Attribute.WIDTH]: 170,
                  [DocumentApp.Attribute.PADDING_TOP]: 50,
                }),
              e
                .getCell(0, 2)
                .setAttributes({ [DocumentApp.Attribute.PADDING_TOP]: 50 }),
              e
                .getCell(0, 3)
                .setAttributes({
                  [DocumentApp.Attribute.WIDTH]: 100,
                  [DocumentApp.Attribute.PADDING_TOP]: 50,
                }),
              e
                .getCell(0, 3)
                .getChild(0)
                .setAttributes({
                  [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]:
                    DocumentApp.HorizontalAlignment.RIGHT,
                  [DocumentApp.Attribute.PADDING_TOP]: 50,
                });
          }
          static formatReports(e, t) {
            e.setAttributes(t.tableStyle);
            const a = e.getCell(0, 0).getNumChildren();
            for (let i = 0; i < a; i += 1) {
              const a = e.getCell(0, 0).getChild(i);
              a.getRow(0).setAttributes(t.subtitleStyle),
                a
                  .getCell(0, 0)
                  .setAttributes({ [DocumentApp.Attribute.WIDTH]: 80 }),
                a
                  .getCell(0, 1)
                  .setAttributes({ [DocumentApp.Attribute.WIDTH]: 100 }),
                a
                  .getCell(0, 2)
                  .setAttributes({ [DocumentApp.Attribute.WIDTH]: 100 }),
                a
                  .getCell(0, 3)
                  .setAttributes({ [DocumentApp.Attribute.WIDTH]: 80 }),
                a
                  .getCell(0, 6)
                  .setAttributes({ [DocumentApp.Attribute.WIDTH]: 30 }),
                a
                  .getCell(0, 7)
                  .setAttributes({ [DocumentApp.Attribute.WIDTH]: 30 });
            }
          }
          static formatHeader(e, t) {
            e.setAttributes(t.tableStyle);
            const a = e.getChild(0).getChild(0).getChild(1),
              i = "UNIVERSITY OF PERADENIYA",
              s = a.getText().indexOf(i),
              n = s + i.length;
            if (-1 !== s) {
              const e = a.editAsText();
              e.setBold(s, n, !0), e.setFontSize(s, n, 12);
            }
            const l = e.getChild(0).getChild(1),
              o = l.getChild(0).getChild(0).getChild(0).getChild(0);
            l.setAttributes(t.officeUseOnly), o.setAttributes(t.officeUseOnly);
          }
          static formatPage(e, t) {
            const a = initializeStyles();
            e.setAttributes(a.bodyStyle),
              formatHeader(t[0], a),
              formatTitle(t[1], a),
              formatDate(t[2], a),
              formatSymbols(t[3], a),
              formatDescription(t[4], a),
              formatReports(t[5], a),
              formatSignatures(t[6], a);
          }
          static processData(e) {
            const t = {};
            return (
              (t.INFO = {
                APPLICATION: { TIMESTAMP: e[0], ID: e[1] },
                VACANCY: {
                  ID: e[2],
                  FACULTY: e[3],
                  DEPARTMENT: e[4],
                  POST: e[5],
                },
              }),
              (t.PERSONAL_DETAILS = {
                GENDER: e[6],
                TITLE: e[7],
                INITNAME: e[8],
                FULLNAME: e[9],
                DATE_OF_BIRTH: e[10],
                PERMANENT_RESIDENCE: e[11],
                CIVIL_STATUS: e[12],
                MOBILE: e[13],
                RESIDENCE: e[14],
                EMAIL: e[15],
                DISTRICT: e[16],
                ELECTORATE: e[17],
                PROVINCE: e[18],
                CITY: e[19],
                CITIZENSHIP: e[20],
                NIC: e[21],
                BY_DESCENT_OR_REGISTRATION: e[22],
                SPECIFY_COUNTRY: e[23],
                PASSPORT_NO: e[24],
                PROFICIENCY: e[25],
              }),
              (t.BASIC_DEGREE = e[26]),
              (t.POSTGRADUATE_DEGREE = e[27]),
              (t.RESEARCH = {
                BOOKS: e[28],
                JOURNALS: e[29],
                ABSTRACTS: e[30],
              }),
              (t.AWARDS = e[31]),
              (t.EXTRA_CURRICULAR = e[32]),
              (t.PRESENT_OCCUPATION = {
                DESIGNATION: e[33],
                DEPARTMENT: e[34],
                STARTED_WORKING: e[35],
                SALARY: e[36],
              }),
              (t.PREVIOUS_EMPLOYMENTS = e[37]),
              (t.REFREES = { REFEREE_1: e[38], REFREE_2: e[39] }),
              (t.DECLARATION = {
                COMMENDATIONS_PUNISHMENTS: { STATUS: e[40], DETAILS: e[41] },
                VACATION_POST_NOTICES: { STATUS: e[42], DETAILS: e[43] },
                BOND_VIOLATIONS: {
                  STATUS: e[44],
                  BOND_VALUE: e[45],
                  UNIVERSITY: e[46],
                },
              }),
              (t.SHORTLISTED_STATUS = e[47]),
              t
            );
          }
          static processDegree(e) {
            let t = "";
            e[0] ? (t = e[0]) : e[1] && (t = e[1]);
            let a = "";
            e[2] ? (a = e[2]) : e[3] && (a = e[3]);
            let i = "";
            e[10] && (i = `${e[10]}`);
            return `\n${`${t} ${a}`}\n${`${e[4]}, ${e[5]}`}\n${`From\t${e[6]}\nTo\t${e[7]}`}\n${`(${e[8]}, ${e[9]})`}\n\n`;
          }
          static processDegrees(e) {
            const t = JSON.parse(JSON.parse(e)),
              a = [];
            return (
              t.forEach((e) => {
                const t = processDegree(e);
                a.push(t);
              }),
              a
            );
          }
          static processPublications(e) {
            let t = "";
            return (
              e.forEach((e) => {
                let a = "";
                e.forEach((e) => {
                  a += `${e}\n`;
                }),
                  (t += `${a}\n`);
              }),
              t
            );
          }
          static processResearch(e) {
            let t = processPublications(JSON.parse(JSON.parse(e.BOOKS))),
              a = processPublications(JSON.parse(JSON.parse(e.JOURNALS))),
              i = processPublications(JSON.parse(JSON.parse(e.ABSTRACTS)));
            t || (t = "None"), a || (a = "None"), i || (i = "None");
            return `BOOKS\n\n${t}JOURNALS\n\n${a}ABSTRACTS\n\n${i}`;
          }
          static processAward(e) {
            let t = "";
            return (
              e.forEach((e) => {
                t += `${e}\n`;
              }),
              `${t}\n`
            );
          }
          static processAwards(e) {
            const t = JSON.parse(JSON.parse(e)),
              a = [];
            return (
              t.forEach((e) => {
                a.push(processAward(e));
              }),
              a
            );
          }
          static processActivity(e) {
            let t = "";
            return (
              e.forEach((e) => {
                t += `${e}\n`;
              }),
              `${t}\n`
            );
          }
          static processActivities(e) {
            const t = JSON.parse(JSON.parse(e)),
              a = [];
            return (
              t.forEach((e) => {
                a.push(processActivity(e));
              }),
              a
            );
          }
          static processPresentEmployment(e) {
            let t = "";
            return (
              (t += `${e.DESIGNATION}\n`),
              (t += `${e.DEPARTMENT}\n`),
              (t += `${e.STARTED_WORKING.substring(0, 10)}\n`),
              (t += `${e.SALARY}\n`),
              t
            );
          }
          static processExperience(e) {
            let t = "";
            return (
              e.forEach((e) => {
                t += `${e}\n`;
              }),
              `${t}\n`
            );
          }
          static processExperiences(e) {
            const t = JSON.parse(JSON.parse(e)),
              a = [];
            return (
              t.forEach((e) => {
                a.push(processExperience(e));
              }),
              a
            );
          }
          static processApplicant(e) {
            const t = e;
            return [
              t.INFO.VACANCY.POST,
              `${t.PERSONAL_DETAILS.FULLNAME}\n\n${t.PERSONAL_DETAILS.PERMANENT_RESIDENCE}\n\n${t.PERSONAL_DETAILS.DATE_OF_BIRTH}`,
              `UNIVERSITY EDUCATION\n${processDegrees(
                t.BASIC_DEGREE
              )}\n\nPOSTGRADUATE QUALIFICATIONS\n${processDegrees(
                t.POSTGRADUATE_DEGREE
              )}`,
              `${processResearch(t.RESEARCH)}`,
              `${processAwards(t.AWARDS)}`,
              `${processActivities(t.EXTRA_CURRICULAR)}`,
              `AT PRESENT\n\n${processPresentEmployment(
                t.PRESENT_OCCUPATION
              )}\nPAST EXPERIENCES\n\n${processExperiences(
                t.PREVIOUS_EMPLOYMENTS
              )}`,
              "",
              "",
              "",
            ];
          }
          static generateTitle(e, t, a, i, s) {
            let n = "post of ";
            (n += t), (n += "\n"), (n += a), (n += ","), (n += i);
            const l = e.getCell(0, 0);
            l.insertParagraph(0, n.toUpperCase()),
              l.removeChild(l.getChild(l.getNumChildren() - 1));
            const o = `${s} applicants`,
              c = e.getCell(0, 1);
            c.insertParagraph(0, o.toUpperCase()),
              c.removeChild(c.getChild(c.getNumChildren() - 1));
          }
          static generateDates(e, t, a) {
            const i = `Advertised on : ${t}`,
              s = `Calling for Applications closed on : ${a}`;
            e.getCell(0, 0).insertParagraph(0, i),
              e.getCell(0, 0).removeChild(e.getCell(0, 0).getChild(1)),
              e.getCell(0, 1).insertParagraph(0, s),
              e.getCell(0, 1).removeChild(e.getCell(0, 1).getChild(1));
          }
          static generateSymbols(e) {
            e.getCell(0, 0).insertParagraph(0, "TR: Transcript"),
              e.getCell(0, 0).removeChild(e.getCell(0, 0).getChild(1)),
              e
                .getCell(0, 1)
                .insertParagraph(0, "PC: Sent through proper channel"),
              e.getCell(0, 1).removeChild(e.getCell(0, 1).getChild(1)),
              e.getCell(0, 2).insertParagraph(0, "RR: Referee's Report"),
              e.getCell(0, 2).removeChild(e.getCell(0, 2).getChild(1)),
              e.getCell(0, 3).insertParagraph(0, "R: Remarks"),
              e.getCell(0, 3).removeChild(e.getCell(0, 3).getChild(1));
          }
          static generateDescription(e, t) {
            e.getCell(0, 0).insertParagraph(0, t),
              e.getCell(0, 0).removeChild(e.getCell(0, 0).getChild(1));
          }
          static generateSignatures(e) {
            e
              .getCell(0, 0)
              .insertParagraph(
                0,
                "Head of the Department .................................."
              ),
              e.getCell(0, 0).removeChild(e.getCell(0, 0).getChild(1)),
              e
                .getCell(0, 1)
                .insertParagraph(
                  0,
                  "Dean ....................................."
                ),
              e.getCell(0, 1).removeChild(e.getCell(0, 1).getChild(1)),
              e
                .getCell(0, 2)
                .insertParagraph(
                  0,
                  "Snr. Asst. Registrar ..........................................."
                ),
              e.getCell(0, 2).removeChild(e.getCell(0, 2).getChild(1)),
              e.getCell(0, 3).insertParagraph(0, "......./03/2023"),
              e.getCell(0, 3).removeChild(e.getCell(0, 3).getChild(1));
          }
          static generateReports(e, t) {
            const a = [];
            t.forEach((e) => {
              a.push(processApplicant(e));
            });
            let i = 0;
            ["Lecturer (Probationary)"].forEach((t) => {
              const s = e.getCell(0, 0),
                n = [
                  [
                    "Name Address & DOB",
                    "Qualifications",
                    "Research Publications",
                    "Awards/Medals/Prizes/Scholarships",
                    "Extra Curricular Activities",
                    "Experience",
                    "PC",
                    "TR",
                    "Remarks",
                  ],
                ];
              a.forEach((e) => {
                e[0] === t && (e.splice(0, 1), n.push(e));
              }),
                n.length > 1 && (s.insertTable(i, n), (i += 1));
            });
            const s = e.getCell(0, 0).getNumChildren() - 1;
            e.getCell(0, 0).removeChild(e.getCell(0, 0).getChild(s));
          }
          static generateHeader(e) {
            const t = e.getCell(0, 0),
              a = t.insertImage(0, loadResources().image);
            t.insertParagraph(1, "\nUNIVERSITY OF PERADENIYA\nSri Lanka"),
              a.setWidth(120),
              a.setHeight(120),
              t.removeChild(t.getChild(t.getNumChildren() - 1));
            const i = e.getCell(0, 1);
            i
              .insertTable(0)
              .appendTableRow()
              .appendTableCell("Office use only"),
              i.removeChild(i.getChild(i.getNumChildren() - 1));
          }
          static createMasterTable(e) {
            e.insertTable(0, [["", ""]]),
              e.insertTable(1, [["", ""]]),
              e.insertTable(2, [["", ""]]),
              e.insertTable(3, [["", "", "", ""]]),
              e.insertTable(4, [[""]]),
              e.insertTable(5, [[""]]),
              e.insertTable(6, [["", "", "", ""]]);
          }
          static updateDocument(e) {
            const { data: t } = e,
              { details: a } = e,
              i = loadDoc(),
              s = i.getBody();
            createMasterTable(s);
            const n = s.getTables();
            return (
              generateHeader(n[0]),
              generateTitle(n[1], a.posts, a.department, a.faculty, a.report),
              generateDates(n[2], "05.12.2021", "04.01.2022"),
              generateSymbols(n[3]),
              generateDescription(n[4], a.description),
              generateReports(n[5], t),
              generateSignatures(n[6]),
              formatPage(s, n),
              i
            );
          }
          static createReport() {
            const e = JSON.parse(loadSheetData());
            e.splice(0, 1);
            const t = loadRequiredData(),
              a = [];
            e.forEach((e) => {
              a.push(processData(e));
            });
            return updateDocument({ data: a, details: t });
          }
        };
      },
      (e, t, a) => {
        a.r(t), a.d(t, { default: () => i });
        const i = class {
          static loadSheetData() {
            const e = SpreadsheetApp.openById(
              "1MTE8MdB-BwDG80wFlNI8zaADsnkG3XJsHxLW79ndXa4"
            )
              .getSheetByName("mainsheet")
              .getDataRange()
              .getValues();
            return JSON.stringify(e);
          }
          static loadDoc() {
            const e = DocumentApp.openById(
                "1tABbydTrHuEJ1oD0Uu_1SA4b8zzQMmvZ-LoK-LJaNrU"
              ),
              t = e.getBody();
            return this.initializePage(t), e;
          }
          static createDoc() {
            const e = DocumentApp.create("New Document"),
              t = DocumentApp.openById(e.getId()),
              a = t.getBody();
            return this.initializePage(a), t;
          }
          static getPdfBlob(e) {
            try {
              const t = this.createReport(e),
                a = DriveApp.getFileById(t.getId()),
                i = a.getBlob().getBytes();
              return Utilities.base64Encode(i);
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while getPdfBlob in Application",
                  e
                ),
                new Error("Error occurred while getPdfBlob"))
              );
            }
          }
          static loadResources() {
            return {
              image: DriveApp.getFileById(
                "1fMEJOMTQ176x0h7BphieEu3CFwfqHMH8"
              ).getBlob(),
            };
          }
          static initializePage(e) {
            e.clear()
              .setPageHeight(841.89)
              .setPageWidth(595.276)
              .setMarginTop(30)
              .setMarginLeft(50)
              .setMarginRight(50)
              .setMarginBottom(50);
          }
          static initializeStyles() {
            const e = {
                [DocumentApp.Attribute.FONT_FAMILY]: "Roboto Serif",
                [DocumentApp.Attribute.FONT_SIZE]: 9,
                [DocumentApp.Attribute.LINE_SPACING]: 0.06,
              },
              t = {
                [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]:
                  DocumentApp.HorizontalAlignment.CENTER,
              },
              a = {
                [DocumentApp.Attribute.BORDER_WIDTH]: 0,
                [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]:
                  DocumentApp.HorizontalAlignment.JUSTIFY,
              };
            return {
              bodyStyle: e,
              centerStyle: t,
              tableStyle: {
                narrow: { [DocumentApp.Attribute.BORDER_WIDTH]: 1 },
                thick: { [DocumentApp.Attribute.BORDER_WIDTH]: 3 },
                remove: { [DocumentApp.Attribute.BORDER_WIDTH]: 0 },
              },
              justifyStyle: a,
              titleStyle: {
                [DocumentApp.Attribute.BOLD]: !0,
                [DocumentApp.Attribute.FONT_SIZE]: 11,
              },
              subtitleStyle: { [DocumentApp.Attribute.BOLD]: !0 },
              officeUseOnly: {
                [DocumentApp.Attribute.HORIZONTAL_ALIGNMENT]:
                  DocumentApp.HorizontalAlignment.CENTER,
                [DocumentApp.Attribute.SPACING_AFTER]: 50,
                [DocumentApp.Attribute.PADDING_TOP]: 0,
              },
              headerStyle: {
                university: {
                  [DocumentApp.Attribute.BOLD]: !0,
                  [DocumentApp.Attribute.FONT_SIZE]: 12,
                },
                country: {
                  [DocumentApp.Attribute.BOLD]: !0,
                  [DocumentApp.Attribute.FONT_SIZE]: 10,
                },
              },
            };
          }
          static formatPage(e, t) {
            const a = this.initializeStyles();
            e.setAttributes(a.bodyStyle),
              this.formatHeader(t[0], a),
              this.formatPost(t[1], a),
              this.formatPersonalDetails(t[2], a),
              this.formatBasicDegree(t[3], a),
              this.formatPostgraduateDegree(t[4], a),
              this.formatResearch(t[5], a),
              this.formatAwards(t[6], a),
              this.formatExtraCurricular(t[7], a),
              this.formatPresentEmployment(t[8], a),
              this.formatPreviousEmployement(t[9], a),
              this.formatRefrees(t[10], a),
              this.formatDeclaration(t[11], a),
              this.formatApplicantSignature(t[12], a),
              this.formatNotes(t[13], a),
              this.formatOfficeSignature(t[14], a);
          }
          static formatHeader(e, t) {
            e.setAttributes(t.tableStyle.remove);
            const a = e.getChild(0).getChild(0).getChild(1),
              i = "UNIVERSITY OF PERADENIYA",
              s = a.getText().indexOf(i),
              n = s + i.length;
            if (-1 !== s) {
              const e = a.editAsText();
              e.setBold(s, n, !0), e.setFontSize(s, n, 12);
            }
            const l = e.getChild(0).getChild(1),
              o = l.getChild(0).getChild(0).getChild(0).getChild(0);
            l.setAttributes(t.officeUseOnly), o.setAttributes(t.officeUseOnly);
          }
          static formatPost(e, t) {
            e.setAttributes(t.tableStyle.remove);
            const a = e.getCell(0, 0),
              i = e.getCell(1, 0),
              s = {};
            (s[DocumentApp.Attribute.PADDING_TOP] = 30),
              (s[DocumentApp.Attribute.PADDING_BOTTOM] = 0),
              a.setAttributes(s);
            const n = {};
            (n[DocumentApp.Attribute.PADDING_BOTTOM] = 15),
              (n[DocumentApp.Attribute.PADDING_TOP] = 0),
              i.setAttributes(n),
              a.getChild(0).setAttributes(t.subtitleStyle);
          }
          static formatPersonalDetails(e, t) {
            e.setAttributes(t.tableStyle.remove);
            e.getCell(0, 0).getChild(0).setAttributes(t.subtitleStyle);
          }
          static formatBasicDegree(e, t) {
            e.setAttributes(t.tableStyle.remove);
            e.getCell(0, 0).getChild(0).setAttributes(t.subtitleStyle);
          }
          static formatPostgraduateDegree(e, t) {
            e.setAttributes(t.tableStyle.remove);
            e.getCell(0, 0).getChild(0).setAttributes(t.subtitleStyle);
          }
          static formatResearch(e, t) {
            e.setAttributes(t.tableStyle.remove);
            e.getCell(0, 0).getChild(0).setAttributes(t.subtitleStyle);
          }
          static formatAwards(e, t) {
            e.setAttributes(t.tableStyle.remove);
            e.getCell(0, 0).getChild(0).setAttributes(t.subtitleStyle);
          }
          static formatExtraCurricular(e, t) {
            e.setAttributes(t.tableStyle.remove);
            e.getCell(0, 0).getChild(0).setAttributes(t.subtitleStyle);
          }
          static formatPresentEmployment(e, t) {
            e.setAttributes(t.tableStyle.remove);
            e.getCell(0, 0).getChild(0).setAttributes(t.subtitleStyle);
          }
          static formatPreviousEmployement(e, t) {
            e.setAttributes(t.tableStyle.remove);
            e.getCell(0, 0).getChild(0).setAttributes(t.subtitleStyle);
          }
          static formatRefrees(e, t) {
            e.setAttributes(t.tableStyle.remove);
            e.getCell(0, 0).getChild(0).setAttributes(t.subtitleStyle);
          }
          static formatDeclaration(e, t) {
            e.setAttributes(t.tableStyle.remove);
            e.getCell(0, 0).getChild(0).setAttributes(t.subtitleStyle);
          }
          static formatApplicantSignature(e, t) {
            e.setAttributes(t.tableStyle.remove);
            const a = e.getCell(0, 0),
              i = a.getChild(1),
              s = a.getChild(3);
            i.setAttributes(t.tableStyle.remove),
              s.setAttributes(t.tableStyle.remove);
            const n = {};
            (n[DocumentApp.Attribute.PADDING_TOP] = 40),
              (n[DocumentApp.Attribute.PADDING_BOTTOM] = 20),
              (n[DocumentApp.Attribute.PADDING_RIGHT] = 0),
              (n[DocumentApp.Attribute.PADDING_LEFT] = 0);
            const l = { justify: {}, center: {}, right: {} };
            (l.justify[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
              DocumentApp.HorizontalAlignment.JUSTIFY),
              (l.center[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
                DocumentApp.HorizontalAlignment.CENTER),
              (l.right[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
                DocumentApp.HorizontalAlignment.RIGHT),
              i.getCell(0, 0).setAttributes(n),
              i.getCell(0, 1).setAttributes(n),
              s.getCell(0, 0).setAttributes(n),
              s.getCell(0, 1).setAttributes(n),
              i.getCell(0, 1).getChild(0).setAttributes(l.right),
              s.getCell(0, 1).getChild(0).setAttributes(l.right),
              a.getChild(0).setAttributes(l.justify),
              a.getChild(2).setAttributes(l.justify);
          }
          static formatNotes(e, t) {
            e.setAttributes(t.tableStyle.remove);
            const a = e.getCell(0, 0),
              i = {};
            i[DocumentApp.Attribute.WIDTH] = 5;
            const s = {};
            (s[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
              DocumentApp.HorizontalAlignment.JUSTIFY),
              a.getChild(0).setAttributes(t.subtitleStyle),
              a.getChild(1).setAttributes(t.tableStyle.remove),
              a.getChild(1).getCell(0, 0).setAttributes(i),
              a.getChild(1).getCell(0, 1).getChild(0).setAttributes(s),
              a.getChild(1).getCell(1, 1).getChild(0).setAttributes(s),
              a.getChild(1).getCell(2, 1).getChild(0).setAttributes(s),
              a
                .getChild(1)
                .getCell(0, 0)
                .getChild(0)
                .setAttributes(t.subtitleStyle),
              a
                .getChild(1)
                .getCell(1, 0)
                .getChild(0)
                .setAttributes(t.subtitleStyle),
              a
                .getChild(1)
                .getCell(2, 0)
                .getChild(0)
                .setAttributes(t.subtitleStyle),
              a
                .getChild(1)
                .getCell(0, 1)
                .getChild(0)
                .setAttributes(t.subtitleStyle),
              a
                .getChild(1)
                .getCell(1, 1)
                .getChild(0)
                .setAttributes(t.subtitleStyle),
              a
                .getChild(1)
                .getCell(2, 1)
                .getChild(0)
                .setAttributes(t.subtitleStyle);
          }
          static formatOfficeSignature(e, t) {
            e.setAttributes(t.tableStyle.remove);
            const a = e.getCell(0, 0),
              i = {};
            (i[DocumentApp.Attribute.PADDING_TOP] = 40),
              (i[DocumentApp.Attribute.PADDING_BOTTOM] = 20),
              (i[DocumentApp.Attribute.PADDING_RIGHT] = 0),
              (i[DocumentApp.Attribute.PADDING_LEFT] = 0);
            const s = { justify: {}, center: {}, right: {} };
            (s.justify[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
              DocumentApp.HorizontalAlignment.JUSTIFY),
              (s.center[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
                DocumentApp.HorizontalAlignment.CENTER),
              (s.right[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
                DocumentApp.HorizontalAlignment.RIGHT),
              a.getChild(3).setAttributes(t.tableStyle.remove),
              a.getChild(3).getCell(0, 0).setAttributes(i),
              a.getChild(3).getCell(0, 1).setAttributes(i),
              a.getChild(3).getCell(1, 0).setAttributes(i),
              a.getChild(3).getCell(1, 1).setAttributes(i),
              a.getChild(3).getCell(0, 1).getChild(0).setAttributes(s.right),
              a.getChild(3).getCell(1, 1).getChild(0).setAttributes(s.right),
              a.getChild(0).setAttributes(s.center),
              a.getChild(2).setAttributes(s.justify),
              a.getChild(4).setAttributes(s.justify);
          }
          static processData(e) {
            try {
              const t = {};
              return (
                (t.INFO = {
                  APPLICATION: { TIMESTAMP: e[0], ID: e[1] },
                  VACANCY: {
                    ID: e[2],
                    FACULTY: e[3],
                    DEPARTMENT: e[4],
                    POST: e[5],
                  },
                }),
                (t.PERSONAL_DETAILS = {
                  GENDER: e[6],
                  TITLE: e[7],
                  INITNAME: e[8],
                  FULLNAME: e[9],
                  DATE_OF_BIRTH: e[10],
                  PERMANENT_RESIDENCE: e[11],
                  CIVIL_STATUS: e[12],
                  MOBILE: e[13],
                  RESIDENCE: e[14],
                  EMAIL: e[15],
                  DISTRICT: e[16],
                  ELECTORATE: e[17],
                  PROVINCE: e[18],
                  CITY: e[19],
                  CITIZENSHIP: e[20],
                  NIC: e[21],
                  BY_DESCENT_OR_REGISTRATION: e[22],
                  SPECIFY_COUNTRY: e[23],
                  PASSPORT_NO: e[24],
                  PROFICIENCY: e[25],
                }),
                (t.BASIC_DEGREE = e[26]),
                (t.POSTGRADUATE_DEGREE = e[27]),
                (t.RESEARCH = {
                  BOOKS: e[28],
                  JOURNALS: e[29],
                  ABSTRACTS: e[30],
                }),
                (t.AWARDS = e[31]),
                (t.EXTRA_CURRICULAR = e[32]),
                (t.PRESENT_OCCUPATION = {
                  DESIGNATION: e[33],
                  DEPARTMENT: e[34],
                  STARTED_WORKING: e[35],
                  SALARY: e[36],
                }),
                (t.PREVIOUS_EMPLOYMENTS = e[37]),
                (t.REFREES = { REFEREE_1: e[38], REFREE_2: e[39] }),
                (t.DECLARATION = {
                  COMMENDATIONS_PUNISHMENTS: { STATUS: e[40], DETAILS: e[41] },
                  VACATION_POST_NOTICES: { STATUS: e[42], DETAILS: e[43] },
                  BOND_VIOLATIONS: {
                    STATUS: e[44],
                    BOND_VALUE: e[45],
                    UNIVERSITY: e[46],
                  },
                }),
                (t.SHORTLISTED_STATUS = e[47]),
                t
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while processData in Application",
                  e
                ),
                new Error("Error occurred while processData"))
              );
            }
          }
          static processDegree(e) {
            let t = "";
            for (let a = 0; a < 2; a += 1) e[a] && (t = e[a]);
            let a = "";
            for (let t = 2; t < 4; t += 1)
              e[t] && (a = e[t].charAt(0).toUpperCase() + e[t].slice(1));
            let i = "";
            e[10] && (i = `${e[10]}`);
            return {
              name: `${t} ${a}`,
              university: `${e[4]}, ${e[5]}`,
              duration: `From\t${e[6]}\nTo\t${e[7]}`,
              performance: `(${e[8]}, ${e[9]})`,
              method: i,
            };
          }
          static processAwards(e) {
            const t = { name: "", institute: "", year: "", details: "" };
            return (
              (t.name = e[0]),
              (t.institute = e[1]),
              (t.year = e[2]),
              (t.details = e[3]),
              t
            );
          }
          static processPreviousEmployement(e) {
            const t = {};
            return (
              (t.designation = `${e[0]},\n${e[1]}`),
              (t.duration = `${e[2]}\n${e[3]}`),
              (t.reason = e[4]),
              t
            );
          }
          static processExtraCurricular(e) {
            const t = { name: "", duration: "", level: "", details: "" };
            return (
              (t.name = e[0]),
              (t.duration = e[1]),
              (t.level = e[2]),
              (t.details = e[3]),
              t
            );
          }
          static processDeclaration(e) {
            const t = {};
            return (
              (t.COMMENDATIONS_PUNISHMENTS = `Have you ever been Commended or Punished during your career in the University / Educational Institution: ${e.COMMENDATIONS_PUNISHMENTS.STATUS}\n\nIf yes, please specify:\n${e.COMMENDATIONS_PUNISHMENTS.DETAILS}`),
              (t.VACATION_POST_NOTICES = `Have you ever been served with a Vacation of Post notice by any other University/ Government Institution? ${e.VACATION_POST_NOTICES.STATUS}\n\nIf so please provide details.\n${e.VACATION_POST_NOTICES.DETAILS}`),
              (t.BOND_VIOLATIONS = `Have you ever been treated as a bond violator : ${e.BOND_VIOLATIONS.STATUS}\nIf yes, Please provide details :\n\nUniversity: ${e.BOND_VIOLATIONS.UNIVERSITY}\nBond value: ${e.BOND_VIOLATIONS.BOND_VALUE}`),
              t
            );
          }
          static generateHeader(e) {
            const t = e.getCell(0, 0),
              a = t.insertImage(0, this.loadResources().image);
            t.insertParagraph(1, "\nUNIVERSITY OF PERADENIYA\nSri Lanka"),
              a.setWidth(120),
              a.setHeight(120),
              t.removeChild(t.getChild(t.getNumChildren() - 1));
            const i = e.getCell(0, 1);
            i
              .insertTable(0)
              .appendTableRow()
              .appendTableCell("Office use only"),
              i.removeChild(i.getChild(i.getNumChildren() - 1));
          }
          static generateApplicationInfo(e, t) {
            const a = e.getCell(0, 0);
            a.insertParagraph(0, "APPLICATION FOR THE POST OF"),
              a.removeChild(a.getChild(a.getNumChildren() - 1));
            const i = e.getCell(1, 0);
            i.insertParagraph(
              0,
              `${t.VACANCY.POST}, ${t.VACANCY.DEPARTMENT}, ${t.VACANCY.FACULTY}`
            ),
              i.removeChild(i.getChild(i.getNumChildren() - 1));
          }
          static generatePersonalDetails(e, t) {
            const a = e.getCell(0, 0);
            a.insertParagraph(0, "(1)\tPERSONAL DETAILS"),
              a.removeChild(a.getChild(a.getNumChildren() - 1));
            const i = e.getCell(1, 0);
            i.insertParagraph(0, `Title: \t${t.TITLE}`),
              i.insertParagraph(1, `Name with Initials: \t${t.INITNAME}`),
              i.insertParagraph(
                2,
                `Full Name: (underline Surname)\t${t.FULLNAME}`
              ),
              i.insertParagraph(3, `Gender: \t${t.GENDER}`),
              i.removeChild(i.getChild(i.getNumChildren() - 1));
            const s = e.getCell(2, 0);
            s.insertParagraph(
              0,
              `Date of birth: (please attach a copy of the Birth Certificate)\n${t.DATE_OF_BIRTH}`
            ),
              s.removeChild(s.getChild(s.getNumChildren() - 1));
            const n = e.getCell(3, 0);
            n.insertParagraph(
              0,
              `Permanent Residence: (any change should be communicated immediately)\n${t.PERMANENT_RESIDENCE}\n`
            ),
              n.insertParagraph(1, `Mobile: \t${t.MOBILE}`),
              n.insertParagraph(2, `Home: \t\t${t.RESIDENCE}`),
              n.insertParagraph(3, `Email: \t\t${t.EMAIL}`),
              n.removeChild(n.getChild(n.getNumChildren() - 1));
            const l = e.getCell(4, 0);
            l.insertParagraph(0, `Civil Status: \t${t.CIVIL_STATUS}`),
              l.removeChild(l.getChild(l.getNumChildren() - 1));
            const o = e.getCell(5, 0);
            o.insertParagraph(0, `District: \t${t.DISTRICT}`),
              o.insertParagraph(1, `Electorate: \t${t.ELECTORATE}`),
              o.insertParagraph(2, `Province: \t${t.PROVINCE}`),
              o.insertParagraph(3, `City: \t\t${t.CITY}`),
              o.removeChild(o.getChild(o.getNumChildren() - 1));
            const c = e.getCell(6, 0);
            let p = "";
            (p = "Other" !== t.CITIZENSHIP ? "Yes" : "No"),
              c.insertParagraph(0, `Are you a citizen of Sri Lanka: \t${p}`),
              (p =
                "byRegistration" !== t.BY_DESCENT_OR_REGISTRATION
                  ? "by descent"
                  : "by registration"),
              c.insertParagraph(
                1,
                `State whether by Descent or Registration: \t${p}`
              ),
              c.insertParagraph(2, `National Identity Card No: \t${t.NIC}`),
              c.insertParagraph(
                3,
                `\nIf you are not a citizen of Sri Lanka, State the country of Citizenship: \t${t.SPECIFY_COUNTRY}`
              ),
              c.insertParagraph(4, `Passport No: \t${t.PASSPORT_NO}`),
              (p = ""),
              JSON.parse(t.PROFICIENCY).forEach((e) => {
                p += `${e}, `;
              }),
              (p = p.slice(0, p.length - 2)),
              c.insertParagraph(5, `\nProficiency: \t${p}`),
              (p = ""),
              c.removeChild(c.getChild(c.getNumChildren() - 1));
          }
          static generateBasicDegree(e, t) {
            const a = JSON.parse(JSON.parse(t)),
              i = e.getCell(0, 0);
            i.insertParagraph(
              0,
              "(2)\tUNIVERSITY EDUCATION\n(Degree, Diploma etc. In the case of Medical/Dental, please give details of 2nd, 3rd and Final Exams. Please attach copies of all certificates)"
            ),
              i.removeChild(i.getChild(i.getNumChildren() - 1));
            const s = e.getCell(1, 0),
              n = s.insertTable(0),
              l = n.appendTableRow();
            l.appendTableCell("Name of the Degree/Diploma etc."),
              l.appendTableCell("Duration"),
              a.forEach((e) => {
                const t = this.processDegree(e),
                  a = n.appendTableRow();
                a.appendTableCell(
                  `${t.name}\n${t.university}\n${t.performance}`
                ),
                  a.appendTableCell(`${t.duration}`);
              }),
              s.removeChild(s.getChild(s.getNumChildren() - 1));
          }
          static generatePostgraduateDegree(e, t) {
            const a = JSON.parse(JSON.parse(t)),
              i = e.getCell(0, 0);
            i.insertParagraph(
              0,
              "(3)\tPOSTGRADUATE QUALIFICATIONS\n(Please attach copies of all relevant certificates)"
            ),
              i.removeChild(i.getChild(i.getNumChildren() - 1));
            const s = e.getCell(1, 0),
              n = s.insertTable(0),
              l = n.appendTableRow();
            l.appendTableCell("Name of the Degree/Diploma etc."),
              l.appendTableCell("Duration"),
              a.forEach((e) => {
                const t = this.processDegree(e),
                  a = n.appendTableRow();
                a.appendTableCell(
                  `${t.name}\n${t.university}\n${t.performance}\n${t.method}`
                ),
                  a.appendTableCell(`${t.duration}`);
              }),
              s.removeChild(s.getChild(s.getNumChildren() - 1));
          }
          static generateResearch(e, t) {
            const a = JSON.parse(JSON.parse(t.BOOKS)),
              i = JSON.parse(JSON.parse(t.JOURNALS)),
              s = JSON.parse(JSON.parse(t.ABSTRACTS)),
              n = e.getCell(0, 0);
            n.insertParagraph(
              0,
              "(4)\tRESEARCH PUBLICATIONS\n(First degree Dissertation/Postgraduate Thesis are not considered as publications)"
            ),
              n.removeChild(n.getChild(n.getNumChildren() - 1));
            const l = e.getCell(1, 0);
            l.insertParagraph(0, "BOOKS");
            const o = l.insertTable(1),
              c = o.appendTableRow();
            c.appendTableCell("Name"),
              c.appendTableCell("Author"),
              c.appendTableCell("Date"),
              c.appendTableCell("ISBN"),
              a.forEach((e) => {
                const t = o.appendTableRow();
                t.appendTableCell(`${e[0]}`),
                  t.appendTableCell(`${e[1]}`),
                  t.appendTableCell(`${e[2]}`),
                  t.appendTableCell(`${e[3]}`);
              }),
              l.removeChild(l.getChild(l.getNumChildren() - 1));
            const p = e.getCell(2, 0);
            p.insertParagraph(0, "JOURNALS");
            const u = p.insertTable(1),
              d = u.appendTableRow();
            d.appendTableCell("Name"),
              d.appendTableCell("Author"),
              d.appendTableCell("Source"),
              d.appendTableCell("Date"),
              d.appendTableCell("Indexed / Non Indexed"),
              d.appendTableCell("Conference / By Research"),
              i.forEach((e) => {
                const t = u.appendTableRow();
                t.appendTableCell(`${e[0]}`),
                  t.appendTableCell(`${e[1]}`),
                  t.appendTableCell(`${e[2]}`),
                  t.appendTableCell(`${e[3]}`),
                  t.appendTableCell(`${e[4]}`),
                  t.appendTableCell(`${e[5]}`);
              }),
              p.removeChild(p.getChild(p.getNumChildren() - 1));
            const h = e.getCell(3, 0);
            h.insertParagraph(0, "ABSTRACTS");
            const g = h.insertTable(1),
              A = g.appendTableRow();
            A.appendTableCell("Name"),
              A.appendTableCell("Author"),
              A.appendTableCell("Source"),
              A.appendTableCell("Date"),
              A.appendTableCell("Indexed / Non Indexed"),
              A.appendTableCell("Conference / By Research"),
              s.forEach((e) => {
                const t = g.appendTableRow();
                t.appendTableCell(`${e[0]}`),
                  t.appendTableCell(`${e[1]}`),
                  t.appendTableCell(`${e[2]}`),
                  t.appendTableCell(`${e[3]}`),
                  t.appendTableCell(`${e[4]}`),
                  t.appendTableCell(`${e[5]}`);
              }),
              h.removeChild(h.getChild(h.getNumChildren() - 1));
          }
          static generateAwards(e, t) {
            const a = JSON.parse(JSON.parse(t)),
              i = e.getCell(0, 0);
            i.insertParagraph(
              0,
              "(5)\tACADEMIC DISTINCTIONS, SCHOLARSHIPS, AWARDS, MEDALS etc.\n(Please attach copies of relevant certificates)"
            ),
              i.removeChild(i.getChild(i.getNumChildren() - 1));
            const s = e.getCell(1, 0),
              n = s.insertTable(0),
              l = n.appendTableRow();
            l.appendTableCell("Name of the Award"),
              l.appendTableCell("University/Institute"),
              l.appendTableCell("Year"),
              l.appendTableCell("Details"),
              a.forEach((e) => {
                const t = this.processAwards(e),
                  a = n.appendTableRow();
                a.appendTableCell(`${t.name}`),
                  a.appendTableCell(`${t.institute}`),
                  a.appendTableCell(`${t.year}`),
                  a.appendTableCell(`${t.details}`);
              }),
              s.removeChild(s.getChild(s.getNumChildren() - 1));
          }
          static generateExtraCurricular(e, t) {
            const a = JSON.parse(JSON.parse(t)),
              i = e.getCell(0, 0);
            i.insertParagraph(0, "(6)\tEXTRA CURRICULAR ACTIVITIES"),
              i.removeChild(i.getChild(i.getNumChildren() - 1));
            const s = e.getCell(1, 0),
              n = s.insertTable(0),
              l = n.appendTableRow();
            l.appendTableCell("Name of the Activity"),
              l.appendTableCell("Duration"),
              l.appendTableCell("Level"),
              l.appendTableCell("Details"),
              a.forEach((e) => {
                const t = this.processExtraCurricular(e),
                  a = n.appendTableRow();
                a.appendTableCell(`${t.name}`),
                  a.appendTableCell(`${t.duration}`),
                  a.appendTableCell(`${t.level}`),
                  a.appendTableCell(`${t.details}`);
              }),
              s.removeChild(s.getChild(s.getNumChildren() - 1));
          }
          static generatePresentEmployment(e, t) {
            const a = e.getCell(0, 0);
            a.insertParagraph(0, "(7)\tPRESENT EMPLOYMENT"),
              a.removeChild(a.getChild(a.getNumChildren() - 1));
            const i = e.getCell(1, 0);
            i.insertParagraph(0, `${t.DESIGNATION}`),
              i.insertParagraph(1, `${t.DEPARTMENT}`),
              i.insertParagraph(
                2,
                `Started working from: ${t.STARTED_WORKING}`
              ),
              i.insertParagraph(3, `Salary: ${t.SALARY}`),
              i.removeChild(i.getChild(i.getNumChildren() - 1));
          }
          static generatePreviousEmployement(e, t) {
            const a = JSON.parse(JSON.parse(t)),
              i = e.getCell(0, 0);
            i.insertParagraph(0, "(8)\tPREVIOUS EMPLOYMENTS"),
              i.removeChild(i.getChild(i.getNumChildren() - 1));
            const s = e.getCell(1, 0),
              n = s.insertTable(0),
              l = n.appendTableRow();
            l.appendTableCell("Designation"),
              l.appendTableCell("Duration"),
              l.appendTableCell("Reasons for leaving"),
              a.forEach((e) => {
                const t = this.processPreviousEmployement(e),
                  a = n.appendTableRow();
                a.appendTableCell(t.designation),
                  a.appendTableCell(t.duration),
                  a.appendTableCell(t.reason);
              }),
              s.removeChild(s.getChild(s.getNumChildren() - 1));
          }
          static generateRefrees(e, t) {
            const a = JSON.parse(t.REFEREE_1),
              i = JSON.parse(t.REFREE_2),
              s = e.getCell(0, 0);
            s.insertParagraph(
              0,
              '(9)\tREFEREES\n\nNote:\nSubmitting two non-related referees reports is compulsory. You can send referees reports either along with the application under sealed envelope\nor\nReferees may requested to send referees reports directly addressed to the Vice-Chancellor of this University indicating "Name of the applicant, post applied & the department" at the top left hand corner of the envelope'
            ),
              s.removeChild(s.getChild(s.getNumChildren() - 1));
            const n = e.getCell(1, 0),
              l = n.insertTable(0),
              o = l.appendTableRow();
            o.appendTableCell("Name"),
              o.appendTableCell("Address"),
              o.appendTableCell("Email"),
              o.appendTableCell("Telephone");
            const c = l.appendTableRow();
            c.appendTableCell(a.rName1),
              c.appendTableCell(a.rAddress1),
              c.appendTableCell(a.rEmail1),
              c.appendTableCell(a.rTelephone1);
            const p = l.appendTableRow();
            p.appendTableCell(i.rName2),
              p.appendTableCell(i.rAddress2),
              p.appendTableCell(i.rEmail2),
              p.appendTableCell(i.rTelephone2),
              n.removeChild(n.getChild(n.getNumChildren() - 1));
          }
          static generateDeclaration(e, t) {
            const a = e.getCell(0, 0);
            a.insertParagraph(0, "(10)\tDECLARATION"),
              a.removeChild(a.getChild(a.getNumChildren() - 1));
            const i = e.getCell(1, 0);
            i.insertParagraph(
              0,
              this.processDeclaration(t).COMMENDATIONS_PUNISHMENTS
            ),
              i.insertParagraph(1, ""),
              i.insertParagraph(
                2,
                this.processDeclaration(t).VACATION_POST_NOTICES
              ),
              i.insertParagraph(3, ""),
              i.insertParagraph(4, this.processDeclaration(t).BOND_VIOLATIONS),
              i.removeChild(i.getChild(i.getNumChildren() - 1));
          }
          static generateApplicantSignature(e) {
            const t = e.getCell(0, 0);
            t.insertParagraph(
              0,
              "I hereby certify that all the particulars submitted by me in this application are true and accurate. I am aware that if any of these particulars are found to be false or inaccurate, I am liable to be disqualified before selection and to be dismissed without any compensation if the inaccuracy is detected after appointment"
            );
            const a = t.insertTable(1).appendTableRow();
            a.appendTableCell("Date"),
              a.appendTableCell("Signature of Applicant"),
              t.insertParagraph(
                2,
                "I express my willingness to resign from the present position ifI am not released in order to accept the post."
              );
            const i = t.insertTable(3).appendTableRow();
            i.appendTableCell("Date"),
              i.appendTableCell("Signature of Applicant"),
              t.removeChild(t.getChild(t.getNumChildren() - 1));
          }
          static generateNotes(e) {
            const t = e.getCell(0, 0);
            t.insertParagraph(0, "Note");
            const a = t.insertTable(1),
              i = a.appendTableRow();
            i.appendTableCell("1"),
              i.appendTableCell(
                "Submit your application according to the detailed requirements indicated in the web site www.pdn.ac.lk"
              );
            const s = a.appendTableRow();
            s.appendTableCell("2"),
              s.appendTableCell(
                "All applicants must complete the qualifications & experience by the closing date of the application. No qualification fulfilled after the closing date will be considered."
              );
            const n = a.appendTableRow();
            n.appendTableCell("3"),
              n.appendTableCell(
                "Applicants not submitted according to this format and submitted without copies of required certificates to support qualifications & experience will be rejected."
              ),
              t.removeChild(t.getChild(t.getNumChildren() - 1));
          }
          static generateOfficeSignature(e) {
            const t = e.getCell(0, 0);
            t.insertParagraph(
              0,
              "(To be completed by the Head of the Department where applicable)\n\n"
            ),
              t.insertParagraph(
                1,
                "Vice Chancellor,\nUniversity of Peradeniya\n"
              ),
              t.insertParagraph(
                2,
                "The application is forwarded. Please note that if he/she is selected for the said post, he/she can be/cannot be released from the service."
              );
            const a = t.insertTable(3),
              i = a.appendTableRow();
            i.appendTableCell("Date"),
              i.appendTableCell("Signature of Head of the Department");
            const s = a.appendTableRow();
            s.appendTableCell("Date"),
              s.appendTableCell("Signature of Head of the Institution"),
              t.insertParagraph(
                4,
                "Note: The candidates are required to send their academic transcripts in support of the application, in consultation with the authorities of the respective Universities where they studied. Their applications will not be considered in the absence of the academic transcript."
              ),
              t.insertParagraph(
                5,
                "\nSenior Assistant Registrar / Academic Establishments, UPDN"
              ),
              t.removeChild(t.getChild(t.getNumChildren() - 1));
          }
          static createMasterTable(e) {
            e.insertTable(0, [["", ""]]),
              e.insertTable(1, [[""], [""]]),
              e.insertTable(2, [[""], [""], [""], [""], [""], [""], [""]]),
              e.insertTable(3, [[""], [""]]),
              e.insertTable(4, [[""], [""]]),
              e.insertTable(5, [[""], [""], [""], [""]]),
              e.insertTable(6, [[""], [""]]),
              e.insertTable(7, [[""], [""]]),
              e.insertTable(8, [[""], [""]]),
              e.insertTable(9, [[""], [""]]),
              e.insertTable(10, [[""], [""]]),
              e.insertTable(11, [[""], [""]]),
              e.insertTable(12, [[""]]),
              e.insertTable(13, [[""]]),
              e.insertTable(14, [[""]]);
          }
          static updateDocument(e) {
            try {
              const t = e,
                a = this.loadDoc(),
                i = a.getBody();
              this.createMasterTable(i);
              const s = i.getTables();
              return (
                this.generateHeader(s[0]),
                i.insertHorizontalRule(1),
                this.generateApplicationInfo(s[1], t.INFO),
                this.generatePersonalDetails(s[2], t.PERSONAL_DETAILS),
                i.insertPageBreak(4),
                this.generateBasicDegree(s[3], t.BASIC_DEGREE),
                this.generatePostgraduateDegree(s[4], t.POSTGRADUATE_DEGREE),
                this.generateResearch(s[5], t.RESEARCH),
                i.insertPageBreak(8),
                this.generateAwards(s[6], t.AWARDS),
                this.generateExtraCurricular(s[7], t.EXTRA_CURRICULAR),
                this.generatePresentEmployment(s[8], t.PRESENT_OCCUPATION),
                this.generatePreviousEmployement(s[9], t.PREVIOUS_EMPLOYMENTS),
                this.generateRefrees(s[10], t.REFREES),
                i.insertPageBreak(14),
                this.generateDeclaration(s[11], t.DECLARATION),
                i.insertHorizontalRule(16),
                this.generateApplicantSignature(s[12]),
                this.generateNotes(s[13]),
                i.insertPageBreak(19),
                this.generateOfficeSignature(s[14]),
                this.formatPage(i, s),
                a
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while updateDocument in Application",
                  e
                ),
                new Error("Error occurred while updateDocument"))
              );
            }
          }
          static createReport(e) {
            try {
              const t = JSON.parse(e),
                a = this.processData(t);
              return this.updateDocument(a);
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while createReport in Application",
                  e
                ),
                new Error("Error occurred while createReport"))
              );
            }
          }
        };
      },
    ],
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var a = (__webpack_module_cache__[e] = { exports: {} });
    return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
  }
  (__webpack_require__.d = (e, t) => {
    for (var a in t)
      __webpack_require__.o(t, a) &&
        !__webpack_require__.o(e, a) &&
        Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
  }),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = (e, t) =>
      Object.prototype.hasOwnProperty.call(e, t)),
    (__webpack_require__.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var __webpack_exports__ = {};
  (() => {
    __webpack_require__.r(__webpack_exports__);
    var e = __webpack_require__(1),
      t = __webpack_require__(3),
      a = __webpack_require__(4);
    let i = 1;
    (__webpack_require__.g.doGet = function (e) {
      let a = "";
      return e.parameter.page
        ? ((a = HtmlService.createTemplateFromFile(e.parameter.page)),
          a
            .evaluate()
            .setTitle(t.default.getAppName(e.parameter.page))
            .addMetaTag("viewport", "width=device-width, initial-scale=1")
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL))
        : ((a = HtmlService.createTemplateFromFile("index_shortlist")),
          a
            .evaluate()
            .setTitle(t.default.getAppName())
            .addMetaTag("viewport", "width=device-width, initial-scale=1")
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL));
    }),
      (__webpack_require__.g.include = function (e) {
        return HtmlService.createHtmlOutputFromFile(e).getContent();
      }),
      (__webpack_require__.g.initialLoading = function (t) {
        return JSON.stringify(e.default.initialLoading(t));
      }),
      (__webpack_require__.g.saveRequest = function (t) {
        return JSON.stringify(e.default.saveRequest(t));
      }),
      (__webpack_require__.g.getTempData = function () {
        return (
          (i = PropertiesService.getScriptProperties().getProperty("tempData")),
          i
        );
      }),
      (__webpack_require__.g.setTempData = function (e) {
        (i = JSON.stringify(e)),
          PropertiesService.getScriptProperties().setProperty("tempData", i);
      }),
      (__webpack_require__.g.router = function (t) {
        return e.default.getUrl(t);
      }),
      (__webpack_require__.g.download = function (e) {
        return JSON.stringify(a.default.processRequest(e));
      }),
      (__webpack_require__.g.updateApplicationStatus = function (t) {
        return JSON.stringify(e.default.updateApplicationStatus(t));
      }),
      (__webpack_require__.g.getScriptUrl = function () {
        return t.default.getScriptUrl();
      });
  })();
})();
