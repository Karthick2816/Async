var s1 = document.createElement("div");
s1.setAttribute("id", "main");
document.body.append(s1);

setTimeout(() => {
  document.getElementById("main").innerHTML = 10;
  setTimeout(() => {
    document.getElementById("main").innerHTML = 9;
    setTimeout(() => {
      document.getElementById("main").innerHTML = 8;
      setTimeout(() => {
        document.getElementById("main").innerHTML = 7;
        setTimeout(() => {
          document.getElementById("main").innerHTML = 6;
          setTimeout(() => {
            document.getElementById("main").innerHTML = 5;
            setTimeout(() => {
              document.getElementById("main").innerHTML = 4;
              setTimeout(() => {
                document.getElementById("main").innerHTML = 3;
                setTimeout(() => {
                  document.getElementById("main").innerHTML = 2;
                  setTimeout(() => {
                    document.getElementById("main").innerHTML = 1;
                    setTimeout(() => {
                      document.getElementById(
                        "main"
                      ).innerHTML = `HAPPY <br>INDEPENDANCE DAY`;
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
