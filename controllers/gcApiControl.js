const axios = require('axios')

const postApi = async (req, res, next) => {
	let reqData = req.body.param
	let keys = req.body.key

	try {
		response = await axios({
			method: 'post',
			url: `https://cloudoptimization.googleapis.com/v1/projects/development-353207:optimizeTours?access_token=${keys}`,
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