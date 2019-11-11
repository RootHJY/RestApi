/**

 * http://mongodb.github.io/node-mongodb-native

 * http://mongodb.github.io/node-mongodb-native/3.0/api/
 */

//DB库
var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
const ObjectID = MongoDB.ObjectID;
const config = require('../config/index.js');

let state = null;

if (config.username != '' && config.password != '') {// 有用户名密码
    state = true;
} else {// 没有用户名密码
    state = false;
};

class Db {
    static getInstance() {   /*1、单例  多次实例化实例不共享的问题*/
        if (!Db.instance) {
            Db.instance = new Db();
        }
        return Db.instance;
    }

    constructor() {
        this.dbClient = ''; /*属性 放db对象*/
        this.connect();   /*实例化的时候就连接数据库*/
    }

    connect() {
        if (state) {// 有用户名密码
            return new Promise((resolve, reject) => {
                if (!this.dbClient) {
                    MongoClient.connect('mongodb://' + config.username + ':' + config.password + '@' + config.address + ':' + config.port + '/', {
                        useNewUrlParser: true
                    }, (err, client) => {
                        if (!err) {
                            this.dbClient = client.db(config.database);
                            resolve(this.dbClient);
                        } else {
                            reject(err);
                        };
                    });
                } else {
                    resolve(this.dbClient);
                };
            });
        } else {// 没有用户名密码
            return new Promise((resolve, reject) => {
                if (!this.dbClient) {
                    MongoClient.connect('mongodb://' + config.address + ':' + config.port + '/', {
                        useNewUrlParser: true
                    }, (err, client) => {
                        if (!err) {
                            this.dbClient = client.db(config.database);
                            resolve(this.dbClient);
                        } else {
                            reject(err);
                        };
                    });
                } else {
                    resolve(this.dbClient);
                };
            });
        };
    };


    find(colName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                var result = db.collection(colName).find(json);
                result.toArray(function (err, docs) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(docs);
                })
            })
        })
    }

    add(colName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(colName).insertOne(json, function (err, result) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
            })
        })
    }

    remove(colName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(colName).removeOne(json, function (err, result) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
            })
        })
    }

    update(colName, condition, json2) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                //db.user.update({},{$set:{}})
                db.collection(colName).updateOne(condition, {
                    $set: json2
                }, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
            })
        })
    }

    getObjectId(id) {    /*mongodb里面查询 _id 把字符串转换成对象*/
        return new ObjectID(id);
    }
}


module.exports = Db.getInstance();