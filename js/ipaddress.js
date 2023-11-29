  // Global Code
  var ipAddress = document.getElementById("txtIp");
  var ipRes = document.getElementById("screen");

  //BLL Code
  function ipaddress(ip) {
      var arr = ip.split(".");
      if (arr.length == 4) {
          for (var i = 0; i < arr.length; i++) {
              var e = arr[i];
              var e = parseInt(e);
              if (e >= 0 && e <= 255) {

              } else {
                  return ipres = "You Entered Invalid IP Address , Try Again...";
              }
          }
          return ipres = "Congratulations ! Valid IP Address";
      } else {
          return ipres = "You Entered Invalid IP Address , Try Again...";
      }
  }

  //PL Code
  function ipadd_click() {
      var ipAdd = ipAddress.value;
      var ipres = ipaddress(ipAdd);
      ipRes.value = ipres;
  }