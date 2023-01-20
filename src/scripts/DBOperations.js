import Utils from './utils';

class Database {
  // initialize the database using Id only. Because if we open the sheet it will be an extra cost
  static initilizeDatabase(databaseId) {
    this.DBID = databaseId;
    this.CACHE_TIMEOUT = 600;
    this.CACHE_KEY = `DB${this.sheetName}`;
  }

  static openDatabaseConnection(sheetName) {
    this.sheetName = sheetName;
    if (!this.DBID) {
      console.error(`Database Id is not defined. When trying to open the sheet :${sheetName}`);
      throw new Error('Database Id is not defined');
    }

    if (!sheetName) {
      console.error(`Database sheetName is not defined. When trying to open the sheet :${sheetName}`);
      throw new Error('Database sheetName is not defined');
    }

    try {
      const spreadSheet = SpreadsheetApp.openById(this.DBID);
      this.connectedDatabase = spreadSheet.getSheetByName(sheetName);
    } catch (e) {
      console.error(`Error occured while opening the sheet. When trying to open the sheet :${sheetName}error : `, e);
      throw new Error(`Error occured while opening the sheet : ${sheetName}`, e);
    }
  }

  // static saveItem(newObject) {
  //   //  console.log(`dataj : ${JSON.stringify(newObject)}`);
  //   const retVal = {};
  //   retVal.status = false;
  //   try {
  //     const spArray = [];
  //     if (newObject) {
  //       Object.entries(newObject).forEach(([, value]) => {
  //         spArray.push(value);
  //       });
  //     }
  //     if (spArray.length > 0) {
  //       const lock = LockService.getScriptLock();
  //       lock.waitLock(100000);
  //       try {
  //         /*   const lastRow = this.connectedDatabse.getLastRow();
  //         this.connectedDatabse.getRange(lastRow + 1, 1, 1, 13).setValues([spArray]);
  //         retVal.newId = lastRow + 1; */
  //         const sheeta = this.connectedDatabase.appendRow(spArray);
  //         retVal.newId = sheeta.getLastRow();
  //       } catch (eo1) {
  //         console.error(`Error ocuured while lock waiting : , ${JSON.stringify(newObject)}`, eo1);
  //       } finally {
  //         lock.releaseLock();
  //       }

  //       // this.connectedDatabse.appendRow(spArray);
  //       //  SpreadsheetApp.flush();
  //       if (this.cacheEnabled) {
  //         CacheService.getScriptCache().remove(this.CACHE_KEY);
  //       }
  //       console.info('save successfull.', JSON.stringify(spArray));
  //     } else {
  //       console.error(`No data inside array for saving`);
  //       throw new Error(`Error ocuured whilesave data as an array`);
  //     }
  //     retVal.status = true;
  //     retVal.data = newObject;

  //     return retVal;
  //   } catch (e) {
  //     console.error(`Error ocuured while saving new Request in DBOperations${e.lineNumber}`, e);
  //     throw new Error(`Error ocuured while SaveRequest in DBOperations${e}`);
  //   }
  // }

