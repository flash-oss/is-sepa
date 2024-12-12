const data = [
  ["AL", "ALL"], // Albania
  ["AD", "EUR"], // Andorra
  ["AT", "EUR"], // Austria
  ["BE", "EUR"], // Belgium
  ["BG", "BGN"], // Bulgaria
  ["HR", "EUR"], // Croatia
  ["CY", "EUR"], // Cyprus
  ["CZ", "CZK"], // Czech Republic
  ["DK", "DKK"], // Denmark
  ["EE", "EUR"], // Estonia
  ["FI", "EUR"], // Finland
  ["FR", "EUR"], // France
  ["DE", "EUR"], // Germany
  ["GR", "EUR"], // Greece
  ["HU", "HUF"], // Hungary
  ["IE", "EUR"], // Ireland
  ["IS", "ISK"], // Iceland
  ["IT", "EUR"], // Italy
  ["LV", "EUR"], // Latvia
  ["LI", "CHF"], // Liechtenstein
  ["LT", "EUR"], // Lithuania
  ["LU", "EUR"], // Luxembourg
  ["MT", "EUR"], // Malta
  ["MC", "EUR"], // Monaco
  ["ME", "EUR"], // Montenegro
  ["NL", "EUR"], // Netherlands
  ["NO", "NOK"], // Norway
  ["PL", "PLN"], // Poland
  ["PT", "EUR"], // Portugal
  ["RO", "RON"], // Romania
  ["SM", "EUR"], // San Marino
  ["SK", "EUR"], // Slovakia
  ["SI", "EUR"], // Slovenia
  ["ES", "EUR"], // Spain
  ["SE", "SEK"], // Sweden
  ["CH", "CHF"], // Switzerland
  ["GB", "GBP"], // United Kingdom
  ["VA", "EUR"], // Vatican City State
];

const map = new Map(data);

/**
 * 2 char ISO code of a country.
 * @param iso2code {String}
 * @returns {Boolean}
 */
export function isSepaCountry(iso2code) {
  return map.has(iso2code);
}

/**
 * 2 char ISO code of a country.
 * @param iso2code {String}
 * @returns {String} 3 char code of the country currency
 */
export function getCurrencyOfSepaCountry(iso2code) {
  return map.get(iso2code);
}
