const baseUrl = "http://51.250.123.160:8000/api/v1";
const token = "650677a5fe3ed9084cde388f5e4828862580c19d";

export async function getBoosts() {
  const response = await fetch(baseUrl + "boosts");
  const data = await response.json();
  return data;
}

export const authUser = async (
  initDataUnsafe: WebAppInitData,
  referral_code = null
) => {
  const response = await fetch(baseUrl + "/auth/jwt/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ initDataUnsafe, referral_code }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  } else if (response.status === 201) {
    return response.json();
  }
};

export async function getUser({ token }) {
  try {
    const response = await fetch(baseUrl + "auth/users/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error user profile:", error);
    throw error;
  }
}

export const postMiningTaps = async (
  current_energy: number,
  earned: number
) => {
  try {
    const response = await fetch("mining/taps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ current_energy, earned }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error ыtaps:", error);
  }
};

export async function getMiningOffers(type: string) {
  try {
    const response = await fetch(baseUrl + `/mining/offers/${type}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const postMiningPurchase = async (offer_id: string, level: number) => {
  try {
    const response = await fetch("mining/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ offer_id, level }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