  static saveItem(obj) {
    try {
      const request = JSON.parse(obj);

      request.timestamp = Utils.getCurrentDate();
      request.applicationID = Utils.genApplicationID();
      request.connectedDatabase = this.connectedDatabase.getName();
      request.status = true;
      request.shortlisted = '';

      const row = [];

      // meta
      // row.push(request.status);
      // row.push(request.connectedDatabase);
      row.push(request.timestamp);
      row.push(request.applicationID);

      // vacancy
      row.push(request.vacancyID);
      row.push(request.vacancyPost);
      row.push(request.vacancyFac);
      row.push(request.vacancyDept);

      // personal details
      row.push(request.pdGender);
      row.push(request.personalTitle);
      row.push(request.personalNameInit);
      row.push(request.personalFullName);
      row.push(request.personalDOB);
      row.push(request.personalAddress);
      row.push(request.civilstatus);
      row.push(request.personalMobile);
      row.push(request.personalTp);
      row.push(request.personalEmail);
      row.push(request.district);
      row.push(request.electorate);
      row.push(request.province);
      row.push(request.city);
      row.push(request.citizenship);
      row.push(request.descentOrReg);
      row.push(request.nic);
      row.push(request.specifyCountry);
      row.push(request.passportNo);
      row.push(request.spouseName);
      row.push(request.spouseDesignation);
      row.push(request.highestEducation);
      row.push(request.lang);

      // basic degree
      row.push(request.basicDegree);
      row.push(request.bdCountry);
      row.push(request.bdUniversity);
      row.push(request.bdYearFrom);
      row.push(request.bdYearTo);
      row.push(request.bdClass);
      row.push(request.bdGPA);

      // postgraduate degree
      row.push(request.pgd);

      // awards
      row.push(request.awards);

      // research publications - books
      row.push(request.books);

      // research publications - books
      row.push(request.journals);

      // research publications - abstracts
      row.push(request.abstracts);

      // commendations
      row.push(request.commendations);

      // vacations
      row.push(request.vacations);

      // extra curricular activities
      row.push(request.extraCurrActivity);

      // references
      row.push(request.rName1);
      row.push(request.rTelephone1);
      row.push(request.rAddress1);
      row.push(request.rEmail1);
      row.push(request.rName2);
      row.push(request.rTelephone2);
      row.push(request.rAddress2);
      row.push(request.rEmail2);

      // present occupation
      row.push(request.poDesignation);
      row.push(request.poDept);
      row.push(request.poFrom);
      row.push(request.poSalaryDrawn);

      // previous employement
      row.push(request.pEmployements);
      row.push(request.bondViolator);
      row.push(request.bondValue);
      row.push(request.uniInstitute);

      // short listing
      row.push(request.shortlisted);

      this.connectedDatabase.appendRow(row);
      return request;
    } catch (error) {
      console.error('Error occurred while saving data in Resources', error);
      throw new Error(`Error occurred while daving data`);
    }
  }

  static updateItem(oldObject, newObject) {
    const retVal = '';
    try {
      const spArray = [];
      if (newObject) {
        Object.entries(newObject).forEach(([, value]) => {
          spArray.push(value);
        });
      }
      const oldArray = [];
      if (oldObject) {
        Object.entries(oldObject).forEach(([, value]) => {
          oldArray.push(value);
        });
      }

      if (spArray.length > 0) {
        const foundRow = this.findObjectRow(oldArray);
        const outerArray = [];
        outerArray.push(spArray);
        this.connectedDatabase.getRange(foundRow + 1, 1, 1, spArray.length).setValues(outerArray);
        if (this.cacheEnabled) {
          CacheService.getScriptCache().remove(this.CACHE_KEY);
        }
      } else {
        console.error(`No data inside array for updating`);
        throw new Error(`Error ocuured while updating data as an array`);
      }

      return retVal;
    } catch (e) {
      console.error(`Error ocuured while updating new Request in DBOperations${e.lineNumber}`, e);
      throw new Error(`Error ocuured while updating in DBOperations${e}`);
    }
  }

  static updateDirect(object) {
    const retVal = '';
    try {
      const spArray = [];
      if (object) {
        spArray.push('=ROW()');
        spArray.push(object.eId);
        spArray.push(object.regNo);
        spArray.push(object.acYear);
        spArray.push(object.semester);
        spArray.push(object.batch);
        spArray.push(object.courseCode);
        spArray.push(object.remark);
        spArray.push(object.credits);
        spArray.push(object.date);
      }
      if (spArray.length > 0) {
        const outerArray = [];
        outerArray.push(spArray);
        this.connectedDatabase.getRange(object.id, 1, 1, spArray.length).setValues(outerArray);
        if (this.cacheEnabled) {
          CacheService.getScriptCache().remove(this.CACHE_KEY);
        }
      } else {
        console.error(`No data inside array for updating`);
        throw new Error(`Error ocuured while updating data as an array`);
      }

      return retVal;
    } catch (e) {
      console.error(`Error ocuured while updateDirect new Request in DBOperations${e.lineNumber}`, e);
      throw new Error(`Error ocuured while updateDirect in DBOperations${e}`);
    }
  }

