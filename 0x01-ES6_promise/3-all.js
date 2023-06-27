import { uploadPhoto, createUser } from "./utils"

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
	.then((values) => {
	  const { body } = values[0];
	  const { firstname, lastname } = values[1];
	  console.log(`${body} ${firstname} ${lastname}`);
	})
	.catch(() => console.log('Signup system offline'));
}
