# List Pagination and Filtering
 
This project centers around creating an app that will filter though a list of student names and display them ten
at a time. The last page only showing the remainder. Based on the amount of names passed through it, the page links at the bottom should adjust to the amount needed to display all of the names.

The script needed to create this app:
    Global variables need to access within the functions.
    Four functions  
        1. A function to take the amount of names given, and displays only ten per page. 
        2. A function that appends the elements necessary to the DOM to create the button links. Then
           cycles through the links making them active when pressed. 
        3. A function that creates a search field and search button.
        4. A function that filters student names in the search field and only displays the names with the matching letter. 
    
    Two Event Listeners
        1. A 'keyup' listener to filter the students by letters entered into the search field.
        2. A 'click' listener to find a name when the button is pressed. 
   