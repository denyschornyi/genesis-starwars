const _apiBase = `https://swapi.dev/api`;

export const getAllPlanets = async () => {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/${_apiBase}/planets`
  );
  if (!res.ok) {
    throw new Error(`Could not fetch , recived ${res.status}`);
  }
  return await res.json();
};

export default function getPlanet(id) {}
