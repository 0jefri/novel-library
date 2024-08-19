import React, { useState } from "react";

// interface NovelFormProps {
//   OnSave: ()
// }

const NovelForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto mt-6">
      <input type="text" placeholder="Judul" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <input type="text" placeholder="Penerbit" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <input type="number" placeholder="Tahun Terbit" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <input type="text" placeholder="Penulis" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <button type="submit" className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Save</button>
    </form>
  )
}

export default NovelForm;