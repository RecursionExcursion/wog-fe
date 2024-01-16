export function fetchTypes() {
  const path = "http://localhost:8080/api/workout/types";
  return fetchAPI(path);
}

export function fetchExercises() {
  const path = "http://localhost:8080/api/workout";
  return fetchAPI(path);
}

const fetchAPI = async (path) => {
  const response = await fetch(path);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
};
