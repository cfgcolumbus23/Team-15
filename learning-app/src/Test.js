import { db } from './connection.js'; // update with your path to firestore config
import { doc, addDoc, collection } from "firebase/firestore"; 

export const createNote = async () => {
    await addDoc(collection(db, 'notes'), {NewTest : "i hope this works"});
};

