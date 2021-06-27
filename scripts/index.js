function appendTextNode(src, element) {
    src.append(element);
    return src;
}

function itemToHtml(item) {
    const newSection = document.createElement('section');

    newSection.append(
        appendTextNode(document.createElement('h1'),
            document.createTextNode(item.name)
        ));

    newSection.append(
        appendTextNode(document.createElement('p'),
            document.createTextNode(item.description)
        ));

    return newSection;
}

function mapToHtmlElement(items) {
    return items.map(el => itemToHtml(el));
}

function display(itemsHtml) {
    // clear
    document.getElementById('content').innerHTML = '';
    itemsHtml.forEach(
        el => {
            document.getElementById('content').append(el);
        }
    )
}

function displayItems() {
    R.pipe(getItems, mapToHtmlElement, display)();
}

function create(name, description, priority) {
    return new Item(name, description, priority);
}

function validate(item) {

    if (item.name === null || item.name === undefined) {
        throw new Error('Item must be one defined');
    }

    if (item.description === null || item.description == undefined) {
        throw new Error('Description must be one defined');
    }

    if (item.priority === null || item.priority === undefined) {
        throw new Error('Priority must be one defined');
    }

    const newPriority = getPriorities().find(el => el === item.priority);
    if(newPriority === null || newPriority === undefined) {
        throw new Error('Priority must be one of' + getPriorities());
    }

    return item;
}

function save(item) {
    if (item instanceof Item) {
        items.push(item);
    }
}

function clearInputs(inputs) {
    inputs.forEach(input => { input.value = ''; });
}

function clearAddNew() {
    const inputs = [document.getElementById('name'),document.getElementById('desc'),  document.getElementById('priority')]
    return clearInputs(inputs);
}



function addItem(name, description, priority) {
    R.pipe(create, validate, save)(name, description, priority);
    displayItems();
    clearAddNew();
}

function priorityToHtml(priority) {
// return    <option id="X"v alue="X">X</option>
    const newOption = document.createElement('option');
    const test = document.createTextNode(priority);

    newOption.append(test)
    newOption.setAttribute('value', priority);
    newOption.setAttribute('id', priority);


    return newOption;
}

function prioritiesToHtml(priorities) {
    return priorities.map(el => priorityToHtml(el));
}

function display2(itemsHtml) {
    // clear
    document.getElementById('priority').innerHTML = '';
    itemsHtml.forEach(
        el => {
            document.getElementById('priority').append(el);
        }
    )
}


function displayPriority() {
    R.pipe(getPriorities, prioritiesToHtml, display2)();
}



