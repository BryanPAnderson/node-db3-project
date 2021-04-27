/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
if  (!req.params.id) {
  res.status(404).json({
    message: `scheme with scheme_id ${req.params.id} not found`
  })
}
next()
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  if (typeof req.body.scheme_name != "string" || !req.body.scheme_name) {
    res.status(404).json({
      message: "invalid scheme name"
    })
  }
  next()
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  if (typeof req.body.instructions != "string" || !req.body.instructions) {
    res.status(400).json({
      message: "Invalid step"
    })
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
