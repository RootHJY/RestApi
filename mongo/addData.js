var list1 = {
    name: 'banner1',
    startTime: new Date(),
    url: '',
    link: ''
}

var list2 = {
    name: 'banner2',
    startTime: new Date(),
    url: '',
    link: ''
}


var db = connect('jiayan');
var dataList = [list1, list1];
db.banner.insert(dataList);
print('[SUCCESS]：The data was inserted successfully');