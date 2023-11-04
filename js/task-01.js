// Number of categories

const categories = document.querySelector("#categories")
const ctgItem = categories.querySelectorAll(".item")

console.log("Number of categories:", ctgItem.length);

// H2 and list number

ctgItem.forEach((item) => {
    const headingText = item.querySelector("h2").textContent;
    console.log("Category:", headingText);
    const itemList = item.querySelectorAll("li");
    console.log("Elements:", itemList.length);
})


