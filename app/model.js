var
  mongoose = require('mongoose'), //pull mongoose dependency for creating schemas
  Schema = mongoose.Schema,
  UserSchema = new Schema({  // create User Schema, this will be basis of how user data is stored in the db
    username: {type: String, required:true},
    gender: { type: String, required: true},
    age: { type: Number, required:true},
    favlang: { type: String, required:true},
    location: {type: [Number], required: true}, //[Long, Lattitude]
    htmlverified: String,
    created_at: {type: Data, default: Date.now},
    updated_at: {type: Data, default: Date.now}
  })


//Set the created_at parameter equal to the current time
UserSchema.pre('save', function(next){
  now = new Date()
  this.updated_at = now
  if(!this.created_at){
    this.created_at = now
  }
  next()
})


//indexes this schema in 2dspere format (critical for running  proximity searches)
UserSchema.index({location: '2dsphere'})

//Exports the UserSchema for use elsewhere. Sets the MongDB  collection to be used  as "scotch-use"
module.exports = mongoose.model('scotch-use', UserSchema)
