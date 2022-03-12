import { db } from '../firebase/config';
import { query, getDocs, collection, orderBy } from 'firebase/firestore';

export const getNotes = async (uid) => {
  try {
    const notesCollection = collection(db, `/${uid}/journal/notes`);
    const q = query(notesCollection, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);

    let notes = [];
    querySnapshot.forEach((snapChild) => {
      notes.push({
        id: snapChild.id,
        ...snapChild.data(),
      });
    });
    return notes;
  } catch (err) {
    console.log({ err });
  }
};
