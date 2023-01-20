function doGet() {}
function include() {}
function initialLoading() {}
function saveRequest() {}
(() => {
  "use strict";
  var __webpack_modules__ = [
      ,
      (e, t, a) => {
        a.r(t), a.d(t, { default: () => i });
        var s = a(2),
          n = a(3);
        const i = class {
          static initialLoading() {
            const e = {};
            try {
              return (
                (e.scriptUrl = n.default.getScriptUrl()),
                (e.appName = n.default.getAppName()),
                (e.appDescription = n.default.getAppDescription()),
                (e.appRedirectURL = n.default.getAppRedirectURL()),
                (e.posts = this.getPostData()),
                (e.vacancies = this.getVacancyData()),
                (e.faculties = this.getFacultyData()),
                (e.departments = this.getDepartmentData()),
                e
              );
            } catch (e) {
              throw (
                (console.error(
                  "Error occurred while saveLeave in Resources",
                  e
                ),
                new Error("Error occurred while initialLoading"))
              );
            }
          }
          static resolveAppUser() {
            try {
              const e = {};
              if (n.default.getCurrentUser()) {
                const t = n.default.getCurrentUser();
                if (
                  ((s.default.cacheEnabled = !1),
                  s.default.initilizeDatabase(n.default.getMainDBID()),
                  s.default.openDatabaseConnection(
                    n.default.getAppRoleSheetName()
                  ),
                  foundObj && "undefined" != typeof foundObj)
                )
                  return (e.data = foundObj), e;
                const a = n.default
                  .getCurrentUser()
                  .split("@")[1]
                  .split(".")[0];
                let i = "";
                switch (a) {
                  case "agri":
                    i = "Faculty of Agriculture";
                    break;
                  case "ahs":
                    i = "Faculty of Allied Health Sciences";
                    break;
                  case "arts":
                    i = "Faculty of Arts";
                    break;
                  case "dental":
                    i = "Faculty of Dental Sciences";
                    break;
                  case "eng":
                    i = "Faculty of Engineering";
                    break;
                  case "mgt":
                    i = "Faculty of Management";
                    break;
                  case "med":
                    i = "Faculty of Medicine";
                    break;
                  case "sci":
                    i = "Faculty of Science";
                    break;
                  case "vet":
                    i = "Faculty of Veterinary Medicine and Animal Science";
                    break;
                  default:
                    i = "UNIVERSITY OF PERADENIYA";
                }
                const o = {
                    Name: "INTERNAL_USER",
                    Email: t,
                    Faculty: i,
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
          static getVacancyData() {
            try {
              (s.default.cacheEnabled = !1),
                s.default.initilizeDatabase(n.default.getDataDBID()),
                s.default.openDatabaseConnection(
                  n.default.getVacanciesListSheetName()
                );
              const e = s.default.readDatabaseCache(),
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
              (s.default.cacheEnabled = !1),
                s.default.initilizeDatabase(n.default.getDataDBID()),
                s.default.openDatabaseConnection(
                  n.default.getPostListSheetName()
                );
              const e = s.default.readDatabaseCache(),
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
              (s.default.cacheEnabled = !1),
                s.default.initilizeDatabase(n.default.getDataDBID()),
                s.default.openDatabaseConnection(
                  n.default.getFacListSheetName()
                );
              const e = s.default.readDatabaseCache(),
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
              (s.default.cacheEnabled = !1),
                s.default.initilizeDatabase(n.default.getDataDBID()),
                s.default.openDatabaseConnection(
                  n.default.getDeptListSheetName()
                );
              const e = s.default.readDatabaseCache(),
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
                  ((s.default.cacheEnabled = !1),
                  s.default.initilizeDatabase(n.default.getMainDBID()),
                  s.default.openDatabaseConnection(
                    n.default.getApplicationSheetName()
                  ),
                  (t = s.default.saveItem(e))),
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
                (t.connectedDatabase = this.connectedDatabase.getName()),
                (t.status = !0),
                (t.shortlisted = "");
              const a = [];
              return (
                a.push(t.applicationID),
                a.push(t.timestamp),
                a.push(t.vacancyID),
                a.push(t.vacancyPost),
                a.push(t.vacancyFac),
                a.push(t.vacancyDept),
                a.push(t.pdGender),
                a.push(t.personalTitle),
                a.push(t.personalNameInit),
                a.push(t.personalFullName),
                a.push(t.personalDOB),
                a.push(t.personalAddress),
                a.push(t.civilstatus),
                a.push(t.personalMobile),
                a.push(t.personalTp),
                a.push(t.personalEmail),
                a.push(t.district),
                a.push(t.electorate),
                a.push(t.province),
                a.push(t.city),
                a.push(t.citizenship),
                a.push(t.descentOrReg),
                a.push(t.nic),
                a.push(t.specifyCountry),
                a.push(t.passportNo),
                a.push(t.spouseName),
                a.push(t.spouseDesignation),
                a.push(t.highestEducation),
                a.push(t.lang),
                a.push(t.basicDegree),
                a.push(t.bdCountry),
                a.push(t.bdUniversity),
                a.push(t.bdYearFrom),
                a.push(t.bdYearTo),
                a.push(t.bdClass),
                a.push(t.bdGPA),
                a.push(t.pgd),
                a.push(t.awards),
                a.push(t.books),
                a.push(t.journals),
                a.push(t.abstracts),
                a.push(t.commendations),
                a.push(t.vacations),
                a.push(t.extraCurrActivity),
                a.push(t.rName1),
                a.push(t.rTelephone1),
                a.push(t.rAddress1),
                a.push(t.rEmail1),
                a.push(t.rName2),
                a.push(t.rTelephone2),
                a.push(t.rAddress2),
                a.push(t.rEmail2),
                a.push(t.poDesignation),
                a.push(t.poDept),
                a.push(t.poFrom),
                a.push(t.poSalaryDrawn),
                a.push(t.pEmployements),
                a.push(t.bondViolator),
                a.push(t.bondValue),
                a.push(t.uniInstitute),
                a.push(t.shortlisted),
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
          static updateItem(e, t) {
            try {
              const a = [];
              t &&
                Object.entries(t).forEach(([, e]) => {
                  a.push(e);
                });
              const s = [];
              if (
                (e &&
                  Object.entries(e).forEach(([, e]) => {
                    s.push(e);
                  }),
                !(a.length > 0))
              )
                throw (
                  (console.error("No data inside array for updating"),
                  new Error("Error ocuured while updating data as an array"))
                );
              {
                const e = this.findObjectRow(s),
                  t = [];
                t.push(a),
                  this.connectedDatabase
                    .getRange(e + 1, 1, 1, a.length)
                    .setValues(t),
                  this.cacheEnabled &&
                    CacheService.getScriptCache().remove(this.CACHE_KEY);
              }
              return "";
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
              const s = [];
              if (
                (e &&
                  Object.entries(e).forEach(([, e]) => {
                    s.push(e);
                  }),
                !(a.length > 0))
              )
                throw (
                  (console.error("No data inside array for deleting"),
                  new Error("Error ocuured while deleting data as an array"))
                );
              {
                const e = this.findObjectRow(s),
                  n = [];
                n.push(a),
                  this.connectedDatabase
                    .getRange(e + 1, 1, 1, a.length)
                    .setValues(n),
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
                  (t, s) => (
                    JSON.stringify(t) === JSON.stringify(e) && (a = s), null
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
                s = UrlFetchApp.fetch(a, {
                  headers: {
                    Authorization: `Bearer ${ScriptApp.getOAuthToken()}`,
                  },
                }).getContentText();
              return JSON.parse(
                s
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
              s = [];
            return (
              t.forEach(function (e) {
                const t = {};
                let n = 0;
                e.c.forEach(function (e) {
                  e && e.v && (t[a[n]] = e.v), (n += 1);
                }),
                  s.push(t);
              }),
              s
            );
          }
          static batchUpdate(e) {
            const t =
                _utils__WEBPACK_IMPORTED_MODULE_0__.default.getSheetStructure(
                  this.sheetName
                ),
              a = [],
              s = t.range.split(":");
            let n = "";
            const { sheetName: i } = this;
            e.forEach(function (e) {
              n = `${i}!${s[0]}${e.id}:${s[1]}${e.id}`;
              const o = {};
              (o.range = n), (o.majorDimension = "ROWS");
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
                s = Object.entries(e).map(([e, t]) => ({
                  findReplace: {
                    find: e.toString(),
                    replacement: t.toString(),
                    matchEntireCell: !0,
                    sheetId: a,
                  },
                }));
              Sheets.Spreadsheets.batchUpdate({ requests: s }, this.DBID),
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
        a.r(t), a.d(t, { default: () => h });
        const s = "Asia/Colombo",
          n = "MM/dd/yyyy HH:mm:ss",
          i = "ONLINE APPLICATION",
          o =
            "https://script.google.com/macros/s/AKfycbwftRGdFiH_wwlNlEl5teYLr_isAKauK-OskdggQR_7VsAINLaQaRZ6NUqIx_0o-YwR8A/exec",
          c = "portal@gs.pdn.ac.lk";
        let u = null,
          l = [];
        const h = class {
          static ChunkyCache(e, t) {
            return {
              put(a, s, n) {
                const i = JSON.stringify(s),
                  o = Math.floor(t / 2);
                let c = 0;
                for (; c < i.length; )
                  (u = `${a}_${c}`),
                    l.push(u),
                    e.put(u, i.substr(c, o), n + 5),
                    (c += o);
                const h = { chunkSize: t, chunks: l, length: i.length };
                e.put(a, JSON.stringify(h), n);
              },
              get(t) {
                const a = e.get(t);
                if (null != a) {
                  const t = JSON.parse(a);
                  if (
                    ((l = t.chunks.map(function (t) {
                      return e.get(t);
                    })),
                    l.every(function (e) {
                      return null != e;
                    }))
                  )
                    return JSON.parse(l.join(""));
                }
                return null;
              },
            };
          }
          static getDateFormat() {
            return n;
          }
          static getCurrentDate() {
            return Utilities.formatDate(new Date(), s, n);
          }
          static generateUUID() {
            return `OA_${Utilities.formatDate(
              new Date(),
              s,
              "MMddyyyyHHmmss"
            )}`;
          }
          static parseDate(e) {
            return Utilities.formatDate(new Date(e), s, n);
          }
          static getCurrentUser() {
            return Session.getActiveUser().getEmail();
          }
          static getAppName() {
            return i;
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
            return "1MTE8MdB-BwDG80wFlNI8zaADsnkG3XJsHxLW79ndXa4";
          }
          static getAppRoleSheetName() {
            return "roles";
          }
          static getDataDBID() {
            return "1QdubFe5pbNQyevoK_LQS021OPrYxve_aGuD9xGEUI4o";
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
          static sendMail(e, t, a, s, n, i, u, l, h) {
            try {
              let p =
                HtmlService.createHtmlOutputFromFile(
                  "email_template"
                ).getContent();
              (p = p.replace("%heading", e)),
                (p = p.replace("%description", t)),
                (p = p.replace("%param1", s)),
                (p = p.replace("%param2", n)),
                (p = p.replace("%param3", i)),
                (p = p.replace("%param4", u)),
                (p = p.replace("%param5", `${h} - ${l}`)),
                (p = p.replace("%appURL", o));
              const d = "Online Application -  University of Peradeniya";
              GmailApp.sendEmail(a, d, "", {
                from: c,
                replyTo: c,
                name: "University of Peradeniya",
                htmlBody: p,
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
            const s = `${i} ERROR OCCURED | FOS APPS |  ${t}`;
            (a = `${s}\n${a}\n onError: ${JSON.stringify(this.onError)}`),
              GmailApp.sendEmail("youremail@sci.pdn.ac.lk", s, a);
          }
          static genApplicationID() {
            return SpreadsheetApp.openById(this.getMainDBID())
              .getSheetByName(this.getApplicationSheetName())
              .getLastRow();
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
        : HtmlService.createTemplateFromFile("index")
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
        return e.default.saveRequest(t);
      });
  })();
})();
