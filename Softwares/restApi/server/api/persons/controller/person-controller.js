import personDAO from '../dao/person-dao';

export default class personController {
  static getAll(req, res) {
    personDAO
      .getAll()
      .then(persons => res.status(200).json(persons))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _person = req.body;

    personDAO
      .createNew(_person)
      .then(person => res.status(201).json(person))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    personDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
