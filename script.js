document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");
    const tabHeading = document.getElementById("tab-heading");

    // Store tab headings for each tab
    const tabHeadings = {
        tab1: "This is the first tab. One is the first number. A is the first alphabet.",
        tab2: "This is the second tab. Two is the second number. B is the second alphabet.",
        tab3: "This is the third tab. Three is the third number. C is the third alphabet.",
        tab4: "This is the fourth tab. Four is the fourth number. D is the fourth alphabet."
    };

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Activate clicked tab and its corresponding content
            tab.classList.add("active");
            const selectedTab = tab.dataset.tab;
            document.getElementById(selectedTab).classList.add("active");

            // Update the tab heading dynamically
            tabHeading.textContent = tabHeadings[selectedTab];
        });
    });
});
