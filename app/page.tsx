import Link from 'next/link';
import { Scissors } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center space-y-8">
        <div className="flex justify-center mb-4">
          <div className="bg-pink-100 p-4 rounded-full">
            <Scissors className="w-12 h-12 text-pink-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800">Salão de Beleza</h1>
        <p className="text-gray-500">Agende seu horário com facilidade e rapidez.</p>

        <div className="space-y-4">
          <Link 
            href="/client" 
            className="block w-full py-4 px-6 bg-pink-600 hover:bg-pink-700 text-white rounded-xl font-semibold transition-colors"
          >
            Sou Cliente
          </Link>
          
          <Link 
            href="/admin" 
            className="block w-full py-4 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-semibold transition-colors"
          >
            Área Administrativa
          </Link>
        </div>
        
        <div className="pt-4 text-sm text-gray-400">
          <p>Sistema Multiplataforma</p>
        </div>
      </div>
    </div>
  );
}
