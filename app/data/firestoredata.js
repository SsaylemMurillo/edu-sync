import { db } from "../config/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

export async function saveUser(userId) {
    try {
        if (!searchUser){
            const docRef = await addDoc(collection(db, "users"), {
                user_id: userId,
            });
            console.log("Document written with ID: ", docRef.id);
        }
        console.log("Document already existent")
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function searchUser(userId) {
    const docRef = doc(db, "user_id", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return false;
    }
    return false;
}