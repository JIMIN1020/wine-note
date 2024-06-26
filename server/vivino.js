const puppeteer = require("puppeteer");
const minimist = require("minimist");

const run = async (
  names,
  isForSearch = true,
  countryCode = "US",
  stateCode = "",
  minPrice,
  maxPrice,
  noPriceIncluded,
  minRatings,
  maxRatings,
  minAverage,
  maxAverage
) => {
  // set country and state
  const setShipTo = async (countryCode, stateCode) => {
    return await page.evaluate(
      async (countryCode, stateCode) => {
        const fetchResult = await fetch("https://www.vivino.com/api/ship_to/", {
          headers: {
            "content-type": "application/json",
            "x-csrf-token": document.querySelector('[name="csrf-token"]')
              .content,
          },
          body: JSON.stringify({
            country_code: countryCode,
            state_code: stateCode,
          }),
          method: "PUT",
        });
        if (fetchResult.status === 200) {
          const result = await fetchResult.json();
          if (
            result.ship_to.country_code.toLowerCase() ===
              countryCode.toLowerCase() &&
            result.ship_to.state_code.toLowerCase() === stateCode.toLowerCase()
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      },
      countryCode,
      stateCode
    );
  };

  // check country and state
  const isShipTo = async (countryCode, stateCode) => {
    return await page.evaluate(
      (countryCode, stateCode) => {
        if (
          countryCode.toLowerCase() ===
            window.__PRELOADED_COUNTRY_CODE__.toLowerCase() &&
          stateCode.toLowerCase() ===
            window.__PRELOADED_STATE_CODE__.toLowerCase()
        ) {
          return true;
        }
        return false;
      },
      countryCode,
      stateCode
    );
  };

  let result = [];

  // collect items from the page
  const collectItems = () => {
    const numerize = (stringNumber) => {
      const str = stringNumber.replace(/[^0-9,.]+/g, "").replace(",", ".");
      return parseFloat(str);
    };

    const CARDS_SELECTOR = ".card.card-lg";
    const NAME_SELECTOR = ".wine-card__name";
    const COUNTRY_SELECTOR = '.wine-card__region [data-item-type="country"]';
    const REGION_SELECTOR = ".wine-card__region .link-color-alt-grey";
    const AVERAGE_RATING_SELECTOR = ".average__number";
    const RATINGS_SELECTOR = ".average__stars .text-micro";
    const RATING_REPLACMENT = "ratings";
    const LINK_SELECTOR = "a";
    const THUMB_SELECTOR = "figure";
    const THUMB_REGEX = /"(.*)"/;
    const PRICE_SELECTOR = ".wine-price-value";

    try {
      const data = [...document.querySelectorAll(CARDS_SELECTOR)].map((e) => {
        const name = e.querySelector(NAME_SELECTOR).textContent.trim();
        const link = e.querySelector(LINK_SELECTOR).href;
        const thumb = e.querySelector(THUMB_SELECTOR)
          ? "https:" +
            e
              .querySelector(THUMB_SELECTOR)
              .style.backgroundImage.match(THUMB_REGEX)[1]
          : undefined;
        const country = e.querySelector(COUNTRY_SELECTOR).textContent.trim();
        const region = e.querySelector(REGION_SELECTOR).textContent.trim();
        const average_rating = e.querySelector(AVERAGE_RATING_SELECTOR)
          ? numerize(
              e.querySelector(AVERAGE_RATING_SELECTOR).textContent.trim()
            )
          : undefined;
        const ratings = e.querySelector(RATINGS_SELECTOR)
          ? Number(
              e
                .querySelector(RATINGS_SELECTOR)
                .textContent.replace(RATING_REPLACMENT, "")
                .trim()
            )
          : undefined;
        const price = e.querySelector(PRICE_SELECTOR)
          ? numerize(e.querySelector(PRICE_SELECTOR).textContent.trim())
          : undefined;

        return {
          name: name,
          link: link,
          thumb: thumb,
          country: country,
          region: region,
          average_rating: average_rating,
          ratings: ratings,
          price: price,
        };
      });
      return data;
    } catch (err) {
      result.status = "NO_RESULT";
    }
  };

  // Set default state for the US
  if (countryCode.toLowerCase() === "us" && stateCode === "") {
    stateCode = "CA";
  }

  const BASE_URL = "https://www.vivino.com";
  const SEARCH_PATH = "/search/wines?q=";
  const STATUS_FULL = "FULL_DATA";
  const STATUS_ERROR_RESPONSE = "RESPONSE_ERROR";
  const STATUS_ERROR_SHIP_TO = "SHIP_TO_ERROR";
  const STATUS_ERROR_SHIP_TO_CONFIRM = "SHIP_TO_CONFIRM_ERROR";
  const STATUS_ERROR_EXCEPTION = "SOME_EXCEPTION";
  const PAUSE_MULTIPLIER = 1;

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1920, height: 1040 },
    devtools: false,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();

  // need to set User Agent else an empty result
  // it seems they detect headless Chrome
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"
  );

  // To save bandwidth block all types of requests except "document", "xhr", "fetch"
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (
      ["document", "xhr", "fetch", "script"].includes(request.resourceType())
    ) {
      request.continue();
    } else {
      request.abort();
    }
  });

  try {
    page.setDefaultNavigationTimeout(0);

    // load home page
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });

    // check the country and state
    let isDestinationRight = await isShipTo(countryCode, stateCode);
    if (!isDestinationRight) {
      // set country and state
      const resultSetShipTo = await setShipTo(countryCode, stateCode);
      if (resultSetShipTo) {
        await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
        // check the country and state
        isDestinationRight = await isShipTo(countryCode, stateCode);
        if (!isDestinationRight) {
          console.log('"Ship To" changing can not be confirmed!');
          result.status = STATUS_ERROR_SHIP_TO_CONFIRM;
          return;
        }
      } else {
        console.log('"Ship To" was not changed!');
        result.status = STATUS_ERROR_SHIP_TO;
        return;
      }
    }

    for (const name of names) {
      let index = 1;
      let pause = 0;
      let data = [];
      while (data.length < 1) {
        const response = await page.goto(
          `${BASE_URL}${SEARCH_PATH}${name}&start=${index}`,
          {
            waitUntil: "domcontentloaded",
          }
        );

        if (response.ok()) {
          pause = 0;
          const pageItems = await page.evaluate(collectItems);
          if (pageItems.length) {
            console.log("Results were collected from the page:", index);

            // 검색하는 경우라면 -> 최대 3개의 검색 결과 전달
            if (isForSearch) {
              const items =
                pageItems.length > 3 ? pageItems.slice(0, 3) : pageItems;
              data.push(...items);
            } else {
              // 추천 와인을 받는 경우라면 -> 1개의 검색 결과 전달
              data.push(pageItems[0]);
            }
            index++;
          } else {
            // no more data
            result.status = STATUS_FULL;
          }
        } else if (response.status() === 429) {
          pause++;
        } else {
          // return some error info
          result.http_status = response.status(); // http status
          result.page_index = index; // index of the problem page
          result.status = STATUS_ERROR_RESPONSE;
        }
      }
      result.push(...data);
    }
    return result;
  } catch (error) {
    result.status = STATUS_ERROR_EXCEPTION;
    result.message = error;
    throw error;
  } finally {
    console.log("Finish!");

    await browser.close();
  }
};

const args = minimist(process.argv.slice(2));
console.log(args);

const {
  names,
  country,
  state,
  minPrice,
  maxPrice,
  noPriceIncluded,
  minRatings,
  maxRatings,
  minAverage,
  maxAverage,
} = args;

module.exports = run;
