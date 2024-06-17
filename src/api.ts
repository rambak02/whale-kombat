const baseUrl = "https://667048450900b5f8724a1148.mockapi.io/api/v1/"

export async function getBoosts() {
    const response = await fetch(baseUrl + "boosts");
    const data = await response.json();
    return data;
}