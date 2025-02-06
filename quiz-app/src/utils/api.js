export const fetchQuizData = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/quiz");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Quiz Data:", data); // Debugging

    return data;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return null;
  }
};
