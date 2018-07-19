{
    let obj={
        time:'2018',
        name:'net',
        _r:123
    };
    let monitor=new Proxy(obj,{
        //拦截读取对象
        get(target,key){
            console.log(target,key);
            return target[key].replace('2018','2019');
        },
        //target指向obj,key指向下标,value指向值
        set(target,key,value){
            if(key=='name'){
                return target[key]=value;
            }else {
                return target[key];
            }
        },
        has(target,key){
            if(key=='name'){
                return target[key];
            }else{
                return false;
            }
        },
        deleteProperty(target,key){
            if(key.indexOf("_")>-1){
                delete target[key];
                return true;
            }else {
                return target[key];
            }
        }
    });
    console.log(monitor.time);
    monitor.time='2020';
    monitor.name='test';
    console.log(monitor);
    console.log('name' in monitor,'time' in monitor);
    delete monitor.time;
    delete monitor._r;
    console.log(monitor);
}
{
    let obj={
        time:'2018',
        name:'net',
        _r:123
    }
    console.log(Reflect.get(obj, 'time'));
}