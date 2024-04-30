export async function fetchData() {
  try {
    const response = await fetch('http://localhost:1337/api/faqs');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}