  static deleteItem(oldObject) {
    let retVal = 0;
    try {
      const oldArray = [];
      if (oldObject) {
        Object.entries(oldObject).forEach(([, value]) => {
          oldArray.push(value);
        });
      }

      if (oldArray.length > 0) {
        const foundRow = this.findObjectRow(oldArray);
        this.connectedDatabase.deleteRow(foundRow + 1);
        retVal = 1;
        if (this.cacheEnabled) {
          CacheService.getScriptCache().remove(this.CACHE_KEY);
        }
      } else {
        console.error(`No data for delete`);
        throw new Error(`Error ocuured while deleting data as an array`);
      }

      return retVal;
    } catch (e) {
      console.error(`Error ocuured while deleting new Request in DBOperations${e.lineNumber}`, e);
      throw new Error(`Error ocuured while deleting in DBOperations${e}`);
    }
  }

  static deleteThreadSafe(oldObject) {
    let retVal = 0;
    try {
      const spArray = [];
      if (oldObject) {
        Object.entries(oldObject).forEach(([, value]) => {
          spArray.push(`${value}_DELETED`);
        });
      }
      const oldArray = [];
      if (oldObject) {
        Object.entries(oldObject).forEach(([, value]) => {
          oldArray.push(value);
        });
      }
      if (spArray.length > 0) {
        const foundRow = this.findObjectRow(oldArray);
        const outerArray = [];
        outerArray.push(spArray);
        this.connectedDatabase.getRange(foundRow + 1, 1, 1, spArray.length).setValues(outerArray);
        if (this.cacheEnabled) {
          CacheService.getScriptCache().remove(this.CACHE_KEY);
        }
        retVal = 1;
      } else {
        console.error(`No data inside array for deleting`);
        throw new Error(`Error ocuured while deleting data as an array`);
      }

      return retVal;
    } catch (e) {
      console.error(`Error ocuured while deleting  a request in DBOperations${e.lineNumber}`, e);
      throw new Error(`Error ocuured while deleting in DBOperations${e}`);
    }
  }

  static findObjectRow(oldObject) {
    const allData = this.readDatabaseCache();
    let foundItem = -1;
    if (oldObject) {
      allData.filter((r, i) => {
        if (JSON.stringify(r) === JSON.stringify(oldObject)) {
          foundItem = i;
        }
        return null;
      });
    }
    return foundItem;
  }

  static readDatabaseCache() {
    if (this.cacheEnabled) {
      const chunky1 = Utils.ChunkyCache(CacheService.getScriptCache(), 1024 * 90);
      let cached = null;
      let allData = [];
      cached = chunky1.get(this.CACHE_KEY);
      if (chunky1 && cached) {
        allData = JSON.parse(cached);
      } else {
        allData = this.connectedDatabase.getDataRange().getValues();
        const chunky = Utils.ChunkyCache(CacheService.getScriptCache(), 1024 * 90);
        chunky.put(this.CACHE_KEY, JSON.stringify(allData), this.CACHE_TIMEOUT);
      }
      return allData;
    }
    return this.connectedDatabase.getDataRange().getValues();
  }

  static queryDatabase(query) {
    const allData = this.readDatabaseCache();
    const operatorsArray = query.split(' ');
    const queryKeyArray = [];
    let operatorKeyArray = [];

    operatorsArray.filter((r) => {
      if (r.indexOf('KEY:') > -1) {
        queryKeyArray.push(r.slice(4));
      }
      return null;
    });

    const keyArray = [];
    this.dataArray = [];

    if (allData && allData.length > 0) {
      allData[0].forEach(function (item) {
        keyArray.push(item);
      });

      if (operatorsArray.length > 1) {
        const results = allData.filter((r) => {
          operatorKeyArray = [];
          operatorsArray.filter((k) => {
            if (k.indexOf('KEY:') > -1) {
              const varVal = `"${r[keyArray.indexOf(k.slice(4))]}"`;
              operatorKeyArray.push(varVal);
            } else {
              operatorKeyArray.push(k);
            }
            return null;
          });
          const queryString = operatorKeyArray.join(' ');
          // eslint-disable-next-line no-eval
          return eval(queryString);
        });

        for (let i = 0; i < results.length; i += 1) {
          const newObject = {};
          for (let j = 0; j < keyArray.length; j += 1) {
            newObject[keyArray[j]] = results[i][j];
          }
          this.dataArray.push(newObject);
        }
      } else {
        for (let i = 1; i < allData.length; i += 1) {
          const newObject = {};
          for (let j = 0; j < keyArray.length; j += 1) {
            newObject[keyArray[j]] = allData[i][j];
          }
          this.dataArray.push(newObject);
        }
      }
    }
    return this.dataArray;
  }

