import projectDAO from '../dao/project-dao';

export default class projectController {
  static getAll(req, res) {
    projectDAO
      .getAll()
      .then(projects => res.status(200).json(projects))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _project = req.body;

    projectDAO
      .createNew(_project)
      .then(project => res.status(201).json(project))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    projectDAO
      .removeById(_id)
      .then((projects) => res.send('Requested Data Deleted'))
      .catch(error => res.status(400).json(error));
  }
  static getById(req,res){
    let _id = req.params.id;
    console.log('in Controller');
    projectDAO
      .getById(_id).then((projects)=>{
      if(projects){
        res.status(200).json(projects).send(projects);
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

    projectDAO
      .update(_reqBody,_id)
      .then(projects => {
        res.status(201).json(projects).send(projects);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }
}
