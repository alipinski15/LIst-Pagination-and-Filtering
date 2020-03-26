/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const student_list = document.getElementsByClassName('student-item cf');
const students_per_page = 10;



const show_page = (list, page) =>{
   const start_index = (page * students_per_page) - students_per_page;
   const end_index = page * students_per_page;
   for(let i = 0; i < list.length; i++){
      if ( i >= start_index && i <= end_index){
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none'
      }
   }
}
show_page(student_list, 1);

const append_page_links = (list) => {
    const page_list = Math.ceil(list.length / students_per_page);
    const create_li = page_list.length;
    const page_div = document.querySelector('.page');
    const new_div = document.createElement('div');
    const ul = document.createElement('ul');
    new_div.className = 'pagination';
    page_div.appendChild(new_div);
    new_div.appendChild(ul);
    
    for(let i = 0; i < create_li; i++){
      let li = document.createElement('li');
      li = create_li[i];
      let anchor = document.createElement('a');
      anchor.setAttribute('href', '#');
      anchor.textContent = i + 1;
      li.appendChild(a);
      if(i === 0){
         anchor.className = 'active';
      }
   }
} 

append_page_links(student_list);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.