function changeStyle() {

    var XRotation = rotateX.value.toString();
    var YRotation = rotateY.value.toString();
    var ZRotation = rotateZ.value.toString();
    var perspectiveValue = bodyPerspective.value;
    var getShapeScale = shapeScale.value;

    shape.style = `
        transform:
            rotateX(` + XRotation + `deg) ` +
            `rotateY(` + YRotation + `deg) ` +
            `rotateZ(` + ZRotation + `deg) scale(${getShapeScale})`;

    document.body.style = `
        perspective: ${perspectiveValue}px;
    `;
}