useEffect(() => {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=46cb3a2031676ccd163fe488ad5fb108'
    )
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        })
}, []);