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
import SplashPage from './components/SplashPage';
import LogoutConfirm from './components/auth/LogoutConfirm';
import WorkInProgress from './components/WorkInProgress/WorkInProgress';

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
      {/* <SideNavBar /> */}
      <Switch>
        <Route exact path='/login'>
          <LoginForm />
        </Route>
        <Route exact path='/sign-up'>
          <SignUpForm />
        </Route>
        <ProtectedRoute exact path='/ask'>
          <QuestionForm />
        </ProtectedRoute>
        <Route exact path='/questions'>
          <Questions />
        </Route>
        <Route exact path='/questions/:questionId'>
          <QuestionDetails />
        </Route>
        <ProtectedRoute exact path='/edit/answers/:answerid'>
          <EditAnswerButton />
        </ProtectedRoute>
        <Route exact path='/search'>
          <SearchResultsPage />
        </Route>
        <Route path='/' exact={true} >
          <SplashPage />
        </Route>
        <Route path='/logout' exact={true}>
          <LogoutConfirm />
        </Route>
        <Route path='/work-in-progress'>
          <WorkInProgress />
        </Route>
        <Route>
          <h1>PAGE NOT FOUND</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