  static buildGoogleQuery(query) {
    const metaInfo = Utils.getSheetStructure(this.sheetName).columns;
    let newQuery = query;
    Object.entries(metaInfo).forEach(([key, value]) => {
      newQuery = this.replaceAll(newQuery, value, key);
    });
    return newQuery;
  }

  static replaceAll(text, search, replacement) {
    return text.replace(new RegExp(search, 'g'), replacement);
  }

  static googleQuery(query) {
    const generatedQuery = this.buildGoogleQuery(query);
    const foundObj = this.pareGoogleQuery(this.sendGoogleQuery(generatedQuery));
    return foundObj;
  }

  /**
   * Use this method only for large set of data, more than 20,000 records approximately
   * @param {*} query is the Google Query Language synatx you must pass
   */
  static sendGoogleQuery(query) {
    try {
      const metaInfo = Utils.getSheetStructure(this.sheetName);
      const qvizURL = `https://docs.google.com/spreadsheets/d/${this.DBID}/gviz/tq?tqx=out:json&headers=1&sheet=${
        this.sheetName
      }&range=${metaInfo.range}&tq=${encodeURIComponent(query)}`;
      const ret = UrlFetchApp.fetch(qvizURL, {
        headers: { Authorization: `Bearer ${ScriptApp.getOAuthToken()}` },
      }).getContentText();
      return JSON.parse(ret.replace('/*O_o*/', '').replace('google.visualization.Query.setResponse(', '').slice(0, -2));
    } catch (e) {
      console.error('Error occured while sending URL Fetch request to Google Sheet API. ', e);
      throw new Error(`Error occured while sending URL Fetch request to Google Sheet API.${e}`);
    }
  }

  static pareGoogleQuery(jsonObject) {
    const { rows } = jsonObject.table;
    const { arrayNames } = Utils.getSheetStructure(this.sheetName);
    const objectArray = [];
    rows.forEach(function (item) {
      const newObject = {};
      let i = 0;
      item.c.forEach(function (innerItem) {
        if (innerItem && innerItem.v) {
          newObject[arrayNames[i]] = innerItem.v;
        }
        i += 1;
      });

      objectArray.push(newObject);
    });
    return objectArray;
  }

  static batchUpdate(objectArray) {
    const metaInfo = Utils.getSheetStructure(this.sheetName);
    const generatedArray = [];
    const rangeValues = metaInfo.range.split(':');
    let generatedRange = '';
    const { sheetName } = this;
    objectArray.forEach(function (item) {
      generatedRange = `${sheetName}!${rangeValues[0]}${item.id}:${rangeValues[1]}${item.id}`;
      const newObject = {};
      newObject.range = generatedRange;
      newObject.majorDimension = 'ROWS';
      const dataArray = [];
      metaInfo.arrayNames.forEach(function (keyItem, i) {
        // if (item[keyItem]) {
        if (i === 0) {
          dataArray.push('=ROW()');
        } else {
          dataArray.push(item[keyItem]);
        }
      });

      newObject.values = [dataArray];
      generatedArray.push(newObject);
      // generatedArray
    });
    const request = {
      valueInputOption: 'USER_ENTERED',
      data: generatedArray,
    };
    Sheets.Spreadsheets.Values.batchUpdate(request, this.DBID);
  }

  static batchUpdateNew(rConditions) {
    const lock = LockService.getScriptLock();
    lock.waitLock(750000);
    try {
      const sid = this.connectedDatabase.getSheetId();
      const requests = Object.entries(rConditions).map(([k, v]) => ({
        findReplace: {
          find: k.toString(),
          replacement: v.toString(),
          matchEntireCell: true,
          sheetId: sid,
        },
      }));

      Sheets.Spreadsheets.batchUpdate({ requests }, this.DBID);
      console.info('unenroll suceeses');
    } catch (e) {
      console.error('Error occured while updating batch new in DB. ', e);
      // throw new Error(`Error occured while updating batch new in DB. ${e}`);
    } finally {
      lock.releaseLock();
    }
  }

  static cloneObject(object) {
    const newObject = {};
    Object.entries(object).forEach(([key, value]) => {
      newObject[key] = value;
    });

    return newObject;
  }
}

export default Database;
