import { Switch, Route } from 'wouter'
import EmployeePage from './pages/employees/employeePage'
import LoginPage from './pages/login/LoginPage'
import QualificationPage from './pages/qualification/QualificationPage'
import { UserContextProvider } from './context/userContext'
import { EmployeeContextProvider } from './context/employeeContext'

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
          <Route
            component={QualificationPage}
            path="/qualification"
          />
        </EmployeeContextProvider>
      </UserContextProvider>
    </Switch>
    </div>
  )
}

export default App;