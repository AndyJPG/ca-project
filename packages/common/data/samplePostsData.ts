const data = {
    "data": [
        {
            "id": "pid_001",
            "author": "uid_100",
            "createdDate": "2011-10-05T14:48:00.000Z",
            "comments": [],
            "address": "51/235 Flemington Road, Franklin, Canberra"
        },
        {
            "id": "pid_002",
            "author": "uid_101",
            "createdDate": "2012-03-05T14:48:00.000Z",
            "comments": [],
            "address": "13 Flinders street, Melbourne, Victoria"
        },
        {
            "id": "pid_003",
            "author": "uid_101",
            "createdDate": "2009-03-05T14:48:00.000Z",
            "comments": [],
            "address": "1 collin street, Melbourne, Victoria"
        }
    ]
}

export const samplePostsData = (): Promise<any> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}
