import { Switch, Route } from 'wouter'
import EmployeePage from './pages/employees/employeePage'
import LoginPage from './pages/login/LoginPage'
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
        {/* <EmployeeContextProvider> */}
          <Route
            component={EmployeePage}
            path="/employees"
          />
        {/* </EmployeeContextProvider> */}
      </UserContextProvider>
    </Switch>
    </div>
  )
}

export default App;