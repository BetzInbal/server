import Candidate from "../models/candidateSchema";

export const initDatabase = async () => {
  try {
    const cands = [
      {
        name: "John",
        image: "https://randomuser.me/api/portraits/med/men/81.jpg",
      },
      {
        name: "Johnny",
        image: "https://randomuser.me/api/portraits/med/men/13.jpg",
      },
      {
        name: "Johnnyiahoo",
        image: "https://randomuser.me/api/portraits/med/men/83.jpg",
      },
      {
        name: "Johnniel",
        image: "https://randomuser.me/api/portraits/med/men/0.jpg",
      },
      {
        name: "Johnny",
        image: "https://randomuser.me/api/portraits/med/men/6.jpg",
      },
    ];

    for (const cand of cands) {
      const newCand = new Candidate(cand);
      await newCand.save();
    }
  } catch (err) {
    console.log(
      "Error accured while creating initial state of candidates",
      err
    );
  }
};

export const getList = async () => {
    try {
        const cands = await Candidate.find()
        return cands
    } catch (err) {
      console.log(
        "Error accured while creating initial state of userSchema",
        err
      );
    }
  };