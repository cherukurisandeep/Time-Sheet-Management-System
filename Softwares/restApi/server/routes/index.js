import TodoRoutes from "../api/users/route/user-route";
import Persondata from "../api/persons/route/person-route"
import resourceRoutes from "../api/resource/route/resource-route"
import projectRoutes from "../api/project/route/project-route"

export default class Routes {
   static init(app, router) {

     TodoRoutes.init(router);

     resourceRoutes.init(router);
     projectRoutes.init(router)

     app.get("/tsms",(req,res)=> res.status(200).send({
       message : "Its just a get menthos"
     }));
     app.post("/tsms",(req,res)=> res.status(200).send({
       message: "Its just a post method"
     }))

     app.use("/", router);
   }
}
