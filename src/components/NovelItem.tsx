import React from "react";

interface NovelItemProps {
  judul: string;
  penerbit: string;
  tahunTerbit: string;
  penulis: string;
  onEdit: () => void;
  onDelete: () => void;
}

const NovelItem: React.FC<NovelItemProps> = ({ judul, penerbit, tahunTerbit, penulis, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-4">
      <h3 className="text-lg font-bold">{judul}</h3>
      <p className="text-gray-600">Penerbit: {penerbit}</p>
      <p className="text-gray-600">Tahun Terbit: {tahunTerbit}</p>
      <p className="text-gray-600">Penulis: {penulis}</p>
      <div className="mt-4">
        <button onClick={onEdit} className="p-2 bg-green-600 text-white rounded-lg mr-2 hover:bg-green-500">
          Edit
        </button>
        <button onClick={onDelete} className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NovelItem;