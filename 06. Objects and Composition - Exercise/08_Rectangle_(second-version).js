function rectangle(width, height, color) {
    let result = {
        width: Number(width),
        height: Number(height),
        color: color[0].toUpperCase() + color.substring(1),
        calcArea() {
            return result.width * result.height;
        }
    }

    return result;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
