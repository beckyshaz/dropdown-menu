function toggleDropdownVisibility() {

    const dropdownBtn = document.querySelector(".dropdownBtn");
    const dropdownContents = document.querySelector(".visible");


    dropdownBtn.addEventListener("click", () => {
        dropdownContents.classList.toggle("hidden");
       
    })
}

toggleDropdownVisibility();