const helper = {

    getCurrentDate(){

        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth()+1
        let year = date.getFullYear()

        let fullDate = `${year}-${month}-${day}`

        return fullDate

    },

    getTomorrowDate(){

        let date = new Date()
        date.setDate(date.getDate+1)
        let day = date.getDate()
        let month = date.getMonth()+1
        let year = date.getFullYear()

        let fullDate = `${year}-${month}-${day}`

        return fullDate

    }
}

export default { ...helper }