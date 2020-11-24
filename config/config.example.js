module.exports = {

    mongodb: {
        dbURI: "mongodb://localhost:27017/crosswordyan21",
        setting: {
            useNewUrlParser:true,
            useUnifiedTopology:true   // to fix deprecation issues
        }
    },
    session: {
        secretString: "sessionhasspassword"
    },
    encryption: {
        key: "[ENCRYPTION KEY]",
        iv: "[ENCRYPTION IV]"
    },
    baseUrl: "http://localhost:8081/",
    sendgrid: {
        FromAddress:"noreply@gmail.com",
        apiKey:"[insert your sendgrid api key]"
    }
};