let myLeads = [];
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");

// localStorage.setItem("myLeads", "www.exampleleads.com")
//console.log(localStorage.getItem("myLeads"))



inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = " ";
  renderLeads();
  console.log(myLeads);
});
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // listItems +="<li><a href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `

    console.log(listItems);
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  }
//   window.open(listItems, "_blank");
  ulEl.innerHTML = listItems;
}
