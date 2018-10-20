const checkboxs = document.querySelectorAll('input[type="checkbox"]');
let lastCheckbox = -1;

function selectMultiple(e) {
    const index = [...checkboxs].indexOf(e.srcElement);
    if (!e.shiftKey || lastCheckbox === -1 || lastCheckbox === index) {
        lastCheckbox = index;
        return;
    }

    var highestNum = 0;
    var lowestNum = 0;
    [highestNum,lowestNum] =  [Math.max(index,lastCheckbox),Math.min(index,lastCheckbox)];

    for (let i = lowestNum; i <= highestNum; i++) {
        const element = checkboxs[i];
        element.checked = true;
    }
}

checkboxs.forEach(checkbox => checkbox.addEventListener('click', selectMultiple));