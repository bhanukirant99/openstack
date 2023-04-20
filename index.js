const list = [{
    id: 1,
    name: "test 1 Week Ago"
}, {
    id: 2,
    name: "test1 1 Week Ago"
}, {
    id: 3,
    name: "test2 1 Week Ago"
}, {
    id: 4,
    name: "test3 1 Week Ago"
}, {
    id: 5,
    name: "test4 1 Weeks Ago"
}, {
    id: 6,
    name: "VM 1 Month Ago"
}, {
    id: 7,
    name: "VM 3 Months Ago"
}, {
    id: 8,
    name: "VM 6 Months Ago"
}, {
    id: 9,
    name: "VM 1 Year Ago"
}, {
    id: 10,
    name: "VM More Than 1 Year Ago"
}, ];

function displayVM() {
    const timeframe = document.getElementById("timeframe").value;
    const vmList = document.getElementById("vm-list");
    vmList.innerHTML = "";
    list.forEach(vm => {
        if (vm.name.toLowerCase().includes(timeframe.toLowerCase())) {
            const li = document.createElement("li");
            li.innerText = `ID: ${vm.id} - Name: ${vm.name}`;
            vmList.appendChild(li);
        }
    });
}