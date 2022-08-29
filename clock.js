function jhdgfujefewjfwjfhwdvvdwhcvdwvghdwvcdwvhgcvdwhcvdhcjwdchjwdchjdwhcvgwdhcvhjwdcvdcvwdcwdvcwdvchwdvgwdcwdnvcjwdcwdcwdsjbvjkwdbhwbhjbwfhjbwhjbwhjvbwhjbwbhjbhjewbeffwhfbehjbwhfwehvfwbfhjewbfhbfhbew() {
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let year = date.getFullYear();
  let mon = date.getMonth();
  let hr = document.getElementById("hr");
  let minute = document.getElementById("min");
  let second = document.getElementById("sec");
  let yea = document.getElementById("yea");
  let montht = document.getElementById("month");
  let pm = document.getElementById("pm");
  let main = document.getElementById("main");
  if (hour > 12) {
    hour = hour - 12;
  }
  hr.innerHTML = hour;
  if (hour > 12) {
    pm.innerHTML = "AM";
  } else {
    pm.innerHTML = "PM";
  }
  if (pm.innerHTML === "AM") {
    main.style.background = "url(bald-eagle-521492_1920.jpg";
    main.style.backgroundSize = "center";
  } else {
    main.style.background = "url(wolf-647528_1920.jpg)";
    main.style.backgroundSize = "cover";
    main.style.backgroundPosition = "center";
  }

  minute.innerHTML = min;
  second.innerHTML = sec;
  yea.innerHTML = year;
  if ((mon = 0)) {
    montht.innerHTML === "Jan";
  } else if ((mon = 1)) {
    montht.innerHTML === "Feb";
  } else if ((mon = 2)) {
    montht.innerHTML === "Mar";
  } else if ((mon = 3)) {
    montht.innerHTML === "Apr";
  } else if ((mon = 4)) {
    montht.innerHTML === "May";
  } else if ((mon = 5)) {
    montht.innerHTML === "Jun";
  } else if ((mon = 6)) {
    montht.innerHTML === "Jul";
  } else if ((mon = 7)) {
    montht.innerHTML === "Aug";
  } else if ((mon = 8)) {
    montht.innerHTML === "Sep";
  } else if ((mon = 9)) {
    montht.innerHTML === "Oct";
  } else if ((mon = 10)) {
    montht.innerHTML === "Nov";
  } else {
    montht.innerHTML === "Dec";
  }
}
let jsjh = document.createElement("div");
jsjh.id = "jsjh";
jsjh.innerHTML =
  "<a  href='https://ranasarfraz.com'>Designed and Developed by Sarfraz</a>";
document.body.append(jsjh);
jsjh.style.position = "absolute";
jsjh.style.bottom = "97%";
jsjh.style.left = "1%";
jsjh.style.color = "white";
// jsjh.style.transform = "rotate(-90deg)";
jsjh.style.textAlign = "center";
// jsjh.style.background = "background: rgb(131,58,180);
// background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);"
setInterval(
  "jhdgfujefewjfwjfhwdvvdwhcvdwvghdwvcdwvhgcvdwhcvdhcjwdchjwdchjdwhcvgwdhcvhjwdcvdcvwdcwdvcwdvchwdvgwdcwdnvcjwdcwdcwdsjbvjkwdbhwbhjbwfhjbwhjbwhjvbwhjbwbhjbhjewbeffwhfbehjbwhfwehvfwbfhjewbfhbfhbew()",
  10
);
