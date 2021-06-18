window.addEventListener('load', main);

const sets = new Set();
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
    for (const item1 of items) {
        for (const item2 of items) {
            if (item2 === item1) continue;
            
            for (const item3 of items) {
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
                sets.add(itemMatch);
            }
        }
    }
    filteredSets = Array.from(sets.values());
}

function filterSets(event) {
    const query = event.target.value;
    const listOfSets = Array.from(sets.values());
    filteredSets = listOfSets.filter(s =>
        s.toLowerCase().includes(query.toLowerCase())
    );
    renderSets();
}

function renderSets() {
    const main = document.querySelector('main');
    main.innerHTML = "";
    for (const set of filteredSets) {
        const itemNames = set.split(',');
        const section = document.createElement('section');
        for (const itemName of itemNames) {
            const item = items.find((item) => item.name === itemName);
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