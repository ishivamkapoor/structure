const crypto = require('crypto');
const secret="meanAcc";

module.exports={
    encrypt:(data)=>{
        var mykey = crypto.createCipher('aes-128-cbc', secret);
        var mystr = mykey.update(data, 'utf8', 'hex')
        mystr += mykey.update.final('hex')

        return mystr;
    },
    decrypt:(data)=>{
        var mykey = crypto.createDecipher('aes-128-cbc', secret);
        var mystr = mykey.update(data, 'hex', 'utf8')
        mystr += mykey.update.final('utf8');

        return mystr;
    },
    token:()=>{
      return crypto.randomBytes().toString("hex");
    }
}