import React, { useContext } from 'react'
import Context from '../context/employeeContext'
import { getEmployees } from '../services/employee/employee'
import ContextLogin from '../context/userContext'

export default function useEmployee() {

	const {token, setToken} = useContext(ContextLogin)
	const [employees, setEmployees] = useContext(Context)

	getEmployees(token)
		.then(employees => {
			setEmployees(employees)
		})

	return [
		employees,
		setEmployees
	]

}