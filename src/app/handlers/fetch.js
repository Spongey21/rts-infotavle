export default async function getData(setState) {
    // fetches location id
    const res = await fetch(`//xmlopen.rejseplanen.dk/bin/rest.exe/location?input=Musicon (Maglelunden)&format=json`)
    const data = await res.json()

    // fetches route information
    const departureFetch = await fetch(`//xmlopen.rejseplanen.dk/bin/rest.exe/departureBoard?id=${data.LocationList.StopLocation[0].id}&format=json`);
    const departureData = await departureFetch.json()

    setState(departureData.DepartureBoard.Departure.filter(bus => {
        if (bus.name == 'Bus 202A' || bus.name == 'Bus 208') { return { bus } }
    }))
}