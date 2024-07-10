import { useEffect, useState } from "react"
import { useGetUserQuery, useInitUserMutation } from "../redux/services/userApi"

export const useInit = () => {
  const { data: user } = useGetUserQuery(null, {
		skip: !localStorage.getItem("token"),
	});
  
  const [inizialised, setInizialised] = useState(false);
	const [initUser] = useInitUserMutation();

	useEffect(() => {
		if (inizialised || user) return;

		initUser({ referral_code: null })
			.unwrap()
			.then((tokens) => {
				setInizialised(true);
				localStorage.setItem("token", tokens.access);
			})
			.catch((error) => console.log(error));
	}, []);

  return inizialised;
}