import Request from "RepoServices/Request";

const countryQuery = `query Query {
  countries {
    currency
    languages {
      name
    }
    name
    phone
    capital
    states {
      name
    }
    emoji
  }
}`;

export const fetchCountries = async () => {
  try {
    const result = await Request.post(
      "https://countries.trevorblades.com/graphql",
      {
        operationName: "Query",
        query: countryQuery,
      }
    );
    console.log(result.data);
    return result.data.data.countries;
  } catch {}
};
