import React, { useState } from "react";

interface NovelFormProps {
  onSave: (judul: string, Penerbit: string, tahunTerbit: string, penulis: string) => void;
  initialJudul?: string;
  initialPenerbit?: string;
  initialTahunTerbit?: string;
  initialPenulis?: string;
}

const NovelForm: React.FC<NovelFormProps> = ({
  onSave,
  initialJudul = '',
  initialPenerbit = '',
  initialTahunTerbit = '',
  initialPenulis = ''

}) => {
  const [judul, setJudul] = useState(initialJudul);
  const [penerbit, setPenerbit] = useState(initialPenerbit);
  const [tahunTerbit, setTahunTerbit] = useState(initialTahunTerbit);
  const [penulis, setPenulis] = useState(initialPenulis);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(judul, penerbit, tahunTerbit, penulis);
    setJudul('');
    setPenerbit('');
    setTahunTerbit('');
    setPenulis('');
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-6">
      <input type="text" placeholder="Judul" value={judul} onChange={(e) => setJudul(e.target.value)} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <input type="text" placeholder="Penerbit" value={penerbit} onChange={(e) => setPenerbit(e.target.value)} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <input type="text" placeholder="Tahun Terbit" value={tahunTerbit} onChange={(e) => setTahunTerbit(e.target.value)} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <input type="text" placeholder="Penulis" value={penulis} onChange={(e) => setPenulis(e.target.value)} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <button type="submit" className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Add Novel</button>
    </form>
  )
}

export default NovelForm;