/**
 * Created by hanlu on 2016/11/2.
 */
function Observer(data){
    this.data = data;
    this.walk();
}

var op = Observer.prototype;

op.walk = function(){
    var obj = this.data;
    var val;
    for (var key in obj){
        if(obj.hasOwnProperty(key)){
            val = obj[key];
            if(typeof val=='object'){
                new Observer(val);
            }else {
                this.convert(key, val);
            }
        }
    }
};

op.convert = function(key, val){
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get: function(){
            console.log('你访问了'+key);
            return val;
        },
        set: function(newVal){
            console.log('你设置了'+key);
            console.log('新的'+key+'='+newVal);
            if(newVal==val){
                return null;
            }
            val = newVal;
        }
    })
};

var data={
    user:{
        name:"wangyafei",
        age:25
    },
    address:{
        city:'beijing'
    }
};

var app = new Observer(data);