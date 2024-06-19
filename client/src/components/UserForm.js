import React, { useState } from 'react';

const UserForm = ({ onSubmit, responseMessage, errorMessage }) => {
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');
  const [iloscWykonanychTaskow, setIloscWykonanychTaskow] = useState(0);
  const [czyGra, setCzyGra] = useState(false);
  const [zloto, setZloto] = useState(0);
  const [czyPremium, setCzyPremium] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({
        imie,
        nazwisko,
        email,
        haslo,
        iloscWykonanychTaskow,
        czyGra,
        zloto,
        czyPremium,
      });
      setImie('');
      setNazwisko('');
      setEmail('');
      setHaslo('');
      setIloscWykonanychTaskow(0);
      setCzyGra(false);
      setZloto(0);
      setCzyPremium(false);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Imię"
        value={imie}
        onChange={(e) => setImie(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nazwisko"
        value={nazwisko}
        onChange={(e) => setNazwisko(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={haslo}
        onChange={(e) => setHaslo(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ilość wykonanych tasków"
        value={iloscWykonanychTaskow}
        onChange={(e) => setIloscWykonanychTaskow(Number(e.target.value))}
      />
      <label>
        Czy gra:
        <input
          type="checkbox"
          checked={czyGra}
          onChange={(e) => setCzyGra(e.target.checked)}
        />
      </label>
      <input
        type="number"
        placeholder="Złoto"
        value={zloto}
        onChange={(e) => setZloto(Number(e.target.value))}
      />
      <label>
        Czy premium:
        <input
          type="checkbox"
          checked={czyPremium}
          onChange={(e) => setCzyPremium(e.target.checked)}
        />
      </label>
      <button type="submit">Submit</button>
      {responseMessage && <p>{responseMessage}</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </form>
  );
};

export default UserForm;
