const token = "d9135b91ad3991d42e8a6e191e3fe546aa2f41f0";

export async function getBoosts() {
  const response = await fetch("boost");
  const data = await response.json();
  return data;
}

export const authUser = async (
  initData: string,
  referral_code = null
) => {
  const response = await fetch("/api/v1/auth/jwt/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ initData, referral_code }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  } else if (response.status === 201) {
    return response.json();
  }
};

export const refreshToken = async (refreshToken: string) => {
const response = await fetch("/api/v1/auth/jwt/refresh", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  }, 
  body: JSON.stringify({refresh: refreshToken}),
});
if (!response.ok) {
  const error = await response.json();
  throw new Error(error.error);
}
return response.json();
}

export const getUser = async () => {
  try {
    const response = await fetch( "/api/v1/auth/users/me", {
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
    console.error("Error taps:", error);
  }
};

export const getMiningOffers = async (type: string) => {
  try {
    const response = await fetch(`/api/v1/mining/offers/${type}`, {
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
