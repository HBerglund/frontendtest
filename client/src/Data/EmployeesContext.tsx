import { createContext, FC, useEffect, useState } from 'react';

export type EmployeeType = {
  id?: string;
  name: string;
  companyID?: string;
};

interface EmployeeValue {
  employees: EmployeeType[];
  loading: boolean | undefined;
  message: string;
  saveNewEmployee: (data: EmployeeType) => void;
  removeCompanyFromUser: (userID: string) => void;
}

export const EmployeesContext = createContext<EmployeeValue>({
  employees: [],
  loading: false,
  message: '',
  saveNewEmployee: () => {},
  removeCompanyFromUser: () => {},
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

  const removeCompanyFromUser = async (userId: string) => {
    setLoading(true);
    const response = await fetch(`/employees/${userId}`, {
      method: 'PUT',
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

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        loading,
        message,
        saveNewEmployee,
        removeCompanyFromUser,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
