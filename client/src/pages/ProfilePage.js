import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import { useParams } from "react-router-dom";
import { getProfile } from "../services/profileService";
import { getIssues, createIssue, deleteIssue } from "../services/issueService";
import "../ProfilePage.css";

const ProfilePage = () => {
  const { authState } = useContext(AuthContext);
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState("");
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user details
        const userData = await getProfile();
        setUserDetails(userData);

        // Fetch issues based on user role
        const issuesData =
          authState.role === "admin" ? await getIssues() : await getIssues();
        setIssues(issuesData);

        // Set achievements
        setAchievements([
          { id: 1, description: "Reduced waste by 20% last month" },
          { id: 2, description: "Achieved 100% recycling rate" },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId, authState.role]);

  const handleIssueSubmit = () => {
    createIssue(newIssue)
      .then((data) => {
        setIssues([...issues, data]);
        setNewIssue("");
      })
      .catch((error) => {
        console.error("Error submitting issue:", error);
      });
  };

  const handleDeleteIssue = (issueId) => {
    deleteIssue(issueId)
      .then(() => {
        setIssues(issues.filter((issue) => issue.id !== issueId));
      })
      .catch((error) => {
        console.error("Error deleting issue:", error);
      });
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <div className="profile-section">
        <p>
          <strong>Username:</strong> {userDetails.username}
        </p>
        <p>
          <strong>Email:</strong> {userDetails.email}
        </p>
        <p>
          <strong>Role:</strong> {userDetails.role}
        </p>
      </div>
      {authState.role === "user" && (
        <>
          <div className="achievements-section">
            <h3>Achievements and Badges</h3>
            <ul>
              {achievements.map((achievement) => (
                <li key={achievement.id}>{achievement.description}</li>
              ))}
            </ul>
          </div>
          <div className="issue-form-section">
            <h3>Submit an Issue</h3>
            <textarea
              value={newIssue}
              onChange={(e) => setNewIssue(e.target.value)}
              placeholder="Describe your issue here"
            ></textarea>
            <button onClick={handleIssueSubmit}>Submit Issue</button>
          </div>
        </>
      )}
      <div className="issues-section">
        <h3>Submitted Issues</h3>
        <ul>
          {issues.map((issue) => (
            <li key={issue.id}>
              {issue.description}
              {authState.role === "admin" && (
                <button onClick={() => handleDeleteIssue(issue.id)}>
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
