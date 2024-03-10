import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Home.module.scss'
import { useState } from 'react'

interface IFormState {
	name: string
	email: string
}

function Home() {
	const { register, handleSubmit, reset } = useForm<IFormState>()

	const [isSuccess, setIsSucces] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const onSubmit: SubmitHandler<IFormState> = data => {
		setIsLoading(true)
		fetch('http://localhost:5000/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setIsSucces(true)
				reset()
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{isSuccess ? (
					<div className={styles.success}>The form sent</div>
				) : (
					<>
						<h1>GTA 6 - Оставь заявку</h1>
						<input
							type='email'
							placeholder='Enter email:'
							{...register('email')}
						/>
						<input
							type='name'
							placeholder='Enter name:'
							{...register('name')}
						/>
						<button disabled={isLoading}>
							{' '}
							{isLoading ? 'Loading...' : 'Want GTA-6'}
						</button>
					</>
				)}
			</form>
		</div>
	)
}

export default Home
