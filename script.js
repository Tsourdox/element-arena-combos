window.addEventListener('load', main);


let foundSets = [];
let filteredSets = [];
let showOrignalItem = false;

function main() {
    addEventListeners();
    findSets()
    renderSets();
}

function addEventListeners() {
    const searchInput = document.querySelector('input.search');
    searchInput.addEventListener('input', filterSets);
    const checkbox = document.querySelector('input.checkbox');
    checkbox.addEventListener('input', toggleShowOriginalItem);
}

function toggleShowOriginalItem(event) {
    showOrignalItem = event.target.checked;
    renderSets();
}

function findSets() {
    // Use set to easy get unique results
    const setStrings = new Set();
    for (const item1 of data) {
        for (const item2 of data) {
            if (item2 === item1) continue;
            
            for (const item3 of data) {
                if (item3 === item1 || item3 === item1) continue;
    
                const orbs = [...item1.orbs, ...item2.orbs, ...item3.orbs]
                const countHash = {};
    
                let exceededOrbs = false;
                for (const orb of orbs) {
                    if (!countHash[orb]) {
                        countHash[orb] = 0;
                    }
                    countHash[orb]++;
    
                    if (countHash[orb] > 1) {
                        exceededOrbs = true;
                    }
                }
    
                if (exceededOrbs) continue;
    
                const itemMatch = [item1.name, item2.name, item3.name].sort().join(',');
                setStrings.add(itemMatch);
            }
        }
    }
    const setStringsAsArray = Array.from(setStrings.values());
    rebuildObjects(setStringsAsArray);
}

function rebuildObjects(setStrings) {
    const sets = [];
    for (const setString of setStrings) {
        const itemNames = setString.split(',');
        const items = itemNames.map(itemName =>
            data.find(item => item.name === itemName));
        sets.push({ items });
    }
    foundSets = sets;
    filteredSets = sets;
}

function filterSets(event) {
    const query = event.target.value;
    const options = {
        threshold: 0.15,
        keys: ['items.name', 'items.dotaItem']
    }
    if (!query) {
        filteredSets = foundSets;
    } else {
        const fuse = new Fuse(foundSets, options)
        filteredSets = fuse.search(query).map(r => r.item);
    }
    renderSets();
}

function renderSets() {
    const main = document.querySelector('main');
    main.innerHTML = "";
    for (const set of filteredSets) {
        const section = document.createElement('section');
        for (const item of set.items) {
            const div = document.createElement('div');
            const image = document.createElement('img');
            const span = document.createElement('span');
            
            span.innerHTML = showOrignalItem ? item.dotaItem : item.name;
            span.className = "tooltiptext";
            image.src = "images/" + item.image;
            
            div.append(span);
            div.append(image);
            section.append(div)
        }

        main.append(section);
    }
}