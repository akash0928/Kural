// Using Lingva Translate API - open source translation service
const LINGVA_API = import.meta.env.VITE_LINGVA_API_URL || 'https://lingva.ml/api/v1';

export async function translateText(
  text: string,
  from: 'en' | 'ta',
  to: 'en' | 'ta'
): Promise<string> {
  try {
    const response = await fetch(
      `${LINGVA_API}/${from}/${to}/${encodeURIComponent(text)}`
    );

    if (!response.ok) {
      throw new Error('Translation failed');
    }

    const data = await response.json();
    return data.translation;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text if translation fails
  }
}