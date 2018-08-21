function processErrorMessages(err) {
  if (err.message) {
    switch (err.message) {
      case 'duplicateUser': return { status: 409, message: 'A user with this email address already exists' }
      case 'invalidPassword': return { status: 401, message: 'Incorrect password' }
      case 'invalidToken': return { status: 401, message: 'A valid authorization token is required' }
      case 'missingUserName': return { status: 400, message: 'First name is required' }
      case 'missingEmail': return { status: 400, message: 'Email address is required' }
      case 'missingPassword': return { status: 400, message: 'A password is required' }
      case 'noSuchUser': return { status: 404, message: `Requested user does not exist` }
      case 'requestorInvalid': return { status: 401, message: 'Requestor is not a valid user' }
      case 'requireAllFields': return { status: 400, message: 'Please fill in all fields before submitting' }
      
      default:
        return { status: 500, message: 'Our apologies, but an internal server error has occurred' }
    }
  }
}

module.exports = processErrorMessages
