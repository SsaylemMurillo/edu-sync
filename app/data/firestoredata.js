import { db } from "../config/firebaseconfig";
import { collection, doc, query, where, getDocs, getDoc, addDoc } from 'firebase/firestore';

// Creation of user in firestore
export async function saveUser(userId) {
    try {
        if (!searchUser(userId)){
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
        return true;
    }
    return false;
}

// Save Subject
export async function saveSubject(subject) {
    try {
        if (searchSubject(subject.id)){
            const docRef = await addDoc(collection(db, "subjects"), {
                id: subject.id,
                name: subject.name,
                teacher_cc: subject.teacherCC,
                teacher_fn: subject.teacherFN,
                teacher_ln: subject.teacherLN,
                group: subject.group,
                initial_h: subject.initialH,
                final_h: subject.finalH,
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Asignatura creada correctamente")
        }else{
            console.log("Document already existent")
            alert("Asignatura ya existe")
        }
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error al crear la asignatura: " + e)
    }
}

// Verification of user in firestore
async function searchSubject(subject_id) {
    const queryDataBase = query(collection(db, "subjects"), where("id", "==", subject_id));
    const querySnapshot = await getDocs(queryDataBase);

    return (querySnapshot.docs.length == 0);
}
