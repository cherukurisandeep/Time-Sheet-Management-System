const mongoose = require('mongoose');
const expect = require('chai').expect;

const resource_contactDAO = require(process.cwd() + '/server/api/resource_contact/dao/resource_contact-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('resource_contactDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    resource_contactDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
