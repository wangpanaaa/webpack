//map跟array的对比
{
    let map=new Map();
    //增
    map.set('a',123);
    let arr=new Array();
    arr.push({'a':123});
    console.log(map);
    //删
    map.delete('a');
    let index=arr.findIndex(item=>item.a);
    arr.splice(index);
    //改
    map.set('a',345);
    arr.find(item=>item.a?item.a=345:'');
    //查
    map.has('a');
    arr.find(item=>item.a);
}
