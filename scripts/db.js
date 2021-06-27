function getPriorities() {
    return ['High', 'Medium', 'Low']
}

class Item {
    constructor(name, description, priority) {
        this.name = name;
        this.description = description;
        this.priority = priority;
    }
}

let items = [
    new Item('Item 1', 'Lorem ispum', 'High'),
    new Item('Item 2', 'Bla BLa 2', 'Medium')
];

function getItems() {
    return items;
}


