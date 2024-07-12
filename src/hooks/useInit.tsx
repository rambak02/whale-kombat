import { useEffect, useState } from "react"
import { useGetUserQuery, useAuthUserMutation } from "../redux/services/userApi"

export const useInit = () => {
  const { data: user } = useGetUserQuery(null, {
		skip: !localStorage.getItem("token"),
	});
  
  const [inizialised, setInizialised] = useState(false);
	const [authUser] = useAuthUserMutation();

	useEffect(() => {
		if (inizialised || user) return;

		authUser({ referral_code: null })
			.unwrap()
			.then((tokens) => {
				setInizialised(true);
				localStorage.setItem("token", tokens.access);
			})
			.catch((error) => console.log(error));
	}, []);

  return inizialised;
}