/** В дальнейшем разобьем на разные файлы по назначению. Не стоит пихать все апи в один файл.
 *  + рассмотрим вариант выполнения запросов с помощью axios.
 *  Пока имеется вопрос по обработке ошибок, обсудим потом устно. 
 */

const baseUrl = "https://667048450900b5f8724a1148.mockapi.io/api/v1/";

/** Здесь и далее указать тип, возвращаемый функцией */
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

/** Для единообразия используй один способ объявления функций (стрелочный / декларативный) */
export async function getUserProfile() {
  try {
    const response = await fetch("auth/users/me");
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
    const response = await fetch(`mining/offers/${type}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const postMiningPurchase = async (
  offer_id: string,
  level: number
) => {
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
