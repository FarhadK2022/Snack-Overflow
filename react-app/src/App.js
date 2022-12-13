import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import QuestionForm from './components/question_form/QuestionForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import Questions from './components/questions';
import QuestionDetails from './components/questions_details'
import SearchResultsPage from './components/SearchBar/SearchResultsPage';
import EditAnswerButton from './components/edit_answer';
// import { circle-heart } from 'react-icons/fa'


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/ask' exact={true}>
          <QuestionForm />
        </ProtectedRoute>
        <Route path='/questions' exact={true}>
          <Questions />
        </Route>
        <Route path='/questions/:questionId' exact={true}>
          <QuestionDetails />
        </Route>
        <ProtectedRoute path='/edit/answers/:answerid' exact={true}>
          <EditAnswerButton />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
