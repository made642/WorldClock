function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTimezone = moment().tz("America/New_York");
  newYorkDateElement.textContent = newYorkTimezone.format("MMMM D, YYYY");
  newYorkTimeElement.innerHTML = newYorkTimezone.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTimezone = moment().tz("Europe/London");
  londonDateElement.textContent = londonTimezone.format("MMMM D, YYYY");
  londonTimeElement.innerHTML = londonTimezone.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTimezone = moment().tz("Europe/Paris");
  parisDateElement.textContent = parisTimezone.format("MMMM D, YYYY");
  parisTimeElement.innerHTML = parisTimezone.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}
setInterval(updateTime, 1000);
