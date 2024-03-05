class Activity {
    constructor (id,title,description,urlImg){
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = urlImg
    }
}
class Repository{
    constructor(){
        this.activites = [];
        this.id = 1;
    }

    getAllActivities(){
        return this.activites;
    }

    createActivity(title,description,urlImg){
        const id = this.id++;
        const activity = new Activity(id,title,description,urlImg);
        this.activites.push(activity)
    }
    deleteActivity(id){
        this.activites = this.activites.filter((car) => car.id !== id)
    }
}

const newActivity = new Repository
newActivity.createActivity('billar','juego de alta precicion y manejo de emociones','https://www.elespectador.com/resizer/Vn8dAC1gTOLeyMLTH_cacsoPpQk=/arc-anglerfish-arc2-prod-elespectador/public/6NDRRELV6FBUFFOMDLHO7SMDDI.jpeg')
newActivity.createActivity('nadar','ejercita todos los musculos del cuerpo','https://www.polar.com/blog/es/wp-content/uploads/sites/4/2023/07/Frame-34_11zon.png')
newActivity.deleteActivity(1)

console.log(newActivity.getAllActivities())