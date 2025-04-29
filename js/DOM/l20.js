const titleItem = document.querySelector("#title-item");

// check contains
//titleItem.hasAttribute("name")

// get value
//titleItem.getAttribute("name")

// set value
//titleItem.setAttribute("name", "value")

// remove attribute
//titleItem.removeAttribute("name")

titleItem.setAttribute("myattribute", "myvalue");
if (titleItem.hasAttribute("myattribute")) {
    console.log(true);
} else {console.log(false)};

