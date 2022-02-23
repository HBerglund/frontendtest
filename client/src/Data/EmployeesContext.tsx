import { createContext, FC, useEffect, useState } from 'react';

export type EmployeeType = {
  name: string;
  company?: string;
};

interface EmployeeValue {
  employees: EmployeeType[];
  loading: boolean | undefined;
  message: string;
  saveNewEmployee: (data: EmployeeType) => void;
}

export const EmployeesContext = createContext<EmployeeValue>({
  employees: [],
  loading: false,
  message: '',
  saveNewEmployee: () => {},
});

const EmployeesProvider: FC<{}> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState<string>('');

  const getAllEmployees = async () => {
    setLoading(true);
    const response = await fetch('/employees');
    const result = await response.json();
    if (result.error) {
      setMessage(result.error.message);
    }
    setEmployees(result.collection);
    setLoading(false);
  };

  const saveNewEmployee = async (newEmployee: EmployeeType) => {
    setLoading(true);
    const response = await fetch('/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    });
    const result = await response.json();
    if (result.error) {
      setMessage(result.error.message);
    }
    setMessage(result.message);
    getAllEmployees();
    setLoading(false);
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  console.log('employees: ', employees);
  console.log('message: ', message);

  return (
    <EmployeesContext.Provider
      value={{ employees, loading, message, saveNewEmployee }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
