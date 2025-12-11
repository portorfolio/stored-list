// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let coinItems = [];


// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const list = document.getElementById('list');

const sortBtn = document.getElementById('sort');

const clearBtn = document.getElementById('clear');

// let inputvalue = document.getElementById('text').value;

function updateList() {
    document.getElementById("list").innerHTML = ''
    for (let i = 0; i < coinItems.length; i++) {
        const liElement = document.createElement('li');
        liElement.innerText = coinItems[i].coin + ': $ ' + coinItems[i].dolVal;
        liElement.id = coinItems[i]._id;
        if (coinItems[i].completed) {
            liElement.classList.add('completed')
        }

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'x';
        deleteButton.addEventListener('click', function (e) {
            e.stopPropagation();
            deleteItem(coinItems[i]._id);
        })

        // Add editing function 
        liElement.addEventListener('click', function () {
            if (!liElement.classList.contains('completed')) {
                updateCoin(coinItems[i]._id, {
                    completed: true
                });
            }
        });

        liElement.appendChild(deleteButton);
        list.appendChild(liElement);
    }
}

// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', async function () {
    let coinName = document.getElementById('coin-input').value;
    let dollarValue = document.getElementById('dolval-input').value
    addCoin(coinName, dollarValue);

    document.getElementById('coin-input').value = '';
    document.getElementById('dolval-input').value = '';
});

// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    coinItems.sort();
    updateList()
});

// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    coinItems = [''];
    updateList();
});


async function getCoins() {
    const response = await fetch('/all');
    const data = await response.json();
    console.log('coins', data);
    coinItems = data;
    updateList();
}

getCoins();

async function addCoin(coinName, dollarValue) {
    const postData = {
        coin: coinName,
        dolVal: dollarValue ? Number(dollarValue) : 0
    }
    const response = await fetch('/', {
        method: 'POST', // Specify the HTTP method as POST
        headers: {
            'Content-Type': 'application/json' // Indicate that the body is JSON
        },
        body: JSON.stringify(postData) // Convert the data object to a JSON string
    });
    const data = await response.json();
    console.log('added item', data);
    getCoins();
}

async function updateCoin(id, updatedValues) {
    const response = await fetch('/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' // Indicate that the body is JSON
        },
        body: JSON.stringify(updatedValues),
    })
    const data = await response.json();
    console.log('updated item', data);
    getCoins()
}

async function deleteItem(id) {
    const response = await fetch('/' + id, {
        method: 'DELETE',
    });
    const data = await response.json();
    console.log('deleted item', data);
    getCoins();
}