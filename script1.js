function zoomInOut(element) {
    var computedStyle = window.getComputedStyle(element);
    var transformValue = computedStyle.getPropertyValue("transform");

    if (transformValue === "none" || transformValue === "matrix(1, 0, 0, 1, 0, 0)") {
        element.style.transform = "scale(1.2)";
    } else {
        element.style.transform = "none";
    }
}