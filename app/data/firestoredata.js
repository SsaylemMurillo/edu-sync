import { db } from "../config/firebaseconfig";
import { doc, getDoc, addDoc, query, collection, where } from "firebase/firestore";


// Creation of user in firestore
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

// Verification of user in firestore
async function searchUser(userId) {
    const docRef = doc(db, "user_id", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return false;
    }
    return false;
}

// User with role/permissions

/*
async function getUserRole(userId){
    const roleRef = collection(db, "roles");

    // Create a query against the collection.
    const q = query(citiesRef, where("id_rol", "==", {userId}));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}
*/