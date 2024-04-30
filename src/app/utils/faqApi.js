export default async function handler(req, res) {
  try {
    const response = await fetch('http://localhost:1337/api/faqs');

    if (response.ok) {
      const data = await response.json();

      res.status(200).json(data);
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}