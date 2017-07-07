Category.allow({
  'insert':function (userId,doc) {
    return userId;
  }
});

// when someone asks to insert, check that there's a user ID, if there is a user ID, it would return true.
// If there isn't, it would return false. So it would allow if they have their user ID and they're logged in.
// And it would not allow, if they're not.

//respond to insert, update delete