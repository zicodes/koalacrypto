exports.handler = async (event) => {
    const bcrypt = require('bcrypt')
    let hash = bcrypt.hashSync('AFDSFJLASJFOIJQWOJFOIQJWOIFJQWJOIFJQWIO5236532462652ADFKLMSKDANFLWENLFJEWNTASJFL523523dassaddasKA532JFQfsadjkfasf', 12);
    return {"message": hash};
};


