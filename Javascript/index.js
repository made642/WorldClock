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

let selectedInterval;
function countrySelect(event) {
  let cityTimezone = event.target.value;
  let cityTimezoneElement = moment().tz(cityTimezone);
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.split("/")[1].replace("_", " ");
  let cityElement = document.querySelector("#all-cities");
  if (selectedInterval) {
    clearInterval(selectedInterval);
  }
  function updateCityTime() {
    let cityTimezoneElement = moment().tz(cityTimezone);
    cityElement.innerHTML = `
    <div class="cities">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTimezoneElement.format("MMMM D, YYYY")}</div>
      <div class="time">${cityTimezoneElement.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div> 
    </div>
    `;
  }

  updateCityTime();
  selectedInterval = setInterval(updateCityTime, 1000);
}
let selectedCity = document.querySelector("#countrySelect");
selectedCity.addEventListener("change", countrySelect);
