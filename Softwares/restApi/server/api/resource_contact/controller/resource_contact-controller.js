import resource_contactDAO from '../dao/resource_contact-dao';

export default class resource_contactController {
  static getAll(req, res) {
    resource_contactDAO
      .getAll()
      .then(resource_contacts => res.status(200).json(resource_contacts))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _resource_contact = req.body;

    resource_contactDAO
      .createNew(_resource_contact)
      .then(resource_contact => res.status(201).json(resource_contact))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    resource_contactDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
