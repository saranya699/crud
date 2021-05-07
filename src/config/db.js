const mongoose = require('mongoose');

module.exports.connect = async () => {
  try {
    console.log('DB STATUS--->>>', mongoose.connection.readyState);
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect('mongodb+srv://saranya:saranya@cluster0.4btho.mongodb.net/saraDb?retryWrites=true&w=majority', { useNewUrlParser: true });
      console.log('DB STATUS2222--->>>', mongoose.connection.readyState);
    }
  } catch (error) {
    console.log('DB ERROR--->>>', error);
  }
};


