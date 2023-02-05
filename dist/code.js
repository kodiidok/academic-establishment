function doGet() {}
function include() {}
function initialLoading() {}
function saveRequest() {}
function initialShortlistAppLoading() {}
function updateApplicationStatus() {}
function getApplications() {}
(() => {
  "use strict";
  var __webpack_modules__ = [
      ,
      (e, t, a) => {
        a.r(t), a.d(t, { default: () => n });
        var i = a(2),
          s = a(3);
        const n = class {
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
          static initialLoading() {
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
                  "Error occurred while initialLoading in Resources",
                  e
                ),
                new Error("Error occurred while initialLoading"))
              );
            }
          }
          static initialShortlistAppLoading() {
            const e = {};
            try {
              return (
                (e.scriptUrl = s.default.getScriptUrl()),
                (e.appName = s.default.getAppName()),
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
                const o = {
                    Name: "INTERNAL_USER",
                    Email: t,
                    Faculty: n,
                    Department: "",
                    Role: "USER_UOP",
                  },
                  c = [];
                return c.push(o), (e.data = c), e;
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
            let t = "";
            try {
              return (
                e &&
                  ((i.default.cacheEnabled = !1),
                  i.default.initilizeDatabase(s.default.getTestMainDBID()),
                  i.default.openDatabaseConnection(
                    s.default.getApplicationSheetName()
                  ),
                  (t = i.default.updateItem(e))),
                t
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
                    ((e[0] =
                      _utils__WEBPACK_IMPORTED_MODULE_0__.default.formatDate(
                        e[0]
                      )),
                    this.connectedDatabase
                      .getRange(t, 1, 1, this.connectedDatabase.getLastColumn())
                      .setValues([e]));
                (t.request = e), (t.status = !0);
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
              const o = {};
              (o.range = s), (o.majorDimension = "ROWS");
              const c = [];
              t.arrayNames.forEach(function (t, a) {
                0 === a ? c.push("=ROW()") : c.push(e[t]);
              }),
                (o.values = [c]),
                a.push(o);
            });
            const o = { valueInputOption: "USER_ENTERED", data: a };
            Sheets.Spreadsheets.Values.batchUpdate(o, this.DBID);
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
        a.r(t), a.d(t, { default: () => p });
        const i = "Asia/Colombo",
          s = "MM/dd/yyyy HH:mm:ss",
          n = "ONLINE APPLICATION",
          o =
            "https://script.google.com/macros/s/AKfycbwftRGdFiH_wwlNlEl5teYLr_isAKauK-OskdggQR_7VsAINLaQaRZ6NUqIx_0o-YwR8A/exec",
          c = "portal@gs.pdn.ac.lk";
        let l = null,
          u = [];
        const p = class {
          static ChunkyCache(e, t) {
            return {
              put(a, i, s) {
                const n = JSON.stringify(i),
                  o = Math.floor(t / 2);
                let c = 0;
                for (; c < n.length; )
                  (l = `${a}_${c}`),
                    u.push(l),
                    e.put(l, n.substr(c, o), s + 5),
                    (c += o);
                const p = { chunkSize: t, chunks: u, length: n.length };
                e.put(a, JSON.stringify(p), s);
              },
              get(t) {
                const a = e.get(t);
                if (null != a) {
                  const t = JSON.parse(a);
                  if (
                    ((u = t.chunks.map(function (t) {
                      return e.get(t);
                    })),
                    u.every(function (e) {
                      return null != e;
                    }))
                  )
                    return JSON.parse(u.join(""));
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
          static getAppName() {
            return n;
          }
          static getAppDescription() {
            return "Academic Establishment. University of Peradeniya.";
          }
          static getAppRedirectURL() {
            return o;
          }
          static getScriptUrl() {
            return ScriptApp.getService().getUrl();
          }
          static getALIASMAIL() {
            return c;
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
          static sendMail(e, t, a, i, s, n, l, u, p) {
            try {
              let d =
                HtmlService.createHtmlOutputFromFile(
                  "email_template"
                ).getContent();
              (d = d.replace("%heading", e)),
                (d = d.replace("%description", t)),
                (d = d.replace("%param1", i)),
                (d = d.replace("%param2", s)),
                (d = d.replace("%param3", n)),
                (d = d.replace("%param4", l)),
                (d = d.replace("%param5", `${p} - ${u}`)),
                (d = d.replace("%appURL", o));
              const h = "Online Application -  University of Peradeniya";
              GmailApp.sendEmail(a, h, "", {
                from: c,
                replyTo: c,
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
            const i = `${n} ERROR OCCURED | FOS APPS |  ${t}`;
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
      t = __webpack_require__(3);
    (__webpack_require__.g.doGet = function (e) {
      return e.parameter.page
        ? HtmlService.createTemplateFromFile(e.parameter.page)
            .evaluate()
            .setTitle(t.default.getAppName())
            .addMetaTag("viewport", "width=device-width, initial-scale=1")
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        : HtmlService.createTemplateFromFile("index_shortlist")
            .evaluate()
            .setTitle(t.default.getAppName())
            .addMetaTag("viewport", "width=device-width, initial-scale=1")
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }),
      (__webpack_require__.g.include = function (e) {
        return HtmlService.createHtmlOutputFromFile(e).getContent();
      }),
      (__webpack_require__.g.initialLoading = function () {
        return JSON.stringify(e.default.initialLoading());
      }),
      (__webpack_require__.g.saveRequest = function (t) {
        return JSON.stringify(e.default.saveRequest(t));
      }),
      (__webpack_require__.g.initialShortlistAppLoading = function () {
        return JSON.stringify(e.default.initialShortlistAppLoading());
      }),
      (__webpack_require__.g.updateApplicationStatus = function (t) {
        return JSON.stringify(e.default.updateApplicationStatus(t));
      }),
      (__webpack_require__.g.getApplications = function () {
        return JSON.stringify(e.default.getApplications());
      });
  })();
})();
