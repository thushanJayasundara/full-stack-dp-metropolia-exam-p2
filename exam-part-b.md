# Exam — Part B: Testing, Configuration & Discussion (1 hour, 200 points)

## Rules

- Same rules as Part A — no AI, no internet search. Any offline material is allowed.
- **This part uses the same starter code as Part A.** Even if you had issues in Part A, you can complete Part B independently — testing uses endpoints that **already work** in the starter code.
- **Make a git commit after each question** with a meaningful commit message.

---

**Exam Recording Instructions**

- *Recording Requirement*: The coding session must be recorded on your local machine. Both the Driver and the Navigator record the entire session.
- *Upload Recording*: After the session, Zoom will save the recording to your computer. Please upload that file to this SharePoint link:
  - Pair 1: [Reejan & Ghanshyam](https://metropoliafi-my.sharepoint.com/:f:/g/personal/samiben_metropolia_fi/IgAiiedfWkz5QrUCeqky_QL3AS_-2Yq-n0-bYjfQhvpVXA4?e=Eg0iAm) 
  - Pair 2: [Prathana & Sanjaya](https://metropoliafi-my.sharepoint.com/:f:/g/personal/samiben_metropolia_fi/IgBxTMdK9my0R5XUVqNTszqzASqmRclzF53lSZ2X39aBQl0?e=DjFL9H)
  - Pair 3: [Navpreet & Priya](https://metropoliafi-my.sharepoint.com/:f:/g/personal/samiben_metropolia_fi/IgDfWYgn6gbKT633dUQQmparATDtrWWrFGEu_-I6JAAiQNg?e=opZaAl)
  - Pair 4: [Rohail & Bipassa](https://metropoliafi-my.sharepoint.com/:f:/g/personal/samiben_metropolia_fi/IgBWcglaRXw8RJEIF-220JMxAcOnST06kUlAUJ2aRasStrA?e=VokS6H)
  - Pair 5: [Afrin & Thushan](https://metropoliafi-my.sharepoint.com/:f:/g/personal/samiben_metropolia_fi/IgDmqt3sxcT_ToSQRK3vUj9zAcLHvbykj_dk4cWb40bqujE?e=NdIkIb)

---

**Format:** 

* The previous Driver will become the Navigator, and the previous Navigator will become the Driver.

**Grading Policy:**
You are being graded on your performance **within your assigned role**, not on the final "outcome" (i.e., whether the code is 100% perfect or finished). 

*   **The Driver** is graded on:
    *   Writing clean code and following syntax rules.
    *   "Thinking out loud" so the Navigator knows what they are doing.
    *   Listening to the Navigator's directions.

*   **The Navigator** is graded on:
    *   **Providing "Tips" and Guidance:** Actively suggesting the next steps and logic.
    *   **Reviewing:** Catching typos or logical errors as the Driver types.
    *   **Strategic Thinking:** Keeping track of the "big picture" (e.g., "Don't forget we need to handle the empty list case next").


---

You will use the same [starter code for a Workout listing application.](https://github.com/FullStack-DP/exam)

## Section 4: API Testing (75 points)

A test file scaffold is provided at `backend/tests/workout_api.test.js`. It already has the imports, test data, `beforeEach`, and `afterAll` set up for you.

### Q10 — Test GET /api/workouts (35 pts)

Write a test inside the `describe("Workout API")` block that verifies:

- The response status code is **200**
- The response `Content-Type` contains `application/json`
- The response body is an array with the correct number of workouts (matching `initialWorkouts`)

**Commit your changes** with message: `Q10: Test GET /api/workouts`

### Q11 — Test POST /api/users/signup (40 pts)

Write a test inside the `describe("Workout API")` block that:

- Creates a valid new user object with all required fields (`name`, `username`, `password`, `phone_number`, `address`)
- Sends a POST request to `/api/users/signup`
- Verifies the response status code is **201**
- Verifies the response body contains the correct `username`
- Verifies the response body contains a `token`

**Commit your changes** with message: `Q11: Test POST /api/users/signup`

---

## Section 5: Configuration (30 points)

### Q12 — Change Backend Port (30 pts)

The team has decided to change the backend port from **4000** to **5003**.

- (a) Update the **default port** in the appropriate backend configuration file (15 pts)
- (b) Update the **Vite proxy** target in the frontend so it points to the new backend port (15 pts)

> In [answers.md](./answers.md), briefly list which files you changed and why.

**Commit your changes** with message: `Q12: Change backend port to 5003`

---

## Section 6: Frontend Login Approaches (70 points)


### Q13 — Login Page With useAuth Hook (35 pts)

A `useAuth` hook is provided in `hooks/useAuth.jsx`. Rewrite the `LoginPage` component in `frontend/src/pages/LoginPage.jsx` so that it uses this `useAuth` hook.

**Commit your changes** with the message: `Q13: Login Page With useAuth Hook`


### Q14 — Signup Page With useAuth Hook (35 pts)

A `useAuth` hook is provided in `hooks/useAuth.jsx`. Please rewrite the `SignupPage` component in `frontend/src/pages/SignupPage.jsx` so that it uses this `useAuth` hook.

**Commit your changes** with the message: `Q14: Signup Page With useAuth Hook`


---

## Section 7: Git (25 points)

### Q15 — Branching (25 pts)

- Create a new Git branch called `feature/testing` from your current branch
- Switch to the new branch
- Make at least **2 commits** on this branch with meaningful commit messages

**Grading:**
- Branch exists with correct name: 10 pts
- At least 2 commits on the branch: 10 pts
- Meaningful commit messages: 5 pts

---

## Summary

| Question | Topic | Points |
|----------|-------|--------|
| Q10 | Test GET /api/workouts | 35 |
| Q11 | Test POST /api/users/signup | 40 |
| Q12 | Change backend port | 30 |
| Q13 | Login Page With useAuth Hook | 35 |
| Q14 | Signup Page With useAuth Hook | 35 |
| Q15 | Git branching | 25 |
| **Total** | | **200** |


