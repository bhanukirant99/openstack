const list = [{
    id: "55f4eWvcojEksyK9eOFKqLcKEcuPRUOr",
    name: "test Since 1 Week Ago"
}, {
    id: "365f25b2e17b4590a1ffa9a0d4be81f9",
    name: "test1 Since 1 Week Ago"
}, {
    id: "365f25b2e17b45Wvcojafa9a0d590a1f",
    name: "test2 Since 1 Week Ago"
}];

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