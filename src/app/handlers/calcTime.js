function getRealMonth(month) {
    var temp = month + 1
    return (temp < 10 ? '0' : '') + temp
}

function getRealDate(day) {
    return (parseInt(day) < 10 ? '0' : '') + parseInt(day)
}

export function unixInSeconds(time) {
    console.log(time.split(':')[0] + ':' + time.split(':')[1] + ':' + '00');
    const today = new Date()
    const arrival = new Date(`${today.getFullYear()}-${getRealMonth(today.getMonth())}-${getRealDate(today.getDate())}T${getRealDate(time.split(':')[0])}:${time.split(':')[1]}:00+01:00`)

    return Math.floor((arrival.getTime() - today.getTime()) / 1000)
}   