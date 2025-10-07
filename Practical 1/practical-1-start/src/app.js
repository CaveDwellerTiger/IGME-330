import {fetchData} from "./dataFetcher.js";
import {renderList, populateDropdown} from "./uiHandler.js"

populateDropdown();

document.querySelector('#build-button').addEventListener('click', () => {
    const selectedCategory = document.querySelector('#category-select').value;


    fetchData('data/parodyData.json', selectedCategory, (shooterNames) => {
        const shooterListContainer = document.querySelector('#data-list');
        console.log(shooterNames);
        shooterListContainer.innerHTML = renderList(shooterNames);
    })
});
