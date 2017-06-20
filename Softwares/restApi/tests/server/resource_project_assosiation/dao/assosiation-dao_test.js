const mongoose = require('mongoose');
const expect = require('chai').expect;

const assosiationDAO = require(process.cwd() + '/server/api/resource_project_assosiation/dao/assosiation-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('assosiationDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    assosiationDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
