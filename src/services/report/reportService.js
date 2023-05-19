const apiURL = process.env.REACT_APP_BASE_API_URL
const object = {}

export async function getReportQualification(token, date_start, date_end) {
    try {
        const url = new URL(`${apiURL}/survey/get_qualification_report/excel/`)
        url.search = new URLSearchParams({date_start, date_end}).toString()
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        object.ok = response.ok
        object.status = response.status
        const result = await response.blob()
        object.data = result
        return object
    } catch(e) {
        throw new Error(`Ocurrió un error\n${e}`)
    }
}