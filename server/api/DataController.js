/**
 * Created by wyf on 2016/11/8.
 */
/*const DataController=(dataDto)=>{this.dataDto = dataDto};*/

function DataController(dataDto) {
    this.dataDto = dataDto;
}

DataController.prototype.add=(newData)=>{
    //assert(typeof newData=='object');
    return 'addSuccess';
};

DataController.prototype.modify=(modifyData)=>{
    //assert(typeof modifyData=='object');
    return 'modifySuccess';
};

DataController.prototype.delete=(id)=>{
    expect(typeof id=='number').toBe(true);
    return 'deleteSuccess';
};

DataController.prototype.findById=(id)=>{
    expect(typeof id=='number').toBe(true);
    return 'not find';
};

DataController.prototype.findAll=()=>{
    return 'find all';
};

module.exports=DataController;

/*export default class DataController {
    constructor(dataDto){

    }

    add(newData){
        assert(typeof newData=='object');
        return 'addSuccess';
    }

    modify(modifyData){
        assert(typeof modifyData=='object');
        return 'modifySuccess';
    }

    delete(id){
        assert(typeof id=='number');
        return 'deleteSuccess';
    }

    findById(id){
        assert(typeof id=='number');
        return 'not find';
    }

    findAll(){
        return 'find all';
    }
}*/
