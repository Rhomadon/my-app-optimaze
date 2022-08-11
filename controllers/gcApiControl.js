const axios = require('axios')

const postApi = async (req, res, next) => {
	let reqData = req.body.param
	req.body.key = 'ya29.c.b0AXv0zTPYpMwXCvHAvNc6WY9ucvnFaX_wkOEF95gXRnsxIadsAKxkZPGCqiKQ4QSvSaIHhC5bH8lQtEzzEyTBmK5m2XKFMC5C0soj27gy0KHLcwwtiDrzrHi7sTt8sOxjHYikJUORPjnH7vzvWOngSDj-PTqSTo_s3A4KupV2AvLZJljMsvvOhaTNYLusvOWaDH_vrfmoWy7r5zbKz4Zy1v28WqoaTJI'

	try {
		response = await axios({
			method: 'post',
			url: `https://cloudoptimization.googleapis.com/v1/projects/development-353207:optimizeTours?access_token=${req.body.key}`,
			data: reqData
		})

		let visits = response.data.routes.map(route => { return { vehicleIndex: route.vehicleIndex ?? 0, shipmentIndexroute: route.visits.map(visit => visit.shipmentIndex ?? 0)}})

		res.status(200).json({
			message: "Data Post Success",
			data: visits
		})
	} catch (err) {
		res.status(400).json({
			message: err.message
		})
	}
}

module.exports = {
	postApi
}