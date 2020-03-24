exports.handler = async (event) => {

  const bcrypt = require('bcrypt')
   
    
  const password = 'AFDSFJLASJFOIJQWOJFOIQJWOIFJQWJOIFJQWIO5236532462652ADFKLMSKDANFLWENLFJEWNTASJFL523523dassaddasKA532JFQfsadjkfasf'
  const saltRounds = 12;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

    return {"message": hashedPassword};
};


