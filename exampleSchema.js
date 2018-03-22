module.exports = {
  name: "string",
  target: "string",
  population: {
    locale: {
      include: "array",
      exclude: "array"
    },
    countryCodeAlpha: {
      include: "array",
      exclude: "array"
    },
    learnLanguageAlpha3: {
      include: "array",
      exclude: "array"
    }
  },
  variations: {
    "$variation1": {
      percentage: "number",
      value: "string"
    },
    "$variation2": {
      percentage: "number",
      value: "string"
    }
  },
  series: "string",
  owner: "string"
};
