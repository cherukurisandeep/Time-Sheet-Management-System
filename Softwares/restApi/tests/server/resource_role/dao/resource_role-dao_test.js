const mongoose = require('mongoose');
const expect = require('chai').expect;

const resource_roleDAO = require(process.cwd() + '/server/api/resource_role/dao/resource_role-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('resource_roleDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    resource_roleDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
