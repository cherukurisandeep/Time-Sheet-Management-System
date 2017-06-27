import resource_contactDAO from '../dao/resource_contact-dao';

export default class resource_contactController {
  static getAll(req, res) {

    const _query = req.query;
    resource_contactDAO
      .getAll(_query)
      .then(users => res.status(200).json(users).send(users))
      .catch(error => res.status(400));
  }

  static createNew(req, res) {
    let _user = req.body;
    let r_id = _user.resource_id;

    resource_contactDAO
      .createNew(_user,r_id)
      .then(user => res.status(201).json(user).send(user))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;
    console.log('in Controller');

    resource_contactDAO
      .removeById(_id)
      .then(() => res.send('Requested Data Deleted'))
      .catch(error => {
        if(error===404){
          res.send('No Data Found');
          return res.status(404)

        }

        res.status(400).json(error)
      });
  }
  static getById(req,res){
    let _id = req.params.id;
    console.log('in Controller');
    resource_contactDAO
      .getById(_id).then((users)=>{
      if(users){
        res.status(200).json(users).send(users);
      }
      else{
        res.sent('Data not Found');
        return res.status(404);
      }
    })
      .catch((error=>res.json(error)))
  }
  static update(req,res){
    const _id = req.params.id;
    const _reqBody = req.body;

    resource_contactDAO
      .update(_reqBody,_id)
      .then(user => {
        res.status(201).json(user).send(user);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }
}
