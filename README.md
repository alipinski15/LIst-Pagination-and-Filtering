# List Pagination and Filtering
 
This project centers around creating an app that will filter though a list of student names and display them ten
at a time. The last page only showing the remainder. Based on the amount of names passed through it, the page links at the bottom should adjust to the amount needed to display all of the names.

The script needed to create this app:
    Global variables need to access within the functions.
    Two functions 
        1. A function to take the amount of names given, and displays only ten per page. 
        2. A function that appends the elements necessary to the DOM to create the button links. Then
           cycles through the links making them active when pressed. 
    