import { fetchData } from "./api";
import { page, reset } from "./pagination";

const listEl = document.querySelector('.List');

function createMarkup(data) {
    const markup = data.map(({id,name})=>`
    <li id="${id}">
    <p id="${id}">${name}</p>
</li>`).join('');
listEl.innerHTML = markup;
};
 export async function renderData (page){
    const data = await fetchData(page);
    console.log(data);
    if(page === 1){
        reset(data.page.totalElements);
    }
   createMarkup(data._embedded.events)
   
 }
renderData(page)