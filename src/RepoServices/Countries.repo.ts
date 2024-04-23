import Request from "RepoServices/Request";

const countryQuery = `query Query {
  countries {
    currency
    languages {
      name
    }
    name
    phone
    states {
      name
    }
    emoji
  }
}`;

export const fetchCountries = async (country: string) => {
  try {
    const result = await Request.post(
      "https://countries.trevorblades.com/graphql",
      {
        operationName: "Query",
        query: countryQuery,
      }
    );

    return result.data.data.countries;
  } catch {}
};
