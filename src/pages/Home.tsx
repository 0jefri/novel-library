import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NovelForm from '../components/NovelForm';
import NovelList from '../components/NovelList';
import { getNovels, createNewNovel, updateNovel, deleteNovel } from '../routes/api';

interface Novel {
  id: number;
  judul: string;
  penerbit: string;
  tahunTerbit: string;
  penulis: string;
}

const Home: React.FC = () => {
  const [novels, setNovels] = useState<Novel[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  // useEffect(() => {
  //   fetchNovels();
  // }, []);

  // const fetchNovels = async () => {
  //   try {
  //     const response = await getNovels();
  //     setNovels(response.data);
  //   } catch (error) {
  //     console.error('Failed to fetch novels:', error);
  //   }
  // };

  // const handleSave = async (judul: string, penerbit: string, tahunTerbit: string, penulis: string) => {
  //   try {
  //     if (editId !== null) {
  //       await updateNovel(editId, judul, penerbit, tahunTerbit, penulis);
  //       setNovels(novels.map(novel => novel.id === editId ? { id: editId, judul, penerbit, tahunTerbit, penulis } : novel));
  //       setEditId(null);
  //     } else {
  //       const response = await createNewNovel(judul, penerbit, tahunTerbit, penulis);
  //       setNovels([...novels, response.data]);
  //     }
  //   } catch (error) {
  //     console.error('Failed to save novel:', error);
  //   }
  // };

  // const handleEdit = (id: string) => {
  //   const novel = novels.find(novel => novel.id === id);
  //   if (novel) {
  //     setEditId(id);
  //   }
  // };

  // const handleDelete = async (id: string) => {
  //   try {
  //     await deleteNovel(id);
  //     setNovels(novels.filter(novel => novel.id !== id));
  //   } catch (error) {
  //     console.error('Failed to delete novel:', error);
  //   }
  // };

  const handleSave = (judul: string, penerbit: string, tahunTerbit: string, penulis: string) => {
    if (editId !== null) {
      setNovels(novels.map(novel =>
        novel.id === editId ? { id: editId, judul, penerbit, tahunTerbit, penulis } : novel
      ));
      setEditId(null);
    } else {
      setNovels([...novels, { id: Date.now(), judul, penerbit, tahunTerbit, penulis }]);
    }
  };

  const handleEdit = (id: number) => {
    setEditId(id);
  };

  const handleDelete = (id: number) => {
    setNovels(novels.filter(novel => novel.id !== id));
  };

  const novelToEdit = novels.find(novel => novel.id === editId);

  return (
    <div className='bg-slate-200 min-h-screen'>
      <Header />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
      <NovelForm
        onSave={handleSave}
        initialJudul={novelToEdit?.judul}
        initialPenerbit={novelToEdit?.penerbit}
        initialTahunTerbit={novelToEdit?.tahunTerbit}
        initialPenulis={novelToEdit?.penulis}
      />
      <NovelList novels={novels} onEdit={handleEdit} onDelete={handleDelete} />
      {/* </div> */}
    </div>
    // <div>
    //   <Header />
    //   <NovelForm
    //     onSave={handleSave
    //     }
    //     initialJudul={editId !== null ? novels.find(novel => novel.id === editId)?.judul : ''}
    //     initialPenerbit={editId !== null ? novels.find(novel => novel.id === editId)?.penerbit : ''}
    //     initialTahunTerbit={editId !== null ? novels.find(novel => novel.id === editId)?.tahunTerbit : ''}
    //     initialPenulis={editId !== null ? novels.find(novel => novel.id === editId)?.penulis : ''}
    //   />
    //   <NovelList novels={novels} onEdit={handleEdit} onDelete={handleDelete} />
    // </div>
  )
};

export default Home;
