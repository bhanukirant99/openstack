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