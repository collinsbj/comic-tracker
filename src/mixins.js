import CryptoJS from "crypto-js"

export const marvelAPICalls = {
	methods: {
		async marvelGET(baseURL, offset = 0, limit = 20) {
			const timestamp = new Date()
			const hash = CryptoJS.MD5(timestamp + process.env.VUE_APP_PRIVATEAPIKEY + process.env.VUE_APP_PUBLICAPIKEY).toString()
			const params = `?apikey=${process.env.VUE_APP_PUBLICAPIKEY}&hash=${hash}&ts=${timestamp}&offset=${offset}&limit=${limit}`
			const url = baseURL + params

			const results = await fetch(url)
				.then(response => response.json())
				.then(response => response)
				.catch(err => console.log(err))

			return results
		}
	}
}
