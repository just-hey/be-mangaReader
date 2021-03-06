function processErrorMessages(err) {
  if (err.message) {
    switch (err.message) {
      case 'duplicateEmail': return { status: 409, message: 'A user with this email address already exists' }
      case 'duplicateUsername': return { status: 409, message: 'A user with this username already exists' }      
      case 'invalidPassword': return { status: 401, message: 'Incorrect password' }
      case 'invalidToken': return { status: 401, message: 'A valid authorization token is required' }
      case 'missingUsername': return { status: 400, message: 'A username is required' }
      case 'missingEmail': return { status: 400, message: 'An email is required' }
      case 'missingPassword': return { status: 400, message: 'A password is required' }
      case 'noSuchUser': return { status: 404, message: 'Requested user does not exist' }
      case 'requestorInvalid': return { status: 401, message: 'Requestor is not a valid user' }
      case 'requireAllFields': return { status: 400, message: 'Please fill in all fields before submitting' }
      
      default:
        return { status: 500, message: 'Our apologies, but an internal server error has occurred' }
    }
  }
}

module.exports = processErrorMessages
