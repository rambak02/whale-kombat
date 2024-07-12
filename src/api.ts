export async function getBoosts() {
  const response = await fetch("boost");
  const data = await response.json();
  return data;
}

export const authUser = async (initData: string, referral_code = null) => {
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
  } else if (response.status === 200) {
    return response.json();
  }
};

export const refreshToken = async (refreshToken: string) => {
  const response = await fetch("/api/v1/auth/jwt/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refreshToken }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  return response.json();
};

export const getUser = async () => {
  try {
    const response = await fetch("/api/v1/auth/users/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      throw new Error("Ошибка users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error user profile:", error);
    throw error;
  }
};

export const postMiningTaps = async (
  current_energy: number,
  earned: number
) => {
  try {
    const response = await fetch("/api/v1/mining/taps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    const response = await fetch(`/api/v1/mining/offers/${type}`, {});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

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

export const resetEnergyApi = async (
) => {
  try {
    const response = await fetch("/api/v1/mining/boosts/energy_reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error reset energy:", error);
  }
};