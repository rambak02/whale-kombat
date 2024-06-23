const baseUrl = "https://667048450900b5f8724a1148.mockapi.io/api/v1/";

export async function getBoosts() {
  const response = await fetch(baseUrl + "boosts");
  const data = await response.json();
  return data;
}

export const authUser = async (initData: string) => {
  try {
    const response = await fetch("/validate-init-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ initData }),
    });

    const result = await response.json();
    if (response.ok) {
      if (result.isValid) {
        return result;
      } else {
        throw new Error("Неправильные данные юзера");
      }
    }
  } catch (error) {
    console.error(error);
  }
};
