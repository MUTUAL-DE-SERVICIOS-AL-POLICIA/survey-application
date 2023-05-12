import { Switch, Route } from 'wouter'
import EmployeePage from './pages/employees/employeePage'
import LoginPage from './pages/login/LoginPage'
import QualificationPage from './pages/qualification/QualificationPage'
import { UserContextProvider } from './context/userContext'
import { EmployeeContextProvider } from './context/employeeContext'
import { QuestionContextProvider } from './context/questionContext'

function App() {

  return (
    <div>
    <Switch>
      <UserContextProvider>
        <Route
          component={LoginPage}
          path="/"
        />
        <EmployeeContextProvider>
          <Route
            component={EmployeePage}
            path="/employees"
          />
          <QuestionContextProvider>
            <Route
              component={QualificationPage}
              path="/qualification/:id"
            />
          </QuestionContextProvider>
        </EmployeeContextProvider>
      </UserContextProvider>
    </Switch>
    </div>
  )
}

export default App;