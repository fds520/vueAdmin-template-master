// 开发地址
const addressIP = 'http://localhost:9091'
const version = 'v1'

export default {
  user: {
    login: `${addressIP}/${version}/user/login`
  },
  station: {
    query: `${addressIP}/${version}/station/query`,
    findOne: `${addressIP}/${version}/station`,
    save: `${addressIP}/${version}/station/save`,
    del: `${addressIP}/${version}/station/del`
  },
  section: {
    query: `${addressIP}/${version}/section/query`,
    findOne: `${addressIP}/${version}/section`,
    save: `${addressIP}/${version}/section/save`,
    del: `${addressIP}/${version}/section/del`,
    getStations: `${addressIP}/${version}/section/get-stations`,
    saveStations: `${addressIP}/${version}/section/save-stations`
  },
  workshop: {
    query: `${addressIP}/${version}/workshop/query`,
    findOne: `${addressIP}/${version}/workshop`,
    save: `${addressIP}/${version}/workshop/save`,
    del: `${addressIP}/${version}/workshop/del`,
    getSections: `${addressIP}/${version}/workshop/get-sections`,
    saveSections: `${addressIP}/${version}/workshop/save-sections`,
    getCanBeChildAreas: `${addressIP}/${version}/workshop/get-can-be-child-areas`,
    getAreas: `${addressIP}/${version}/workshop/get-areas`,
    saveAreas: `${addressIP}/${version}/workshop/save-areas`
  },
  area: {
    query: `${addressIP}/${version}/area/query`,
    findOne: `${addressIP}/${version}/area`,
    save: `${addressIP}/${version}/area/save`,
    del: `${addressIP}/${version}/area/del`,
    getSections: `${addressIP}/${version}/area/get-sections`,
    saveSections: `${addressIP}/${version}/area/save-sections`,
    getCanBeChildAreas: `${addressIP}/${version}/area/get-can-be-child-areas`,
    getAreas: `${addressIP}/${version}/area/get-areas`,
    saveAreas: `${addressIP}/${version}/area/save-areas`,
    getCanBeChildWorkshops: `${addressIP}/${version}/area/get-can-be-child-workshops`,
    getWorkshops: `${addressIP}/${version}/area/get-workshops`,
    saveWorkshops: `${addressIP}/${version}/area/save-workshops`
  },
  factory: {
    query: `${addressIP}/${version}/factory/query`,
    findOne: `${addressIP}/${version}/factory`,
    save: `${addressIP}/${version}/factory/save`,
    del: `${addressIP}/${version}/factory/del`,
    getAreas: `${addressIP}/${version}/factory/get-areas`,
    saveAreas: `${addressIP}/${version}/factory/save-areas`,
    getWorkshops: `${addressIP}/${version}/factory/get-workshops`,
    saveWorkshops: `${addressIP}/${version}/factory/save-workshops`
  },
  site: {
    query: `${addressIP}/${version}/site/query`,
    findOne: `${addressIP}/${version}/site`,
    save: `${addressIP}/${version}/site/save`,
    del: `${addressIP}/${version}/site/del`,
    getFactories: `${addressIP}/${version}/site/get-factories`,
    saveFactories: `${addressIP}/${version}/site/save-factories`
  },
  stationClass: {
    query: `${addressIP}/${version}/station-class/query`,
    findOne: `${addressIP}/${version}/station-class`,
    save: `${addressIP}/${version}/station-class/save`,
    del: `${addressIP}/${version}/station-class/del`,
    getStations: `${addressIP}/${version}/station-class/get-stations`,
    saveStations: `${addressIP}/${version}/station-class/save-stations`
  },
  classes: {
    query: `${addressIP}/${version}/classes/query`,
    findOne: `${addressIP}/${version}/classes`,
    save: `${addressIP}/${version}/classes/save`,
    del: `${addressIP}/${version}/classes/delete`,
    getBreaks: `${addressIP}/${version}/classes/get-break`,
    saveBreaks: `${addressIP}/${version}/classes/save-break`
  },
  breakTime: {
    save: `${addressIP}/${version}/break/save`,
    findOne: `${addressIP}/${version}/break`,
    del: `${addressIP}/${version}/break/delete`
  },
  workSet: {
    setRest: `${addressIP}/${version}/workSet/setRest`
  },
  technologyPath: {
    getList: `${addressIP}/${version}/technology-path/get-list`,
    save: `${addressIP}/${version}/technology-path/save`,
    demo1: `${addressIP}/${version}/technology-path/demo1`
  }
}

