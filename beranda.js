function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


  var i = 0;
  var images = [];
  var waktu = 5000;
  images[0] = `beranda2.jpg`;
  images[1] = `beranda1.jpg`;
  images[2] = `sholat.jpg`;

  function gantiGambar() {
    document.slide.src = images[i];
    if(i < images.length-1)
      i++;
    else
      i = 0;
      // setTimeout("gantiGambar()",waktu);
      setInterval(() => {
        gantiGambar();
      }, 10000);
  }
  window.onload = gantiGambar;