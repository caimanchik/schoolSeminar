console.log("Песочница работает!");
document.addEventListener('click', function (e) {
    var coords = [e.x, e.y];
    console.log("Point is ".concat(coords[0], ", ").concat(coords[1]));
});
