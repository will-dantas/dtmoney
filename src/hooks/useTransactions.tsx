import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (transactionId: number) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(TransactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...TransactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction,
    ]);
  }

  async function deleteTransaction(id: number) {
    try {
      const transaction = transactions.find(transaction => transaction.id === id);

      if (!transaction) throw new Error('id is undefined');

      const transactionsFiltered = transactions.filter(transaction => transaction.id !== id);

      setTransactions(transactionsFiltered);

      await api.delete(`/transactions/${id}`);
    } catch (err) {
      throw new Error(String(err));
    }
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction, deleteTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}


export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
