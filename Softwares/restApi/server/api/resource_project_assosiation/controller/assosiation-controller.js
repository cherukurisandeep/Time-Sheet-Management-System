import assosiationDAO from '../dao/assosiation-dao';

export default class assosiationController {
  static getAll(req, res) {
    assosiationDAO
      .getAll()
      .then(assosiations => res.status(200).json(assosiations))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _assosiation = req.body;

    assosiationDAO
      .createNew(_assosiation)
      .then(assosiation => res.status(201).json(assosiation))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    assosiationDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
