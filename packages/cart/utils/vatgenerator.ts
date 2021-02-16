//EU-----------------------

const a = ['DE', 'AT', 'BE', 'BG', 'CY', 'CZ', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'GB', 'HR',
  'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'].sort();

let str = "";


a.forEach((val) => {
  str += '"' + val + '":  {"vat_standard": {"rate":  1.19,"desc": "+ VAT 19%"},"vat_reduced": {"rate": 1.07,"desc": "+ VAT 7%"}},';
});

console.log("EU =" + str);

// NonEU------------------------------------------
str = "";

const b = "AD AE AF AG AL AM AO AR AT AU AZ BA BB BD BE BF BG BH BI BJ BN BO BR BS BT BW BY BZ CA CD CF CG CH CI CL CM CN CO CR CU CV CY CZ DE DJ DK DM DO DZ EC EE EG ER ES ET FI FJ FM FR GA GB GD GE GH GM GN GQ GR GT GW GY HN HR HT HU ID IE IL IN IQ IR IS IT JM JO JP KE KG KH KI KM KN KP KR KW KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MG MH MK ML MM MN MR MT MU MV MW MX MY MZ NA NE NG NI NL NO NP NR NZ OM PA PE PG PH PK PL PT PW PY QA RO RS RU RW SA SB SC SD SE SG SI SK SL SM SN SO SR SS ST SV SY SZ TA TD TG TH TJ TL TM TN TO TR TT TV TW TZ UA UG US UY UZ VA VC VE VN VU WS YE ZA ZM ZW";

let strArr = b.split(' ').sort();

let tmp = a.join();
strArr.forEach((val) => {
  if (tmp.indexOf(val) <0 ) {
    str += '"' + val + '":  {"vat_standard": {"rate":  1.00,"desc": "+ VAT Free"},"vat_reduced": {"rate": 1.00,"desc": "+ VAT Free"}},';
  }
});


console.log("non-EU =" + str);
