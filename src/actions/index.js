

export function signinUser({ email, password }) {
  // Redux thunk allows us to return a function instead of an object
  // and we get the dispatch method to use which will forward actions
  // to all of the reducers. The idea is to have the ability to submit
  // multiple actions from a single action creator and handle side-effects.
  return function(dispatch) {
    // Submit email/password to the server

    // If request is good...
    // - Update state to indicate user is authenticated
    // - Save the JWT token
    // - redirect to the route '/feature'

    // If request is bad...
    // - Show an error to the user
  };

}
