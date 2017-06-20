const mongoose = require('mongoose');
const expect = require('chai').expect;

const timeSheetDAO = require(process.cwd() + '/server/api/timeSheet/dao/timeSheet-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('timeSheetDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    timeSheetDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
