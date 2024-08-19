import axios from 'axios';

const API_URL = 'localhost:8080/api/v1/novel';

export const createNewNovel = async (
	judul: string,
	penerbit: string,
	tahunTerbit: string,
	penulis: string
) => {
	return await axios.post(API_URL, { judul, penerbit, tahunTerbit, penulis });
};

export const getNovels = async () => {
	return await axios.get(API_URL);
};

export const getNovelById = async (id: string) => {
	return await axios.get(`${API_URL}/${id}`);
};

export const updateNovel = async (
	id: string,
	judul: string,
	penerbit: string,
	tahunTerbit: string,
	penulis: string
) => {
	return await axios.put(`${API_URL}/${id}`, { judul, penerbit, tahunTerbit, penulis });
};

export const deleteNovel = async (id: string) => {
	return await axios.delete(`${API_URL}/${id}`);
};
