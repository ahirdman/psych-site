interface Props {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export function EmailTemplate({ name, email, phoneNumber, message }: Props) {
  return (
    <div>
      <h1>Meddelande från {name}:</h1>
      <p>{message}</p>
      <br />
      <p>Telefonnummer: {phoneNumber}</p>
      <p>Email: {email}</p>
    </div>
  );
}
