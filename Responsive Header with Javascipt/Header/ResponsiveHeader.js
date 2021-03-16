var menuItems = `<ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>`

document.querySelector(".nav").innerHTML = menuItems;




//----------------------DETECTS SCREEN RESIZE---------------------                

window.addEventListener('resize', function detectWidth(){

    let screenWidth = screen.width;
    
    if(screenWidth <= 800){
    
        document.querySelector("nav ul").innerHTML = `<img id="menuIcon" src="Header/menuIcon.png" alt="Menu Icon">`;        
        
        function toggleMenu(){

            // TO SHOW MENU ITEMS & CLOSE MENU ICON AFTER CLICKING ON HAMBURGER MENU BUTTON
            document.querySelector("#menuIcon").addEventListener("click", function(){
                document.querySelector("#menuIcon").outerHTML = `<img id="closMenuIcon" src="Header/closeMenuIcon.png" alt="Close Menu Icon">`;
                

                // ADDS MOBILE MENU ITEMS WHEN CLICKED ON MENU BUTTON
                let mobileMenuItems = menuItems;
                document.querySelector("#mobileMenuItems").insertAdjacentHTML('afterbegin', mobileMenuItems)


                //TO CHANGE BACK TO MENU ICON
                document.querySelector("#closMenuIcon").addEventListener("click", function () {
                        document.querySelector("#closMenuIcon").outerHTML = `<img id="menuIcon" src="Header/menuIcon.png" alt="Menu Icon">`;
                        
                        document.querySelector("#mobileMenuItems").innerHTML = "";

                        toggleMenu();
                });               
            })
        }
        toggleMenu();
        
    
    } else{
    
        document.querySelector("nav ul").innerHTML = menuItems;
    }
});



    