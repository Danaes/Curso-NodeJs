const fs = require('fs');

let listToDo = [];

const saveDB = () => {

    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new Error('Cannot salve');

    });
};

const loadDB = () => {

    try{ listToDo = require('../db/data.json');

    }catch (err) { listToDo = []; }

};

const create = description => {

    loadDB();

    let toDo = {
        description,
        completed: false
    };

    listToDo.push(toDo);

    saveDB();

    return toDo;
};

const getList = () => {

    loadDB();

    return listToDo;
};

const update = (description , completed) => {

    loadDB();

    let index = listToDo.findIndex( task => task.description === description );

    if ( index >= 0 ){
        listToDo[index].completed = completed;
        saveDB();
        return true;
    } else
        return false;
};

const deleteTask = description => {
    loadDB();

    let newList = listToDo.filter( task => task.description !== description );

    if ( listToDo.length === newList.length )
        return false;

    listToDo = newList;
    saveDB();
    return true;
};

module.exports = {
    create,
    getList,
    update,
    deleteTask
};