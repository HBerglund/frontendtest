import { createContext, FC, useEffect, useState } from 'react';

export type CompanyType = {
  id?: string;
  name: string;
};

interface CompanyValue {
  companies: CompanyType[];
  loading: boolean | undefined;
  message: string;
  saveNewCompany: (data: CompanyType) => void;
}

export const CompaniesContext = createContext<CompanyValue>({
  companies: [],
  loading: false,
  message: '',
  saveNewCompany: () => {},
});

const CompaniesProvider: FC<{}> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [message, setMessage] = useState<string>('');

  const getAllCompanies = async () => {
    setLoading(true);
    const response = await fetch('/companies');
    const result = await response.json();
    if (result.error) {
      setMessage(result.error.message);
    }
    setCompanies(result.collection);
    setLoading(false);
  };

  const saveNewCompany = async (newCompany: CompanyType) => {
    setLoading(true);
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
    setLoading(false);
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <CompaniesContext.Provider
      value={{ companies, loading, message, saveNewCompany }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesProvider;
