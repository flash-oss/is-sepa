
const data = [
    // jurisdiction ISO code, currency, IBAN prefix, country name
    [ "FI", ["EUR", "FI", "Åland Islands" ]],
    [ "AL", ["ALL", "AL", "Albania" ]],
    [ "AD", ["EUR", "AD", "Andorra" ]],
    [ "AT", ["EUR", "AT", "Austria" ]],
    [ "PT", ["EUR", "PT", "Azores" ]],
    [ "BE", ["EUR", "BE", "Belgium" ]],
    [ "BG", ["EUR", "BG", "Bulgaria" ]],
    [ "ES", ["EUR", "ES", "Canary Islands" ]],
    [ "HR", ["EUR", "HR", "Croatia" ]],
    [ "CY", ["EUR", "CY", "Cyprus" ]],
    [ "CZ", ["CZK", "CZ", "Czech Republic" ]],
    [ "DK", ["DKK", "DK", "Denmark" ]],
    [ "EE", ["EUR", "EE", "Estonia" ]],
    [ "FI", ["EUR", "FI", "Finland" ]],
    [ "FR", ["EUR", "FR", "France" ]],
    [ "GF", ["EUR", "FR", "French Guiana" ]],
    [ "DE", ["EUR", "DE", "Germany" ]],
    [ "GI", ["GIP", "GI", "Gibraltar" ]],
    [ "GR", ["EUR", "GR", "Greece" ]],
    [ "GP", ["EUR", "FR", "Guadeloupe" ]],
    [ "GG", ["GBP", "GB", "Guernsey" ]],
    [ "HU", ["HUF", "HU", "Hungary" ]],
    [ "IS", ["ISK", "IS", "Iceland" ]],
    [ "IE", ["EUR", "IE", "Ireland" ]],
    [ "IM", ["GBP", "GB", "Isle of Man" ]],
    [ "IT", ["EUR", "IT", "Italy" ]],
    [ "JE", ["GBP", "GB", "Jersey" ]],
    [ "LV", ["EUR", "LV", "Latvia" ]],
    [ "LI", ["CHF", "LI", "Liechtenstein" ]],
    [ "LT", ["EUR", "LT", "Lithuania" ]],
    [ "LU", ["EUR", "LU", "Luxembourg" ]],
    [ "PT", ["EUR", "PT", "Madeira" ]],
    [ "MT", ["EUR", "MT", "Malta" ]],
    [ "MQ", ["EUR", "FR", "Martinique" ]],
    [ "YT", ["EUR", "FR", "Mayotte" ]],
    [ "MD", ["MDL", "MD", "Moldova" ]],
    [ "MC", ["EUR", "MC", "Monaco" ]],
    [ "ME", ["EUR", "ME", "Montenegro" ]],
    [ "MK", ["MKD", "MK", "North Macedonia" ]],
    [ "BL", ["EUR", "FR", "Saint Barthélemy" ]],
    [ "MF", ["EUR", "FR", "Country/territory" ]],
    [ "NL", ["EUR", "NL", "Netherlands" ]],
    [ "NO", ["NOK", "NO", "Norway" ]],
    [ "PL", ["PLN", "PL", "Poland" ]],
    [ "PT", ["EUR", "PT", "Portugal" ]],
    [ "RE", ["EUR", "FR", "Réunion" ]],
    [ "RO", ["RON", "RO", "Romania" ]],
    [ "MF", ["EUR", "FR", "Saint Martin (French part)" ]],
    [ "PM", ["EUR", "FR", "Saint Pierre and Miquelon" ]],
    [ "SM", ["EUR", "SM", "San Marino" ]],
    [ "SK", ["EUR", "SK", "Slovakia" ]],
    [ "SI", ["EUR", "SI", "Slovenia" ]],
    [ "ES", ["EUR", "ES", "Spain" ]],
    [ "SE", ["SEK", "SE", "Sweden" ]],
    [ "CH", ["CHF", "CH", "Switzerland" ]],
    [ "GB", ["GBP", "GB", "United Kingdom" ]],
    [ "VA", ["EUR", "VA", "Vatican City State" ]]
];

export const map = new Map(data);

/**
 * @param iso2code {String} 2 char ISO code of a country.
 * @returns {Boolean}
 */
export function isSepaCountry(iso2code) {
  return map.has(iso2code);
}

/**
 * @param iso2code {String} 2 char ISO code of a country.
 * @returns {String} 3 char code of the country currency
 */
export function getCurrencyOfSepaCountry(iso2code) {
  return map.get(iso2code)?.[0];
}

/**
 * @param iso2code {String} 2 char ISO code of a country.
 * @returns {String} 2 char code of the jurisdiction IBAN prefix
 */
export function getIbanPrefixOfSepaCountry(iso2code) {
  return map.get(iso2code)?.[1];
}
