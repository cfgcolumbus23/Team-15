
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { getUserProgress, getUserAssessmentScores } from '../api/user';

const AdminControlPage = () => {
  const { user } = useContext(UserContext);
  const [userProgress, setUserProgress] = useState(null);
  const [userAssessmentScores, setUserAssessmentScores] = useState(null);

  useEffect(() => {
    const fetchUserProgress = async () => {
      const progress = await getUserProgress(user.id);
      setUserProgress(progress);
    };

    const fetchUserAssessmentScores = async () => {
      const scores = await getUserAssessmentScores(user.id);
      setUserAssessmentScores(scores);
    };

    fetchUserProgress();
    fetchUserAssessmentScores();
  }, [user.id]);

  return (
    <div>
        <h1>Admin control page</h1>
      <h1>Welcome, {user.name}!</h1>
      

    </div>
  );
};

export default AdminControlPage;
