//set
{
    let arr=[1,2,3,4,1];
    let list=new Set(arr);
    console.log(list);//1,2,3,4  set是唯一的数组类型
}
//set的常用方法
{
    let arr=['add','has','delete','clear'];
    let list=new Set(arr);
    list.add('123')//新增
    list.delete('add')//删除
    list.has('add')//false 判断是否有该元素
    list.clear();//清空set
    for(let key of list.keys()){
        console.log(key);//打印下标
    }
    for (let val of list){
        console.log(val);//打印值
    }
    list.forEach(function (item) {
        console.log(item);
    })
}
//weakSet的使用及区别（只能添加对象类型）
{
    let weakSet=new WeakSet();
    let json={};
    weakSet.add(json);//只支持对象的添加

}
//map的使用
{
    let map=new Map();
    map.set(['1','2'],[1,2]);//新增
    map.has('1');//判断是否有
    map.delete('1')//删除
    map.clear()//清空
    map.forEach(function (item) {
        console.log(item);
    })
}
//weakMap的使用(只能添加对象,没有size属性，不能遍历)
{
    let weakMap=new WeakMap();
    weakMap.set({'a':123},{'b':456});
}