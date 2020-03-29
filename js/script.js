/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
//Global variables 
const student_list = document.getElementsByClassName('student-item cf');
const students_per_page = 10;


// Function created to filter through the list of Students and set only 10 to be viewed per page.
const show_page = (list, page) =>{
   const start_index = (page * students_per_page) - students_per_page;
   const end_index = (page * students_per_page) - 1;
   for(let i = 0; i < list.length; i++){
      if ( i >= start_index && i <= end_index){
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none'
      }
   }
}


//Function to create New Elements to be appended to the DOM.
const append_page_links = (list) => {
    const page_list = Math.ceil(list.length / students_per_page);
    const page_div = document.querySelector('.page');
    const new_div = document.createElement('div');
    const ul = document.createElement('ul');
    new_div.className = 'pagination';
    page_div.appendChild(new_div);
    new_div.appendChild(ul);

    //This loop creates an 'LI' element for every 10 students. Sets an Anchor with the 'href' of '#' and a page number.     
    for(let i = 0; i < page_list; i++){
      let li = document.createElement('li');
      let anchor = document.createElement('a');
      anchor.setAttribute('href', '#');
      anchor.textContent = i + 1;
      li.appendChild(anchor);
      ul.appendChild(li);
      if(i === 0){
         anchor.className = 'active';
      }

      // Creates clickable page Buttons. Based on the amount of students, each page will display the appropriate amount needed. 
      anchor.addEventListener('click', (e) => {
         const li_active = document.querySelectorAll('.pagination a');

         for(let j = 0; j < li_active.length; j++){
            li_active[j].classList.remove('active');
         } 
         e.target.className = 'active';
         show_page(student_list, e.target.textContent);
         e.preventDefault();
      });
   }
} 
// Calls the two functions and passes into them the list of students. 
show_page(student_list, 1);
append_page_links(student_list);

//Function that creates the Search input box and Search button and appends them to the DOM. 
const search_bar = () => {
   const page_header = document.querySelector('.page-header');
   const search_div = document.createElement('div');
   search_div.className = 'student-search';
   page_header.appendChild(search_div);
   const search_input = document.createElement('input');
   search_input.setAttribute('placeholder', 'Search for Students...')
   search_div.appendChild(search_input);
   const search_button = document.createElement('button');
   search_button.textContent = 'Search';
   search_div.appendChild(search_button);
}

search_bar();

//These global variables targeting the Search button & the search Input. 
const button = document.querySelector('.student-search button');
const search = document.querySelector('.student-search input');

//Function that allows for the search of names and only displays those names.
const student_search = (searchInput, names) => {
   const search_results = [];
   const new_div = document.querySelector('.pagination');
   for(let i = 0; i < names.length; i++){
      let searched = names[i];
      searched.style.display = 'none';
      
      if(searchInput.value.length !== 0 && searched.textContent.toLowerCase().includes(searchInput.value.toLowerCase())){
         search_results.push(searched);
      }
      if(searchInput.value === ''){
         searched.style.display = 'block';
      }
   }
   new_div.remove();
   append_page_links(search_results);
   show_page(search_results, 1);
}


//An Event Listener that filters names as you type letters into the search box. 
search.addEventListener('keyup', () => {
   student_search(search, student_list);
});

//Search button
button.addEventListener('click', (event) => {
   event.preventDefault();
   student_search(search, student_list);
 });

 