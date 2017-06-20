const mongoose = require('mongoose');
const expect = require('chai').expect;

const timeSheetEntryDAO = require(process.cwd() + '/server/api/timeSheetEntry/dao/timeSheetEntry-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('timeSheetEntryDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    timeSheetEntryDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
