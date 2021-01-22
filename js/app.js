/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


 const sections = document.querySelectorAll("section");
 const new_nav = document.getElementById("navbar__list");
 const fragment = document.createDocumentFragment();

 //const section_id = section.getAttribute("id");
 


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//create nav function
function create_nav_list(){

	sections.forEach( section => {
       const name = section.getAttribute("data-nav");
       const li_item = document.createElement("li");
       const link = document.createElement("a");
       li_item.classList.add("menu__link");
       link.textContent= name ; 
       li_item.appendChild(link);
       fragment.appendChild(li_item);

       // Scroll to section on link click
       link.addEventListener("click" , function() {
       	section.scrollIntoView({behavior: "smooth"});
       })    
    });
        new_nav.appendChild(fragment); // Build menu 
}

// Add class 'active' to section when near top of viewport
function active(){
 
        sections.forEach(section =>{
        	let rectangle = section.getBoundingClientRect();
            if( rectangle.top >= 0 && rectangle.top <= 400 ){
                 // Set sections as active
                 document.querySelector('.your-active-class')?.classList.remove('your-active-class');
                 section.classList.add("your-active-class");

                 const linklist = document.querySelectorAll('a');

                 linklist.forEach( a => {
                      if( a.textContent == section.getAttribute("data-nav") ){
                   	    document.querySelector('.activelink')?.classList.remove('activelink');
                        a.classList.add('activelink');
            	      }
                });
            }
        });
  }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
create_nav_list();

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Scroll to anchor ID using scrollTO event
document.addEventListener('scroll' , function(){active()} );






