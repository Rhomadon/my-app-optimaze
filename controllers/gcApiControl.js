const axios = require('axios')

const postApi = async (req, res, next) => {
	let reqData = req.body
	try {
		response = await axios({
			method: 'post',
			url: `https://cloudoptimization.googleapis.com/v1/projects/development-353207:optimizeTours?access_token=ya29.c.b0AXv0zTPjIvlZYYTpI-aUYLtbv0BLhh2v36GDb-hO1N6Q5qFBulE5nIj8p7aBlvu_1BtpG1vYohpFsQd6__1nhGrXUg2OTxw7QdOG-DjSm4uFgMEjcXJKJSjMbcxrjuHNkOINvlQjr6R11zU2Vs70POpe7j6I62PlN2vCNjq9l94L7bCnj7EqBrQOfpecqJ3r33Ov9CBi1SSBBn1v1KHo3Q5mwqLS7W0`,
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