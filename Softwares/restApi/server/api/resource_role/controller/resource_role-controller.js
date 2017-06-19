import resource_roleDAO from '../dao/resource_role-dao';

export default class resource_roleController {
  static getAll(req, res) {
    resource_roleDAO
      .getAll()
      .then(resource_roles => res.status(200).json(resource_roles))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _resource_role = req.body;

    resource_roleDAO
      .createNew(_resource_role)
      .then(resource_role => res.status(201).json(resource_role))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    resource_roleDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
