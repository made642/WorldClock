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
setInterval(updateTime, 100);

function countrySelect(event) {
  let currentTime = moment().tz(event.target.value);
  let cityName = event.target.value.split("/")[1].replace("_", " ");
  let cityElement = document.querySelector("#all-cities");
  cityElement.innerHTML = `
    <div>
      <h2>${cityName}</h2>
      <div class="date">${currentTime.format("MMMM D, YYYY")}</div>
      <div class="time">${currentTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div> `;
}

let selectedCity = document.querySelector("#countrySelect");
selectedCity.addEventListener("change", countrySelect);
