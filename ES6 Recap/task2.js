let activities = {
    activity1: [
        {
            name: "listen on spotify",

            song_list: {

                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"

            },
            id: 2
        }
    ]
}

const getABC = activities.activity1[0].song_list.song_1
console.log(getABC)

const getXYZ = activities.activity1[1].song_list.song_2
console.log(getXYZ)