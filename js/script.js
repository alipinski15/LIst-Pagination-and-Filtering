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
    const page_list = Math.ceil(student_list.length / students_per_page);
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
         const li_active = document.querySelector('.pagination a');
         for(let j = 0; j < li_active.length; j++){
            li_active[j].classList.remove('active');
         } 
         e.target.className = 'active';
         show_page(student_list, e.target.textContent);
      });
   }
} 
show_page(student_list, 1);
append_page_links(student_list);



