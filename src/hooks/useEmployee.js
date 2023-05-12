import React, { useContext, useCallback } from 'react'
import Context from '../context/employeeContext'
import ContextLogin from '../context/userContext'
import { getEmployees } from '../services/employee/employee'

export default function useEmployee() {

	const {token, setToken} = useContext(ContextLogin)
	const [employees, setEmployees] = useContext(Context)

	const getEmployee  = ( id ) => {
		if (employees !== [])  {
			return employees.find(object => object.id == id )
		} else return [];
	}

	return [
		employees,
		setEmployees,
		getEmployee
	]

}