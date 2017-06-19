const mongoose = require('mongoose');
const expect = require('chai').expect;

const personDAO = require(process.cwd() + '/server/api/persons/dao/person-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('personDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    personDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
