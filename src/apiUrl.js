class ApiUrl
{
    getBase() {
           var host = window.location.hostname;
      var baseApiUrl = "No Url";

      if(host === 'localhost') {
          //is development
          baseApiUrl = "http://localhost:64179"
      } else {
        baseApiUrl = "http://battletechleaguesapi.azurewebsites.net/"
          // is production
      }

      return baseApiUrl;

     }
}

export default ApiUrl;