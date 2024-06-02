function carInformation(manufacturer, model, number) {
    return {
        manufacturer: manufacturer,
        model: model,
        number: number
    };
}
var car1 = carInformation("Ford", "Fiesta");
var car2 = carInformation("BMW", "weis", 668);
console.log(car1);
console.log(car2);
