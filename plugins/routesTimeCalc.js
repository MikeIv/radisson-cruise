export function timeCalc(dpt, arv) {
    let depatureTime = new Date(dpt);
    let arrivalTime = new Date(arv);
    let hourDepature = depatureTime.getHours().toString().length < 2 ? '0' + depatureTime.getHours() : depatureTime.getHours();
    let minDepature = depatureTime.getMinutes().toString().length < 2 ? '0' + depatureTime.getMinutes() : depatureTime.getMinutes();
    let hourArrival = arrivalTime.getHours().toString().length < 2 ? '0' + arrivalTime.getHours() : arrivalTime.getHours();
    let minArrival = arrivalTime.getMinutes().toString().length < 2 ? '0' + arrivalTime.getMinutes() : arrivalTime.getMinutes();
    return `${hourDepature}:${minDepature} - ${hourArrival}:${minArrival}`;
}