function getRealMonth(month) {
    var temp = month + 1
    return (temp < 10 ? '0' : '') + temp
}

function getRealDate(day) {
    return (day < 10 ? '0' : '') + day
}

export function unixInSeconds(time) {
    const today = new Date()
    const arrival = new Date(`${today.getFullYear()}-${getRealMonth(today.getMonth())}-${getRealDate(today.getDate())}T${time}:00+01:00`)

    return Math.floor((arrival.getTime() - today.getTime()) / 1000)
}   