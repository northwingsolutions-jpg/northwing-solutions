import db from "../Firebase/firestore";

import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const jobsCollection = collection(db, "jobs");

// Add Job
export const addJob = async (jobData) => {
  return await addDoc(jobsCollection, {
    ...jobData,
    createdAt: new Date(),
  });
};

// Get Jobs
export const getJobs = async () => {
  const snapshot = await getDocs(jobsCollection);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
};

// Get Doc

export const getJobById = async (id) => {

  const docRef = doc(db, "jobs", id);

  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }

  return null;
};

// Delete Job
export const removeJob = async (id) => {
  await deleteDoc(doc(db, "jobs", id));
};

// Update Job (Later)
export const updateJob = async (id, data) => {
  await updateDoc(doc(db, "jobs", id), data);
};