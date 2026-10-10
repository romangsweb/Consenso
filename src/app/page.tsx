'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [error, setError] = useState('');

  // Fetch transactions on load
  useEffect(() => {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setTransactions(data);
      })
      .catch(err => console.error("Failed to load txs", err));
  }, []);

  const handleAddTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount) return;
    
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, amount }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || 'Error processing transaction');
      }

      // Add to list
      if (result.data) {
        setTransactions([result.data, ...transactions]);
      }
      
      setDescription('');
      setAmount('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Metrics calculation
  const totalExpense = transactions
    .filter(t => t.type === 'EXPENSE')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalIncome = transactions
    .filter(t => t.type === 'INCOME')
    .reduce((sum, t) => sum + t.amount, 0);

  const activeSubscriptions = transactions
    .filter(t => t.isSubscription)
    .length;

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-4 sm:p-8 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-6xl mb-12 border-b-4 border-[var(--border)] pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl sm:text-6xl tracking-tighter mb-2">CASH_RADAR<span className="text-[var(--primary)]">.</span></h1>
          <p className="font-mono text-sm uppercase tracking-widest text-[var(--muted-foreground)]">AI Financial Triage System v2.0</p>
        </div>
        <div className="hidden sm:block">
          <div className="lcd-text text-xs">STATUS: {loading ? 'ANALYZING TX...' : 'SYSTEM READY'}</div>
        </div>
      </header>

      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input Control Panel */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-6 te-border te-shadow">
            <h2 className="text-xl mb-4 border-b-2 border-black pb-2">INPUT_DATA</h2>
            <form onSubmit={handleAddTransaction} className="flex flex-col gap-4">
              <div>
                <label className="font-mono text-xs font-bold uppercase mb-1 block">Concept (Raw Text)</label>
                <input
                  type="text"
                  placeholder="e.g. UBER EATS CDMX"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="te-input p-3 w-full"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-xs font-bold uppercase mb-1 block">Amount ($)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="250.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="te-input p-3 w-full"
                  required
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className={`te-button p-4 w-full mt-2 ${loading ? 'opacity-50 cursor-wait' : ''}`}
              >
                {loading ? 'AI CLASSIFYING...' : 'PROCESS TX'}
              </button>
            </form>
            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-900 border-2 border-red-900 font-mono text-sm rounded-lg">
                [ERR] {error}
              </div>
            )}
          </div>

          <div className="bg-[var(--muted)] p-6 te-border te-shadow text-sm">
            <h3 className="mb-2 font-bold uppercase border-b border-gray-400 pb-1">AI_INSTRUCTION_SET</h3>
            <p className="font-mono text-xs text-[var(--muted-foreground)] leading-relaxed mt-2">
              Llama-3.1 automatically classifies incoming text into categories (FOOD, TRANSPORT, SUB, etc.) and predicts if it is a recurring subscription based on transaction history.
            </p>
          </div>
        </div>

        {/* Dashboards Display */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Top Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 te-border te-shadow-hover">
              <h3 className="font-mono text-xs uppercase text-gray-500 font-bold">Total Expenses</h3>
              <p className="text-4xl font-black mt-2 text-black">${totalExpense.toFixed(2)}</p>
            </div>
            <div className="bg-white p-6 te-border te-shadow-hover">
              <h3 className="font-mono text-xs uppercase text-gray-500 font-bold">Total Income</h3>
              <p className="text-4xl font-black mt-2 text-green-600">${totalIncome.toFixed(2)}</p>
            </div>
            <div className="bg-[var(--primary)] text-white p-6 te-border te-shadow-hover">
              <h3 className="font-mono text-xs uppercase text-white font-bold opacity-80">Ghost Subs</h3>
              <p className="text-4xl font-black mt-2">{activeSubscriptions}</p>
            </div>
          </div>

          {/* Transactions Ledger */}
          <div className="bg-white p-6 te-border te-shadow">
            <div className="flex justify-between items-end mb-6 border-b-2 border-black pb-2">
              <h2 className="text-2xl">LEDGER</h2>
              <span className="font-mono text-xs bg-black text-white px-2 py-1 rounded">ROWS: {transactions.length}</span>
            </div>
            
            {transactions.length === 0 ? (
              <div className="border-2 border-dashed border-gray-300 p-12 text-center text-gray-400 font-mono text-sm">
                NO TRANSACTIONS IN DATABASE.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="font-mono text-xs uppercase bg-gray-100 border-y-2 border-black">
                      <th className="p-3">Concept</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Sub</th>
                      <th className="p-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="p-3 font-medium">{tx.description}</td>
                        <td className="p-3">
                          <span className="font-mono text-xs bg-[var(--accent)] text-black border border-black px-2 py-1 rounded-md">
                            {tx.category}
                          </span>
                        </td>
                        <td className="p-3">
                          {tx.isSubscription ? (
                            <span className="w-3 h-3 rounded-full bg-red-500 inline-block border border-black animate-pulse"></span>
                          ) : (
                            <span className="w-3 h-3 rounded-full bg-gray-300 inline-block border border-gray-400"></span>
                          )}
                        </td>
                        <td className={`p-3 text-right font-mono font-bold ${tx.type === 'INCOME' ? 'text-green-600' : 'text-black'}`}>
                          {tx.type === 'INCOME' ? '+' : '-'}${tx.amount.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
