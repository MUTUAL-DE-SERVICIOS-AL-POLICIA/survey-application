import { Switch, Route } from 'wouter'
import EmployeePage from './pages/employees/employeePage'
import LoginPage from './pages/login/LoginPage'
import QualificationPage from './pages/qualification/QualificationPage'
import { UserContextProvider } from './context/userContext'
import { EmployeeContextProvider } from './context/employeeContext' /* revisarlo */
import { ActiveDialogContext } from './context/activeDialogContext';
import { FullScreenContextProvider } from './context/fullScreenContext'

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
          <ActiveDialogContext>
            <FullScreenContextProvider>
              <Route
                component={QualificationPage}
                path="/qualification/:id"
              />
            </FullScreenContextProvider>
          </ActiveDialogContext>
        </EmployeeContextProvider>
      </UserContextProvider>
    </Switch>
    </div>
  )
}

export default App;