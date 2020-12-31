//construction

function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

var user1 = new User( 'John', 'Smith', 26, 'male');
var user2 = new User('JIll', 'Robinson', 32, 'female')

//prototype object

User.prototype.emailDomain = '@facebook.com';
//after calling for user1 or user2 under __proto__ will be an email
> user1.emailDomain;
<'@facebook.com'

User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain;
}