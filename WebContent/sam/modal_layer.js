var wrapMask = function() {

    unWrapMask();

    let maskDiv = document.createElement("DIV");
    maskDiv.id = "mask";
    maskDiv.style.cssText = `
        position: absolute;
        z-index: 100;
        background-color: gray;
        left: 0;
        top: 0;
        opacity: 0.3;
        width:100%;
        height:100%;
    `;
    document.body.append(maskDiv);
}

var unWrapMask = function() {
    let temp = document.querySelector("#mask");
    if (temp) {
        temp.remove();
    }        
}
