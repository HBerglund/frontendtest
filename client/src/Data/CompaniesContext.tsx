import { createContext, FC, useEffect, useState } from 'react';

export type CompanyType = {
  id?: string;
  name: string;
};

interface CompanyValue {
  companies: CompanyType[];
  message: string;
  saveNewCompany: (data: CompanyType) => void;
}

export const CompaniesContext = createContext<CompanyValue>({
  companies: [],
  message: '',
  saveNewCompany: () => {},
});

const CompaniesProvider: FC<{}> = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [message, setMessage] = useState<string>('');

  const getAllCompanies = async () => {
    const response = await fetch('/companies');
    const result = await response.json();
    if (result.error) {
      setMessage(result.error.message);
    }
    setCompanies(result.collection);
  };

  const saveNewCompany = async (newCompany: CompanyType) => {
    const response = await fetch('/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCompany),
    });
    const result = await response.json();
    if (result.error) {
      setMessage(result.error.message);
    }
    setMessage(result.message);
    getAllCompanies();
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessage('');
    }, 2000);
  }, [message]);

  return (
    <CompaniesContext.Provider value={{ companies, message, saveNewCompany }}>
      {children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesProvider;
