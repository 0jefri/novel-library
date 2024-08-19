import React from 'react';
import NovelItem from './NovelItem';

interface Novel {
  id: number;
  judul: string;
  penerbit: string;
  tahunTerbit: string;
  penulis: string;
}

interface NovelListProps {
  novels: Novel[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const NovelList: React.FC<NovelListProps> = ({ novels, onEdit, onDelete }) => {
  return (
    <div className="max-w-lg mx-auto mt-6">
      {novels.map((novel) => (
        <NovelItem
          key={novel.id}
          judul={novel.judul}
          penerbit={novel.penerbit}
          tahunTerbit={novel.tahunTerbit}
          penulis={novel.penulis}
          onEdit={() => onEdit(novel.id)}
          onDelete={() => onDelete(novel.id)}
        />
      ))}
    </div>
  );
};

export default NovelList;