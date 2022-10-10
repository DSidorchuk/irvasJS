// Task 5, 7
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);


    // Hide all tabs and content
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        })
        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
    };

    // Show tab by sent index or first as default value
    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    };

    // For firts load of page
    hideTabContent();
    showTabContent();

    // Event listener for click on tabs to show choosen content
    header.addEventListener('click', (e) =>{
        const target = e.target;
        if (target && ((target.classList.contains(tabSelector.replace(/\./, '')) 
        || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))))){
            tab.forEach((item, i) => {
                if(target == item || target.parentNode == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

};

export default tabs;