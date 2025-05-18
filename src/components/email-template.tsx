interface Props {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export function EmailTemplate({ name, email, phoneNumber, message }: Props) {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #e1e1e1',
        borderRadius: '5px',
      }}
    >
      <h1
        style={{
          color: '#333',
          borderBottom: '1px solid #e1e1e1',
          paddingBottom: '10px',
        }}
      >
        Nytt meddelande från hemsidan
      </h1>
      <div style={{ margin: '20px 0' }}>
        <h2 style={{ fontSize: '18px', color: '#444' }}>Kontaktinformation:</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td
                style={{ padding: '8px 0', fontWeight: 'bold', width: '120px' }}
              >
                Namn:
              </td>
              <td style={{ padding: '8px 0' }}>{name}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Telefon:</td>
              <td style={{ padding: '8px 0' }}>
                {phoneNumber || 'Ej angivet'}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 'bold' }}>E-post:</td>
              <td style={{ padding: '8px 0' }}>
                <a href={`mailto:${email}`} style={{ color: '#0066cc' }}>
                  {email}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style={{
          margin: '20px 0',
          padding: '15px',
          backgroundColor: '#f9f9f9',
          borderRadius: '4px',
        }}
      >
        <h2 style={{ fontSize: '18px', color: '#444', marginTop: '0' }}>
          Meddelande:
        </h2>
        <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>{message}</p>
      </div>
      <div
        style={{
          fontSize: '12px',
          color: '#777',
          marginTop: '30px',
          borderTop: '1px solid #e1e1e1',
          paddingTop: '10px',
        }}
      >
        <p>
          Detta meddelande skickades från kontaktformuläret på
          thomashultcrantz.se
        </p>
      </div>
    </div>
  );
}
